import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-dark py-12 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-center gap-3 font-merriweather text-2xl font-bold text-white mb-4">
                <i className="fa-solid fa-briefcase-medical text-accent"></i> MedAuthority
            </div>
            <p className="text-slate-400 text-sm">&copy; 2026 MedAuthority. Enterprise Digital Solutions for Medical Professionals.</p>
        </div>
    </footer>
  );
};

export default Footer;
