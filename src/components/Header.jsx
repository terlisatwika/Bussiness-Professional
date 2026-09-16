import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
                <img src="/sbloom_logo.jpg" alt="Logo" className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100" />
                <div className="flex flex-col">
                  <span className="font-merriweather text-xl font-bold text-[#072a4d] leading-tight">Business Professionals</span>
                  <span className="text-[10px] text-gray-500 tracking-wider">Doctors and Experts</span>
                </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-[#072a4d]">
                <Link to="/#services" className="relative group transition-colors py-1">
                    <span>Services</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#072a4d] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/#workflow" className="relative group transition-colors py-1">
                    <span>How It Works</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#072a4d] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/#solutions" className="relative group transition-colors py-1">
                    <span>Digital Presence</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#072a4d] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/#faq" className="relative group transition-colors py-1">
                    <span>FAQ</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#072a4d] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="relative group transition-colors py-1">
                    <span>Contact Us</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#072a4d] transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>
            <Link to="/contact" className="hidden md:inline-flex items-center justify-center bg-[#072a4d] hover:bg-[#134475] text-white px-6 py-2.5 rounded text-sm font-medium transition-all shadow-sm">
                Schedule a Consultation <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
            </Link>
        </div>
    </header>
  );
};

export default Header;
