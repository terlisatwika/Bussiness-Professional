import React from 'react';

const Workflow = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 border-l-4 border-accent text-primary text-sm font-bold uppercase tracking-wider mb-6">Our Process</span>
                <h2 className="font-merriweather text-primary font-bold leading-tight text-3xl md:text-4xl mb-4">How We Work Together</h2>
                <div className="w-12 h-[3px] bg-accent mx-auto my-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-[2px] bg-border z-0"></div>

                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-bg-light group-hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                        <span className="font-merriweather text-4xl font-bold text-accent group-hover:text-white transition-colors duration-300">1</span>
                    </div>
                    <h3 className="font-merriweather text-xl font-bold text-primary mb-3">Discovery & Strategy</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">We conduct a deep dive into your clinical expertise, target patient demographics, and practice goals.</p>
                </div>
                
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-bg-light group-hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                        <span className="font-merriweather text-4xl font-bold text-accent group-hover:text-white transition-colors duration-300">2</span>
                    </div>
                    <h3 className="font-merriweather text-xl font-bold text-primary mb-3">Content Creation</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">Our medical writers and designers craft premium, HIPAA-compliant digital assets tailored strictly to your voice.</p>
                </div>
                
                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-bg-light group-hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                        <span className="font-merriweather text-4xl font-bold text-accent group-hover:text-white transition-colors duration-300">3</span>
                    </div>
                    <h3 className="font-merriweather text-xl font-bold text-primary mb-3">Distribution & Growth</h3>
                    <p className="text-text-muted text-sm leading-relaxed px-4">We deploy your new digital presence across the right channels to attract patients and build lasting clinical authority.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Workflow;
