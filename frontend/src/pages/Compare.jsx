import { useState } from 'react';
import axios from 'axios';
import UploadCard from '../components/UploadCard';

const MODEL_STYLES = {
  CNN:          { color: '#4ade80', glow: 'rgba(74,222,128,0.3)' },
  ResNet50:     { color: '#60a5fa', glow: 'rgba(96,165,250,0.3)' },
  EfficientNet: { color: '#f472b6', glow: 'rgba(244,114,182,0.3)' },
};

export default function Compare() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCompare = async () => {
    if (!image) return setError('Please upload an image first!');
    setLoading(true); setError(''); setResults(null);
    try {
      const fd = new FormData();
      fd.append('image', image);
      const { data } = await axios.post('http://localhost:5000/compare', fd);
      if (data.error) {
        setError(data.message);
      } else {
        setResults(data);
      }
    } catch {
      setError('❌ Cannot connect to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px' }}>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '2rem', color: 'white', marginBottom: '6px',
        }}>Compare All 3 Models</h2>
        <p style={{ color: 'var(--gray-400)' }}>
          Run the same image through CNN, ResNet50 and EfficientNet simultaneously
        </p>
      </div>

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

      <button onClick={handleCompare} disabled={loading}
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
          marginBottom: '24px',
          fontFamily: 'DM Sans, sans-serif',
        }}>
        {loading ? '⏳ Running All Models...' : '📊 Compare All Models'}
      </button>

      {results && (
        <div style={{ display: 'grid', gap: '16px' }}>
          {Object.entries(results).map(([name, res]) => {
            const style = MODEL_STYLES[name];
            return (
              <div key={name}
                className="card-3d"
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: `1px solid ${style.color}33`,
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 0 30px ${style.glow}`,
                }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: '16px'
                }}>
                  <div>
                    <span style={{
                      background: `${style.color}22`,
                      color: style.color,
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: `1px solid ${style.color}44`,
                    }}>{name}</span>
                    <p style={{
                      fontWeight: 600, fontSize: '1.05rem',
                      color: 'white', marginTop: '10px',
                    }}>🌱 {res.class.replace(/_/g, ' ')}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '2rem',
                      color: style.color,
                      textShadow: `0 0 20px ${style.glow}`,
                    }}>{res.confidence}%</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)' }}>
                      ⏱ {res.inference_time_ms}ms
                    </div>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px', height: '8px', overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${res.confidence}%`, height: '100%',
                    background: `linear-gradient(90deg, ${style.color}88, ${style.color})`,
                    borderRadius: '8px',
                    boxShadow: `0 0 10px ${style.glow}`,
                    transition: '1.5s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
