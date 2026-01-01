import React, { useState, useEffect } from 'react';

interface WelcomeProps {
  navigateTo: (view: any) => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ navigateTo }) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  const [firebaseFunctions, setFirebaseFunctions] = useState<{
    initializeApp: ((options: any, name?: string) => any) | null;
    getAuth: ((app?: any) => any) | null;
    applyActionCode: ((auth: any, oobCode: string) => Promise<void>) | null;
  }>(
    {
      initializeApp: null,
      getAuth: null,
      applyActionCode: null,
    }
  );

  useEffect(() => {
    const loadFirebase = async () => {
      try {
        const { initializeApp: initApp } = await import("firebase/app");
        const { getAuth, applyActionCode } = await import("firebase/auth");
        setFirebaseFunctions({ initializeApp: initApp, getAuth, applyActionCode });
      } catch (err) {
        console.error("Failed to load Firebase modules:", err);
      }
    };

    loadFirebase();
  }, []);

  useEffect(() => {
    if (firebaseFunctions.initializeApp && firebaseFunctions.getAuth && firebaseFunctions.applyActionCode) {
      const { initializeApp, getAuth, applyActionCode } = firebaseFunctions;

      const firebaseConfig = {
        apiKey: "YOUR_API_KEY_HERE",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        appId: "YOUR_APP_ID"
      };

      let app: any | undefined;
      try {
        app = initializeApp(firebaseConfig);
      } catch (e) {
        console.warn("Firebase initialization warning:", e);
      }

      if (app) {
        const auth = getAuth(app);
        const params = new URLSearchParams(window.location.search);
        const oobCode = params.get("oobCode");

        if (oobCode) {
          applyActionCode(auth, oobCode)
            .then(() => {
              console.log("✅ Email verified and committed to Firebase");
              setStatus('success');
            })
            .catch((err: any) => {
              console.error("❌ Firebase verification commit failed:", err);
              setStatus('error');
              setErrorMsg(err.message || "Link is invalid or expired.");
            });
        } else {
          // Allow normal entry if no code is present
          setTimeout(() => setStatus('success'), 1200);
        }
      }
    }
  }, [firebaseFunctions]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 p-6 relative overflow-hidden selection:bg-indigo-100 dark:selection:bg-indigo-900/40">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white dark:border-slate-800 rounded-[3rem] p-8 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] text-center animate-fade-in">
          
          <div className="mb-10 inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full animate-pulse"></div>
              <div className="relative w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg border border-indigo-50 dark:border-slate-700">
                 <img 
                  src="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251224_183055_297.webp" 
                  alt="Vocademy" 
                  className="w-14 h-14 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {status === 'loading' && (
            <div className="space-y-8 animate-pulse">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Verifying Credentials</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">Securing your early tester access through Firebase...</p>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-900/50">
                  <i className="fas fa-check-circle text-emerald-600 text-sm"></i>
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">Access Granted</span>
                </div>
                <h2 className="text-4xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight">
                  Welcome, <span className="text-indigo-600">Lexis Pioneer</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed max-w-md mx-auto">
                  Your registration is verified. You now have full access to Vocademy's advanced AI vocabulary ecosystem.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  onClick={() => navigateTo('home')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-indigo-600/20 transition-all active:scale-95 group"
                >
                  Enter Platform
                  <i className="fas fa-chevron-right ml-3 text-sm group-hover:translate-x-1 transition-transform"></i>
                </button>
                
                <div className="pt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Mobile Experience</p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-3 text-indigo-600 dark:text-indigo-400 font-black hover:bg-indigo-50 dark:hover:bg-indigo-900/20 py-3 rounded-xl transition-all"
                  >
                    <i className="fab fa-google-play text-xl"></i>
                    <span>Download App for Android</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/30 rounded-full flex items-center justify-center mx-auto text-rose-500 border border-rose-100 dark:border-rose-900/50">
                  <i className="fas fa-exclamation-triangle text-3xl"></i>
                </div>
                <h2 className="text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Verification Incomplete</h2>
                <div className="bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/50">
                  <p className="text-rose-600 dark:text-rose-400 font-bold text-sm leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                  Please check your connection or request a new invitation from within the app.
                </p>
              </div>

              <button 
                onClick={() => navigateTo('home')}
                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-4 rounded-2xl font-black transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Back to Website
              </button>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-gray-400 dark:text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          Vocademy Early Access Program &bull; Secure Verification
        </p>
      </div>
    </div>
  );
};
