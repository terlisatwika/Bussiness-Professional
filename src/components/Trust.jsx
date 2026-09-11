import React from 'react';

const Trust = () => {
  return (
    <section className="py-20 md:py-28 bg-bg-dark text-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-white mb-4">Why Top Medical Professionals Choose Us</h2>
                <div className="w-12 h-[3px] bg-accent mx-auto my-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
                <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <i className="fa-solid fa-user-shield text-5xl text-accent mb-6 block"></i>
                    <h4 className="font-merriweather text-xl font-bold mb-3">Strict Compliance</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">All content is designed to comply with HIPAA regulations and medical advertising standards.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <i className="fa-solid fa-stethoscope text-5xl text-accent mb-6 block"></i>
                    <h4 className="font-merriweather text-xl font-bold mb-3">Medical Writers</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Your content is created by professionals with backgrounds in healthcare and medical communications.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <i className="fa-solid fa-gem text-5xl text-accent mb-6 block"></i>
                    <h4 className="font-merriweather text-xl font-bold mb-3">Premium Aesthetics</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">We avoid loud, influencer-style marketing in favor of a refined, corporate aesthetic that respects your profession.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Trust;
