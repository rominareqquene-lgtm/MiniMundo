import { Link } from 'react-router-dom';

export default function KidsHub() {
  return (
    <div className="page-container" style={{ background: 'var(--color-accent)', minHeight: '90vh', borderRadius: 'var(--radius-lg)', padding: '3rem' }}>
      <h1 className="heading-xl" style={{ fontSize: '4rem', color: '#fff', textShadow: '4px 4px 0px var(--color-primary)' }}>¡ELIGE UN JUEGO!</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        
        <Link to="/games/letters" style={{ textDecoration: 'none' }}>
          <div className="glass game-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--color-primary)' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔤</div>
            <h2 style={{ color: '#fff', fontSize: '2rem', margin: 0 }}>Las Letras</h2>
          </div>
        </Link>

        <div className="glass game-card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--color-secondary)' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔢</div>
          <h2 style={{ color: '#fff', fontSize: '2rem', margin: 0 }}>Los Números</h2>
        </div>

        <div className="glass game-card" style={{ padding: '3rem', textAlign: 'center', background: '#9b59b6' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎨</div>
          <h2 style={{ color: '#fff', fontSize: '2rem', margin: 0 }}>Colores</h2>
        </div>

      </div>
    </div>
  );
}
