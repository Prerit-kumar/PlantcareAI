from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np, io, time
import torch
import torch.nn as nn
from torchvision import transforms, models

app = Flask(__name__)
CORS(app)

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Using: {DEVICE}")

CLASS_NAMES = [
    "Pepper__bell___Bacterial_spot",
    "Pepper__bell___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Tomato_Bacterial_spot",
    "Tomato_Early_blight",
    "Tomato_Late_blight",
    "Tomato_Leaf_Mold",
    "Tomato_Septoria_leaf_spot",
    "Tomato_Spider_mites_Two_spotted_spider_mite",
    "Tomato__Target_Spot",
    "Tomato__Tomato_YellowLeaf__Curl_Virus",
    "Tomato__Tomato_mosaic_virus",
    "Tomato_healthy"
]

NUM_CLASSES = len(CLASS_NAMES)
CONFIDENCE_THRESHOLD = 60.0

# ── CNN Model Definition ──
class CNN(nn.Module):
    def __init__(self, num_classes):
        super(CNN, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1), nn.BatchNorm2d(32), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(), nn.MaxPool2d(2),
        )
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128 * 28 * 28, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, num_classes)
        )
    def forward(self, x):
        return self.classifier(self.features(x))

# ── Load CNN ──
cnn_model = CNN(NUM_CLASSES)
cnn_model.load_state_dict(torch.load("models/cnn_model.pth", map_location=DEVICE))
cnn_model.to(DEVICE)
cnn_model.eval()

# ── Load ResNet50 ──
resnet_model = models.resnet50(weights=None)
resnet_model.fc = nn.Sequential(
    nn.Linear(resnet_model.fc.in_features, 256),
    nn.ReLU(),
    nn.Dropout(0.4),
    nn.Linear(256, NUM_CLASSES)
)
resnet_model.load_state_dict(torch.load("models/resnet_model.pth", map_location=DEVICE))
resnet_model.to(DEVICE)
resnet_model.eval()

# ── Load EfficientNet ──
efficientnet_model = models.efficientnet_b0(weights=None)
efficientnet_model.classifier = nn.Sequential(
    nn.Dropout(0.3),
    nn.Linear(efficientnet_model.classifier[1].in_features, NUM_CLASSES)
)
efficientnet_model.load_state_dict(torch.load("models/efficientnet_model.pth", map_location=DEVICE))
efficientnet_model.to(DEVICE)
efficientnet_model.eval()

# ── All Models Dict ──
loaded_models = {
    "CNN": cnn_model,
    "ResNet50": resnet_model,
    "EfficientNet": efficientnet_model
}

# ── Preprocessing ──
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

def preprocess(file_bytes):
    img = Image.open(io.BytesIO(file_bytes)).convert("RGB")
    return transform(img).unsqueeze(0).to(DEVICE)

# ── Predict Route ──
@app.route("/predict", methods=["POST"])
def predict():
    img_tensor = preprocess(request.files["image"].read())
    selected = request.form.get("model", "EfficientNet")

    model = loaded_models[selected]
    start = time.time()
    with torch.no_grad():
        outputs = model(img_tensor)
        probs = torch.softmax(outputs, dim=1)[0]
    elapsed = round((time.time() - start) * 1000, 1)

    idx = probs.argmax().item()
    confidence = round(float(probs[idx]) * 100, 2)

    # Confidence threshold check
    if confidence < CONFIDENCE_THRESHOLD:
        return jsonify({
            "error": True,
            "message": "⚠️ No plant leaf detected! Please upload a clear image of a Tomato, Potato or Bell Pepper leaf."
        })

    all_scores = {
        CLASS_NAMES[i]: round(float(probs[i]) * 100, 2)
        for i in range(NUM_CLASSES)
    }

    return jsonify({
        "model": selected,
        "class": CLASS_NAMES[idx],
        "confidence": confidence,
        "all_scores": all_scores,
        "inference_time_ms": elapsed
    })

# ── Compare Route ──
@app.route("/compare", methods=["POST"])
def compare():
    img_bytes = request.files["image"].read()
    results = {}
    low_confidence_count = 0

    for name, model in loaded_models.items():
        img_tensor = preprocess(img_bytes)
        start = time.time()
        with torch.no_grad():
            outputs = model(img_tensor)
            probs = torch.softmax(outputs, dim=1)[0]
        elapsed = round((time.time() - start) * 1000, 1)

        idx = probs.argmax().item()
        confidence = round(float(probs[idx]) * 100, 2)

        if confidence < CONFIDENCE_THRESHOLD:
            low_confidence_count += 1

        results[name] = {
            "class": CLASS_NAMES[idx],
            "confidence": confidence,
            "inference_time_ms": elapsed
        }

    # If all 3 models have low confidence
    if low_confidence_count == 3:
        return jsonify({
            "error": True,
            "message": "⚠️ No plant leaf detected! Please upload a clear image of a Tomato, Potato or Bell Pepper leaf."
        })

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True, port=5000)