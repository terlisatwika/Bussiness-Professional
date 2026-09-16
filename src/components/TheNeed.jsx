import React from 'react';

const TheNeed = () => {
  const needs = [
    {
      icon: "fa-shield-halved",
      title: "Build Trust",
      text: "A professional online presence shows your credibility and expertise, even before the first consultation."
    },
    {
      icon: "fa-magnifying-glass",
      title: "Be Discoverable",
      text: "Help the right clients and audience find you through search and digital platforms when it matters most."
    },
    {
      icon: "fa-users",
      title: "Make It Easy to Connect",
      text: "Let your audience reach you, book appointments and get the information they need — with minimal effort."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl mb-4">Why Your Digital Presence Matters</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              It's not just about being online — it's about being found, trusted and chosen.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {needs.map((need, index) => (
            <div key={index} className="rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white rounded-[14px] h-full p-6 lg:p-8 flex flex-col justify-center text-center group">
                <div>
                    <h3 className="font-merriweather font-bold text-[#072a4d] mb-3 text-xl">{need.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{need.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheNeed;
