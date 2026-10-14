const references = [
  { id: 1, title: 'CNN-Based Leaf Disease Classification (2023)', method: 'CNN + Data Augmentation' },
  { id: 2, title: 'ResNet50 Transfer Learning for Crop Health (2023)', method: 'ResNet50 Fine-tuning' },
  { id: 3, title: 'EfficientNet for Leaf Stress Detection (2024)', method: 'EfficientNetB0' },
  { id: 6, title: 'MobileNet Real-Time Plant Detection (2024)', method: 'MobileNetV2' },
  { id: 16, title: 'Multi-Stress Model for Abiotic & Biotic (2025)', method: 'Multi-label CNN' },
];

const stack = [
  { layer: 'ML Framework', tech: 'PyTorch 2.5', icon: '🔥' },
  { layer: 'Models', tech: 'CNN, ResNet50, EfficientNet-B0', icon: '🧠' },
  { layer: 'Backend', tech: 'Python + Flask', icon: '⚙️' },
  { layer: 'Frontend', tech: 'React (Create React App)', icon: '⚛️' },
  { layer: 'GPU', tech: 'NVIDIA RTX 3060', icon: '🎮' },
  { layer: 'Dataset', tech: 'PlantVillage (20,000+ images)', icon: '🌿' },
];

const team = [
  { name: 'Prerit Kumar' },
  { name: 'Ashish Shukla' },
];

export default function About() {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px' }}>

      <div style={{ marginBottom: '36px' }}>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '2rem', color: 'white', marginBottom: '6px',
        }}>About PlantCare AI</h2>
        <p style={{ color: 'var(--gray-400)' }}>Minor Project — Plant Stress Detection using Deep Learning</p>
      </div>

      {/* Overview */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(26,74,46,0.6), rgba(45,106,79,0.4))',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        marginBottom: '20px',
        border: '1px solid rgba(82,183,136,0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 40px rgba(82,183,136,0.06)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at top left, rgba(82,183,136,0.08), transparent 60%)',
          pointerEvents: 'none',
        }} />
        <h3 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.4rem', color: 'var(--green-300)', marginBottom: '12px',
        }}>🎯 Project Overview</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>
          PlantCare AI is a deep learning system that detects plant stress from leaf images.
          It classifies plants into 15 disease categories across Tomato, Potato and Bell Pepper crops,
          providing step-by-step treatment recommendations with pathogen identification.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px' }}>
          {[
            { v: '3', l: 'AI Models' },
            { v: '15', l: 'Disease Classes' },
            { v: '92%', l: 'Peak Accuracy' },
            { v: '20K+', l: 'Training Images' },
          ].map(s => (
            <div key={s.l} style={{
              background: 'rgba(82,183,136,0.08)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px', textAlign: 'center',
              border: '1px solid rgba(82,183,136,0.15)',
            }}>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.8rem', color: 'var(--green-400)',
                textShadow: '0 0 20px rgba(82,183,136,0.5)',
              }}>{s.v}</div>
              <div style={{ color: 'var(--gray-400)', fontSize: '0.8rem', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px', marginBottom: '20px',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
      }}>
        <h3 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.4rem', color: 'white', marginBottom: '16px',
        }}>🛠 Tech Stack</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px' }}>
          {stack.map(t => (
            <div key={t.layer} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: 'rgba(82,183,136,0.06)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px 16px',
              border: '1px solid rgba(82,183,136,0.1)',
            }}>
              <span style={{ fontSize: '1.3rem' }}>{t.icon}</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.layer}</div>
                <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem' }}>{t.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Literature Survey */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px', marginBottom: '20px',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
      }}>
        <h3 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.4rem', color: 'white', marginBottom: '16px',
        }}>📚 Literature Survey</h3>
        <div style={{ display: 'grid', gap: '10px' }}>
          {references.map(r => (
            <div key={r.id} style={{
              display: 'flex', gap: '14px', alignItems: 'flex-start',
              padding: '14px',
              background: 'rgba(82,183,136,0.05)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(82,183,136,0.1)',
            }}>
              <span style={{
                background: 'linear-gradient(135deg, var(--green-600), var(--green-400))',
                color: 'white', borderRadius: '50%',
                width: '28px', height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                boxShadow: '0 0 10px rgba(82,183,136,0.3)',
              }}>{r.id}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>{r.title}</p>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.82rem', marginTop: '2px' }}>{r.method}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(10px)',
      }}>
        <h3 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.4rem', color: 'white', marginBottom: '16px',
        }}>👥 Team</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
          {team.map(t => (
            <div key={t.name}
              className="card-3d"
              style={{
                background: 'rgba(82,183,136,0.06)',
                borderRadius: 'var(--radius-md)',
                padding: '24px', textAlign: 'center',
                border: '1px solid rgba(82,183,136,0.15)',
              }}>
              <div style={{
                width: '52px', height: '52px',
                background: 'linear-gradient(135deg, var(--green-600), var(--green-400))',
                borderRadius: '50%', margin: '0 auto 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem',
                boxShadow: '0 0 20px rgba(82,183,136,0.3)',
              }}>👤</div>
              <p style={{ fontWeight: 700, color: 'white' }}>{t.name}</p>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.82rem', marginTop: '4px' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}