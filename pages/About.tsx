import React from 'react';

interface AboutProps {
  navigateTo: (view: any) => void;
}

export const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-7xl font-black text-indigo-950 dark:text-white mb-4 md:mb-6 tracking-tight leading-tight">
          Our <span className="text-indigo-600">Story</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium px-2">
          Vocademy was born out of a simple observation: serious aspirants spend 40% of their English preparation time just looking up words in dictionaries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-32">
        <div className="relative group">
          <div className="absolute -inset-2 md:-inset-4 bg-indigo-600/10 rounded-2xl md:rounded-[3rem] blur-xl md:blur-2xl group-hover:bg-indigo-600/20 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
            alt="Students studying" 
            className="relative rounded-2xl md:rounded-[2.5rem] shadow-2xl transition-transform group-hover:scale-[1.02]"
          />
        </div>
        <div className="space-y-4 md:space-y-8 px-2 md:px-0">
          <h2 className="text-2xl md:text-4xl font-black text-indigo-950 dark:text-white leading-tight">Solving the "Context Crisis"</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Standard dictionaries give you meanings, but exams test <span className="text-indigo-600 font-bold italic">usage</span>. When you read a word in a Hindu editorial, you need to know how it applies to geopolitical shifts or socio-economic changes.
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            We built Vocademy to bridge the gap between static learning and dynamic exam requirements using state-of-the-art AI.
          </p>
        </div>
      </div>

      <div className="bg-indigo-900 dark:bg-indigo-950 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden mb-16 md:mb-32">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
        <div className="relative z-10 grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-4">Our Mission</h3>
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed">To save 100 million study hours for Indian aspirants by automating vocabulary acquisition.</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-4">Our Vision</h3>
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed">Becoming the digital brain for every student tackling high-stakes competitive exams.</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-4">Our Values</h3>
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed">Context over Content. Speed over Scope. Result over Rote.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-black text-indigo-950 dark:text-white mb-8 md:mb-12">Why Early Access?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          <Card 
            title="Real-world Testing" 
            desc="We need serious aspirants to test if our AI analysis matches their actual exam needs."
          />
          <Card 
            title="Community Feedback" 
            desc="Every feature on Vocademy is a direct result of user requests from our initial community."
          />
          <Card 
            title="Quality Control" 
            desc="Help us refine our Spaced Repetition logic for maximum memory retention."
          />
        </div>
        <button 
          onClick={() => navigateTo('home')}
          className="text-indigo-600 dark:text-indigo-400 font-black text-base md:text-lg hover:underline underline-offset-8 transition-all"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, desc }: { title: string, desc: string }) => (
  <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-800 shadow-xl text-left">
    <h4 className="text-lg md:text-xl font-black text-indigo-900 dark:text-indigo-400 mb-2 md:mb-3">{title}</h4>
    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-medium">{desc}</p>
  </div>
);