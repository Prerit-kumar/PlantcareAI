import { useState } from 'react';
import axios from 'axios';
import UploadCard from '../components/UploadCard';
import ResultCard from '../components/ResultCard';

const MODELS = [
  { id: 'CNN', label: 'CNN', desc: 'Custom trained' },
  { id: 'ResNet50', label: 'ResNet50', desc: 'Deep residual' },
  { id: 'EfficientNet', label: 'EfficientNet', desc: '92% accuracy' },
];

export default function Detect() {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState('EfficientNet');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!image) return setError('Please upload a leaf image first!');
    setLoading(true); setError(''); setResult(null);
    try {
      const fd = new FormData();
      fd.append('image', image);
      fd.append('model', model);
      const { data } = await axios.post('http://localhost:5000/predict', fd);
      if (data.error) {
        setError(data.message);
      } else {
        setResult(data);
      }
    } catch {
      setError('❌ Cannot connect to backend. Make sure Flask is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 20px' }}>

      <div style={{ marginBottom: '32px', animation: 'fadeInUp 0.5s ease forwards' }}>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '2rem', color: 'white', marginBottom: '6px',
        }}>Detect Plant Stress</h2>
        <p style={{ color: 'var(--gray-400)' }}>Upload a leaf image and select an AI model</p>
      </div>

      {/* Upload Card */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
        marginBottom: '16px',
        boxShadow: 'var(--shadow-md)',
      }}>
        <UploadCard onImageSelect={setImage} />
      </div>

      {/* Model Selector */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
        marginBottom: '16px',
      }}>
        <label style={{
          fontWeight: 600, color: 'var(--green-300)',
          display: 'block', marginBottom: '12px',
          fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em',
        }}>Select AI Model</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
          {MODELS.map(m => (
            <button key={m.id} onClick={() => setModel(m.id)} style={{
              padding: '14px 10px',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              border: `1px solid ${model === m.id ? 'rgba(82,183,136,0.5)' : 'rgba(82,183,136,0.1)'}`,
              background: model === m.id
                ? 'rgba(82,183,136,0.15)'
                : 'rgba(255,255,255,0.03)',
              transition: 'all 0.2s',
              textAlign: 'center',
              fontFamily: 'DM Sans, sans-serif',
              boxShadow: model === m.id ? '0 0 16px rgba(82,183,136,0.2)' : 'none',
            }}>
              <div style={{
                fontWeight: 700, fontSize: '0.9rem',
                color: model === m.id ? 'var(--green-300)' : 'rgba(255,255,255,0.5)',
              }}>{m.label}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', marginTop: '3px' }}>{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Supported Crops Info */}
      <div style={{
        background: 'rgba(82,183,136,0.05)',
        border: '1px solid rgba(82,183,136,0.15)',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px',
        marginBottom: '16px',
        fontSize: '0.82rem',
        color: 'var(--gray-400)',
      }}>
        ℹ️ Currently supports: <span style={{ color: 'var(--green-300)' }}>Tomato, Potato & Bell Pepper</span> leaves only
      </div>

      {error && (
        <div style={{
          background: 'rgba(220,38,38,0.1)',
          border: '1px solid rgba(220,38,38,0.3)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px 16px',
          color: '#fca5a5',
          fontSize: '0.9rem',
          marginBottom: '16px',
        }}>{error}</div>
      )}

      <button onClick={handleAnalyze} disabled={loading}
        className="btn-glow"
        style={{
          width: '100%',
          background: loading
            ? 'rgba(255,255,255,0.1)'
            : 'linear-gradient(135deg, var(--green-600), var(--green-400))',
          color: loading ? 'rgba(255,255,255,0.4)' : 'white',
          border: 'none', padding: '18px',
          borderRadius: 'var(--radius-md)',
          fontSize: '1rem', fontWeight: 700,
          cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 4px 24px rgba(82,183,136,0.35)',
          transition: 'all 0.3s',
          fontFamily: 'DM Sans, sans-serif',
          letterSpacing: '0.02em',
        }}>
        {loading ? '⏳ Analyzing...' : '🔍 Analyze Plant'}
      </button>

      <ResultCard result={result} />
    </div>
  );
}