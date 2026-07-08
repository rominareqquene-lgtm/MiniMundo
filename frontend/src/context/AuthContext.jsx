import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For MVP we just assume token exists means user is logged in
    // A proper app would validate the token with the backend here
    if (token) {
      // Decode JWT payload without a library for MVP (not secure for real app, but works for client-side state)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ id: payload.id });
      } catch (e) {
        setToken(null);
        localStorage.removeItem('token');
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
