import { useEffect, useState } from 'react';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('authh') === 'true';
    setAuthenticated(storedAuth);
  }, []);

  const login = () => {
    localStorage.setItem('authh', 'true');
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authh');
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
}
