import { useNavigate } from 'react-router-dom';

const features = [
  { icon: '🦠', label: 'Fungal Disease', desc: 'Detect mold, blight & rust' },
  { icon: '💧', label: 'Drought Stress', desc: 'Early water stress detection' },
  { icon: '🍃', label: 'Nutrient Deficiency', desc: 'NPK imbalance diagnosis' },
  { icon: '🧫', label: 'Bacterial Blight', desc: 'Spot bacterial infections' },
  { icon: '✅', label: 'Healthy Plant', desc: 'Confirm plant wellness' },
  { icon: '📊', label: '3 Model Compare', desc: 'CNN, ResNet50, EfficientNet' },
];

const stats = [
  { value: '20K+', label: 'Training Images' },
  { value: '15', label: 'Disease Classes' },
  { value: '92%', label: 'Peak Accuracy' },
  { value: '3', label: 'AI Models' },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        padding: '100px 40px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glowing orb behind text */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(82,183,136,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-block',
          background: 'rgba(82,183,136,0.1)',
          color: 'var(--green-300)',
          padding: '6px 18px',
          borderRadius: '20px',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '24px',
          border: '1px solid rgba(82,183,136,0.25)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>🌱 AI-Powered Agriculture</div>

        <h1 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          color: 'white',
          marginBottom: '20px',
          lineHeight: 1.1,
          animation: 'fadeInUp 0.8s ease forwards',
        }}>
          Detect Plant Stress<br />
          <span style={{
            color: 'var(--green-400)',
            fontStyle: 'italic',
            textShadow: '0 0 40px rgba(82,183,136,0.5)',
          }}>Before It's Too Late</span>
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Upload a leaf photo and get instant disease diagnosis
          with step-by-step treatment recommendations.
        </p>

        {/* Floating leaf emoji */}
        <div style={{
          fontSize: '4rem',
          marginBottom: '36px',
          animation: 'float 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 20px rgba(82,183,136,0.5))',
        }}>🌿</div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/detect')}
            className="btn-glow"
            style={{
              background: 'linear-gradient(135deg, var(--green-600), var(--green-400))',
              color: 'white', border: 'none',
              padding: '16px 36px', borderRadius: 'var(--radius-md)',
              fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(82,183,136,0.4), 0 0 0 1px rgba(82,183,136,0.2)',
              fontFamily: 'DM Sans, sans-serif',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}>
            🔍 Analyze Leaf Now
          </button>
          <button onClick={() => navigate('/compare')} style={{
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '16px 36px', borderRadius: 'var(--radius-md)',
            fontSize: '1rem', fontWeight: 500, cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            fontFamily: 'DM Sans, sans-serif',
            transition: 'all 0.3s',
          }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'rgba(82,183,136,0.1)';
              e.currentTarget.style.borderColor = 'rgba(82,183,136,0.3)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            }}
          >
            📊 Compare Models
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        background: 'rgba(15,45,28,0.6)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(82,183,136,0.1)',
        borderBottom: '1px solid rgba(82,183,136,0.1)',
        padding: '28px 40px',
      }}>
        <div style={{
          maxWidth: '800px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px',
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '2rem', color: 'var(--green-400)',
                textShadow: '0 0 20px rgba(82,183,136,0.5)',
              }}>{s.value}</div>
              <div style={{ color: 'var(--gray-400)', fontSize: '0.82rem', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ maxWidth: '900px', margin: '70px auto', padding: '0 40px' }}>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '2rem', color: 'white',
          marginBottom: '8px', textAlign: 'center',
        }}>What We Detect</h2>
        <p style={{
          color: 'var(--gray-400)', textAlign: 'center',
          marginBottom: '40px'
        }}>
          Trained on 20,000+ real plant images across 15 disease categories
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
          {features.map((f, i) => (
            <div key={f.label}
              className="card-3d"
              style={{
                background: 'var(--card-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--card-border)',
                cursor: 'default',
                backdropFilter: 'blur(10px)',
                animationDelay: `${i * 0.1}s`,
              }}>
              <div style={{
                fontSize: '1.8rem', marginBottom: '12px',
                filter: 'drop-shadow(0 0 8px rgba(82,183,136,0.4))',
              }}>{f.icon}</div>
              <div style={{ fontWeight: 600, color: 'white', marginBottom: '4px' }}>{f.label}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--gray-400)' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '900px', margin: '0 auto 70px', padding: '0 40px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26,74,46,0.8), rgba(45,106,79,0.8))',
          borderRadius: 'var(--radius-xl)',
          padding: '52px',
          textAlign: 'center',
          border: '1px solid rgba(82,183,136,0.2)',
          boxShadow: '0 0 60px rgba(82,183,136,0.08)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(82,183,136,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            color: 'white', fontSize: '2rem', marginBottom: '12px',
          }}>Ready to Diagnose Your Crop?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
            Get instant results with treatment recommendations
          </p>
          <button onClick={() => navigate('/detect')}
            className="btn-glow"
            style={{
              background: 'linear-gradient(135deg, var(--green-500), var(--green-300))',
              color: 'var(--green-900)',
              border: 'none', padding: '16px 40px',
              borderRadius: 'var(--radius-md)', fontSize: '1rem',
              fontWeight: 700, cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              boxShadow: '0 4px 24px rgba(82,183,136,0.4)',
            }}>
            Start Detection →
          </button>
        </div>
      </div>
    </div>
  );
}