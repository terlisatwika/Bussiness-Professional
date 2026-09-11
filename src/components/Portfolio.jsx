import React from 'react';

const Portfolio = () => {
  return (
    <section id="examples" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="font-merriweather text-primary font-bold leading-tight text-3xl md:text-4xl">Elevate Your Digital Portfolio</h2>
                <div className="w-12 h-[3px] bg-accent mx-auto my-6"></div>
                <p className="text-text-muted text-lg max-w-3xl mx-auto">Examples of the professional assets we create to showcase your expertise.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
                <div className="group cursor-pointer bg-bg-light p-10 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <h4 className="font-merriweather text-primary font-bold leading-tight text-xl mb-3">Clinical Case Studies</h4>
                    <p className="text-text-muted text-sm leading-relaxed px-2">Detailed breakdowns of complex cases to demonstrate your problem-solving capabilities to peers and prospective patients.</p>
                </div>
                
                <div className="group cursor-pointer bg-bg-light p-10 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <h4 className="font-merriweather text-primary font-bold leading-tight text-xl mb-3">Patient Education Articles</h4>
                    <p className="text-text-muted text-sm leading-relaxed px-2">SEO-optimized, easy-to-understand articles that answer common patient questions and establish you as a helpful authority.</p>
                </div>
                
                <div className="group cursor-pointer bg-bg-light p-10 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
                    <h4 className="font-merriweather text-primary font-bold leading-tight text-xl mb-3">Procedure Explainers</h4>
                    <p className="text-text-muted text-sm leading-relaxed px-2">Professional video content that sets patient expectations, reduces anxiety, and showcases your modern approach to care.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Portfolio;
