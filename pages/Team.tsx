import React from 'react';

interface TeamProps {
  navigateTo: (view: any) => void;
}

const TeamMember = ({ name, role, image, accent, children }: { name: string, role: string, image: string, accent: string, children?: React.ReactNode }) => (
  <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 dark:border-slate-800 shadow-2xl transition-all group">
    <div className="text-center">
      <div className="relative mb-10 mx-auto w-48 h-48 sm:w-56 sm:h-56">
        <div className={`absolute -inset-4 bg-gradient-to-tr ${accent === 'indigo' ? 'from-indigo-500 to-blue-400' : 'from-purple-500 to-pink-400'} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
        <div className={`absolute -inset-1 bg-gradient-to-tr ${accent === 'indigo' ? 'from-indigo-600 to-blue-500' : 'from-purple-600 to-pink-500'} rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        <div className="relative w-full h-full bg-white dark:bg-slate-950 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl transition-transform group-hover:scale-[1.05] duration-500">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <h3 className="text-3xl md:text-5xl font-black text-indigo-950 dark:text-white mb-3 tracking-tight transition-colors group-hover:text-indigo-600">
        {name}
      </h3>
      <div className="text-indigo-600 dark:text-indigo-400 font-black text-sm md:text-base mb-10 tracking-wide uppercase">
        {role}
      </div>
      
      <div className="text-left px-2 sm:px-4">
        {children}
      </div>
    </div>
  </div>
);

export const Team: React.FC<TeamProps> = ({ navigateTo }) => {
  return (
    <div className="pt-28 pb-24 px-4 max-w-6xl mx-auto animate-fade-in transition-colors">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          Meet the <span className="text-indigo-600">Builder</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium px-4">
          The visionary architect behind Vocademy, dedicated to empowering the next generation of civil servants and defense personnel.
        </p>
      </div>

      <div className="flex justify-center mb-24">
        <div className="max-w-3xl w-full">
          <TeamMember 
            name="Anmol Gupta"
            role="Developer of Vocademy & Creator of Lakshya AI (in development)"
            image="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251225_000405_575.jpg"
            accent="indigo"
          >
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium leading-relaxed">
              <p>
                Anmol Gupta, the visionary behind Vocademy and Lakshya AI, is more than just a developer; he's a builder who has walked the student journey himself. Having prepared for <span className="text-indigo-600 dark:text-indigo-400 font-bold">SSC</span> exams and successfully qualified the <span className="text-indigo-600 dark:text-indigo-400 font-bold">Airforce exam</span>, Anmol intimately understands the vocabulary and revision challenges that thousands of aspirants face daily.
              </p>
            </div>
          </TeamMember>
        </div>
      </div>

      <div className="mt-20 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="text-indigo-600 dark:text-indigo-400 font-bold text-lg hover:underline underline-offset-8 transition-all flex items-center justify-center space-x-2 mx-auto"
        >
          <i className="fas fa-arrow-left text-sm"></i>
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
};