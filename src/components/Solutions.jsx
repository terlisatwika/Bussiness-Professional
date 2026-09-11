import React from 'react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="inline-block px-4 py-1.5 border-l-4 border-accent text-primary text-sm font-bold uppercase tracking-wider mb-6">For Medical Professionals</span>
                    <h2 className="font-merriweather text-primary font-bold leading-tight text-3xl md:text-4xl mb-6">Complete Digital Presence for Doctors</h2>
                    <div className="w-12 h-[3px] bg-accent my-6"></div>
                    <p className="text-text-muted text-lg mb-8">We partner with ambitious medical professionals to build premium personal brands. From attracting the right patients to managing your online reputation, our solutions are designed to establish you as a leading authority in your specialty.</p>
                    <a href="#contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wide transition-all shadow-sm hover:shadow-md">Start Your Journey</a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="group bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-bg-light rounded-full flex items-center justify-center text-2xl text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <h3 className="font-merriweather text-primary font-bold leading-tight text-lg mb-3">Build Your Personal Brand</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Position your expertise with a professional digital identity that reflects your experience, specialty, and unique approach to care.</p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="group bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-bg-light rounded-full flex items-center justify-center text-2xl text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <i className="fa-solid fa-file-signature"></i>
                        </div>
                        <h3 className="font-merriweather text-primary font-bold leading-tight text-lg mb-3">Create Medical Content</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Turn your knowledge into clear, credible content that educates patients and builds professional authority.</p>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="group bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-bg-light rounded-full flex items-center justify-center text-2xl text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <h3 className="font-merriweather text-primary font-bold leading-tight text-lg mb-3">Strengthen Online Visibility</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Make it easier for the right patients to discover you across search, social platforms, and your professional website.</p>
                    </div>
                    
                    {/* Card 4 */}
                    <div className="group bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-14 h-14 bg-bg-light rounded-full flex items-center justify-center text-2xl text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <i className="fa-solid fa-shield-heart"></i>
                        </div>
                        <h3 className="font-merriweather text-primary font-bold leading-tight text-lg mb-3">Build Patient Trust</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Present your expertise, experience, procedures, and patient-focused approach in a way that inspires confidence.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Solutions;
