import React from 'react';
import { 
  IconRocket, 
  IconBrain, 
  IconSwords, 
  IconChart, 
  IconNews, 
  IconSearch 
} from './AnimatedIcons';

const SLIDE_ITEMS = [
  { icon: <IconNews />, text: '500+ Editorial Words Analyzed Daily' },
  { icon: <IconBrain />, text: 'Scientific Spaced Repetition System' },
  { icon: <IconSwords />, text: 'Live Multiplayer Vocabulary Battles' },
  { icon: <IconChart />, text: 'UPSC/SSC Level Performance Tracking' },
  { icon: <IconSearch />, text: 'The Hindu & Indian Express Integration' },
  { icon: <IconRocket />, text: '100% Focused on Serious Aspirants' },
];

export const AutoSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-10 border-y border-gray-100 dark:border-slate-900 transition-colors">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...SLIDE_ITEMS, ...SLIDE_ITEMS].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-4 mx-8 bg-gray-50/50 dark:bg-slate-900/30 px-8 py-4 rounded-full border border-gray-100 dark:border-slate-800 group cursor-default"
          >
            <div className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
              {item.icon}
            </div>
            <span className="text-[#3d4459] dark:text-gray-200 font-bold text-lg tracking-tight">{item.text}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};