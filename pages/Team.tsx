import React from 'react';

interface TeamProps {
  navigateTo: (view: any) => void;
}

const TeamMember = ({ name, role, image, accent, children }: { name: string, role: string, image: string, accent: string, children?: React.ReactNode }) => (
  <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[3.5rem] md:rounded-[5rem] border border-gray-100 dark:border-slate-800 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.12)] transition-all group animate-float">
    <div className="text-center">
      <div className="relative mb-14 mx-auto w-52 h-52 sm:w-64 sm:h-64">
        
        {/* Layer 1: High-Frequency Breathing Pulse */}
        <div className={`absolute -inset-10 bg-gradient-to-tr ${accent === 'indigo' ? 'from-indigo-600/20 to-blue-400/20' : 'from-purple-600/20 to-pink-400/20'} blur-[60px] animate-pulse-aura opacity-30 group-hover:opacity-60 transition-opacity duration-1000`}></div>
        
        {/* Layer 2: Secondary Offset Aura */}
        <div className={`absolute -inset-4 bg-gradient-to-bl ${accent === 'indigo' ? 'from-blue-600/10 to-indigo-400/10' : 'from-pink-600/10 to-purple-400/10'} blur-[40px] animate-pulse-aura opacity-20 group-hover:opacity-40 transition-opacity duration-1000`} style={{ animationDelay: '2s' }}></div>

        {/* Layer 3: Neon Orbital Ring */}
        <div className={`absolute -inset-3 bg-gradient-to-r ${accent === 'indigo' ? 'from-indigo-600 via-blue-500 to-indigo-600' : 'from-purple-600 via-pink-500 to-purple-600'} rounded-full animate-spin-slow p-[2px] opacity-40 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-all duration-700`}>
          <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full"></div>
        </div>
        
        {/* Layer 4: Main Photo Container */}
        <div className="relative w-full h-full p-3 bg-white dark:bg-slate-950 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-[1.05] group-hover:-translate-y-2">
          <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-slate-900 relative">
             <img src={image} alt={name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-115 group-hover:brightness-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Floating Interactive Elements */}
        <div className={`absolute -top-6 -right-6 w-14 h-14 ${accent === 'indigo' ? 'bg-indigo-600' : 'bg-purple-600'} text-white rounded-[1.25rem] flex items-center justify-center shadow-2xl animate-bounce-soft opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500`}>
          <i className="fas fa-microchip text-xl"></i>
        </div>
        
        <div className={`absolute -bottom-4 -left-4 w-10 h-10 ${accent === 'indigo' ? 'bg-blue-500' : 'bg-pink-500'} text-white rounded-xl flex items-center justify-center shadow-xl animate-float opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-700 delay-150`}>
          <i className="fas fa-brain text-sm"></i>
        </div>
      </div>
      
      <div className="relative inline-block mb-4">
        <h3 className="text-3xl md:text-5xl font-black text-indigo-950 dark:text-white tracking-tight leading-tight transition-all duration-300 group-hover:text-indigo-600 group-hover:scale-105">
          {name}
        </h3>
        <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-indigo-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></div>
      </div>

      <div className="flex items-center justify-center space-x-3 mb-10">
        <div className={`h-px w-8 ${accent === 'indigo' ? 'bg-indigo-200' : 'bg-purple-200'} hidden sm:block`}></div>
        <div className="text-indigo-600 dark:text-indigo-400 font-black text-xs md:text-sm tracking-[0.25em] uppercase">
          {role}
        </div>
        <div className={`h-px w-8 ${accent === 'indigo' ? 'bg-indigo-200' : 'bg-purple-200'} hidden sm:block`}></div>
      </div>
      
      <div className="text-left px-2 sm:px-8 relative bg-gray-50/50 dark:bg-slate-800/30 p-6 md:p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800">
        <div className="absolute top-0 left-0 text-indigo-100 dark:text-slate-700 text-7xl -translate-x-4 -translate-y-6 select-none opacity-40">
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
      {/* Dynamic Background Effects */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-aura"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-aura" style={{ animationDelay: '2s' }}></div>

      <div className="text-center mb-20 md:mb-32">
        <div className="inline-flex items-center space-x-3 bg-indigo-50 dark:bg-indigo-950/30 px-5 py-2.5 rounded-full mb-8 border border-indigo-100 dark:border-indigo-900/40 shadow-sm">
           <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
           <span className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">The Visionary Founder</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-indigo-950 dark:text-white mb-8 tracking-tighter leading-none">
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Mind</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium px-4">
          Architect of India's first AI-integrated competitive vocabulary ecosystem.
        </p>
      </div>

      <div className="flex justify-center mb-24">
        <div className="max-w-4xl w-full px-2">
          <TeamMember 
            name="Anmol Gupta"
            role="Founder & Chief Product Architect"
            image="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251225_000405_575.jpg"
            accent="indigo"
          >
            <p>
              Anmol Gupta, the visionary behind Vocademy and Lakshya AI, is a builder who has walked the student journey himself. Having prepared for <span className="text-indigo-600 dark:text-indigo-400 font-bold">SSC</span> and successfully qualified the <span className="text-indigo-600 dark:text-indigo-400 font-bold">Airforce exam</span>, Anmol intimately understands the cognitive load and vocabulary hurdles aspirants face daily. He engineered Vocademy to eliminate rote learning, replacing it with a scientific, context-driven mastery model.
            </p>
          </TeamMember>
        </div>
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="group flex items-center space-x-4 mx-auto px-10 py-5 bg-white dark:bg-slate-900 rounded-[2rem] hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all border border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-2xl active:scale-95"
        >
          <i className="fas fa-arrow-left text-sm text-indigo-600 transition-transform group-hover:-translate-x-2"></i>
          <span className="text-indigo-950 dark:text-white font-black text-xl">Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
};