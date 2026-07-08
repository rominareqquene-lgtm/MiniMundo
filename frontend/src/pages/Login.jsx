import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login('dummy.jwt.token');
    navigate('/parent');
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass animate-float" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <h1 className="heading-xl">¡Hola! 👋</h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: '2rem' }}>Ingresa para ver el progreso de tu pequeño</p>
        
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="primary">Entrar</Button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/register" style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>¿No tienes cuenta? Regístrate</Link>
        </div>
      </div>
    </div>
  );
}
