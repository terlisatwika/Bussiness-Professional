import React from 'react';

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col mb-12">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-yellow-400"></div>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">The Difference</span>
            </div>
            <h2 className="font-merriweather text-primary font-bold text-3xl mb-4">Before & After: The Impact of a Strong Digital Presence</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Before / After Panels */}
            <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-4 w-full">
                {/* Before */}
                <div className="bg-gray-100 p-8 rounded-2xl flex-1 w-full border border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <h3 className="font-merriweather font-bold text-xl text-gray-600">Before</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-500 text-sm">
                            <i className="fa-solid fa-minus mt-1 text-gray-400"></i> Scattered online information
                        </li>
                        <li className="flex items-start gap-3 text-gray-500 text-sm">
                            <i className="fa-solid fa-minus mt-1 text-gray-400"></i> Inconsistent content
                        </li>
                        <li className="flex items-start gap-3 text-gray-500 text-sm">
                            <i className="fa-solid fa-minus mt-1 text-gray-400"></i> Difficult to discover
                        </li>
                    </ul>
                </div>

                {/* Arrow */}
                <div className="text-gray-300 hidden md:block">
                    <i className="fa-solid fa-arrow-right text-xl"></i>
                </div>

                {/* After */}
                <div className="bg-blue-50 p-8 rounded-2xl flex-1 w-full border border-blue-100 shadow-sm relative">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h3 className="font-merriweather font-bold text-xl text-primary">After</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                            <i className="fa-solid fa-check text-primary mt-1"></i> Professional digital identity
                        </li>
                        <li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                            <i className="fa-solid fa-check text-primary mt-1"></i> Consistent and valuable content
                        </li>
                        <li className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                            <i className="fa-solid fa-check text-primary mt-1"></i> Easier client discovery
                        </li>
                    </ul>
                </div>
            </div>

            {/* Testimonial */}
            <div className="lg:col-span-1 bg-white p-10 rounded-2xl shadow-lg border border-gray-100 relative">
                <i className="fa-solid fa-quote-left text-blue-100 text-4xl absolute top-8 left-8"></i>
                <div className="relative z-10 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                        "The team helped us present our expertise online in a much clearer and more professional way. We've seen better engagement and more client enquiries."
                    </p>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-primary">— Dr. R. Menon</p>
                            <p className="text-gray-400 text-xs">Cardiologist</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                                <i className="fa-solid fa-chevron-left text-xs"></i>
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                                <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
