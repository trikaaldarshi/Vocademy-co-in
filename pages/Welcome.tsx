
import React, { useState, useEffect } from 'react';

interface WelcomeProps {
  navigateTo: (view: any) => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ navigateTo }) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  // Use a ref to track if we've already tried to initialize to prevent double-initialization bugs
  const [firebaseFunctions, setFirebaseFunctions] = useState<{
    initializeApp: ((options: any, name?: string) => any) | null;
    getAuth: ((app?: any) => any) | null;
    applyActionCode: ((auth: any, oobCode: string) => Promise<void>) | null;
  }>({
    initializeApp: null,
    getAuth: null,
    applyActionCode: null,
  });

  // Step 1: Load Firebase Modules
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oobCode = params.get("oobCode");

    const loadFirebase = async () => {
      try {
        const { initializeApp: initApp } = await import("firebase/app");
        const { getAuth, applyActionCode } = await import("firebase/auth");
        setFirebaseFunctions({ initializeApp: initApp, getAuth, applyActionCode });
      } catch (err) {
        console.error("Failed to load Firebase modules:", err);
        // Only error out if we actually needed Firebase for an oobCode
        if (oobCode) {
          setStatus('error');
          setErrorMsg("Could not connect to security services.");
        }
      }
    };

    // If there's no code, we don't necessarily need to wait for Firebase to show success
    if (!oobCode) {
      const timer = setTimeout(() => setStatus('success'), 2000);
      return () => clearTimeout(timer);
    } else {
      loadFirebase();
    }
  }, []);

  // Step 2: Handle Verification Logic
  useEffect(() => {
    if (firebaseFunctions.initializeApp && firebaseFunctions.getAuth && firebaseFunctions.applyActionCode) {
      const { initializeApp, getAuth, applyActionCode } = firebaseFunctions;

      const firebaseConfig = {
        apiKey: "YOUR_API_KEY_HERE",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        appId: "YOUR_APP_ID"
      };

      const params = new URLSearchParams(window.location.search);
      const oobCode = params.get("oobCode");

      if (oobCode) {
        let app: any;
        try {
          // Attempt to initialize or get existing app
          app = initializeApp(firebaseConfig);
          const auth = getAuth(app);
          
          applyActionCode(auth, oobCode)
            .then(() => {
              console.log("✅ Email verified successfully");
              setStatus('success');
            })
            .catch((err: any) => {
              console.error("❌ Firebase verification failed:", err);
              setStatus('error');
              setErrorMsg(err.message || "The verification link is invalid or has expired.");
            });
        } catch (e) {
          console.warn("Firebase initialization warning:", e);
          // If init fails but we have a code, we can't verify
          setStatus('error');
          setErrorMsg("Configuration error. Please contact support.");
        }
      }
    }
  }, [firebaseFunctions]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden">
      {/* Background Animated Blobs */}
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
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-shield-halved text-indigo-600/20 text-2xl"></i>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Verifying Access</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">Establishing secure connection...</p>
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
                Your credentials have been confirmed. You are now cleared to access Vocademy's premium features.
              </p>
            </div>
            <div className="pt-6 space-y-4">
              <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-indigo-600 text-white py-5 rounded-3xl font-black text-xl shadow-2xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95 group"
              >
                Enter Dashboard
                <i className="fas fa-rocket ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-slate-800"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-4 text-gray-400 font-black tracking-widest">Mobile Access</span></div>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 text-indigo-600 dark:text-indigo-400 font-black hover:underline underline-offset-8 group"
              >
                <i className="fab fa-google-play group-hover:scale-110 transition-transform"></i>
                <span>Get the Android App</span>
              </a>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-10 py-6">
            <div className="w-24 h-24 bg-rose-100 dark:bg-rose-950/30 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-rose-500/10">
              <i className="fas fa-exclamation-triangle text-4xl text-rose-600 animate-wiggle"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight">Verification Failed</h2>
              <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                <p className="text-rose-600 dark:text-rose-400 font-bold">
                  {errorMsg}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                The link may be expired or already used. Please try requesting a new verification email from the app.
              </p>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-gray-100 dark:bg-slate-800 text-indigo-950 dark:text-white py-5 rounded-3xl font-black text-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-95"
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
