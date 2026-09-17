import React from 'react';

const Solutions = () => {
  const features = [
    {
      title: "Doctors & Healthcare",
      icon: "fa-stethoscope",
      color: "blue",
      desc: "Help your patients feel safe and informed. We'll help you share simple health tips and build a friendly online presence that people trust.",
      points: ["Share daily health tips", "Publish medical insights", "Build a relatable medical brand"]
    },
    {
      title: "Lawyers & Legal",
      icon: "fa-scale-balanced",
      color: "slate",
      desc: "Make the law easy to understand. We help you share your legal knowledge so you stand out as a trusted, approachable expert in your field.",
      points: ["Professional thought leadership", "Publish legal commentary", "Engage with industry peers"]
    },
    {
      title: "Teachers & Educators",
      icon: "fa-chalkboard-user",
      color: "orange",
      desc: "Take your teaching beyond the classroom. We help you share fun mini-lessons and study tips to connect with students all over the world.",
      points: ["Create educational modules", "Host digital tutorials", "Engage student communities"]
    },
    {
      title: "Financial Advisors",
      icon: "fa-chart-line",
      color: "emerald",
      desc: "Help people take control of their money. We'll help you share easy-to-understand financial tips to attract clients who value your advice.",
      points: ["Weekly market wrap-ups", "Infographics on wealth building", "Build a trusted financial brand"]
    },
    {
      title: "Real Estate Agents",
      icon: "fa-house-chimney",
      color: "purple",
      desc: "Show off properties like a pro. We help you share beautiful home tours and local neighborhood guides so buyers know exactly who to call.",
      points: ["Digital property tours", "Market trend analysis", "Community spotlight videos"]
    },
    {
      title: "Artists & Creatives",
      icon: "fa-palette",
      color: "indigo",
      desc: "Turn your passion into a brand. We help you share your creative process, showcase your portfolio, and connect with fans who love your work.",
      points: ["Share your creative process", "Showcase digital portfolios", "Build a loyal fan base"]
    }
  ];

  const getColorClasses = (color) => {
      const colors = {
          blue: { iconBg: 'bg-blue-500/20', iconText: 'text-blue-400', check: 'text-blue-400' },
          slate: { iconBg: 'bg-slate-400/20', iconText: 'text-slate-300', check: 'text-slate-300' },
          emerald: { iconBg: 'bg-emerald-500/20', iconText: 'text-emerald-400', check: 'text-emerald-400' },
          orange: { iconBg: 'bg-orange-500/20', iconText: 'text-orange-400', check: 'text-orange-400' },
          purple: { iconBg: 'bg-purple-500/20', iconText: 'text-purple-400', check: 'text-purple-400' },
          indigo: { iconBg: 'bg-indigo-500/20', iconText: 'text-indigo-400', check: 'text-indigo-400' },
      };
      return colors[color];
  };

  return (
    <section id="solutions" className="py-24 bg-[#f8f9fa] border-b border-gray-50 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl md:text-4xl mb-6">Expand Your Reach with a Digital Presence</h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            By building a powerful, engaging presence online, professionals across all fields can connect with a wider audience, build trust, and drive massive impact.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
                const styles = getColorClasses(feature.color);
                return (
                    <div key={index} className="bg-[#091534] rounded-[1.5rem] p-8 border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(7,42,77,0.25)] hover:border-white/20 group flex flex-col h-full min-h-[280px]">
                        <h3 className="font-merriweather font-bold text-white text-[22px] mb-4">{feature.title}</h3>
                        
                        <div className="relative grid flex-grow mb-6">
                            {/* Description (fades out on hover) */}
                            <p className="col-start-1 row-start-1 text-gray-300 text-[14px] leading-relaxed transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                                {feature.desc}
                            </p>
                            
                            {/* Points (fades in on hover) */}
                            <div className="col-start-1 row-start-1 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                                <ul className="space-y-3">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <i className={`fa-solid fa-check ${styles.check} text-[14px] mt-[3px]`}></i>
                                            <span className="text-gray-300 text-[14px] font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-auto border-t border-white/10 pt-5">
                            <div className={`flex items-center gap-2 text-[14px] font-semibold ${styles.iconText} group-hover:text-white transition-colors duration-300 cursor-pointer`}>
                                <span>View Details</span>
                                <i className="fa-solid fa-arrow-right text-[12px] group-hover:translate-x-1 transition-transform duration-300"></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
