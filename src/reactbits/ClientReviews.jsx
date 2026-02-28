import React, { useRef, useEffect, useState } from 'react';
import './ClientReviews.css';

const ClientReviews = () => {
  const reviewsData = [
    {
      id: 1,
      text: "I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development.",
      name: 'Austin',
      title: 'CEO @ Clarity LLC',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#FFF8DC'
    },
    {
      id: 2,
      text: 'Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!',
      name: 'Nora Peng',
      title: 'Marketing Manager @ Voc AI',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#F8F0FF'
    },
    {
      id: 3,
      text: 'Design Monks is a great partner for end-to-end design and development. From clean, modern aesthetics to seamless development with cutting-edge expertise, they exceeded my expectations. I would recommend them highly and look forward to collaborating again!',
      name: 'Anika',
      title: 'Founder @ Compass',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#F0F8FF'
    },
    {
      id: 4,
      text: "Design Monks on our websites was an amazing journey. They were patient, incredibly skilled, and delivered outstanding quality work. We're thrilled to have worked with them.",
      name: 'David Chen',
      title: 'Director @ tech studio',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#FFF0F5'
    },
    {
      id: 5,
      text: "The team showed exceptional attention to detail and creativity. Every element was thoughtfully designed, and they were always open to suggestions. Truly a pleasure to collaborate with.",
      name: 'Sarah Martinez',
      title: 'Product Lead @ StartUp',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#F0FFF0'
    },
    {
      id: 6,
      text: "From concept to completion, the execution was flawless. They brought our vision to life with professionalism and innovative thinking. Highly recommend for any design/development project.",
      name: 'James Wilson',
      title: 'Founder @ Growth Labs',
      image: 'https://api.placeholder.com/48/48',
      bgColor: '#FFF5E1'
    },
  ];

  const row1 = reviewsData.slice(0, 3);
  const row2 = reviewsData.slice(3, 6);
  const row3 = reviewsData.slice(0, 3);

  return (
    <section className="client-reviews">
      <div className="reviews-header">
        <span className="reviews-badge">Referral From People</span>
        <h2 className="reviews-title font-primary">Trusted by People</h2>
        <p className="reviews-subtitle font-playfair">Chosen By Brands</p>
      </div>

      <div className="reviews-container">
        {/* Row 1 - Right to Left */}
        <div className="review-row review-row-rtl">
          <div className="review-gradient review-gradient-left"></div>
          <div className="review-track">
            {[...row1, ...row1].map((review, index) => (
              <div key={`row1-${index}`} className={`review-card review-card-${review.id}`}>
                <div className="review-content">
                  <p className="review-text">{review.text}</p>
                </div>
                <div className="review-author">
                  <div className="author-avatar" style={{ backgroundColor: review.bgColor }}>
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{review.name}</div>
                    <div className="author-title">{review.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="review-gradient review-gradient-right"></div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="review-row review-row-ltr">
          <div className="review-gradient review-gradient-left"></div>
          <div className="review-track">
            {[...row2, ...row2].map((review, index) => (
              <div key={`row2-${index}`} className={`review-card review-card-${review.id}`}>
                <div className="review-content">
                  <p className="review-text">{review.text}</p>
                </div>
                <div className="review-author">
                  <div className="author-avatar" style={{ backgroundColor: review.bgColor }}>
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{review.name}</div>
                    <div className="author-title">{review.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="review-gradient review-gradient-right"></div>
        </div>

        {/* Row 3 - Right to Left */}
        <div className="review-row review-row-rtl">
          <div className="review-gradient review-gradient-left"></div>
          <div className="review-track">
            {[...row3, ...row3].map((review, index) => (
              <div key={`row3-${index}`} className={`review-card review-card-${review.id}`}>
                <div className="review-content">
                  <p className="review-text">{review.text}</p>
                </div>
                <div className="review-author">
                  <div className="author-avatar" style={{ backgroundColor: review.bgColor }}>
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{review.name}</div>
                    <div className="author-title">{review.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="review-gradient review-gradient-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
