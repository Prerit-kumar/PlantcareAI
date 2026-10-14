import { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadCard({ onImageSelect }) {
  const [preview, setPreview] = useState(null);
  const [mode, setMode] = useState('upload'); // 'upload' or 'camera'
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // ── Upload Mode ──
  const onDrop = useCallback(files => {
    const file = files[0];
    setPreview(URL.createObjectURL(file));
    onImageSelect(file);
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: { 'image/*': [] }, maxFiles: 1
  });

  // ── Camera Mode ──
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // back camera on phone
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch (err) {
      alert('Camera access denied! Please allow camera permission.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setCameraActive(false);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);

    canvas.toBlob(blob => {
      const file = new File([blob], 'camera_capture.jpg', { type: 'image/jpeg' });
      setPreview(URL.createObjectURL(blob));
      onImageSelect(file);
      stopCamera();
    }, 'image/jpeg', 0.95);
  };

  const switchMode = (newMode) => {
    if (cameraActive) stopCamera();
    setPreview(null);
    setMode(newMode);
    if (newMode === 'camera') startCamera();
  };

  const retake = () => {
    setPreview(null);
    onImageSelect(null);
    if (mode === 'camera') startCamera();
  };

  return (
    <div style={{ width: '100%' }}>

      {/* Mode Toggle */}
      <div style={{
        display: 'flex', gap: '8px', marginBottom: '16px',
        background: 'var(--gray-100)', borderRadius: 'var(--radius-sm)',
        padding: '4px'
      }}>
        {[
          { id: 'upload', label: '📁 Upload Image' },
          { id: 'camera', label: '📷 Use Camera' },
        ].map(m => (
          <button key={m.id} onClick={() => switchMode(m.id)} style={{
            flex: 1, padding: '10px', borderRadius: '6px',
            border: 'none', cursor: 'pointer',
            background: mode === m.id ? 'white' : 'transparent',
            color: mode === m.id ? 'var(--green-700)' : 'var(--gray-400)',
            fontWeight: mode === m.id ? 700 : 400,
            boxShadow: mode === m.id ? 'var(--shadow-sm)' : 'none',
            transition: 'all 0.2s', fontSize: '0.9rem',
            fontFamily: 'DM Sans, sans-serif'
          }}>{m.label}</button>
        ))}
      </div>

      {/* Upload Mode */}
      {mode === 'upload' && !preview && (
        <div {...getRootProps()} style={{
          border: `2px dashed ${isDragActive ? 'var(--green-500)' : 'var(--gray-200)'}`,
          borderRadius: 'var(--radius-md)', padding: '40px 20px',
          textAlign: 'center', cursor: 'pointer',
          background: isDragActive ? 'var(--green-50)' : 'var(--gray-100)',
          transition: '0.3s'
        }}>
          <input {...getInputProps()} />
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📁</div>
          <p style={{ color: 'var(--gray-600)', fontWeight: 500 }}>
            {isDragActive ? 'Drop the image here!' : 'Drag & drop or click to upload'}
          </p>
          <p style={{ color: 'var(--gray-400)', fontSize: '0.8rem', marginTop: '6px' }}>
            Supports JPG, PNG, WEBP
          </p>
        </div>
      )}

      {/* Camera Mode */}
      {mode === 'camera' && !preview && (
        <div style={{ position: 'relative' }}>
          <video ref={videoRef} autoPlay playsInline style={{
            width: '100%', borderRadius: 'var(--radius-md)',
            background: '#000', display: cameraActive ? 'block' : 'none',
            maxHeight: '320px', objectFit: 'cover'
          }} />

          {!cameraActive && (
            <div style={{
              background: 'var(--gray-100)', borderRadius: 'var(--radius-md)',
              padding: '40px', textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📷</div>
              <p style={{ color: 'var(--gray-600)' }}>Camera starting...</p>
            </div>
          )}

          {cameraActive && (
            <div style={{
              display: 'flex', gap: '10px', marginTop: '12px'
            }}>
              <button onClick={capturePhoto} style={{
                flex: 1, background: 'var(--green-700)', color: 'white',
                border: 'none', padding: '14px', borderRadius: 'var(--radius-md)',
                fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif'
              }}>
                📸 Capture Photo
              </button>
              <button onClick={stopCamera} style={{
                background: 'var(--gray-200)', color: 'var(--gray-600)',
                border: 'none', padding: '14px 20px',
                borderRadius: 'var(--radius-md)', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif'
              }}>
                ✕ Stop
              </button>
            </div>
          )}
        </div>
      )}

      {/* Preview — shown after upload or capture */}
      {preview && (
        <div>
          <img src={preview} alt="preview" style={{
            width: '100%', maxHeight: '300px', objectFit: 'contain',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--gray-200)',
            background: 'var(--gray-100)'
          }} />
          <button onClick={retake} style={{
            marginTop: '10px', width: '100%',
            background: 'var(--gray-100)', color: 'var(--gray-600)',
            border: '1px solid var(--gray-200)', padding: '10px',
            borderRadius: 'var(--radius-sm)', cursor: 'pointer',
            fontSize: '0.9rem', fontFamily: 'DM Sans, sans-serif'
          }}>
            {mode === 'camera' ? '📷 Retake Photo' : '📁 Change Image'}
          </button>
        </div>
      )}

    </div>
  );
}