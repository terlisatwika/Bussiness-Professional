import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      if (error) setError('');
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.phone) {
          setError('Invalid credentials');
          return;
      }
      setError('');
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Top Banner */}
      <div className="bg-[#eff4fa] rounded-2xl p-8 md:p-10 mb-6 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        {/* Left Side (Icon + Text) */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 z-10">
          <Link to="/" className="w-12 h-12 rounded-full bg-[#1b6287] flex items-center justify-center flex-shrink-0 shadow-lg hover:bg-[#20729e] transition-colors cursor-pointer">
            <i className="fa-solid fa-arrow-left text-lg text-emerald-400"></i>
          </Link>
          <div>
            <p className="text-[#4f46e5] text-xs font-bold tracking-widest uppercase mb-1">Ready to Grow?</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#072a4d] mb-2 font-inter">
              Let's Build Your <span className="text-[#4f46e5]">Digital </span><span className="text-[#10b981]">Presence</span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get in touch with us. We're here to help you create, manage and grow your online presence with simple and powerful solutions.
            </p>
          </div>
        </div>


        
        {/* Decorative background shape */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Call Us */}
        <div className="bg-[#0b2447] rounded-2xl p-8 flex items-center gap-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#4f46e5] flex items-center justify-center text-white">
                <i className="fa-solid fa-phone"></i>
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-[10px] font-bold tracking-wider uppercase mb-1">Call Us</p>
            <p className="text-white font-bold text-[15px]">7672024272</p>
            <p className="text-gray-400 text-[11px] mt-0.5">Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        {/* Card 2: Email */}
        <div className="bg-[#0b2447] rounded-2xl p-8 flex items-center gap-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-[10px] font-bold tracking-wider uppercase mb-1">Email</p>
            <p className="text-white font-bold text-[14px]">expertprofessionals@ottobon.com</p>
            <p className="text-gray-400 text-[11px] mt-0.5">We'll reply as soon as possible</p>
          </div>
        </div>

        {/* Card 3: Location */}
        <div className="bg-[#0b2447] rounded-2xl p-8 flex items-center gap-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white">
                <i className="fa-solid fa-location-dot"></i>
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-[10px] font-bold tracking-wider uppercase mb-1">Location</p>
            <p className="text-white font-bold text-[15px]">Visakhapatnam, India</p>
            <p className="text-gray-400 text-[11px] mt-0.5">Visit us or get in touch online</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-w-4xl mx-auto relative overflow-hidden">
        
        {/* The Form */}
        <div className="w-full z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <i className="fa-regular fa-user text-sm"></i>
                        </div>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *" 
                            className="w-full bg-white border border-black rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-[#4f46e5] transition-colors"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <i className="fa-regular fa-envelope text-sm"></i>
                        </div>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address *" 
                            className="w-full bg-white border border-black rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-[#4f46e5] transition-colors"
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <i className="fa-solid fa-phone text-sm"></i>
                    </div>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *" 
                        className="w-full bg-white border border-black rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-[#4f46e5] transition-colors"
                    />
                </div>

                <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-4 pointer-events-none text-gray-400">
                        <i className="fa-regular fa-message text-sm"></i>
                    </div>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message (Optional)" 
                        rows="4"
                        className="w-full bg-white border border-black rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-[#4f46e5] transition-colors resize-y"
                    ></textarea>
                </div>
                
                {error && (
                    <div className="text-red-500 text-sm font-semibold flex items-center gap-2">
                        <i className="fa-solid fa-circle-exclamation"></i>
                        {error}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-2">
                    <button 
                        type="submit" 
                        className="bg-[#4f46e5] hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-[13px] font-bold transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto shadow-md hover:-translate-y-1 hover:shadow-lg"
                    >
                        Submit Details <i className="fa-solid fa-arrow-right text-[11px]"></i>
                    </button>
                    
                </div>

            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
