import React from 'react';

const Trust = () => {
  const features = [
    {
      icon: "fa-heart-pulse",
      title: "Professional-first approach",
      text: "Built with a deep understanding of professional services and client behaviour."
    },
    {
      icon: "fa-file-lines",
      title: "Professional content",
      text: "Clear, credible, audience-focused content crafted for your practice."
    },
    {
      icon: "fa-shield-halved",
      title: "Secure & reliable",
      text: "Your data and privacy are always protected with industry best practices."
    }
  ];

  return (
    <section className="relative bg-[#1e293b] text-white py-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
             <img src="https://images.unsplash.com/photo-1584982751601-97d8cb0f6662?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Stethoscope" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#1e293b]/70"></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
            <div className="flex flex-col items-center">
                <span className="inline-block text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    Why Choose Business Professionals
                </span>
                
                <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-white mb-6">Built for Professionals & Experts</h2>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-16 max-w-4xl mx-auto">
                    We understand the unique needs of professionals and experts, creating digital solutions that work for you.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <h4 className="font-merriweather text-[17px] font-bold mb-4">{feature.title}</h4>
                            <p className="text-gray-400 text-[14px] leading-relaxed">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Trust;
