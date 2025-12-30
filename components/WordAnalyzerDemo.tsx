import React, { useState, useRef } from 'react';
import { analyzeWord, generatePronunciation, decodeBase64, decodeAudioData } from '../services/gemini';
import { WordAnalysis } from '../types';

export const WordAnalyzerDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState<WordAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await analyzeWord(input);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const playPronunciation = async (word: string) => {
    if (audioLoading) return;
    setAudioLoading(true);
    try {
      const base64Audio = await generatePronunciation(word);
      if (!base64Audio) throw new Error("No audio data received");

      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      
      const ctx = audioContextRef.current;
      const audioData = decodeBase64(base64Audio);
      const audioBuffer = await decodeAudioData(audioData, ctx, 24000, 1);
      
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.start();
    } catch (error) {
      console.error("Audio playback error:", error);
    } finally {
      setAudioLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 md:p-12 border border-indigo-100 dark:border-slate-800 max-w-5xl mx-auto my-2 md:my-8 transition-all duration-700">
      <div className="text-center mb-6 md:mb-10">
        <h3 className="text-xl xs:text-2xl md:text-3xl font-black text-indigo-950 dark:text-white mb-2 md:mb-3 tracking-tight">AI Editorial Analyzer</h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-base md:text-lg font-medium">Try any complex word from today's editorial.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-12">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
          placeholder="Enter word (e.g., Hubris...)"
          className="flex-1 px-4 sm:px-8 py-3.5 sm:py-5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-600 dark:focus:border-indigo-500 outline-none text-base sm:text-xl font-bold transition-all text-indigo-950 dark:text-white shadow-inner"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white px-6 md:px-10 py-3.5 sm:py-5 rounded-xl md:rounded-2xl font-black text-base sm:text-xl transition-all shadow-xl disabled:bg-gray-300 dark:disabled:bg-slate-700 flex items-center justify-center min-w-[120px] md:min-w-[180px] active:scale-95"
        >
          {loading ? <i className="fas fa-spinner animate-spin"></i> : 'Analyze Now'}
        </button>
      </div>

      {analysis && (
        <div className="animate-fade-in space-y-4 sm:space-y-8 bg-gray-50/50 dark:bg-slate-950/40 p-4 sm:p-8 rounded-[1.5rem] sm:rounded-3xl border border-gray-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 dark:border-slate-800 pb-4 md:pb-6">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div>
                <h4 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-indigo-900 dark:text-indigo-400 tracking-tight leading-tight">{analysis.word}</h4>
                <p className="text-gray-400 dark:text-gray-500 font-bold italic mt-0.5 text-xs sm:text-base md:text-lg">{analysis.pronunciation}</p>
              </div>
              <button 
                onClick={() => playPronunciation(analysis.word)}
                disabled={audioLoading}
                className="w-9 h-9 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-md group active:scale-90 disabled:opacity-50"
              >
                {audioLoading ? <i className="fas fa-circle-notch animate-spin text-xs"></i> : <i className="fas fa-volume-up text-sm sm:text-xl group-hover:scale-110"></i>}
              </button>
            </div>
            <div className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-[9px] sm:text-sm font-black uppercase tracking-widest shadow-sm border ${
              analysis.examRelevance === 'High' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900/30'
            }`}>
              {analysis.examRelevance} Relevance
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white dark:bg-slate-900 p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 group h-full">
              <span className="text-[9px] sm:text-xs font-black uppercase text-indigo-400 dark:text-indigo-500 tracking-widest">Meaning (EN)</span>
              <p className="text-indigo-950 dark:text-white mt-2 sm:mt-4 text-sm sm:text-base md:text-xl font-medium leading-relaxed">{analysis.meaningEnglish}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 group h-full">
              <span className="text-[9px] sm:text-xs font-black uppercase text-emerald-500 dark:text-emerald-400 tracking-widest">अर्थ (हिन्दी)</span>
              <p className="text-indigo-950 dark:text-white mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold font-hindi">{analysis.meaningHindi}</p>
            </div>
          </div>

          <div className="bg-indigo-900 dark:bg-indigo-950 text-white p-5 sm:p-10 rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 text-4xl sm:text-9xl transform rotate-12 pointer-events-none">
              <i className="fas fa-quote-right"></i>
            </div>
            <span className="text-[9px] sm:text-xs font-black uppercase text-indigo-300 dark:text-indigo-400 tracking-widest mb-2 sm:mb-4 block">Editorial Context</span>
            <p className="text-white text-sm sm:text-xl md:text-2xl font-medium italic leading-relaxed relative z-10">"{analysis.contextUsage}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-2 sm:pt-4">
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-500">
                <i className="fas fa-plus-circle text-[10px] sm:text-sm"></i>
                <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest">Synonyms</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {analysis.synonyms.map(s => <span key={s} className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-3 sm:px-5 py-1 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-base font-bold shadow-sm border border-emerald-100 dark:border-emerald-900">{s}</span>)}
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-500">
                <i className="fas fa-minus-circle text-[10px] sm:text-sm"></i>
                <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest">Antonyms</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {analysis.antonyms.map(a => <span key={a} className="bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 px-3 sm:px-5 py-1 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-base font-bold shadow-sm border border-red-100 dark:border-red-900">{a}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};