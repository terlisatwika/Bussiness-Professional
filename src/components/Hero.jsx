import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="mt-[72px] pt-12 pb-16 bg-[#f8f9fa] relative overflow-hidden min-h-[500px] flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text Content - Left Side */}
            <div className="w-full md:w-1/2 lg:w-5/12">
                <h1 className="font-merriweather text-[#072a4d] font-bold leading-[1.15] text-4xl lg:text-[44px] xl:text-[54px] mb-6">
                    Make Your Business <br className="hidden lg:block" /> Stand Out Online
                </h1>
                
                <p className="text-gray-600 text-[17px] mb-10 leading-relaxed">
                    Whether you're a doctor, lawyer, or consultant, we build your brand across social media and digital platforms. We make it easy for people to find you, trust your expertise, and connect with your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="inline-flex items-center justify-center bg-[#072a4d] hover:bg-[#134475] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg animate-pulse-subtle">
                        Schedule a Consultation <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                    </Link>
                    <a href="#services" className="inline-flex items-center justify-center bg-white text-[#072a4d] border border-gray-200 hover:text-blue-600 hover:border-blue-600 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-md">
                        Explore Our Services
                    </a>
                </div>
            </div>

            {/* Image - Right Side (Square Box) */}
            <div className="w-full md:w-1/2 lg:w-6/12 hidden md:block">
                <div className="aspect-[4/3] w-full max-w-[550px] mx-auto rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                    <img src="/hero_diverse.jpg" alt="Diverse Professionals" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
