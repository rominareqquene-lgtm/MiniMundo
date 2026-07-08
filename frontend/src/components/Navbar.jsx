import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)' }}>
      <Link to={user ? '/parent' : '/'} style={{ textDecoration: 'none', color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: '900' }}>
        🚀 MiniMundo
      </Link>
      <div>
        {user ? (
          <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--color-primary)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            Salir
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: 'var(--color-text-light)', fontWeight: 'bold' }}>
            Iniciar Sesión
          </Link>
        )}
      </div>
    </nav>
  );
}
