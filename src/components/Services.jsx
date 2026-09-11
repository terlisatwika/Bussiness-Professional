import React from 'react';

const Services = () => {
  return (
    <section id="services-showcase" className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="font-merriweather text-primary font-bold leading-tight text-3xl md:text-4xl">Our Premium Services</h2>
                <div className="w-12 h-[3px] bg-accent mx-auto my-6"></div>
                <p className="text-text-muted text-lg max-w-3xl mx-auto">We provide enterprise-grade digital solutions designed exclusively for medical professionals to elevate their practice.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group relative h-[340px] bg-primary rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 group-hover:opacity-0">
                        <img src="assets/benefit_credibility.jpg" alt="Executive Branding" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 w-full h-full p-10 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-primary/40 to-transparent group-hover:bg-none group-hover:bg-primary group-hover:justify-center transition-all duration-500 z-20">
                        <h3 className="font-merriweather text-white text-2xl font-bold mb-2 group-hover:-translate-y-2 transition-transform duration-500">Executive Branding</h3>
                        <span className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider group-hover:opacity-0 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-300">Tap / Hover to read <i className="fa-solid fa-arrow-right"></i></span>
                        <p className="text-white/90 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-[250px] group-hover:opacity-100 group-hover:mt-2 m-0 text-base leading-relaxed">Complete professional identity design, including premium photography, typography, and a cohesive digital aesthetic tailored to your specialty.</p>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="group relative h-[340px] bg-primary rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 group-hover:opacity-0">
                        <img src="assets/benefit_visibility.jpg" alt="Web Presence Management" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 w-full h-full p-10 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-primary/40 to-transparent group-hover:bg-none group-hover:bg-primary group-hover:justify-center transition-all duration-500 z-20">
                        <h3 className="font-merriweather text-white text-2xl font-bold mb-2 group-hover:-translate-y-2 transition-transform duration-500">Web Presence Management</h3>
                        <span className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider group-hover:opacity-0 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-300">Tap / Hover to read <i className="fa-solid fa-arrow-right"></i></span>
                        <p className="text-white/90 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-[250px] group-hover:opacity-100 group-hover:mt-2 m-0 text-base leading-relaxed">Development and ongoing maintenance of an enterprise-level personal website that serves as the central hub for your medical authority.</p>
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className="group relative h-[340px] bg-primary rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 group-hover:opacity-0">
                        <img src="assets/benefit_inquiries.jpg" alt="Medical Content Creation" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 w-full h-full p-10 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-primary/40 to-transparent group-hover:bg-none group-hover:bg-primary group-hover:justify-center transition-all duration-500 z-20">
                        <h3 className="font-merriweather text-white text-2xl font-bold mb-2 group-hover:-translate-y-2 transition-transform duration-500">Medical Content Creation</h3>
                        <span className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider group-hover:opacity-0 group-hover:h-0 group-hover:m-0 overflow-hidden transition-all duration-300">Tap / Hover to read <i className="fa-solid fa-arrow-right"></i></span>
                        <p className="text-white/90 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-[250px] group-hover:opacity-100 group-hover:mt-2 m-0 text-base leading-relaxed">Clinically accurate, patient-friendly articles, video scripts, and case studies written by experienced medical communications experts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
