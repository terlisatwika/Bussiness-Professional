import React from 'react';

const TheNeed = () => {
  const needs = [
    {
      icon: "fa-shield-halved",
      title: "Build Trust Instantly",
      text: "When people look you up, a professional digital presence instantly shows your credibility and expertise—long before they even speak to you."
    },
    {
      icon: "fa-magnifying-glass",
      title: "Be Easy to Find",
      text: "We make sure that when someone is looking for an expert in your field, you are the first person they discover online."
    },
    {
      icon: "fa-users",
      title: "Connect with Ease",
      text: "Let your audience easily reach out, book a consultation, or learn from your expertise without any friction."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl mb-4">Why Your Digital Presence Matters</h2>
            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
              It's not just about being online — it's about being found, trusted, and chosen as the expert.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {needs.map((need, index) => (
            <div key={index} className="rounded-2xl p-[2px] bg-gradient-to-br from-[#091534] via-[#173e65] to-[#7bc0a5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white rounded-[14px] h-full p-8 flex flex-col items-center justify-center text-center">
                <div>
                    <h3 className="font-merriweather font-bold text-[#072a4d] mb-4 text-xl">{need.title}</h3>
                    <p className="text-gray-500 text-[14.5px] leading-relaxed">{need.text}</p>
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
