
import React, { useState, useEffect, useRef } from 'react';

const APP_SCREENS = [
  {
    title: "Daily Editorial Word",
    desc: "Master high-yield words like 'Diligent' with deep context, Hindi meanings, and exam-focused usage examples.",
    img: "./assets/screenshots/daily-word.webp",
    accent: "bg-indigo-600",
    color: "indigo",
    icon: "fa-calendar-day"
  },
  {
    title: "Tests & Challenges",
    desc: "A full suite of assessments: Daily Drills, Weekly Wrap-ups, and Monthly Mastery tests to track your progress.",
    img: "./assets/screenshots/tests-challenges.webp",
    accent: "bg-emerald-600",
    color: "emerald",
    icon: "fa-list-check"
  },
  {
    title: "Syno-Anto Sprint",
    desc: "Fast-paced practice for synonyms and antonyms. Choose between 'Self Test' or 'Multiplayer Duel'.",
    img: "./assets/screenshots/syno-anto-sprint.webp",
    accent: "bg-orange-600",
    color: "orange",
    icon: "fa-bolt"
  },
  {
    title: "Mastery Achievements",
    desc: "Earn prestigious badges like 'Lexis Monarch' and 'Vocabulary Beast' as you climb to Level 100.",
    img: "./assets/screenshots/mastery-achievements.webp",
    accent: "bg-purple-600",
    color: "purple",
    icon: "fa-trophy"
  },
  {
    title: "Victory & XP Rewards",
    desc: "Battle real-time with fellow aspirants and gain XP for every outstanding performance.",
    img: "./assets/screenshots/victory-xp.webp",
    accent: "bg-blue-600",
    color: "blue",
    icon: "fa-medal"
  }
];

const ROTATION_TIME = 5000;

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
    }, ROTATION_TIME);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % APP_SCREENS.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length);
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div 
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] h-[560px] sm:h-[680px] bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] border-[8px] sm:border-[12px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group/phone transition-transform duration-700 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-slate-800 rounded-b-2xl sm:rounded-b-3xl z-40 shadow-sm border-x border-b border-white/5"></div>
          
          <div className="h-full w-full relative bg-gray-50 dark:bg-slate-950 overflow-hidden">
            {APP_SCREENS.map((screen, idx) => {
              const isActive = idx === currentIndex;
              const isPast = (currentIndex === 0 && idx === APP_SCREENS.length - 1) || (idx < currentIndex);
              
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-[1000ms] cubic-bezier-sophisticated ${
                    isActive 
                      ? 'opacity-100 translate-y-0 scale-100 z-30 pointer-events-auto' 
                      : isPast
                        ? 'opacity-0 -translate-y-8 scale-110 z-10 pointer-events-none blur-sm' 
                        : 'opacity-0 translate-y-16 scale-90 z-20 pointer-events-none blur-sm'
                  }`}
                >
                  <div className="h-full w-full relative">
                    <img 
                      src={screen.img} 
                      className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-105 sm:scale-110' : 'scale-120 sm:scale-125'}`} 
                      alt={screen.title} 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div className={`absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 transition-all duration-1000 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-white/20 shadow-2xl">
                         <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black text-white mb-2 sm:mb-3 uppercase tracking-widest ${screen.accent}`}>
                           V-Access
                         </span>
                         <h5 className="text-white text-lg sm:text-xl font-black mb-1 sm:mb-2 leading-tight">{screen.title}</h5>
                         <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-relaxed">{screen.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-50 lg:hidden">
            {APP_SCREENS.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-white' : 'w-1 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
          {APP_SCREENS.map((screen, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div 
                key={idx} 
                className={`relative transition-all duration-[500ms] cubic-bezier-sophisticated cursor-pointer p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border-2 group active:scale-[0.98] lg:active:scale-100 ${
                  isActive 
                    ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-500/30 shadow-[0_15px_40px_rgba(79,70,229,0.1)] lg:translate-x-6' 
                    : 'bg-transparent border-transparent opacity-40 hover:opacity-70 lg:hover:translate-x-3'
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {isActive && (
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-[-1px]">
                    <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-50 rounded-full"
                      style={{ 
                        animation: `progress-line ${ROTATION_TIME}ms linear forwards`
                      }}
                    />
                  </div>
                )}

                <div className="flex items-center lg:items-start space-x-5 sm:space-x-8 relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex-shrink-0 flex items-center justify-center text-white font-black text-xl sm:text-2xl transition-all duration-[700ms] cubic-bezier-sophisticated ${screen.accent} ${isActive ? 'scale-110 shadow-lg rotate-0' : 'grayscale opacity-30 rotate-6'}`}>
                    <i className={`fas ${screen.icon}`}></i>
                  </div>
                  <div className="pt-0 lg:pt-1 overflow-hidden">
                    <h4 className={`text-xl sm:text-2xl font-black transition-all duration-300 ${isActive ? 'text-indigo-950 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                      {screen.title}
                    </h4>
                    <p className={`font-medium text-sm sm:text-base mt-1 sm:mt-2 leading-relaxed line-clamp-2 lg:line-clamp-none transition-all duration-300 ${isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-300 dark:text-gray-700'}`}>
                      {screen.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cubic-bezier-sophisticated {
          transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        }

        @keyframes progress-line {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @media (hover: hover) {
          .group\\/phone:hover img {
             filter: saturate(1.1) contrast(1.05);
          }
        }

        .select-none {
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};
