import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/detect', label: 'Detect' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav style={{
      background: 'rgba(10, 31, 19, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
      height: '64px',
      borderBottom: '1px solid rgba(82,183,136,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
    }}>
      <Link to="/" style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        textDecoration: 'none', marginRight: 'auto'
      }}>
        <div style={{
          width: '36px', height: '36px',
          background: 'linear-gradient(135deg, var(--green-500), var(--green-300))',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.1rem',
          boxShadow: '0 0 16px rgba(82,183,136,0.4)',
        }}>🌿</div>
        <span style={{
          color: 'white',
          fontFamily: 'DM Serif Display, serif',
          fontSize: '1.25rem',
        }}>PlantCare <span style={{ color: 'var(--green-400)' }}>AI</span></span>
      </Link>

      <div style={{ display: 'flex', gap: '4px' }}>
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{
            color: pathname === l.to ? 'var(--green-300)' : 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            padding: '8px 18px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            fontWeight: pathname === l.to ? 600 : 400,
            background: pathname === l.to
              ? 'rgba(82,183,136,0.15)'
              : 'transparent',
            border: pathname === l.to
              ? '1px solid rgba(82,183,136,0.25)'
              : '1px solid transparent',
            transition: 'all 0.2s',
            boxShadow: pathname === l.to ? '0 0 12px rgba(82,183,136,0.1)' : 'none',
          }}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}