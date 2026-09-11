import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center gap-3 font-merriweather text-2xl font-bold text-primary">
                <i className="fa-solid fa-briefcase-medical text-accent"></i>
                <span>MedAuthority</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 font-medium text-sm">
                <a href="#services-showcase" className="text-text-main hover:text-primary transition-colors">Services</a>
                <a href="#workflow" className="text-text-main hover:text-primary transition-colors">How It Works</a>
                <a href="#solutions" className="text-text-main hover:text-primary transition-colors">Solutions</a>
                <a href="#examples" className="text-text-main hover:text-primary transition-colors">Portfolio</a>
                <a href="#faq" className="text-text-main hover:text-primary transition-colors">FAQ</a>
            </nav>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white border border-primary hover:border-primary-light px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wide transition-all shadow-sm hover:shadow-md">Schedule Consultation</a>
        </div>
    </header>
  );
};

export default Header;
