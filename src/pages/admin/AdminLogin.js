import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PROXY_URL = process.env.REACT_APP_ADMIN_PROXY_URL;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${PROXY_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError('Invalid credentials.');
        return;
      }
      const { token } = await res.json();
      localStorage.setItem('purpl_admin_token', token);
      navigate('/admin/dashboard');
    } catch {
      setError('Network error — check that the proxy URL is configured.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dusk flex items-center justify-center">
      <div className="bg-[#1e1b22] border border-oscuro rounded-lg p-8 w-full max-w-sm space-y-6">
        <div className="text-center space-y-1">
          <h1 className="font-display-bold text-2xl text-white">PURPL Admin</h1>
          <p className="font-display2 text-sm text-jet-grey">Content Management</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block font-display2 text-xs text-jet-grey uppercase tracking-wider">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full bg-dusk border border-oscuro rounded px-3 py-2 text-white font-display2 text-sm focus:outline-none focus:border-stardust transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-display2 text-xs text-jet-grey uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full bg-dusk border border-oscuro rounded px-3 py-2 text-white font-display2 text-sm focus:outline-none focus:border-stardust transition-colors"
            />
          </div>
          {error && (
            <p className="font-display2 text-xs text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stardust hover:bg-moon text-white font-display2 text-sm rounded py-2 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
