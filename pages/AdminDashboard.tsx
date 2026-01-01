import React, { useState } from 'react';
import { Article, getArticles, saveArticles } from '../data/articles';

interface AdminDashboardProps {
  navigateTo: (view: any) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');
  const [articles, setArticles] = useState<Article[]>(getArticles());
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UPSC Strategy');
  const [image, setImage] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [contentBlocks, setContentBlocks] = useState<string[]>(['']);

  const handleAddBlock = () => setContentBlocks([...contentBlocks, '']);
  const handleUpdateBlock = (idx: number, val: string) => {
    const next = [...contentBlocks];
    next[idx] = val;
    setContentBlocks(next);
  };
  const handleRemoveBlock = (idx: number) => {
    if (contentBlocks.length === 1) return;
    setContentBlocks(contentBlocks.filter((_, i) => i !== idx));
  };

  const handlePublish = () => {
    if (!title || !image || contentBlocks.some(b => !b.trim())) {
      alert("Please fill all fields.");
      return;
    }

    const newArticle: Article = {
      slug: title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title,
      category,
      image,
      readTime,
      updatedAt: new Date().toLocaleString('default', { month: 'short', year: 'numeric' }),
      content: contentBlocks
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    saveArticles(updated);
    
    // Reset
    setTitle('');
    setContentBlocks(['']);
    setActiveTab('list');
    alert("Article Published Locally!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-12 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-indigo-950 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-500 font-medium">Manage Vocademy Content</p>
          </div>
          <button 
            onClick={() => navigateTo('home')}
            className="px-6 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl font-bold text-sm shadow-sm"
          >
            Logout
          </button>
        </div>

        <div className="flex space-x-2 mb-8 bg-gray-200/50 dark:bg-slate-900 p-1.5 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('list')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'list' ? 'bg-white dark:bg-slate-800 shadow-md text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
          >
            All Articles
          </button>
          <button 
            onClick={() => setActiveTab('create')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'create' ? 'bg-white dark:bg-slate-800 shadow-md text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
          >
            New Article
          </button>
        </div>

        {activeTab === 'list' ? (
          <div className="grid gap-4">
            {articles.map((art, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 flex items-center justify-between group">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden">
                    <img src={art.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-indigo-950 dark:text-white">{art.title}</h3>
                    <p className="text-sm text-gray-500 font-bold">{art.category} • {art.readTime}</p>
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 text-gray-400 hover:text-rose-500 transition-colors"><i className="fas fa-trash"></i></button>
                  <button className="p-3 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fas fa-edit"></i></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-slate-800 shadow-2xl animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Article Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a compelling title..."
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold appearance-none"
                  >
                    <option>UPSC Strategy</option>
                    <option>SSC English</option>
                    <option>Study Hacks</option>
                    <option>Editorial Analysis</option>
                  </select>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Cover Image URL</label>
                  <input 
                    type="text" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Estimated Read Time</label>
                  <input 
                    type="text" 
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="5 min read"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Article Body (Paragraphs)</label>
              {contentBlocks.map((block, i) => (
                <div key={i} className="relative group">
                  <textarea 
                    value={block}
                    onChange={(e) => handleUpdateBlock(i, e.target.value)}
                    placeholder="Start writing paragraph..."
                    rows={4}
                    className="w-full px-8 py-6 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-3xl outline-none font-medium text-lg leading-relaxed transition-all"
                  />
                  <button 
                    onClick={() => handleRemoveBlock(i)}
                    className="absolute top-4 right-4 w-8 h-8 bg-rose-100 text-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-rose-500 hover:text-white"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
              
              <button 
                onClick={handleAddBlock}
                className="w-full py-6 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-3xl text-gray-400 font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                + Add New Paragraph
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 flex justify-end">
              <button 
                onClick={handlePublish}
                className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all"
              >
                Publish Locally
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};