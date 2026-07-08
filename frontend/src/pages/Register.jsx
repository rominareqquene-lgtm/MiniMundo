import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <h1 className="heading-lg" style={{ textAlign: 'center', color: 'var(--color-secondary)' }}>Únete a MiniMundo</h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '2rem' }}>Crea una cuenta para empezar</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Tu Nombre" 
            value={name}
            onChange={e => setName(e.target.value)}
            required 
          />
          <input 
            type="email" 
            className="input-field" 
            placeholder="Correo electrónico" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            className="input-field" 
            placeholder="Contraseña" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
          <Button type="submit" variant="secondary">Registrarme</Button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/login" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>Ya tengo cuenta</Link>
        </div>
      </div>
    </div>
  );
}
