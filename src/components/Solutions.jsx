import React from 'react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-[#f8f9fa] border-b border-gray-50 min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl md:text-4xl mb-6">Expand Your Reach with a Digital Presence</h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            By building a strong social and digital footprint, professionals across all fields can connect with a wider audience, build trust, and significantly increase their impact.
          </p>
        </div>

        {/* Grid of 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Doctors */}
          <div className="bg-white border border-blue-50 rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row gap-8 items-center shadow-[0_4px_20px_-4px_rgba(59,130,246,0.05)] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            
            {/* Image Side */}
            <div className="w-full sm:w-5/12 flex-shrink-0">
               <div className="w-full aspect-[4/5] rounded-[50%_50%_24px_24px] overflow-hidden bg-[#e6f0ff] relative group">
                 <img src="/doctor_portrait.jpg" alt="Doctor" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
            
            {/* Content Side */}
             <div className="w-full sm:w-7/12 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 text-blue-600 flex items-center justify-center">
                     <i className="fa-solid fa-stethoscope"></i>
                  </div>
                  <h3 className="font-merriweather font-bold text-[#072a4d] text-[20px]">For Healthcare Providers</h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Establish trust and make it easier for patients to find you with a professional, compliant, and highly visible online presence.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-blue-600 text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Professional consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-blue-600 text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-blue-600 text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Direct and reliable care</span>
                  </li>
                </ul>
                
             </div>
          </div>

          {/* Card 2: Experts */}
          <div className="bg-white border border-purple-50 rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row gap-8 items-center shadow-[0_4px_20px_-4px_rgba(147,51,234,0.05)] hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            
            {/* Image Side */}
            <div className="w-full sm:w-5/12 flex-shrink-0">
               <div className="w-full aspect-[4/5] rounded-[50%_50%_24px_24px] overflow-hidden bg-[#f0e6ff] relative group">
                 <img src="/expert_portrait.jpg" alt="Expert" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
            
            {/* Content Side */}
             <div className="w-full sm:w-7/12 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-[10px] bg-purple-50 text-[#8b5cf6] flex items-center justify-center">
                     <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <h3 className="font-merriweather font-bold text-[#072a4d] text-[20px]">For Consultants & Experts</h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Showcase your industry knowledge and attract high-value clients with a premium digital footprint designed for experts.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#8b5cf6] text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Strategic consulting & advisory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#8b5cf6] text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Executive coaching & mentoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#8b5cf6] text-[15px]"></i>
                    <span className="text-gray-600 text-[13.5px]">Specialized industry insights</span>
                  </li>
                </ul>
                
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;
