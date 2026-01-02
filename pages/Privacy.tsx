
import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-fade-in transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-20">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800 shadow-sm">
          <i className="fas fa-shield-halved animate-pulse"></i>
          <span>Privacy Protocol</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight leading-none">
          Privacy <span className="text-indigo-600">Policy</span>
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-8">
          <i className="far fa-calendar-check text-indigo-500"></i>
          <span>Effective Date: December 15, 2025</span>
        </div>
        
        <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-indigo-50 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-lg md:text-xl text-indigo-900 dark:text-indigo-300 font-black mb-4 leading-tight">Welcome to Vocademy.</p>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-base leading-relaxed text-left">
            Your privacy is extremely important to us, and we are committed to protecting your personal information and being transparent about how your data is used. This Privacy Policy explains how Vocademy collects, uses, stores, and safeguards your information when you use our mobile application and website.
          </p>
          <div className="mt-8 p-5 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 text-left">
            <p className="text-gray-700 dark:text-gray-300 font-bold text-sm leading-relaxed">
              By signing up, logging in, accessing or using Vocademy, you agree to the terms described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the app and website.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Philosophy */}
        <section>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center shadow-xl shadow-rose-500/20 animate-float">
              <i className="fas fa-heart text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Our Privacy Philosophy</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <p className="text-gray-600 dark:text-gray-400 font-bold text-base leading-relaxed mb-8">
              At Vocademy, we strongly believe that:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'fa-user-shield', title: 'Safety First', text: 'Learning should be safe and respectful' },
                { icon: 'fa-filter', title: 'Minimalism', text: 'User data should be collected minimally' },
                { icon: 'fa-handshake', title: 'Transparency', text: 'Transparency builds long-term trust' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-slate-950/50 rounded-2xl border border-gray-100 dark:border-slate-800 hover:scale-105 transition-all group">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 dark:border-slate-800 group-hover:rotate-6 transition-transform">
                    <i className={`fas ${item.icon} text-indigo-600 text-xl`}></i>
                  </div>
                  <h4 className="text-base font-black text-indigo-950 dark:text-white mb-1">{item.title}</h4>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-gray-500 dark:text-gray-400 font-medium italic text-sm text-center">
              We collect only what is necessary to provide a smooth, personalized, and effective learning experience. We do not collect data for unnecessary tracking, aggressive advertising, or resale.
            </p>
          </div>
        </section>

        {/* Info Categories */}
        <section>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white tracking-tight">Information We Collect</h2>
          </div>
          <div className="grid gap-6">
            <PrivacySectionCard 
              title="1. Personal Information"
              icon="fa-id-card"
              color="text-blue-500"
              items={[
                "Name or username",
                "Email address",
                "Profile details voluntarily provided by you",
                "Profile photo (only if you choose to upload one)"
              ]}
              extra="Media & Camera Access: To enable profile photo customization, the app may request permission to access your device’s Camera and Photo Library/Media Storage. These permissions are used solely for the purpose of capturing or selecting a profile picture. We do not access, collect, or store any other media from your device."
              summary="This information helps us identify your account, provide support, and personalize your experience."
            />
            <PrivacySectionCard 
              title="2. Learning & Usage Information"
              icon="fa-brain"
              color="text-emerald-500"
              items={[
                "Vocabulary progress and revision history",
                "Test attempts, scores, and performance insights",
                "Time spent on features and learning modules",
                "App interaction patterns (non-intrusive)"
              ]}
              summary="This data is used strictly to enhance your learning journey."
            />
            <PrivacySectionCard 
              title="3. Device & Technical Information"
              icon="fa-microchip"
              color="text-purple-500"
              items={[
                "Device type and model",
                "Operating system version",
                "App version",
                "Crash logs and performance diagnostics",
                "Network connection status (online/offline/latency)"
              ]}
              extra="Screen Orientation: The app is designed and locked to Portrait Mode only to ensure a consistent and optimized learning interface across all devices."
              summary="This information helps us fix bugs, improve stability, notify you of connectivity issues, and ensure a smooth user experience. Data regarding network status is processed locally on your device."
            />
          </div>
        </section>

        {/* Detailed Points */}
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureBlock 
            title="How We Use Your Information" 
            icon="fa-gears" 
            items={[
              "Provide core app functionality",
              "Personalize revision experience",
              "Track learning progress",
              "Improve performance & security",
              "Communicate important updates",
              "Comply with legal requirements"
            ]}
          />
          <FeatureBlock 
            title="Gamification & Progress" 
            icon="fa-trophy" 
            desc="Vocademy uses light gamification to encourage consistency, such as progress indicators, streaks, and performance feedback. All such data remains private to your account and is used solely to motivate your learning journey."
          />
        </div>

        {/* User Rights Section - Updated Colors */}
        <section className="bg-white dark:bg-slate-900 text-indigo-950 dark:text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight">User Rights & Control</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Access & Update", desc: "Access and update your personal information at any time." },
                { title: "Data Correction", desc: "Request correction of inaccurate or incomplete data." },
                { title: "Account Deletion", desc: "Request full deletion of your account and associated data." },
                { title: "Permission Control", desc: "Manage camera and media permissions through device settings." }
              ].map((right, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">{right.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Clauses */}
        <div className="space-y-6">
          <ClauseCard 
            title="Editorial Learning & Data"
            text="Vocademy focuses on structured editorial-based learning. Data related to practice, revision history, and learning streaks is used only within the app. It is never used for advertising targeting and is never shared for marketing purposes."
          />
          <ClauseCard 
            title="Data Storage & Security"
            text="We take reasonable and appropriate security measures to protect your data. Data is stored using secure cloud infrastructure with restricted and controlled access. While no digital system is completely immune, we continuously improve our security measures."
          />
          <ClauseCard 
            title="Children's Privacy"
            text="Vocademy is not knowingly intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided data, please contact us immediately for appropriate action."
          />
        </div>

        {/* Contact Section */}
        <section id="contact-us" className="pt-4">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse-aura"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Contact Our Team</h3>
                <p className="text-indigo-100 font-bold text-base max-w-sm leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our secure support channels.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 w-full md:max-w-md space-y-4">
                <ContactLink icon="fa-globe" label="Official Website" value="vocademy.co.in" href="https://vocademy.co.in" />
                <ContactLink icon="fa-link" label="Alternative Web" value="VocademyApp.com" href="https://VocademyApp.com" />
                <ContactLink icon="fa-envelope" label="Primary Support" value="support@vocademy.co.in" href="mailto:support@vocademy.co.in" />
                <ContactLink icon="fa-paper-plane" label="Contact" value="contact@vocademy.co.in" href="mailto:contact@vocademy.co.in" />
                <ContactLink icon="fa-at" label="Gmail" value="vocademy.co.in@gmail.com" href="mailto:vocademy.co.in@gmail.com" />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Footer - Updated with strong brand color */}
        <div className="text-center py-10">
          <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">Our Commitment to You</p>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/40">
            <p className="text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto italic font-black text-lg md:text-xl leading-relaxed">
              "Vocademy is built with a deep respect for learners and their data. Your data exists only to support your learning — nothing more, nothing less."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacySectionCard = ({ title, icon, color, items, extra, summary }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl group hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all">
    <div className="flex items-center space-x-4 mb-6">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-slate-800/50 ${color} shadow-sm group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon} text-xl`}></i>
      </div>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-3 mb-8">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-bold text-sm">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {extra && (
      <div className="p-6 bg-gray-50 dark:bg-slate-950/50 rounded-2xl border border-gray-100 dark:border-slate-800 text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic mb-6">
        {extra}
      </div>
    )}
    <p className="text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-widest">{summary}</p>
  </div>
);

const FeatureBlock = ({ title, icon, items, desc }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-xl h-full flex flex-col">
    <div className="flex items-center space-x-3 mb-4">
      <i className={`fas ${icon} text-indigo-600 text-xl`}></i>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white tracking-tight">{title}</h3>
    </div>
    {desc && <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">{desc}</p>}
    {items && (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-bold text-xs">
            <i className="fas fa-check text-emerald-500 text-[10px]"></i>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const ClauseCard = ({ title, text }: any) => (
  <div className="p-6 border-l-4 border-indigo-600 bg-gray-50 dark:bg-slate-900/40 rounded-r-2xl">
    <h4 className="text-lg font-black text-indigo-950 dark:text-white mb-2 tracking-tight">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">{text}</p>
  </div>
);

const ContactLink = ({ icon, label, value, href }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-4 group p-1.5 rounded-xl hover:bg-white/5 transition-all"
  >
    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
      <i className={`fas ${icon} text-sm`}></i>
    </div>
    <div className="min-w-0">
      <p className="text-[8px] uppercase font-black tracking-widest text-indigo-200/60">{label}</p>
      <p className="text-sm font-black tracking-tight group-hover:text-indigo-300 transition-colors truncate">{value}</p>
    </div>
  </a>
);
