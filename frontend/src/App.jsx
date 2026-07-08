import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ParentDashboard from './pages/ParentDashboard';
import KidsHub from './pages/KidsHub';
import GameLetters from './pages/GameLetters';
import GameColors from './pages/GameColors';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/parent" element={
          <ProtectedRoute>
            <ParentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/kids" element={
          <ProtectedRoute>
            <KidsHub />
          </ProtectedRoute>
        } />
        <Route path="/games/letters" element={
          <ProtectedRoute>
            <GameLetters />
          </ProtectedRoute>
        } />
        <Route path="/games/colors" element={
          <ProtectedRoute>
            <GameColors />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
