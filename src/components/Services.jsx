import React from 'react';

const Services = () => {
  const services = [
    {
      title: "The Blooming Social",
      description: "A comprehensive digital growth strategy designed to build, grow, and scale your brand's presence across all major social networks.",
      bgImage: "/blooming_social.jpg",
      icon: "fa-hashtag"
    },
    {
      title: "Expert Content",
      description: "Clear, accurate and easy-to-understand content that educates, informs and builds confidence in your expertise.",
      bgImage: "/collab_content.jpg",
      icon: "fa-file-lines"
    },
    {
      title: "Profile & Reputation",
      description: "A well-optimised profile and positive client feedback to strengthen your credibility and online reputation.",
      bgImage: "/collab_reputation.jpg",
      icon: "fa-star"
    },
    {
      title: "Ongoing Digital Management",
      description: "From SEO to social media management, we keep your digital presence active, relevant and growing.",
      bgImage: "/collab_management.jpg",
      icon: "fa-chart-line"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9fa] min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl mb-4">What We Do</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Digital solutions designed to help professionals build, showcase, and grow their expertise online.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-80 cursor-pointer border border-gray-100">
              
              {/* Front State: Image, Overlay, Title, Tap to hover */}
              <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0 flex flex-col p-6">
                 <img src={service.bgImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#072a4d]/90 via-[#072a4d]/20 to-transparent z-10"></div>
                 
                 <div className="relative z-20 h-full flex flex-col items-center justify-end text-center pb-2">
                    <h3 className="font-merriweather font-bold text-white text-xl mb-4 leading-tight">{service.title}</h3>
                    <div className="mt-4">
                      <span className="text-white/80 text-[11px] uppercase tracking-widest font-medium border border-white/40 rounded-full px-4 py-1.5 bg-black/20 backdrop-blur-sm">
                        Tap to Hover
                      </span>
                    </div>
                 </div>
              </div>

              {/* Back State: Matter (Description) */}
              <div className="absolute inset-0 z-20 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex flex-col justify-center items-center text-center p-8">
                 <h3 className="font-merriweather font-bold text-[#072a4d] text-lg mb-4">{service.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                 <div className="w-10 h-0.5 bg-[#072a4d]/20 mt-6 mx-auto"></div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
