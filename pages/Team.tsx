
import React from 'react';

interface TeamProps {
  navigateTo: (view: any) => void;
}

export const Team: React.FC<TeamProps> = ({ navigateTo }) => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          Meet the <span className="text-indigo-600">Minds</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
          The duo behind Vocademy, dedicated to revolutionizing how Indian aspirants master editorial English.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 lg:gap-24 max-w-4xl mx-auto">
        <TeamMember 
          name="Anmol Gupta"
          role="Founder & Lead Architect"
          image="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251225_000405_575.jpg"
          bio="Full-stack engineer with a passion for ed-tech. Architect of the Vocademy AI analysis engine and core platform infrastructure."
        />
        <TeamMember 
          name="ѕнυкℓα जी 👀"
          role="Creative Director"
          image="https://raw.githubusercontent.com/trikaaldarshi/Assets/refs/heads/main/IMG_20251225_000346_829.jpg"
          bio="Visionary designer and creative strategist. Crafting the aesthetic identity and intuitive user experience that makes Vocademy unique."
        />
      </div>

      <div className="mt-32 p-12 bg-gray-50 dark:bg-slate-900 rounded-[3rem] border border-gray-100 dark:border-slate-800 text-center">
        <h2 className="text-3xl font-black text-indigo-950 dark:text-white mb-4">Want to join us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">We are always looking for passionate people to join our content curation and development teams.</p>
        <a 
          href="mailto:careers@vocademy.app"
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all inline-block shadow-lg active:scale-95"
        >
          View Open Roles
        </a>
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="text-indigo-600 dark:text-indigo-400 font-black text-lg hover:underline underline-offset-8 transition-all flex items-center justify-center space-x-2 mx-auto"
        >
          <i className="fas fa-arrow-left text-sm"></i>
          <span>Return to Home</span>
        </button>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, image, bio }: { name: string, role: string, image: string, bio: string }) => (
  <div className="group text-center">
    <div className="relative mb-8 mx-auto w-56 h-56">
      <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 to-emerald-500 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
      </div>
    </div>
    <h3 className="text-3xl font-black text-indigo-950 dark:text-white mb-2">{name}</h3>
    <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4 block">{role}</span>
    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed px-4">{bio}</p>
  </div>
);
