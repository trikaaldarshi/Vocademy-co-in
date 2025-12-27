
import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto animate-fade-in">
      {/* Policy Header */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800">
          <i className="fas fa-shield-halved"></i>
          <span>Privacy Protocol</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-white mb-6 tracking-tight">
          Privacy <span className="text-indigo-600">Policy</span>
        </h1>
        <div className="flex items-center justify-center space-x-2 text-sm font-bold text-gray-500 mb-8">
          <i className="far fa-calendar-check"></i>
          <span>Effective Date: December 15, 2025</span>
        </div>
        <div className="max-w-3xl mx-auto p-6 md:p-8 bg-indigo-50/50 dark:bg-slate-900/50 rounded-3xl border border-indigo-100 dark:border-slate-800">
          <p className="text-lg text-indigo-900 dark:text-indigo-300 font-bold mb-4">Welcome to Vocademy.</p>
          <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            Your privacy is extremely important to us, and we are committed to protecting your personal information and being transparent about how your data is used. This Privacy Policy explains how Vocademy collects, uses, stores, and safeguards your information when you use our mobile application and website.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6 italic">
            By signing up, logging in, accessing or using Vocademy, you agree to the terms described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of the app and website.
          </p>
        </div>
      </div>

      {/* Main Policy Content */}
      <div className="space-y-12">
        
        {/* Philosophy Section */}
        <section>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-heart text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white">Our Privacy Philosophy</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl">
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
              At Vocademy, we strongly believe that:
            </p>
            <ul className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'fa-user-shield', text: 'Learning should be safe and respectful' },
                { icon: 'fa-filter', text: 'User data should be collected minimally' },
                { icon: 'fa-handshake', text: 'Transparency builds long-term trust' }
              ].map((item, i) => (
                <li key={i} className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-slate-950/50 rounded-2xl border border-gray-100 dark:border-slate-800">
                  <i className={`fas ${item.icon} text-indigo-500 mb-3 text-lg`}></i>
                  <span className="text-sm font-black text-indigo-950 dark:text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              We collect only what is necessary to provide a smooth, personalized, and effective learning experience. We do not collect data for unnecessary tracking, aggressive advertising, or resale.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fas fa-database text-xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-950 dark:text-white">Information We Collect</h2>
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
              extra="This data is used strictly to enhance your learning journey."
            />
            <PrivacySectionCard 
              title="3. Device & Technical Information"
              icon="fa-mobile-screen"
              color="text-purple-500"
              items={[
                "Device type and model",
                "Operating system version",
                "App version",
                "Crash logs and performance diagnostics",
                "Network connection status (online/offline/latency)",
                "Screen Orientation: The app is designed and locked to Portrait Mode only to ensure a consistent and optimized learning interface."
              ]}
              extra="This information helps us fix bugs, improve stability, notify you of connectivity issues, and ensure a smooth user experience. Data regarding network status is processed locally on your device."
            />
          </div>
        </section>

        {/* Usage & Rules Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <DetailBlock 
            title="How We Use Your Information"
            icon="fa-circle-check"
            content={[
              "To provide and maintain core app functionality",
              "To personalize learning and revision experience",
              "To track learning progress and consistency",
              "To improve app performance, stability, and security",
              "To communicate important updates and support responses",
              "To comply with legal and regulatory requirements"
            ]}
            footer="Vocademy does not sell, rent, or trade your personal information to any third party."
          />
          <DetailBlock 
            title="Editorial & Gamification"
            icon="fa-gamepad"
            content={[
              "Editorial vocabulary practice & revision history",
              "Learning streaks and progress indicators",
              "Gamified milestones used solely to motivate your journey",
              "Data remains private to your account only"
            ]}
            footer="This data is never used for advertising targeting and is never shared for marketing purposes."
          />
        </div>

        {/* Security & Others */}
        <div className="grid md:grid-cols-3 gap-6">
          <SimpleCard 
            title="Data Storage & Security"
            icon="fa-lock"
            text="We take reasonable and appropriate security measures to protect your data. Data is stored using secure cloud infrastructure with restricted and controlled access."
          />
          <SimpleCard 
            title="Third-Party Services"
            icon="fa-link"
            text="We may use trusted third-party services for limited purposes like app analytics, crash reporting, and secure payment processing under their own privacy policies."
          />
          <SimpleCard 
            title="User Rights & Control"
            icon="fa-user-gear"
            text="You have the right to access, update, or correct your personal information, request deletion of your account, and control app permissions via device settings."
          />
        </div>

        {/* Compliance Footer Blocks */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
             <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
               <i className="fas fa-child-reaching text-orange-500 mr-3"></i>
               Children’s Privacy
             </h3>
             <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
               Vocademy is not knowingly intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided data, please contact us immediately for appropriate action.
             </p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
             <h3 className="text-xl font-black text-indigo-950 dark:text-white mb-4 flex items-center">
               <i className="fas fa-scale-balanced text-emerald-500 mr-3"></i>
               Legal Compliance
             </h3>
             <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm">
               Vocademy complies with applicable data protection and privacy laws. We may disclose information only when required to do so by law or to protect our legal rights and users’ safety.
             </p>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact-us" className="pt-8">
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black mb-4">Contact Us</h3>
                <p className="text-indigo-100 font-medium max-w-md">
                  If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our team.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 w-full md:w-auto">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-globe w-5"></i>
                    <a href="https://vocademy.co.in" target="_blank" className="font-bold hover:underline">vocademy.co.in</a>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-4">
                      <i className="fas fa-envelope w-5"></i>
                      <span className="font-bold text-sm sm:text-base">support@vocademy.co.in</span>
                    </div>
                    <div className="flex items-center space-x-4 pl-9">
                      <span className="text-xs text-indigo-200">contact@vocademy.co.in</span>
                    </div>
                    <div className="flex items-center space-x-4 pl-9">
                      <span className="text-xs text-indigo-200">vocademy.co.in@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Quote */}
        <div className="text-center pt-8">
           <h4 className="text-xl font-black text-indigo-950 dark:text-white mb-2">Our Commitment to You</h4>
           <p className="text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto italic">
             "Your data exists only to support your learning — nothing more, nothing less."
           </p>
        </div>
      </div>
    </div>
  );
};

const PrivacySectionCard = ({ title, icon, color, items, extra }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-lg group">
    <div className="flex items-center space-x-3 mb-6">
      <i className={`fas ${icon} ${color} text-xl`}></i>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-3 mb-6">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-medium">
          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 flex-shrink-0"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {extra && (
      <div className="p-4 bg-gray-50 dark:bg-slate-950/50 rounded-2xl border border-gray-100 dark:border-slate-800 text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
        {extra}
      </div>
    )}
  </div>
);

const DetailBlock = ({ title, icon, content, footer }: any) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl flex flex-col h-full">
    <div className="flex items-center space-x-3 mb-6">
      <i className={`fas ${icon} text-indigo-500 text-xl`}></i>
      <h3 className="text-xl font-black text-indigo-950 dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-4 mb-auto">
      {content.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">
          <i className="fas fa-check-circle text-indigo-200 dark:text-indigo-800 mt-1"></i>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-6 border-t border-gray-50 dark:border-slate-800">
      <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{footer}</p>
    </div>
  </div>
);

const SimpleCard = ({ title, icon, text }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-lg text-center">
    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h4 className="text-sm font-black text-indigo-950 dark:text-white mb-3 uppercase tracking-wider">{title}</h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
      {text}
    </p>
  </div>
);
