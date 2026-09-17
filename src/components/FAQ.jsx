import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes you different from a standard web design agency?",
      answer: "We don't just build websites; we build digital authority. Our strategies are specifically tailored for professional experts to highlight your credentials, share your knowledge, and attract high-value clients."
    },
    {
      question: "Will my online presence look professional and match my industry standards?",
      answer: "Absolutely. Whether you are a doctor, lawyer, or consultant, we design premium, custom platforms that reflect your authority and comply with your industry's professional standards."
    },
    {
      question: "How does a digital presence actually get me more clients or patients?",
      answer: "By positioning you as an authority online, you build trust before a client even contacts you. A strong digital footprint improves your discoverability on search engines and converts visitors into loyal clients."
    },
    {
      question: "Do you also manage my ongoing content and social channels?",
      answer: "Yes! Beyond building your platform, we offer ongoing management to share your insights, write newsletters, and manage your social channels so your digital presence continues to grow effortlessly."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#f8f9fa] border-b border-gray-50 min-h-[calc(100vh-72px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-merriweather text-[#072a4d] font-bold text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">
              Quick answers to common queries.
            </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-all duration-300 shadow-sm">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
              >
                <span className="font-merriweather font-medium text-[#072a4d] text-[16px] transition-colors">{faq.question}</span>
                <i className={`fa-solid fa-chevron-down text-gray-400 text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#072a4d]' : ''}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="w-full h-px bg-gray-100 mb-5"></div>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
