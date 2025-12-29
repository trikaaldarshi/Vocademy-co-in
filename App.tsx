
import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Team } from './pages/Team';

type ViewState = 'home' | 'methodology' | 'privacy' | 'terms' | 'contact' | 'about' | 'team';

const LOGO_URL = "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251224_183055_297.webp";

// Map slugs to view states
const PATH_MAP: Record<string, ViewState> = {
  '/': 'home',
  '/methodology': 'methodology',
  '/privacy-policy': 'privacy',
  '/terms-of-service': 'terms',
  '/contact': 'contact',
  '/about': 'about',
  '/team': 'team',
};

// Map view states to slugs for navigation
const SLUG_MAP: Record<ViewState, string> = {
  home: '/',
  methodology: '/methodology',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  contact: '/contact',
  about: '/about',
  team: '/team',
};

const IOSComingSoonModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-indigo-950/20 dark:bg-black/40 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-modal-pop text-center">
        <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400">
          <i className="fab fa-apple text-4xl"></i>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight">iOS App Coming Soon</h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
          We are currently focusing on perfecting the Android experience. The iOS version of Vocademy is under development and will be available on the App Store soon!
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [isIOSModalOpen, setIsIOSModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial routing and history listener
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const targetView = PATH_MAP[path] || 'home';
      setView(targetView);
      window.scrollTo(0, 0);
    };

    // Set initial view based on URL
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [view]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  const navigateTo = (newView: ViewState) => {
    const slug = SLUG_MAP[newView];
    if (window.location.pathname !== slug) {
      window.history.pushState(null, '', slug);
      setView(newView);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-colors duration-300">
      
      <IOSComingSoonModal isOpen={isIOSModalOpen} onClose={() => setIsIOSModalOpen(false)} />

      {/* Navigation */}
      <div className="fixed top-4 w-full px-4 z-[60]">
        <nav className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
          <div className="px-4 sm:px-8 h-16 flex items-center justify-between">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 group active:scale-95 transition-transform"
            >
              <div className="relative">
                {/* Animated Ring */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-500 rounded-full blur-[2px] animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white dark:border-slate-800">
                  <img src={LOGO_URL} alt="Vocademy Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
            </button>
            
            <div className="hidden lg:flex items-center space-x-6 mx-4">
              <button onClick={() => navigateTo('about')} className={`text-sm font-bold transition-colors ${view === 'about' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>About</button>
              <button onClick={() => navigateTo('team')} className={`text-sm font-bold transition-colors ${view === 'team' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Team</button>
              <button onClick={() => navigateTo('methodology')} className={`text-sm font-bold transition-colors ${view === 'methodology' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Methodology</button>
              <button onClick={() => navigateTo('contact')} className={`text-sm font-bold transition-colors ${view === 'contact' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Contact</button>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <button 
                onClick={toggleDarkMode}
                className="p-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-500 dark:text-gray-400 transition-all"
              >
                {darkMode ? <i className="fas fa-sun text-lg text-yellow-500"></i> : <i className="fas fa-moon text-lg"></i>}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all active:scale-90"
                aria-label="Menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-lg`}></i>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[55] transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-indigo-950/20 dark:bg-black/40 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-24 right-4 left-4 max-w-md mx-auto bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-white/20 dark:border-slate-800 p-8 transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
          <div className="grid grid-cols-2 gap-4">
            <MenuLink onClick={() => navigateTo('home')} icon="fa-home" label="Home" />
            <MenuLink onClick={() => navigateTo('about')} icon="fa-info-circle" label="About" />
            <MenuLink onClick={() => navigateTo('team')} icon="fa-users" label="Team" />
            <MenuLink onClick={() => navigateTo('methodology')} icon="fa-book" label="Methodology" />
            <MenuLink onClick={() => navigateTo('contact')} icon="fa-envelope" label="Contact" />
            <MenuLink onClick={() => navigateTo('privacy')} icon="fa-shield-halved" label="Privacy" />
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-800">
            <a 
              href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-center block shadow-lg active:scale-95"
            >
              <i className="fab fa-google-play mr-2"></i>
              Get Android App
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Router */}
      <main className="pt-8">
        {view === 'home' && (
          <Home 
            handleApply={() => setIsIOSModalOpen(true)}
          />
        )}
        {view === 'methodology' && <Methodology navigateTo={navigateTo} />}
        {view === 'privacy' && <Privacy />}
        {view === 'terms' && <Terms />}
        {view === 'contact' && <Contact navigateTo={navigateTo} />}
        {view === 'about' && <About navigateTo={navigateTo} />}
        {view === 'team' && <Team navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-500 rounded-full blur-[1px] animate-spin-slow opacity-60"></div>
                  <div className="relative w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white dark:border-slate-900">
                    <img src={LOGO_URL} alt="Vocademy Logo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-2xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm mx-auto md:mx-0 leading-relaxed mb-8 font-medium">
                The most advanced AI-powered vocabulary platform designed specifically for the Indian competitive exam ecosystem.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://telegram.dog/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-telegram-plane text-xl"></i>
                </a>
                <a href="https://X.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://instagram.com/VocademyApp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.reddit.com/r/Vocademyapp" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all hover:scale-110 shadow-sm">
                  <i className="fab fa-reddit-alien text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('about')} className={`hover:text-indigo-600 transition-colors font-bold ${view === 'about' ? 'text-indigo-600' : 'text-gray-500 dark:text-gray-400'}`}>About Us</button></li>
                <li><button onClick={() => navigateTo('team')} className={`hover:text-indigo-600 transition-colors font-bold ${view === 'team' ? 'text-indigo-600' : 'text-gray-500 dark:text-gray-400'}`}>Meet the Builder</button></li>
                <li><button onClick={() => navigateTo('methodology')} className={`hover:text-indigo-600 transition-colors font-bold ${view === 'methodology' ? 'text-indigo-600' : 'text-gray-500 dark:text-gray-400'}`}>Methodology</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-sm mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigateTo('privacy')} className={`hover:text-indigo-600 transition-colors font-bold ${view === 'privacy' ? 'text-indigo-600' : 'text-gray-500 dark:text-gray-400'}`}>Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className={`hover:text-indigo-600 transition-colors font-bold ${view === 'terms' ? 'text-indigo-600' : 'text-gray-500 dark:text-gray-400'}`}>Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center font-bold text-sm">
            <div className="mb-4 md:mb-0 text-blue-900 dark:text-blue-400">© {new Date().getFullYear()} Vocademy App. Crafted with ❤️ for Aspirants.</div>
            <div className="flex space-x-6 text-gray-400 dark:text-gray-600">
              <span>SSC • UPSC • Banking</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes modal-pop {
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

const MenuLink: React.FC<{ onClick: () => void, icon: string, label: string }> = ({ onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-100 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-100 dark:hover:border-indigo-800 transition-all active:scale-95"
  >
    <i className={`fas ${icon} text-xl text-indigo-600 dark:text-indigo-400 mb-2`}></i>
    <span className="text-xs font-black text-indigo-950 dark:text-white tracking-tight">{label}</span>
  </button>
);

export default App;
