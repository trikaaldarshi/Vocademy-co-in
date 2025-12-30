import React from 'react';

interface MethodologyProps {
  navigateTo: (view: any) => void;
}

const AnimatedAIScan = () => (
  <div className="relative w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl overflow-hidden group">
    <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 18h.01" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent h-1/2 w-full animate-scan"></div>
    <style>{`
      @keyframes scan {
        0%, 100% { transform: translateY(-100%); }
        50% { transform: translateY(100%); }
      }
      .animate-scan {
        animation: scan 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

const AnimatedSRS = () => (
  <div className="relative w-16 h-16 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl overflow-hidden">
    <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      <path d="M21 3v9h-9" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
    </div>
    <style>{`
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
    `}</style>
  </div>
);

const AnimatedGamification = () => (
  <div className="relative w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-2xl overflow-hidden">
    <svg className="w-10 h-10 text-orange-600 dark:text-orange-400 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-sparkle"></div>
    <div className="absolute bottom-4 left-3 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle-delayed"></div>
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-5px) rotate(2deg); }
      }
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-sparkle {
        animation: sparkle 2s ease-in-out infinite;
      }
      .animate-sparkle-delayed {
        animation: sparkle 2s ease-in-out infinite 1s;
      }
    `}</style>
  </div>
);

export const Methodology: React.FC<MethodologyProps> = ({ navigateTo }) => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          The Vocademy <span className="text-indigo-600">Methodology</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          We combine cutting-edge AI with proven cognitive science to revolutionize how you master editorial vocabulary.
        </p>
      </div>

      <div className="space-y-12">
        <div className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/10 transition-all duration-500">
          <AnimatedAIScan />
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-black px-2 py-1 bg-indigo-600 text-white rounded">STEP 1</span>
              <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-400">Editorial AI Scanning</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Every morning, Vocademy's AI (powered by Gemini 3) scans editorials from <span className="font-bold text-indigo-900 dark:text-indigo-200">The Hindu</span> and <span className="font-bold text-indigo-900 dark:text-indigo-200">The Indian Express</span>. 
              It identifies high-yield words that are frequently used in competitive exams like UPSC Mains and SSC CGL Tier-II, providing contextual analysis that dictionaries miss.
            </p>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10 transition-all duration-500">
          <AnimatedSRS />
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-black px-2 py-1 bg-emerald-600 text-white rounded">STEP 2</span>
              <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-400">Spaced Repetition (SRS)</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Forget "rote learning". Our algorithm tracks your mastery of every single word. 
              Easy words appear less often, while difficult ones are resurfaced right before your <span className="text-emerald-600 font-bold italic">forgetting curve</span> kicks in, 
              ensuring permanent retention for your most critical exams.
            </p>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900/50 hover:bg-orange-50/30 dark:hover:bg-orange-950/10 transition-all duration-500">
          <AnimatedGamification />
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-black px-2 py-1 bg-orange-600 text-white rounded">STEP 3</span>
              <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-400">Competitive Gamification</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Preparation is a marathon. To keep your motivation at its peak, we've introduced <span className="font-black text-orange-600">Vocab Duels</span>. 
              Challenge fellow aspirants in 60-second sprints to correctly identify usage patterns and synonyms under pressure, mirroring actual exam environments.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 p-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white mb-6">Experience the transformation.</h3>
          <p className="text-indigo-100 mb-10 text-lg font-medium">Join the elite circle of aspirants mastering English the smart way.</p>
          <button 
            onClick={() => navigateTo('home')}
            className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center space-x-3 mx-auto"
          >
            <span>Return to Home & Try Demo</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};