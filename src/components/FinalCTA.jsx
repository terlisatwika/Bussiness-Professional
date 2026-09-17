import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#f0f7ff] relative overflow-hidden">
      {/* Curved background shape at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V86.58C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center relative z-10">
        <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-[#072a4d] mb-4">
          Ready to strengthen your <br/> professional presence?
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Let's create a digital presence that works as hard as you do.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-[#072a4d] hover:bg-[#134475] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-md"
        >
          <span>Schedule a Consultation</span>
          <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
        </Link>
      </div>
      

    </section>
  );
};

export default FinalCTA;
