
import React, { useState, useEffect } from 'react';
import { Article, getArticles, saveArticles } from '../data/articles';
import { signOut, auth } from '../services/auth';

interface AdminDashboardProps {
  navigateTo: (view: any) => void;
  isAdmin: boolean;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigateTo, isAdmin }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');
  const [articles, setArticles] = useState<Article[]>(getArticles());
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UPSC Strategy');
  const [image, setImage] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [contentBlocks, setContentBlocks] = useState<string[]>(['']);

  useEffect(() => {
    if (!isAdmin) {
      navigateTo('admin-login');
    }
  }, [isAdmin, navigateTo]);

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
    alert("Article Published Securely!");
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigateTo('home');
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-12 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <h1 className="text-3xl font-black text-indigo-950 dark:text-white">Admin Dashboard</h1>
            </div>
            <p className="text-gray-500 font-medium">Logged in as {auth.currentUser?.email}</p>
          </div>
          <div className="flex space-x-3">
             <button onClick={() => navigateTo('home')} className="px-5 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors">
              Public View
            </button>
            <button onClick={handleLogout} className="px-5 py-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 border border-rose-100 dark:border-rose-900/50 rounded-xl font-bold text-xs shadow-sm hover:bg-rose-100 transition-colors">
              Sign Out
            </button>
          </div>
        </div>

        <div className="flex space-x-2 mb-8 bg-gray-200/50 dark:bg-slate-900 p-1.5 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('list')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'list' ? 'bg-white dark:bg-slate-800 shadow-md text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
          >
            Manage Journal
          </button>
          <button 
            onClick={() => setActiveTab('create')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'create' ? 'bg-white dark:bg-slate-800 shadow-md text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
          >
            Create New Post
          </button>
        </div>

        {activeTab === 'list' ? (
          <div className="grid gap-4">
            {articles.length > 0 ? articles.map((art, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 flex items-center justify-between group">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800">
                    <img src={art.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-indigo-950 dark:text-white">{art.title}</h3>
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest mt-1">{art.category} • {art.readTime}</p>
                  </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fas fa-edit"></i></button>
                  <button className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-400 hover:text-rose-500 transition-colors"><i className="fas fa-trash"></i></button>
                </div>
              </div>
            )) : (
              <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-slate-800">
                <p className="text-gray-400 font-bold">No articles published yet.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 dark:border-slate-800 shadow-2xl animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Post Title</label>
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., The Future of UPSC English"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold appearance-none dark:text-white"
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
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Hero Image Link</label>
                  <input 
                    type="text" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold dark:text-white"
                  />
                </div>
                {image && (
                  <div className="h-32 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-slate-800 bg-gray-100">
                    <img src={image} className="w-full h-full object-cover" alt="Preview" onError={() => setImage('')} />
                  </div>
                )}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 ml-1">Reading Pace</label>
                  <input 
                    type="text" 
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="5 min read"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Article Body</label>
                <span className="text-xs font-bold text-indigo-500">{contentBlocks.length} Paragraphs</span>
              </div>
              {contentBlocks.map((block, i) => (
                <div key={i} className="relative group">
                  <textarea 
                    value={block}
                    onChange={(e) => handleUpdateBlock(i, e.target.value)}
                    placeholder="Compose paragraph..."
                    rows={4}
                    className="w-full px-8 py-6 bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 rounded-[2rem] outline-none font-medium text-lg leading-relaxed transition-all dark:text-white"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleRemoveBlock(i)}
                      className="w-8 h-8 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors"
                    >
                      <i className="fas fa-times text-xs"></i>
                    </button>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={handleAddBlock}
                className="w-full py-8 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-[2.5rem] text-gray-400 font-bold hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50/10 transition-all flex flex-col items-center justify-center space-y-2"
              >
                <i className="fas fa-plus-circle text-xl"></i>
                <span>Add Section</span>
              </button>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 dark:border-slate-800 flex justify-end items-center space-x-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Auto-saved to Local Storage</span>
              <button 
                onClick={handlePublish}
                className="bg-indigo-600 text-white px-16 py-6 rounded-3xl font-black text-xl shadow-[0_20px_50px_-10px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                Commit & Publish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
