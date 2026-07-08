import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function ParentDashboard() {
  return (
    <div className="page-container">
      <h1 className="heading-xl">Panel de Padres 📊</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 className="heading-lg">Perfiles de Niños</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👦</div>
            <div>
              <h3 style={{ margin: 0 }}>Leo (5 años)</h3>
              <p style={{ margin: 0, color: 'var(--color-text-light)' }}>⭐ 12 Estrellas ganadas</p>
            </div>
          </div>
          
          <Button variant="secondary" style={{ marginTop: '1rem' }}>+ Agregar Niño</Button>
        </div>
        
        <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ color: 'var(--color-primary)' }}>¡A Jugar! 🎮</h2>
          <p style={{ marginBottom: '2rem' }}>Entra al modo niños para comenzar el aprendizaje.</p>
          <Link to="/kids" style={{ width: '100%', textDecoration: 'none' }}>
            <Button variant="primary">Ir al Área de Juegos</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
