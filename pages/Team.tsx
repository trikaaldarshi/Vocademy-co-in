import React from 'react';

interface TeamProps {
  navigateTo: (view: any) => void;
}

const TeamMember = ({ name, role, image, accent, children }: { name: string, role: string, image: string, accent: string, children?: React.ReactNode }) => (
  <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-gray-100 dark:border-slate-800 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] transition-all group animate-float">
    <div className="text-center">
      <div className="relative mb-12 mx-auto w-48 h-48 sm:w-60 sm:h-60">
        {/* Layer 1: Morphing Organic Glow */}
        <div className={`absolute -inset-6 bg-gradient-to-tr ${accent === 'indigo' ? 'from-indigo-500/30 to-blue-400/30' : 'from-purple-500/30 to-pink-400/30'} blur-3xl animate-morph opacity-40 group-hover:opacity-70 transition-opacity duration-1000`}></div>
        
        {/* Layer 2: Rotating Ring */}
        <div className={`absolute -inset-2 bg-gradient-to-tr ${accent === 'indigo' ? 'from-indigo-600 to-blue-500' : 'from-purple-600 to-pink-500'} rounded-full animate-spin-slow opacity-10 group-hover:opacity-30 transition-opacity duration-700`}></div>
        
        {/* Layer 3: Main Photo Container */}
        <div className="relative w-full h-full p-2 bg-white dark:bg-slate-950 rounded-full shadow-2xl transition-transform duration-700 group-hover:scale-[1.05]">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 relative">
             <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className={`absolute -top-4 -right-4 w-12 h-12 ${accent === 'indigo' ? 'bg-indigo-600' : 'bg-purple-600'} text-white rounded-2xl flex items-center justify-center shadow-xl animate-bounce-soft opacity-0 group-hover:opacity-100 transition-all duration-500`}>
          <i className="fas fa-sparkles text-lg"></i>
        </div>
      </div>
      
      <div className="relative inline-block mb-4">
        <h3 className="text-3xl md:text-5xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight transition-colors group-hover:text-indigo-600">
          {name}
        </h3>
        <div className={`absolute -bottom-1 left-0 right-0 h-1 bg-indigo-600/10 dark:bg-indigo-400/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
      </div>

      <div className="flex items-center justify-center space-x-3 mb-10">
        <div className={`h-px w-6 ${accent === 'indigo' ? 'bg-indigo-200' : 'bg-purple-200'} hidden sm:block`}></div>
        <div className="text-indigo-600 dark:text-indigo-400 font-black text-xs md:text-sm tracking-[0.2em] uppercase">
          {role}
        </div>
        <div className={`h-px w-6 ${accent === 'indigo' ? 'bg-indigo-200' : 'bg-purple-200'} hidden sm:block`}></div>
      </div>
      
      <div className="text-left px-2 sm:px-6 relative">
        <div className="absolute top-0 left-0 text-indigo-100 dark:text-slate-800 text-6xl -translate-x-4 -translate-y-6 select-none opacity-50">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="relative z-10 text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium leading-relaxed italic">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const Team: React.FC<TeamProps> = ({ navigateTo }) => {
  return (
    <div className="pt-28 pb-32 px-4 max-w-6xl mx-auto animate-fade-in transition-colors relative">
      {/* Decorative Background Accents */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-20 md:mb-32">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/30 px-4 py-2 rounded-full mb-6 border border-indigo-100 dark:border-indigo-900/40">
           <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
           <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Our Founder</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-indigo-950 dark:text-white mb-8 tracking-tighter leading-none">
          Meet the <span className="text-indigo-600">Mind</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium px-4">
          The architect building the future of competitive exam preparation in India.
        </p>
      </div>

      <div className="flex justify-center mb-24">
        <div className="max-w-4xl w-full px-2">
          <TeamMember 
            name="Anmol Gupta"
            role="Founder & Chief Developer"
            image="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251225_000405_575.jpg"
            accent="indigo"
          >
            <p>
              Anmol Gupta, the visionary behind Vocademy and Lakshya AI, is a builder who has walked the student journey himself. Having prepared for <span className="text-indigo-600 dark:text-indigo-400 font-bold">SSC</span> and successfully qualified the <span className="text-indigo-600 dark:text-indigo-400 font-bold">Airforce exam</span>, Anmol intimately understands the vocabulary challenges aspirants face. He created Vocademy to automate the tedious parts of preparation, allowing students to focus on mastery.
            </p>
          </TeamMember>
        </div>
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="group flex items-center space-x-3 mx-auto px-8 py-4 bg-gray-50 dark:bg-slate-900 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800"
        >
          <i className="fas fa-arrow-left text-sm text-indigo-600 transition-transform group-hover:-translate-x-1"></i>
          <span className="text-indigo-950 dark:text-white font-black text-lg">Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
};
