import React, { useState, useMemo } from 'react';
import { getArticles } from '../data/articles';
import { IconSearch } from '../components/AnimatedIcons';

interface ArticlesProps {
  navigateToArticle: (slug: string) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ navigateToArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const articles = getArticles();

  const filteredArticles = useMemo(() => {
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, articles]);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto animate-fade-in min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-white mb-4 tracking-tight">Vocademy <span className="text-indigo-600">Journal</span></h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium">Insights, strategies, and high-yield vocabulary deep dives for serious aspirants.</p>
        </div>
        
        <div className="w-full md:max-w-sm relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            <div className="w-5 h-5"><IconSearch /></div>
          </div>
          <input 
            type="text" 
            placeholder="Search the journal..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-900 border-2 border-transparent focus:border-indigo-600 rounded-2xl font-bold outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredArticles.map((article) => (
            <div 
              key={article.slug}
              onClick={() => navigateToArticle(article.slug)}
              className="group cursor-pointer bg-white dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-100 dark:border-indigo-900/30">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-3 text-xs font-bold text-gray-400">
                  <span>{article.readTime}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{article.updatedAt}</span>
                </div>
                <h3 className="text-2xl font-black text-indigo-950 dark:text-white leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2 text-sm leading-relaxed font-medium">
                  {article.content[0]}
                </p>
                <div className="pt-4 flex items-center space-x-2 text-indigo-600 font-black text-sm uppercase tracking-widest">
                  <span>Read Full Article</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-gray-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
            <i className="fas fa-newspaper text-3xl"></i>
          </div>
          <h3 className="text-2xl font-black text-indigo-950 dark:text-white">No articles found</h3>
          <p className="text-gray-500 mt-2">Try a different search query.</p>
        </div>
      )}
    </div>
  );
};