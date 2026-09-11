import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="font-merriweather text-primary font-bold leading-tight text-3xl md:text-4xl">Frequently Asked Questions</h2>
                <div className="w-12 h-[3px] bg-accent mx-auto my-6"></div>
            </div>
            
            <div className="space-y-6">
                {/* FAQ Item 1 */}
                <details className="group bg-bg-light rounded-xl border border-border shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-merriweather text-primary font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                        How long does it take to see results?
                        <span className="text-accent transition-transform duration-300 group-open:rotate-180">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-border/50">
                        While some reputation management improvements are immediate, organic SEO and patient acquisition strategies typically show significant growth within 3 to 6 months depending on your specialty and location.
                    </div>
                </details>

                {/* FAQ Item 2 */}
                <details className="group bg-bg-light rounded-xl border border-border shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-merriweather text-primary font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                        Is your content HIPAA compliant?
                        <span className="text-accent transition-transform duration-300 group-open:rotate-180">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-border/50 mt-4">
                        Absolutely. All our content creation and digital marketing strategies are strictly designed to comply with HIPAA regulations and healthcare advertising standards. Your patient privacy is paramount.
                    </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group bg-bg-light rounded-xl border border-border shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-merriweather text-primary font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                        Do I need to write the medical content myself?
                        <span className="text-accent transition-transform duration-300 group-open:rotate-180">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-border/50 mt-4">
                        No. We have a team of professional medical writers. We simply interview you briefly to capture your unique clinical perspective and voice, and we handle all the heavy lifting from there.
                    </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group bg-bg-light rounded-xl border border-border shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-merriweather text-primary font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                        How do you measure success?
                        <span className="text-accent transition-transform duration-300 group-open:rotate-180">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </summary>
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-border/50 mt-4">
                        We track concrete metrics that matter to your practice: new patient appointment requests, improved search rankings for key procedures, increase in 5-star reviews, and overall brand visibility growth.
                    </div>
                </details>
            </div>
        </div>
    </section>
  );
};

export default FAQ;
