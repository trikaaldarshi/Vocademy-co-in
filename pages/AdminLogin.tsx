import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
  navigateTo: (view: any) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, navigateTo }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified for demo - use env var for real production
    if (password === 'vocademy_admin_2025') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-10 rounded-[3.5rem] shadow-2xl animate-modal-pop">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-600/20">
              <i className="fas fa-shield-halved text-white text-3xl"></i>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Admin Console</h1>
            <p className="text-slate-400 mt-2 font-medium">Restricted to Vocademy Staff</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Access Token</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className={`w-full px-6 py-5 bg-slate-800 border-2 rounded-2xl outline-none transition-all text-white font-bold placeholder-slate-600 ${error ? 'border-rose-500 animate-shake' : 'border-transparent focus:border-indigo-600'}`}
              />
            </div>
            
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black text-lg transition-all active:scale-[0.98] shadow-xl shadow-indigo-600/20">
              Authenticate
            </button>
          </form>

          <button 
            onClick={() => navigateTo('home')}
            className="w-full mt-8 text-slate-500 font-bold text-sm hover:text-white transition-colors"
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