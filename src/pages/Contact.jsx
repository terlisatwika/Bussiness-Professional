import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Top Banner */}
      <div className="bg-[#0b2447] text-white rounded-3xl p-10 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
        <Link to="/" className="w-16 h-16 rounded-full bg-[#1b6287] flex items-center justify-center flex-shrink-0 z-10 shadow-lg hover:bg-[#20729e] transition-colors cursor-pointer">
          <i className="fa-solid fa-arrow-left text-xl text-emerald-400"></i>
        </Link>
        <div className="z-10">
          <p className="text-[#3b82f6] text-xs font-bold tracking-[0.2em] uppercase mb-2">Ready to Grow?</p>
          <h1 className="text-3xl md:text-5xl font-bold font-merriweather">
            Let's Build Your <span className="italic font-light opacity-90">Digital Presence</span>
          </h1>
        </div>
        {/* Decorative background circle */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Call Us */}
        <div className="bg-[#f8f5f0] border border-[#eeebe6] rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#2b5a8e] shadow-sm">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div>
            <p className="text-[#6b7280] text-[11px] font-bold tracking-wider uppercase mb-1">Call Us</p>
            <p className="text-[#072a4d] font-bold text-[15px]">7672024272</p>
          </div>
        </div>
        
        {/* Card 2: Email */}
        <div className="bg-[#f8f5f0] border border-[#eeebe6] rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#2b5a8e] shadow-sm">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div>
            <p className="text-[#6b7280] text-[11px] font-bold tracking-wider uppercase mb-1">Email</p>
            <p className="text-[#072a4d] font-bold text-[15px]">businessprofessionals@ottobon.com</p>
          </div>
        </div>

        {/* Card 3: Location */}
        <div className="bg-[#f8f5f0] border border-[#eeebe6] rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#2b5a8e] shadow-sm">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <p className="text-[#6b7280] text-[11px] font-bold tracking-wider uppercase mb-1">Location</p>
            <p className="text-[#072a4d] font-bold text-[15px]">Visakhapatnam, India</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-[#f8f5f0] border border-[#eeebe6] rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-[#072a4d] font-bold text-2xl md:text-3xl mb-8 font-merriweather">
          Send us your details
        </h2>
        
        <form className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            />
          </div>
          
          <button 
            type="button" 
            className="bg-[#0b2447] hover:bg-[#134475] text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Submit Details <i className="fa-solid fa-phone"></i>
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
