
import React from 'react';

interface ContactProps {
  navigateTo: (view: any) => void;
}

export const Contact: React.FC<ContactProps> = ({ navigateTo }) => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          Get in <span className="text-indigo-600">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
          Have a suggestion? Found a bug? Or just want to talk about your preparation strategy? 
          The Vocademy team is just a message away.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContactCard 
          icon="fa-paper-plane" 
          title="Telegram Support" 
          detail="@VocademyApp" 
          link="https://telegram.dog/VocademyApp"
          color="bg-sky-500"
        />
        <ContactCard 
          icon="fa-envelope" 
          title="Email Us" 
          detail="support@vocademy.app" 
          link="mailto:support@vocademy.app"
          color="bg-indigo-600"
        />
        <ContactCard 
          icon="fa-hashtag" 
          title="Social Media" 
          detail="X / Instagram" 
          link="https://X.com/VocademyApp"
          color="bg-slate-900"
        />
      </div>

      <div className="mt-20 p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-full -mr-16 -mt-16"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-black text-indigo-950 dark:text-white mb-6">How we can help</h2>
          <div className="space-y-6">
            <FeaturePoint 
              title="Beta Feedback" 
              desc="As an early tester, your feedback shapes the future of Vocademy. Report bugs or suggest features directly to our dev team." 
            />
            <FeaturePoint 
              title="Institutional Partnerships" 
              desc="Educators and coaching centers can reach out for collaborative opportunities and bulk license access for their students." 
            />
            <FeaturePoint 
              title="Content Contributions" 
              desc="Are you a language expert? Join our content curation team and help aspirants master the editorial jargon." 
            />
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => navigateTo('home')}
          className="text-indigo-600 dark:text-indigo-400 font-black text-lg hover:underline underline-offset-8 flex items-center justify-center space-x-2 mx-auto transition-all"
        >
          <i className="fas fa-arrow-left text-sm"></i>
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

const ContactCard: React.FC<{icon: string, title: string, detail: string, link: string, color: string}> = ({icon, title, detail, link, color}) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noreferrer"
    className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-indigo-100 dark:hover:border-indigo-900 transition-all duration-500 text-center"
  >
    <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
      <i className={`fas ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 font-bold">{detail}</p>
  </a>
);

const FeaturePoint: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1 w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
    <div>
      <h4 className="text-xl font-black text-indigo-900 dark:text-indigo-400">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);
