
import React, { useState } from 'react';
import { signInWithEmailAndPassword, auth } from '../services/auth';

interface AdminLoginProps {
  navigateTo: (view: any) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigateTo('admin-dashboard');
    } catch (err: any) {
      console.error("Auth error:", err);
      setError(err.message || "Authentication failed. Check your credentials.");
      setTimeout(() => setError(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_60%)]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-10 rounded-[3.5rem] shadow-2xl animate-modal-pop">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-600/20">
              <i className="fas fa-lock text-white text-3xl"></i>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Secure Access</h1>
            <p className="text-slate-400 mt-2 font-medium">Identity verification required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1">Staff Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vocademy.app"
                required
                className="w-full px-6 py-4 bg-slate-800/50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all text-white font-bold placeholder-slate-600"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 ml-1">Passphrase</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full px-6 py-4 bg-slate-800/50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none transition-all text-white font-bold placeholder-slate-600"
              />
            </div>
            
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-4 rounded-xl text-xs font-bold animate-shake text-center">
                {error}
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black text-lg transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20 disabled:opacity-50"
            >
              {loading ? <i className="fas fa-circle-notch animate-spin"></i> : 'Verify Identity'}
            </button>
          </form>

          <button 
            onClick={() => navigateTo('home')}
            className="w-full mt-8 text-slate-500 font-bold text-xs hover:text-white transition-colors uppercase tracking-widest"
          >
            Back to Public Site
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 3; }
      `}</style>
    </div>
  );
};
