import React from 'react';

const Workflow = () => {
  const steps = [
    {
      number: "1",
      icon: "fa-clipboard-list",
      title: "Strategy",
      text: "We understand your goals, audience and specialty to create a plan that fits your needs."
    },
    {
      number: "2",
      icon: "fa-gear",
      title: "Build",
      text: "We design, create and set up your digital presence with a focus on quality and clarity."
    },
    {
      number: "3",
      icon: "fa-arrow-trend-up",
      title: "Grow",
      text: "We optimise, manage and improve so you get better visibility, engagement and results over time."
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white border-b border-gray-50 min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl mb-4">How It Works</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              A simple 3-step process to get you online and growing.
            </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 relative max-w-5xl mx-auto">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-[2px] bg-gray-300 z-0 overflow-hidden rounded-full">
            <div className="h-full bg-[#072a4d] w-[30%] animate-moving-line rounded-full"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[280px] relative z-10 flex-1">
              <div className="flex justify-center mb-6 bg-white px-4 relative z-20">
                <div className="w-12 h-12 rounded-full bg-[#5d8dbf] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {step.number}
                </div>
              </div>
              <div className="bg-gradient-to-t from-[#091534] via-[#173e65] to-[#7bc0a5] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-2 w-full flex flex-col items-center relative z-10 border border-white/10 cursor-pointer">
                <h3 className="font-merriweather font-bold text-white mb-3 text-[17px]">{step.title}</h3>
                <p className="text-white/80 text-[13px] leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
