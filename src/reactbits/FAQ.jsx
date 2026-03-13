"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'How can I start a project with Design Monks?',
      answer: 'Getting started is simple! Reach out to us through our website or contact form, and our team will schedule a consultation call to understand your project requirements, timeline, and goals. After that, we\'ll provide you with a proposal and timeline.'
    },
    {
      id: 2,
      question: 'Why is Design Monks different?',
      answer: 'We combine exceptional design with reliable development, maintain smooth communication, and quickly act on feedback. Our team is dedicated to delivering exactly what you need with a focus on quality and professionalism.'
    },
    {
      id: 3,
      question: 'How Long Does a Design Project Take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple projects might take 2-4 weeks, while comprehensive design systems and large applications can take 8-12 weeks. We\'ll provide you with an accurate timeline during the initial consultation.'
    },
    {
      id: 4,
      question: 'Is Design Monks a start-up-friendly agency?',
      answer: 'Absolutely! We work with startups of all sizes and understand the unique challenges and budgets of early-stage companies. We\'re flexible with our packages and can tailor solutions to fit your needs and growth stage.'
    },
    {
      id: 5,
      question: 'What design tools do you use?',
      answer: 'We primarily use industry-leading tools like Figma for design and prototyping, Adobe Creative Suite for additional design work, and modern development tools for implementation. We choose tools based on what\'s best for your specific project.'
    },
    {
      id: 6,
      question: 'Do you provide UX audits or redesigns for existing products?',
      answer: 'Yes, we offer comprehensive UX audits and redesign services for existing products. We analyze your current product, identify improvements, and create detailed recommendations or implement a complete redesign to enhance user experience and engagement.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-badge">Frequently Asked Questions</span>
        <h2 className="faq-title font-primary text-5xl">Your Questions</h2>
        <p className="faq-subtitle font-playfair font-bold italic text-5xl">Answered!</p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={item.id} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="question-text">{item.question}</span>
              <svg
                className="faq-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
