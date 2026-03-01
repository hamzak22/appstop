import React, { useState } from 'react';
import { FaCheck, FaWhatsapp, FaArrowRight } from 'react-icons/fa6';

const ContactForm = () => {
  const [budget, setBudget] = useState('');

  const budgets = ["Less than $5K", "$5K - $10K", "$10K - $20K", "$20K - $50K", "More than $50K"];

  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-8 bg-[#ffffff]">
      <div className="relative max-w-[1200px] w-full bg-[#111111] rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
        {/* Subtle red glow inside */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/20 blur-[130px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col h-full">
            <div className="inline-block px-5 py-2 rounded-full border border-green-900/60 bg-green-900/20 text-green-400 text-sm font-medium w-fit mb-8">
              Claim a $799 Consultation, on Us!
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-8 font-primary tracking-tight">
              Enhance Your Brand<br/>
              Potential <span className="font-playfair italic font-medium text-gray-200">At No Cost!</span>
            </h2>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center text-gray-200 gap-3 text-base">
                <div className="rounded-full p-1 border border-gray-400 flex items-center justify-center shrink-0">
                  <FaCheck className="text-[10px] text-gray-200" />
                </div>
                Expect a response from us within 24 hours
              </li>
              <li className="flex items-center text-gray-200 gap-3 text-base">
                <div className="rounded-full p-1 border border-gray-400 flex items-center justify-center shrink-0">
                  <FaCheck className="text-[10px] text-gray-200" />
                </div>
                We're happy to sign an NDA upon request.
              </li>
              <li className="flex items-center text-gray-200 gap-3 text-base">
                <div className="rounded-full p-1 border border-gray-400 flex items-center justify-center shrink-0">
                  <FaCheck className="text-[10px] text-gray-200" />
                </div>
                Get access to a team of dedicated product specialists.
              </li>
            </ul>

           
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col justify-center lg:pl-4">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2.5">
                <label className="text-white font-bold font-primary text-[15px] tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-[#1c1c1c] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-[#252525] transition-colors font-primary text-[15px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label className="text-white font-bold font-primary text-[15px] tracking-wide">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="yourmail@gmail.com" 
                    className="bg-[#1c1c1c] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-[#252525] transition-colors font-primary text-[15px]"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-white font-bold font-primary text-[15px] tracking-wide">Whatsapp Number</label>
                  <input 
                    type="tel" 
                    placeholder="1 123 1234567" 
                    className="bg-[#1c1c1c] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-[#252525] transition-colors font-primary text-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-white font-bold font-primary text-[15px] tracking-wide">Project Budget</label>
                <div className="flex flex-wrap gap-3">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`px-5 py-2.5 rounded-xl border text-[14px] font-primary transition-all duration-200 ${
                        budget === b 
                          ? 'border-white text-white bg-white/10' 
                          : 'border-white/5 text-gray-400 bg-[#1c1c1c] hover:bg-[#252525] hover:text-white'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-white font-bold font-primary text-[15px] tracking-wide">Project Details</label>
                <textarea 
                  rows="4"
                  placeholder="I want to redesign my website.." 
                  className="bg-[#1c1c1c] border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-[#252525] transition-colors resize-none font-primary text-[15px]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 text-white bg-gradient-to-r from-[#f83131] to-[#D52020] hover:from-[#D52020] hover:to-[#880f0f] px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 w-fit transition-all hover:scale-105 font-primary text-[15px]"
              >
                Let's Connect <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
