import React from 'react';

const Trust = () => {
  const features = [
    {
      icon: "fa-palette",
      title: "Bespoke Branding",
      text: "A custom design tailored exactly to your profession, ensuring you stand out from generic templates."
    },
    {
      icon: "fa-chart-line",
      title: "Built-In SEO",
      text: "Optimized from the ground up so that local clients and patients can find you easily on search engines."
    },
    {
      icon: "fa-server",
      title: "Managed Hosting & Support",
      text: "Lightning-fast, secure hosting with 24/7 technical support and regular maintenance included."
    }
  ];

  return (
    <section className="relative bg-[#1e293b] text-white py-24 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
             <img src="https://images.unsplash.com/photo-1584982751601-97d8cb0f6662?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Stethoscope" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[#1e293b]/70"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
            <div className="flex flex-col items-center">
                <span className="inline-block text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    What You Get
                </span>
                
                <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-white mb-6">Everything You Need in One Platform</h2>
                
                <p className="text-gray-300 text-[15px] leading-relaxed mb-16 max-w-3xl mx-auto">
                    We handle all the technical heavy-lifting—from design to maintenance—so you can focus entirely on your practice.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center bg-white/5 border border-white/10 rounded-2xl p-10 min-h-[260px] backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                            <h4 className="font-merriweather text-[18px] font-bold mb-4">{feature.title}</h4>
                            <p className="text-gray-400 text-[14.5px] leading-relaxed">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Trust;
