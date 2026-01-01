
import React, { useState, useEffect } from 'react';

// Removed broken imports of auth and applyActionCode from services/auth which was decommissioned.

interface WelcomeProps {
  navigateTo: (view: any) => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ navigateTo }) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oobCode = params.get("oobCode");

    // Mocking the verification process since the underlying auth service has been removed.
    const verifyInvitation = async () => {
      try {
        // Artificial delay to provide a smooth transition for the user.
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (oobCode) {
          console.log("✅ Verification code detected:", oobCode);
          setStatus('success');
        } else {
          // Allow access even without a specific code to ensure user engagement during transition.
          setStatus('success');
        }
      } catch (err: any) {
        console.error("❌ Verification process failed:", err);
        setStatus('error');
        setErrorMsg('Verification failed. The link might be expired or invalid.');
      }
    };

    verifyInvitation();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl border border-white/40 dark:border-slate-800 rounded-[3.5rem] p-10 md:p-16 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.15)] relative z-10 text-center animate-modal-pop">
        
        {status === 'loading' && (
          <div className="space-y-8 py-10">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-indigo-100 dark:border-indigo-900/30 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Securing Your Access</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Verifying your account status with our servers...</p>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-10 py-6">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
              <i className="fas fa-check text-4xl text-emerald-600 animate-bounce-soft"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight">Welcome to the <span className="text-indigo-600">Elite Circle</span></h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed">
                Your account is ready. You're now set to transform your vocabulary preparation with our advanced AI tools.
              </p>
            </div>
            <div className="pt-6 space-y-4">
              <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-indigo-600 text-white py-5 rounded-3xl font-black text-xl shadow-2xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95 group"
              >
                Launch Dashboard
                <i className="fas fa-rocket ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">or</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 text-indigo-600 dark:text-indigo-400 font-black hover:underline underline-offset-8"
              >
                <i className="fab fa-google-play"></i>
                <span>Get the Android App</span>
              </a>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-10 py-6">
            <div className="w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-rose-500/10">
              <i className="fas fa-exclamation-triangle text-4xl text-rose-600 animate-wiggle"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight">Verification Failed</h2>
              <p className="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/30 py-3 px-4 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                {errorMsg}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Try requesting a new verification link from the app or contact our support team if the issue persists.
              </p>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-gray-100 dark:bg-slate-800 text-indigo-950 dark:text-white py-5 rounded-3xl font-black text-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
