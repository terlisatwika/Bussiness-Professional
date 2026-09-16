import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#072a4d] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-blue-500 opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col">
            <Link to="/" className="flex items-center gap-4 mb-6">
                <img src="/sbloom_logo.jpg" alt="Logo" className="w-14 h-14 rounded-full object-cover shadow-sm border border-[#fbbf24]" />
                <div className="h-10 w-[1px] bg-blue-500/30"></div>
                <div className="flex flex-col">
                  <span className="font-merriweather text-[22px] font-bold text-white leading-tight">Business Professionals</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-blue-200/70 font-semibold mt-1">Doctors and Experts</span>
                </div>
            </Link>
            <p className="text-blue-100/70 text-[13px] leading-relaxed mb-8 max-w-sm">
              Empowering healthcare professionals and industry experts with tailored digital solutions to build credibility, showcase expertise, and grow their practice online.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-[13px]"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300">
                <i className="fa-brands fa-instagram text-[13px]"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300">
                <i className="fa-brands fa-youtube text-[13px]"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1e3a8a] flex items-center justify-center"><i className="fa-regular fa-compass text-[11px] text-white"></i></div>
                Navigation
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="/#services" className="hover:text-white transition-colors flex items-center gap-2 group"><i className="fa-solid fa-chevron-right text-[10px] text-blue-400 group-hover:text-white transition-colors"></i> Services</a></li>
              <li><a href="/#workflow" className="hover:text-white transition-colors flex items-center gap-2 group"><i className="fa-solid fa-chevron-right text-[10px] text-blue-400 group-hover:text-white transition-colors"></i> How It Works</a></li>
              <li><a href="/#solutions" className="hover:text-white transition-colors flex items-center gap-2 group"><i className="fa-solid fa-chevron-right text-[10px] text-blue-400 group-hover:text-white transition-colors"></i> Digital Presence</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1e3a8a] flex items-center justify-center"><i className="fa-solid fa-headset text-[11px] text-white"></i></div>
                Support
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="/#faq" className="hover:text-white transition-colors flex items-center gap-2 group"><i className="fa-solid fa-chevron-right text-[10px] text-blue-400 group-hover:text-white transition-colors"></i> FAQ</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><i className="fa-solid fa-chevron-right text-[10px] text-blue-400 group-hover:text-white transition-colors"></i> Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex justify-end text-[11px] text-blue-200/60">
          <div className="flex items-center flex-wrap justify-end">
            <span>&copy; 2026 Business Professionals. All rights reserved.</span>
            <span className="mx-4 text-blue-500/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-4 text-blue-500/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="mx-4 text-blue-500/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
