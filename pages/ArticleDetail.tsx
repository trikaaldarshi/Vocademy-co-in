import React, { useEffect, useState } from 'react';
import { ARTICLES } from '../data/articles';

interface ArticleDetailProps {
  slug: string;
  navigateTo: (view: any, slug?: string) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug, navigateTo }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const article = ARTICLES.find(a => a.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="pt-40 pb-24 px-4 text-center">
        <div className="w-20 h-20 bg-rose-50 dark:bg-rose-950/30 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500">
          <i className="fas fa-exclamation-triangle text-3xl"></i>
        </div>
        <h1 className="text-4xl font-black mb-4 text-indigo-950 dark:text-white">Article not found</h1>
        <p className="text-gray-500 mb-8">The story you're looking for might have been moved or renamed.</p>
        <button 
          onClick={() => navigateTo('home')} 
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen animate-fade-in">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[70] bg-gray-100 dark:bg-slate-900">
        <div 
          className="h-full bg-amber-600 transition-all duration-100" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigateTo('home')}
            className="mb-8 flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-widest text-xs group"
          >
            <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
            <span>Back to Home</span>
          </button>
          
          <div className="space-y-6">
            <span className="px-4 py-1.5 bg-amber-50 dark:bg-amber-900/40 rounded-full text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#1a1c3d] dark:text-white leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-500 font-medium">
              <span className="flex items-center space-x-2">
                <i className="far fa-clock"></i>
                <span>{article.readTime}</span>
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Updated {article.updatedAt}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-[16/9] border border-gray-100 dark:border-slate-800 bg-gray-100">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-indigo prose-xl dark:prose-invert max-w-none space-y-8">
          {article.content.map((p, i) => (
            <p key={i} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-50 dark:bg-slate-900/50 rounded-[3rem] border border-gray-100 dark:border-slate-800 text-center">
          <h3 className="text-2xl font-black mb-4">Want to master this vocab?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto font-medium">
            Join thousands of aspirants using Vocademy's AI to track and revise editorial vocabulary scientifically.
          </p>
          <button 
            onClick={() => navigateTo('home')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Launch Vocademy App
          </button>
        </div>
      </div>
    </div>
  );
};