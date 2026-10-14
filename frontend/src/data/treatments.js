const treatments = {
  "Pepper__bell___Bacterial_spot": {
    displayName: "Bell Pepper — Bacterial Spot",
    type: "Bacterial",
    pathogen: "Xanthomonas campestris pv. vesicatoria",
    severity: "High",
    description: "Dark, water-soaked spots on leaves and fruits. Causes defoliation and fruit damage.",
    treatment: [
      "Remove and destroy all infected plant parts immediately",
      "Apply copper-based bactericide (Copper Oxychloride 50% WP) @ 3g/litre of water",
      "Spray every 7-10 days during wet weather",
      "Avoid overhead irrigation — use drip irrigation",
      "Rotate crops — do not plant peppers in the same field for 2 years",
      "Disinfect all farming tools with bleach solution (1:9 ratio)"
    ],
    prevention: "Use certified disease-free seeds. Maintain proper plant spacing for air circulation."
  },

  "Pepper__bell___healthy": {
    displayName: "Bell Pepper — Healthy",
    type: "Healthy",
    pathogen: "None",
    severity: "None",
    description: "Your pepper plant is healthy! No disease detected.",
    treatment: [
      "Continue current care routine",
      "Water at base, keep leaves dry",
      "Apply calcium fertilizer to prevent blossom end rot",
      "Check regularly for pests like aphids"
    ],
    prevention: "Healthy plant! Monitor weekly for early detection of any issues."
  },

  "Potato___Early_blight": {
    displayName: "Potato — Early Blight",
    type: "Fungal",
    pathogen: "Alternaria solani",
    severity: "Medium",
    description: "Brown/black spots with concentric rings (target-board pattern) on older leaves first.",
    treatment: [
      "Remove infected lower leaves immediately and burn them",
      "Apply Mancozeb 75% WP @ 2.5g/litre or Chlorothalonil fungicide",
      "Spray at 7-day intervals starting at first sign of disease",
      "Ensure adequate potassium fertilization to boost plant immunity",
      "Avoid working in the field when plants are wet",
      "Apply mulch to reduce soil splash onto leaves"
    ],
    prevention: "Plant resistant varieties. Ensure proper nutrition — stressed plants are more susceptible."
  },

  "Potato___Late_blight": {
    displayName: "Potato — Late Blight",
    type: "Fungal",
    pathogen: "Phytophthora infestans",
    severity: "Very High",
    description: "Water-soaked lesions that turn brown/black rapidly. White mold visible under leaves. Can destroy entire crop within days.",
    treatment: [
      "Act immediately — this disease spreads very fast",
      "Remove and destroy all infected plants — do NOT compost",
      "Apply Metalaxyl + Mancozeb (Ridomil Gold) @ 2.5g/litre immediately",
      "Spray every 5-7 days — increase frequency in rainy weather",
      "Do not irrigate in the evening — keep foliage dry",
      "Harvest early if infection is severe to save tubers",
      "Store harvested potatoes in cool, dry, ventilated place"
    ],
    prevention: "This is the disease that caused the Irish Potato Famine. Never ignore early symptoms."
  },

  "Potato___healthy": {
    displayName: "Potato — Healthy",
    type: "Healthy",
    pathogen: "None",
    severity: "None",
    description: "Your potato plant is healthy! No disease detected.",
    treatment: [
      "Continue regular hilling of soil around stems",
      "Maintain consistent moisture — avoid waterlogging",
      "Apply potassium-rich fertilizer for tuber development",
      "Scout for Colorado potato beetle weekly"
    ],
    prevention: "Healthy plant! Late blight can strike fast — monitor daily in wet weather."
  },

  "Tomato_Bacterial_spot": {
    displayName: "Tomato — Bacterial Spot",
    type: "Bacterial",
    pathogen: "Xanthomonas vesicatoria",
    severity: "High",
    description: "Small, dark, water-soaked spots on leaves, stems and fruits. Fruits become unmarketable.",
    treatment: [
      "Remove heavily infected leaves and plants",
      "Apply Copper Hydroxide (Kocide) @ 3g/litre of water",
      "Spray every 7 days — especially after rain",
      "Switch to drip irrigation to keep leaves dry",
      "Do not touch healthy plants after handling infected ones",
      "Apply fixed copper sprays as protective treatment"
    ],
    prevention: "Use disease-free transplants. Avoid working in wet fields."
  },

  "Tomato_Early_blight": {
    displayName: "Tomato — Early Blight",
    type: "Fungal",
    pathogen: "Alternaria solani",
    severity: "Medium",
    description: "Circular brown spots with dark rings on older/lower leaves. Yellow area surrounds spots.",
    treatment: [
      "Prune and remove all infected lower leaves",
      "Apply Mancozeb 75% WP @ 2g/litre every 7-10 days",
      "Alternatively use Azoxystrobin or Chlorothalonil fungicide",
      "Stake plants properly for better air circulation",
      "Apply balanced NPK fertilizer — avoid excess nitrogen",
      "Mulch around plant base to reduce soil splash"
    ],
    prevention: "Water at the base, not on leaves. Rotate tomato crops every 2-3 years."
  },

  "Tomato_Late_blight": {
    displayName: "Tomato — Late Blight",
    type: "Fungal",
    pathogen: "Phytophthora infestans",
    severity: "Very High",
    description: "Greasy, dark water-soaked patches on leaves. White fuzzy growth on underside. Spreads extremely fast in cool, wet weather.",
    treatment: [
      "Remove infected plants immediately — bag and dispose, do NOT compost",
      "Apply Metalaxyl + Mancozeb @ 2.5g/litre immediately",
      "Spray every 5 days during wet/cool weather",
      "Apply Cymoxanil + Mancozeb as alternate spray",
      "Avoid evening irrigation",
      "Destroy all crop debris after harvest"
    ],
    prevention: "Plant resistant varieties like Mountain Merit. Avoid dense planting."
  },

  "Tomato_Leaf_Mold": {
    displayName: "Tomato — Leaf Mold",
    type: "Fungal",
    pathogen: "Passalora fulva (Cladosporium fulvum)",
    severity: "Medium",
    description: "Yellow patches on upper leaf surface, olive-green to brown velvety mold on underside.",
    treatment: [
      "Improve ventilation — prune excess foliage",
      "Reduce humidity in greenhouse/polyhouse",
      "Apply Mancozeb or Copper Oxychloride spray",
      "Remove and destroy infected leaves",
      "Avoid overhead watering",
      "Maintain spacing between plants"
    ],
    prevention: "Very common in humid environments. Keep humidity below 85%."
  },

  "Tomato_Septoria_leaf_spot": {
    displayName: "Tomato — Septoria Leaf Spot",
    type: "Fungal",
    pathogen: "Septoria lycopersici",
    severity: "Medium",
    description: "Small, circular spots with dark borders and light grey/tan centers. Many spots on lower leaves first.",
    treatment: [
      "Remove all infected leaves immediately",
      "Apply Chlorothalonil (Kavach) @ 2g/litre every 7-10 days",
      "Alternatively use Mancozeb or Copper fungicides",
      "Avoid wetting foliage during irrigation",
      "Remove plant debris from previous season",
      "Apply mulch to prevent soil splash"
    ],
    prevention: "Rotate crops. Use drip irrigation. Stake plants for airflow."
  },

  "Tomato_Spider_mites_Two_spotted_spider_mite": {
    displayName: "Tomato — Spider Mites (Two-spotted)",
    type: "Pest",
    pathogen: "Tetranychus urticae",
    severity: "Medium",
    description: "Tiny yellow/white speckles on leaves. Fine webbing on underside. Leaves turn bronze and dry out.",
    treatment: [
      "Spray plants with strong water jet to dislodge mites",
      "Apply Abamectin (Vertimec) @ 1ml/litre — highly effective",
      "Use Neem oil spray @ 5ml/litre as organic option",
      "Apply Spiromesifen or Bifenazate miticide",
      "Rotate miticides to prevent resistance",
      "Increase humidity — spider mites thrive in dry conditions"
    ],
    prevention: "Monitor regularly especially in hot dry weather. Avoid dusty conditions."
  },

  "Tomato__Target_Spot": {
    displayName: "Tomato — Target Spot",
    type: "Fungal",
    pathogen: "Corynespora cassiicola",
    severity: "Medium",
    description: "Brown circular spots with concentric rings (like a target). Affects leaves, stems and fruits.",
    treatment: [
      "Remove infected leaves and stems",
      "Apply Azoxystrobin + Chlorothalonil spray",
      "Use Boscalid or Fluopyram fungicide as alternative",
      "Spray every 7-14 days",
      "Improve air circulation by pruning",
      "Avoid working with plants when wet"
    ],
    prevention: "Use resistant varieties. Maintain good plant hygiene."
  },

  "Tomato__Tomato_YellowLeaf__Curl_Virus": {
    displayName: "Tomato — Yellow Leaf Curl Virus",
    type: "Viral",
    pathogen: "Tomato Yellow Leaf Curl Virus (TYLCV)",
    severity: "Very High",
    description: "Leaves curl upward and turn yellow at edges. Stunted growth. Flowers drop. Major yield loss. Spread by whiteflies.",
    treatment: [
      "⚠️ No chemical cure — focus on vector control",
      "Remove and destroy all infected plants",
      "Apply Imidacloprid 17.8 SL @ 0.3ml/litre to kill whiteflies",
      "Alternatively use Thiamethoxam or Acetamiprid",
      "Install yellow sticky traps to monitor and catch whiteflies",
      "Use silver/reflective mulch to repel whiteflies",
      "Cover young plants with insect-proof nets"
    ],
    prevention: "Plant resistant varieties (Arka Rakshak). Control whitefly population from day one."
  },

  "Tomato__Tomato_mosaic_virus": {
    displayName: "Tomato — Mosaic Virus",
    type: "Viral",
    pathogen: "Tomato Mosaic Virus (ToMV)",
    severity: "High",
    description: "Mottled light/dark green mosaic pattern on leaves. Leaves curl and wrinkle. Stunted growth. No cure available.",
    treatment: [
      "⚠️ There is NO chemical cure for viral diseases",
      "Remove and destroy infected plants immediately to prevent spread",
      "Control aphids and whiteflies which spread the virus — use Imidacloprid",
      "Disinfect all tools with 10% bleach solution",
      "Wash hands thoroughly before handling healthy plants",
      "Do not smoke near plants — tobacco carries related virus"
    ],
    prevention: "Use virus-free certified seeds. Control insect vectors. This virus spreads through contact."
  },

  "Tomato_healthy": {
    displayName: "Tomato — Healthy",
    type: "Healthy",
    pathogen: "None",
    severity: "None",
    description: "Your tomato plant is healthy! No disease or stress detected.",
    treatment: [
      "Continue regular watering schedule",
      "Apply balanced NPK fertilizer every 2 weeks",
      "Monitor regularly for early signs of disease",
      "Maintain proper plant spacing",
      "Remove any yellowing leaves promptly"
    ],
    prevention: "Keep up the good work! Regular monitoring is key to healthy crops."
  }
};

export default treatments;