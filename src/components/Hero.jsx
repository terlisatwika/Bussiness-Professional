import React from 'react';

const Hero = () => {
  return (
    <React.Fragment>
      {/* 1. Hero Section */}
      <section className="pt-48 pb-32 bg-bg-light">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-stretch text-center md:text-left">
            <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 border-l-4 border-accent text-primary text-sm font-bold uppercase tracking-wider mb-6 self-start">For Medical Professionals</span>
                <h1 className="font-merriweather text-primary font-bold leading-tight text-4xl lg:text-[3.5rem] mb-6 tracking-tight">Amplify Your Clinical Authority</h1>
                <p className="text-text-muted text-lg lg:text-xl mb-10 max-w-xl mx-auto md:mx-0">We help doctors and medical experts turn their knowledge into professional digital content. Build credibility, improve online visibility, and attract the right patients and professional inquiries.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href="#contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white border border-primary hover:border-primary-light px-8 py-4 rounded text-base font-semibold uppercase tracking-wide transition-all shadow-sm hover:shadow-md">Start Building Your Brand</a>
                    <a href="#workflow" className="inline-flex items-center justify-center bg-transparent hover:bg-primary text-primary hover:text-white border border-primary px-8 py-4 rounded text-base font-semibold uppercase tracking-wide transition-colors">See How It Works</a>
                </div>
            </div>
            <div className="md:col-span-5 lg:col-span-6 hidden md:block relative">
                <div className="relative rounded-lg shadow-md group cursor-pointer z-10 h-full">
                    <div className="overflow-hidden rounded-lg h-full">
                        <img src="assets/doctor.jpg" alt="Medical Professional in a corporate setting" className="w-full h-full object-cover block transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  );
};

export default Hero;
