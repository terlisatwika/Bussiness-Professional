import React from 'react';

const Portfolio = () => {
  const features = [
    { icon: "fa-desktop", label: "Professional Website" },
    { icon: "fa-file-lines", label: "Expert Articles & Blogs" },
    { icon: "fa-ranking-star", label: "SEO & Search Visibility" },
    { icon: "fa-share-nodes", label: "Social Media Setup" },
    { icon: "fa-address-card", label: "Profile Optimization" },
    { icon: "fa-envelope", label: "Client Enquiry Support" }
  ];

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-yellow-400"></div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Your Digital Portfolio</span>
            </div>
            <h2 className="font-merriweather text-primary font-bold text-3xl mb-4">What Your Digital Presence Can Include</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to showcase your expertise and stay connected.
            </p>
        </div>

        {/* 6 Icons Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-20 relative">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[120px] relative z-10">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-primary flex items-center justify-center text-xl mb-4 shadow-sm border border-blue-100">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <span className="text-gray-600 text-[11px] font-semibold leading-tight">{feature.label}</span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
