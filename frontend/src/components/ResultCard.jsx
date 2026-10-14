import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import treatments from '../data/treatments';

const COLORS = {
  'Healthy': '#66bb6a',
  'Fungal': '#ffa726',
  'Bacterial': '#ef5350',
  'Viral': '#ab47bc',
  'Pest': '#42a5f5'
};

const SEVERITY_COLORS = {
  'None': '#66bb6a',
  'Medium': '#ffa726',
  'High': '#ef5350',
  'Very High': '#b71c1c'
};

export default function ResultCard({ result }) {
  if (!result) return null;

  const treatment = treatments[result.class];
  const chartData = Object.entries(result.all_scores)
    .map(([name, value]) => ({ name, value }));

  return (
    <div style={{ marginTop: '24px' }}>

      {/* Main Result */}
      <div style={{
        background: '#e8f5e9', borderRadius: '14px', padding: '24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: '16px'
      }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.4rem' }}>
          {treatment ? treatment.displayName : result.class}
        </h2>

        <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: '#2e7d32', color: 'white', padding: '4px 12px',
            borderRadius: '20px', fontSize: '0.85rem' }}>
            Confidence: {result.confidence}%
          </span>
          <span style={{ background: '#1565c0', color: 'white', padding: '4px 12px',
            borderRadius: '20px', fontSize: '0.85rem' }}>
            Model: {result.model}
          </span>
          {treatment && (
            <>
              <span style={{
                background: COLORS[treatment.type] || '#888',
                color: 'white', padding: '4px 12px',
                borderRadius: '20px', fontSize: '0.85rem'
              }}>
                {treatment.type}
              </span>
              <span style={{
                background: SEVERITY_COLORS[treatment.severity] || '#888',
                color: 'white', padding: '4px 12px',
                borderRadius: '20px', fontSize: '0.85rem'
              }}>
                🚨 Severity: {treatment.severity}
              </span>
            </>
          )}
        </div>

        {treatment && (
          <p style={{ color: '#555', marginTop: '14px', lineHeight: 1.6 }}>
            {treatment.description}
          </p>
        )}
      </div>

      {/* Pathogen Info */}
      {treatment && treatment.pathogen !== 'None' && (
        <div style={{
          background: '#fff3e0', borderRadius: '14px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ color: '#e65100', marginBottom: '8px' }}>🦠 Causative Organism</h3>
          <p style={{ fontStyle: 'italic', color: '#333', fontSize: '1rem' }}>
            {treatment.pathogen}
          </p>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>
            Type: {treatment.type}
          </p>
        </div>
      )}

      {/* Treatment Steps */}
      {treatment && (
        <div style={{
          background: 'white', borderRadius: '14px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ color: '#2e7d32', marginBottom: '14px' }}>
            💊 Step-by-Step Treatment
          </h3>
          {treatment.treatment.map((step, i) => (
            <div key={i} style={{
              display: 'flex', gap: '12px', marginBottom: '10px',
              alignItems: 'flex-start'
            }}>
              <span style={{
                background: '#2e7d32', color: 'white', borderRadius: '50%',
                width: '26px', height: '26px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0,
                marginTop: '2px'
              }}>{i + 1}</span>
              <p style={{ color: '#444', lineHeight: 1.6, fontSize: '0.95rem' }}>{step}</p>
            </div>
          ))}
        </div>
      )}

      {/* Prevention */}
      {treatment && (
        <div style={{
          background: '#e3f2fd', borderRadius: '14px', padding: '20px',
          marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ color: '#1565c0', marginBottom: '8px' }}>🛡️ Prevention Tip</h3>
          <p style={{ color: '#333', lineHeight: 1.6 }}>{treatment.prevention}</p>
        </div>
      )}

      {/* Probability Chart */}
      <div style={{
        background: 'white', borderRadius: '14px', padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
      }}>
        <h3 style={{ color: '#444', marginBottom: '14px' }}>📊 Model Confidence Scores</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={chartData} layout="vertical">
            <XAxis type="number" domain={[0, 100]} unit="%" />
            <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 10 }} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {chartData.map(entry => (
                <Cell key={entry.name} fill="#2e7d32" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}