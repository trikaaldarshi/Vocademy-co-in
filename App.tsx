import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Welcome } from './pages/Welcome';
import { ArticleDetail } from './pages/ArticleDetail';
import { Articles } from './pages/Articles';

type ViewState = 'home' | 'methodology' | 'privacy' | 'terms' | 'contact' | 'about' | 'team' | 'welcome' | 'article-detail' | 'articles';

const LOGO_URL = "https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251224_183055_297.webp";

const PATH_MAP: Record<string, ViewState> = {
  '/': 'home',
  '/methodology': 'methodology',
  '/privacy-policy': 'privacy',
  '/terms-of-service': 'terms',
  '/contact': 'contact',
  '/about': 'about',
  '/team': 'team',
  '/welcome': 'welcome',
  '/articles': 'articles',
};

const SLUG_MAP: Record<ViewState, string> = {
  home: '/',
  methodology: '/methodology',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  contact: '/contact',
  about: '/about',
  team: '/team',
  welcome: '/welcome',
  articles: '/articles',
  'article-detail': '/article',
};

const IOSComingSoonModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-xl animate-fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/40 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-modal-pop text-center">
        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400">
          <i className="fab fa-apple text-4xl"></i>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight">iOS App Coming Soon</h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
          We are currently focusing on perfecting the Android experience. The iOS version of Vocademy is under development and will be available on the App Store soon!
        </p>
        <button onClick={onClose} className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all active:scale-95">
          Understood
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string>('');
  const [isIOSModalOpen, setIsIOSModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/article/')) {
        const slug = path.replace('/article/', '');
        setCurrentArticleSlug(slug);
        setView('article-detail');
        window.scrollTo(0, 0);
        return;
      }
      const lookupPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
      const targetView = PATH_MAP[lookupPath] || 'home';
      setView(targetView);
      window.scrollTo(0, 0);
    };
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

  const navigateTo = (newView: ViewState, slug?: string) => {
    let path = SLUG_MAP[newView];
    if (newView === 'article-detail' && slug) {
      path = `/article/${slug}`;
    }
    if (window.location.pathname.toLowerCase() !== path.toLowerCase()) {
      window.history.pushState(null, '', path);
      if (newView === 'article-detail' && slug) {
        setCurrentArticleSlug(slug);
      }
      setView(newView);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const isNavVisible = !['welcome'].includes(view);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40 transition-colors duration-300">
      
      <IOSComingSoonModal isOpen={isIOSModalOpen} onClose={() => setIsIOSModalOpen(false)} />

      {isNavVisible && (
        <div className="fixed top-4 w-full px-4 z-[60]">
          <nav className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] overflow-hidden">
            <div className="px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
              <button onClick={() => navigateTo('home')} className="flex items-center space-x-2 group active:scale-95 transition-transform flex-shrink-0">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-500 rounded-full blur-[1px] animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white dark:border-slate-800">
                    <img src={LOGO_URL} alt="Vocademy Logo" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="block text-base sm:text-lg md:text-xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
              </button>
              
              <div className="hidden lg:flex items-center space-x-6 mx-4 flex-shrink-0">
                <button onClick={() => navigateTo('home')} className={`text-[11px] font-bold transition-colors ${view === 'home' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Home</button>
                <button onClick={() => navigateTo('articles')} className={`text-[11px] font-bold transition-colors ${view === 'articles' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Articles</button>
                <button onClick={() => navigateTo('about')} className={`text-[11px] font-bold transition-colors ${view === 'about' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>About</button>
                <button onClick={() => navigateTo('team')} className={`text-[11px] font-bold transition-colors ${view === 'team' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Team</button>
                <button onClick={() => navigateTo('methodology')} className={`text-[11px] font-bold transition-colors ${view === 'methodology' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Methodology</button>
                <button onClick={() => navigateTo('contact')} className={`text-[11px] font-bold transition-colors ${view === 'contact' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}>Contact</button>
              </div>

              <div className="flex items-center space-x-1 sm:space-x-2 flex-1 justify-end min-w-0">
                <button onClick={() => setDarkMode(!darkMode)} className="p-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-500 dark:text-gray-400 transition-all">
                  {darkMode ? <i className="fas fa-sun text-base text-yellow-500"></i> : <i className="fas fa-moon text-base"></i>}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all active:scale-90 flex-shrink-0">
                  <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-sm`}></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[55] transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-20 right-6 left-6 max-w-sm mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/40 dark:border-slate-800 p-4 transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}`}>
          <div className="flex flex-col space-y-0.5">
            <MenuLink onClick={() => navigateTo('home')} icon="fa-house" label="Home" color="indigo" />
            <MenuLink onClick={() => navigateTo('articles')} icon="fa-newspaper" label="Articles" color="emerald" />
            <MenuLink onClick={() => navigateTo('about')} icon="fa-circle-info" label="About Us" color="blue" />
            <MenuLink onClick={() => navigateTo('team')} icon="fa-users" label="Our Team" color="purple" />
            <MenuLink onClick={() => navigateTo('methodology')} icon="fa-book-open" label="Methodology" color="emerald" />
            <MenuLink onClick={() => navigateTo('contact')} icon="fa-paper-plane" label="Contact Support" color="orange" />
            <MenuLink onClick={() => navigateTo('privacy')} icon="fa-shield-halved" label="Privacy & Terms" color="rose" />
            <MenuLink onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lakshya.vocademy', '_blank')} icon="fa-download" label="Download App" color="indigo" noBg />
          </div>
        </div>
      </div>

      <main>
        {view === 'home' && <Home handleApply={() => setIsIOSModalOpen(true)} navigateToArticle={(slug) => navigateTo('article-detail', slug)} />}
        {view === 'articles' && <Articles navigateToArticle={(slug) => navigateTo('article-detail', slug)} />}
        {view === 'article-detail' && <ArticleDetail slug={currentArticleSlug} navigateTo={navigateTo} />}
        {view === 'methodology' && <Methodology navigateTo={navigateTo} />}
        {view === 'privacy' && <Privacy />}
        {view === 'terms' && <Terms />}
        {view === 'contact' && <Contact navigateTo={navigateTo} />}
        {view === 'about' && <About navigateTo={navigateTo} />}
        {view === 'team' && <Team navigateTo={navigateTo} />}
        {view === 'welcome' && <Welcome navigateTo={navigateTo} />}
      </main>

      {isNavVisible && (
        <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 px-4 border-t border-gray-100 dark:border-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <span className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">Vocademy</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-base max-w-sm mx-auto md:mx-0 leading-relaxed mb-6 font-medium">
                  Advanced AI-powered vocabulary platform designed for the Indian competitive exam ecosystem.
                </p>
              </div>
              <div>
                <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-xs mb-5">Explore</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => navigateTo('home')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">Home</button></li>
                  <li><button onClick={() => navigateTo('articles')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">Articles</button></li>
                  <li><button onClick={() => navigateTo('about')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">About Us</button></li>
                  <li><button onClick={() => navigateTo('team')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">Our Team</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-indigo-950 dark:text-white font-black uppercase tracking-widest text-xs mb-5">Legal</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => navigateTo('privacy')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">Privacy Policy</button></li>
                  <li><button onClick={() => navigateTo('terms')} className="text-sm text-gray-500 hover:text-indigo-600 font-bold">Terms of Service</button></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

const MenuLink: React.FC<{ onClick: () => void, icon: string, label: string, color: string, noBg?: boolean }> = ({ onClick, icon, label, color, noBg }) => {
  const colorMap: Record<string, string> = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    emerald: 'text-emerald-600',
    orange: 'text-orange-600',
    rose: 'text-rose-600',
  };

  const bgMap: Record<string, string> = {
    indigo: 'bg-indigo-50',
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    emerald: 'bg-emerald-50',
    orange: 'bg-orange-50',
    rose: 'bg-rose-50',
  };

  return (
    <button onClick={onClick} className="flex items-center w-full p-2.5 rounded-xl hover:bg-indigo-50/50 transition-all active:scale-[0.98] group">
      <div className={`w-8 h-8 rounded-lg ${!noBg ? bgMap[color] : ''} ${colorMap[color]} flex items-center justify-center mr-3.5 group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon} text-base`}></i>
      </div>
      <span className="text-sm font-bold text-indigo-950 dark:text-gray-100 tracking-tight">{label}</span>
    </button>
  );
};

export default App;
