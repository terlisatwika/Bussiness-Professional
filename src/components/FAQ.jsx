import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to get my website live?",
      answer: "Typically, our process takes between 2 to 4 weeks from strategy to launch, depending on the complexity of your requirements and how quickly you can provide feedback."
    },
    {
      question: "Can I update the content myself later?",
      answer: "Yes, we build your website on a user-friendly platform that allows you to easily update text, images, and add new articles or team members without coding knowledge."
    },
    {
      question: "Will this help me get more clients or patients?",
      answer: "Absolutely. A professional online presence builds trust, improves your search engine visibility (SEO), and makes it easier for potential clients to find and contact you."
    },
    {
      question: "Do you handle social media too?",
      answer: "Yes, we offer comprehensive digital management which includes setting up, optimizing, and managing your professional profiles on relevant platforms."
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
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-md overflow-hidden bg-white hover:border-gray-200 transition-colors">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none group"
              >
                <span className="font-medium text-gray-700 text-[15px] group-hover:text-[#072a4d] transition-colors">{faq.question}</span>
                <i className={`fa-solid fa-chevron-down text-gray-400 text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#072a4d]' : ''}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-gray-500 text-[13px] leading-relaxed">
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
