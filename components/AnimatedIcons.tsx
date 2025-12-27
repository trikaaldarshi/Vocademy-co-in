
import React from 'react';

export const IconRocket = () => (
  <svg className="w-full h-full text-indigo-600 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.5-1 1-4c2 1 3 2 4 4Z" />
    <path d="M12 15v5s1 .5 4 1c-1-2-2-3-4-4Z" />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);

export const IconNews = () => (
  <div className="relative w-full h-full group">
    <svg className="w-full h-full text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
    <div className="absolute inset-0 bg-indigo-500/10 animate-scan-fast rounded"></div>
  </div>
);

export const IconBrain = () => (
  <svg className="w-full h-full text-emerald-600 animate-pulse-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
  </svg>
);

export const IconSwords = () => (
  <svg className="w-full h-full text-orange-600 animate-clash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
    <line x1="5" y1="14" x2="9" y2="18" />
    <line x1="7" y1="17" x2="4" y2="20" />
    <line x1="3" y1="19" x2="5" y2="21" />
  </svg>
);

export const IconChart = () => (
  <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" className="animate-grow-bar-1" />
    <line x1="18" y1="20" x2="18" y2="4" className="animate-grow-bar-2" />
    <line x1="6" y1="20" x2="6" y2="16" className="animate-grow-bar-3" />
  </svg>
);

export const IconGift = () => (
  <svg className="w-full h-full text-purple-600 animate-bounce-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="14" x="3" y="8" rx="2" />
    <path d="M12 5a3 3 0 1 0-3 3" />
    <path d="M12 5a3 3 0 1 1 3 3" />
    <path d="M3 12h18" />
    <path d="M12 22V8" />
  </svg>
);

export const IconMessage = () => (
  <svg className="w-full h-full text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <circle cx="8" cy="12" r=".5" fill="currentColor" className="animate-ping-dot-1" />
    <circle cx="12" cy="12" r=".5" fill="currentColor" className="animate-ping-dot-2" />
    <circle cx="16" cy="12" r=".5" fill="currentColor" className="animate-ping-dot-3" />
  </svg>
);

export const IconSearch = () => (
  <svg className="w-full h-full text-indigo-500 animate-wiggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// LAKSHYA AI SPECIFIC ICONS
export const IconScroll = () => (
  <svg className="w-full h-full animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h2" />
    <path d="M19 17v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1" />
    <path d="M15 17H9" />
    <path d="M12 7v6" />
    <path d="m9 10 3 3 3-3" />
  </svg>
);

export const IconCoach = () => (
  <div className="relative w-full h-full">
    <svg className="w-full h-full animate-pulse-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500/20 rounded-full animate-ping"></div>
  </div>
);

export const IconGame = () => (
  <svg className="w-full h-full animate-wiggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <rect x="15" y="13" width="3" height="2" rx=".5" />
    <rect x="15" y="9" width="3" height="2" rx=".5" />
    <path d="M15 6H9a8 8 0 0 0-8 8v1a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-1a8 8 0 0 0-8-8Z" />
  </svg>
);

export const IconPlant = () => (
  <svg className="w-full h-full animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2-3.5-5.7-2-5.5-4.7C6.3 7 7.7 7.5 9.5 9.4Z" />
    <path d="M14.1 10.3c.7 1.3 1.2 2.6 1.8 4-3-3-5.5-1.5-6.5-4 0-.8.4-1.8 1.4-2.2 1.5-.7 2.3.4 3.3 2.2Z" />
  </svg>
);

export const IconBell = () => (
  <svg className="w-full h-full animate-wiggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const IconCommunity = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-10 h-10 animate-pulse-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </div>
);
