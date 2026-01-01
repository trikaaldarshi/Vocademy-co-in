import React, { useState, useMemo } from 'react';
import { WordAnalyzerDemo } from '../components/WordAnalyzerDemo';
import { AutoSlider } from '../components/AutoSlider';
import { ImageCarousel } from '../components/ImageCarousel';
import { ARTICLES } from '../data/articles';
import { 
  IconNews, 
  IconBrain, 
  IconSwords, 
  IconBook,
  IconCoach,
  IconGame,
  IconPlant,
  IconBell,
  IconCommunity,
  IconSearch
} from '../components/AnimatedIcons';

interface HomeProps {
  handleApply: () => void;
  navigateToArticle: (slug: string) => void;
}

export const Home: React.FC<HomeProps> = ({ handleApply, navigateToArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-6 sm:mb-10">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/40 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-indigo-100 dark:border-indigo-900/50 shadow-sm transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/40">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse"></span>
              <span className="text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] sm:tracking-[0.15em]">Your No. 1 Vocabulary Partner</span>
            </div>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1c3d] dark:text-white leading-[1.2] sm:leading-[1.15] mb-6 sm:mb-8 tracking-[-0.03em] px-2">
            Crack Competitive Exams with <br className="hidden sm:block" />
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-indigo-600 dark:text-indigo-400">Smart Editorial Vocabulary</span>
              <div className="absolute inset-x-0 bottom-1 sm:bottom-2 h-3 sm:h-7 bg-indigo-100 dark:bg-indigo-900/40 -z-0 rounded-sm"></div>
            </span>
            <br className="hidden sm:block" /> Revision
          </h1>
          
          <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed font-medium px-4">
            Personalized learning for UPSC, SSC, and Banking aspirants. Master context-based words scanned directly from <span className="font-bold text-gray-700 dark:text-gray-200 italic">The Hindu</span> daily editorials.
          </p>

          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 max-w-[320px] sm:max-w-[340px] mx-auto px-4">
            <button 
              onClick={scrollToFeatures}
              className="w-full py-4 sm:py-5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-2xl font-black text-lg sm:text-xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] transition-all active:scale-[0.98]"
            >
              Learn More
            </button>
            
            <button 
              onClick={scrollToDemo}
              className="w-full py-4 sm:py-5 bg-white dark:bg-slate-900 border-2 border-indigo-50 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 rounded-2xl font-black text-lg sm:text-xl shadow-sm hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all active:scale-[0.98]"
            >
              Try AI Analyzer
            </button>
          </div>
        </div>
      </section>

      <AutoSlider />

      <section id="features" className="py-16 sm:py-32 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-24 px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1a1c3d] dark:text-white mb-4 sm:mb-6 tracking-tight">Built for Serious Aspirants</h2>
            <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">Master high-yield vocabulary that distinguishes top rankers in UPSC, SSC, and Banking exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard 
              icon={<IconNews />} 
              title="Editorial Context" 
              desc="Words scanned directly from daily editorials. Learn how complex vocabulary is used in professional journalism."
              iconBg="bg-indigo-50 dark:bg-indigo-900/30"
            />
            <FeatureCard 
              icon={<IconBrain />} 
              title="SRS Flashcards" 
              desc="Our Spaced Repetition System logic ensures you never forget a word once it's in your long-term memory." 
              iconBg="bg-emerald-50 dark:bg-emerald-900/30"
            />
            <FeatureCard 
              icon={<IconSwords />} 
              title="Multiplayer Duels" 
              desc="Challenge fellow aspirants in real-time battles to test your vocabulary speed and precision under pressure." 
              iconBg="bg-orange-50 dark:bg-orange-900/30"
            />
          </div>
        </div>
      </section>

      <section id="demo" className="py-12 sm:py-24 px-4 bg-gray-50/50 dark:bg-slate-900/40 transition-colors scroll-mt-20">
        <WordAnalyzerDemo />
      </section>

      <section className="py-12 sm:py-24 px-4 bg-white dark:bg-slate-950 transition-colors">
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1a1c3d] dark:text-white">Application Preview</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-4 text-sm md:text-base">Experience a clean, distraction-free environment optimized for deep learning.</p>
        </div>
        <ImageCarousel />
      </section>

      {/* ARTICLES SECTION - Positioned before Testimonials */}
      <section id="articles" className="py-16 sm:py-32 px-4 bg-white dark:bg-slate-950 transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-20 px-4 gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6 border border-emerald-100 dark:border-emerald-800 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Educational Resources</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1a1c3d] dark:text-white mb-4 tracking-tight">Master English with <span className="text-emerald-600">Smart Reads</span></h2>
              <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 font-medium">Deep dives into exam strategies, vocabulary analysis, and study science.</p>
            </div>
            
            <div className="w-full lg:max-w-md relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 dark:text-slate-500">
                <div className="w-5 h-5">
                  <IconSearch />
                </div>
              </div>
              <input 
                type="text" 
                placeholder="Search articles or categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-slate-900 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500/50 rounded-2xl text-base font-bold outline-none transition-all dark:text-white dark:placeholder-slate-600 shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <i className="fas fa-times-circle"></i>
                </button>
              )}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-4">
              {filteredArticles.map((article) => (
                <div 
                  key={article.slug}
                  onClick={() => navigateToArticle(article.slug)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-gray-100 dark:border-slate-800 transition-transform group-hover:scale-[1.03] bg-gray-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 px-2 text-left">
                    <div className="flex items-center space-x-3 text-xs font-bold text-gray-400 dark:text-gray-500">
                      <span>{article.readTime}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>Updated {article.updatedAt}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a1c3d] dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="pt-2">
                      <span className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-black text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        <span>Read Story</span>
                        <i className="fas fa-arrow-right text-[10px]"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 px-4 text-center bg-gray-50/50 dark:bg-slate-900/20 rounded-[3rem] mx-4 border-2 border-dashed border-gray-200 dark:border-slate-800">
              <div className="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                <i className="fas fa-search-minus text-3xl"></i>
              </div>
              <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">We couldn't find any articles matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black hover:bg-indigo-700 transition-all active:scale-95"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Positioned after Articles */}
      <section className="py-16 sm:py-32 px-4 bg-gray-50/30 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 px-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1a1c3d] dark:text-white mb-4">Loved by Future Leaders</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium">Join thousands of aspirants who have upgraded their preparation strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <TestimonialCard 
              name="Rahul Sharma"
              role="UPSC Aspirant"
              quote="Vocademy has completely changed how I read editorials. The contextual meanings and Indian Express integration are absolute lifesavers for Mains preparation."
            />
            <TestimonialCard 
              name="Priya Patel"
              role="SSC CGL Candidate"
              quote="The Spaced Repetition logic is brilliant. I used to forget words in 3 days, but now they are locked in my long-term memory. Highly recommended for English Tier-II."
            />
            <TestimonialCard 
              name="Anjali Verma"
              role="Banking Aspirant"
              quote="I love the multiplayer duels! It makes vocab learning addictive and competitive. It's the first thing I open every morning with my tea."
            />
          </div>
        </div>
      </section>

      {/* LAKSHYA AI SECTION - Roadmap positioning */}
      <section className="py-16 sm:py-32 px-4 bg-slate-50 dark:bg-[#020617] transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-24 px-4">
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full mb-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Future Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tight text-[#1a1c3d] dark:text-white px-2">
              Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Lakshya AI</span>
            </h2>
            <p className="text-base sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed px-2">
              Your future AI-powered study coach. A holistic ecosystem designed to transform your journey from an aspirant to a ranker.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4">
            <LakshyaCard 
              icon={<IconBook />} 
              title="Wisdom from Gita" 
              desc="Receive daily practical wisdom from the Bhagavad Gita to inspire focus and discipline in your preparation."
              accentColor="indigo"
            />
            <LakshyaCard 
              icon={<IconCoach />} 
              title="AI Task Coach" 
              desc="Intelligent, dynamic study planning that adapts to your learning pace and upcoming exam deadlines." 
              accentColor="purple"
            />
            <LakshyaCard 
              icon={<IconGame />} 
              title="Gamified Focus" 
              desc="Maintain high productivity with XP rewards, levels, and streaks for your daily deep-work sessions." 
              accentColor="orange"
            />
            <LakshyaCard 
              icon={<IconPlant />} 
              title="Knowledge Garden" 
              desc="Nurture your virtual knowledge garden that grows as you master new subjects and hit milestones." 
              accentColor="emerald"
            />
            <LakshyaCard 
              icon={<IconBell />} 
              title="Smart Reminders" 
              desc="Context-aware notifications that respect your deep-work hours while keeping you on track." 
              accentColor="blue"
            />
            <LakshyaCard 
              icon={<IconCommunity />} 
              title="Aspirant Circles" 
              desc="Join exclusive circles to collaborate on high-stakes challenges with like-minded, serious peers." 
              accentColor="rose"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32 px-4 bg-indigo-600 dark:bg-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl -mr-24 sm:-mr-32 -mt-24 sm:-mt-32"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">Ready to transform your preparation?</h2>
          <p className="text-sm sm:text-xl text-indigo-100 mb-8 sm:mb-12 max-w-2xl font-medium">Download the app today and join the elite circle of successful aspirants.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl">
            <a 
              href="https://play.google.com/store/apps/details?id=com.lakshya.vocademy"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-64 group flex items-center bg-white text-slate-900 px-6 sm:px-8 py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl transition-all"
            >
              <i className="fab fa-google-play text-2xl sm:text-3xl mr-3 sm:mr-4 text-indigo-600 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-active:scale-90"></i>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] uppercase font-bold opacity-60 tracking-widest">Get it on</div>
                <div className="text-lg sm:text-xl font-black leading-tight">Google Play</div>
              </div>
            </a>

            <button 
              onClick={handleApply}
              className="w-full sm:w-64 group flex items-center bg-white text-slate-900 px-6 sm:px-8 py-4 sm:py-5 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl transition-all"
            >
              <i className="fab fa-apple text-2xl sm:text-3xl mr-3 sm:mr-4 text-slate-900 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12 group-active:scale-90"></i>
              <div className="text-left">
                <div className="text-[9px] sm:text-[10px] uppercase font-bold opacity-60 tracking-widest">Download on the</div>
                <div className="text-lg sm:text-xl font-black leading-tight">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, iconBg: string}> = ({icon, title, desc, iconBg}) => (
  <div className="bg-gray-50/50 dark:bg-slate-900/40 p-2 sm:p-3 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-slate-800 transition-all group">
    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[1.3rem] sm:rounded-[1.8rem] shadow-sm hover:shadow-xl transition-all flex flex-col items-start text-left border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/40 h-full">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
        <div className="w-6 h-6 sm:w-8 sm:h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-black text-[#1a1c3d] dark:text-white mb-3 sm:mb-4 tracking-tight">{title}</h3>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TestimonialCard: React.FC<{ name: string; role: string; quote: string }> = ({ name, role, quote }) => (
  <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-indigo-50 dark:border-slate-800 shadow-xl shadow-indigo-600/[0.03] transition-all hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full relative group">
    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <i className="fas fa-quote-right text-4xl sm:text-5xl text-indigo-600 dark:text-indigo-500"></i>
    </div>
    <div className="flex items-center space-x-4 mb-8">
      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xl border border-indigo-200 dark:border-indigo-800 shadow-sm">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-black text-[#1a1c3d] dark:text-white tracking-tight">{name}</h4>
        <p className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium leading-relaxed italic mb-auto">"{quote}"</p>
    <div className="mt-8 flex space-x-1 text-yellow-400 dark:text-yellow-500 text-xs">
      {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star"></i>)}
    </div>
  </div>
);

const LakshyaCard: React.FC<{icon: React.ReactNode; title: string; desc: string; accentColor: string;}> = ({ icon, title, desc, accentColor }) => {
  const colors: Record<string, string> = {
    indigo: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/50',
    purple: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/50',
    orange: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900/50',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50',
    blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/50',
    rose: 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/50',
  };

  return (
    <div className="bg-white dark:bg-slate-900/60 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/50 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/10 active:scale-[0.98]">
      <div className={`w-12 h-12 sm:w-16 sm:h-16 ${colors[accentColor]} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-transparent`}>
        <div className="w-6 h-6 sm:w-8 sm:h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-2xl font-black text-[#1a1c3d] dark:text-white mb-3 sm:mb-4 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{title}</h3>
      <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
  );
};