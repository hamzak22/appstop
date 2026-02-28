import React from 'react';
import './Comparison.css';

const Comparison = () => {
  const comparisonData = [
    {
      name: 'App Stop',
      description: 'Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees',
      icon: '◆',
      metrics: {
        speed: true,
        flexibility: true,
        quality: true,
        scalability: true,
        affordability: true
      }
    },
    {
      name: 'In House Team',
      description: 'A full-time designer may ensure brand consistency, but there\'s a risk of limited expertise even though you pay regularly',
      icon: '👥',
      metrics: {
        speed: false,
        flexibility: false,
        quality: true,
        scalability: false,
        affordability: false
      }
    },
    {
      name: 'Creative Agencies',
      description: 'Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects',
      icon: '🎨',
      metrics: {
        speed: false,
        flexibility: false,
        quality: true,
        scalability: true,
        affordability: false
      }
    },
    {
      name: 'Freelancers',
      description: 'Freelancers may provide affordable design but they really lack consistency, reliability, and collaboration',
      icon: '👤',
      metrics: {
        speed: false,
        flexibility: true,
        quality: false,
        scalability: false,
        affordability: true
      }
    },
    {
      name: 'Self-Service Tools',
      description: 'DIY tools like website builders are budget-friendly, but you can\'t expect strategic thinking & originality',
      icon: '⚙️',
      metrics: {
        speed: false,
        flexibility: false,
        quality: true,
        scalability: true,
        affordability: false
      }
    }
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-header">
        <span className="comparison-badge">Why Choose Us</span>
        <h2 className="comparison-title font-primary">
          App Stop's <span className="italic font-playfair bold">Alternative?</span>
        </h2>
        <p className='comparison-subtitle font-primary bold'><span className='font-playfair italic'>Think</span> One More Time</p>
      </div>

      <div className="comparison-container">
        <div className="comparison-table">
          {/* Header Row */}
          <div className="comparison-row header-row">
            <div className="column platform-column">
              <span>Platform</span>
            </div>
            <div className="column metric-column">Speed</div>
            <div className="column metric-column">Flexibility</div>
            <div className="column metric-column">Quality</div>
            <div className="column metric-column">Scalability</div>
            <div className="column metric-column">Affordability</div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, index) => (
            <div key={index} className={`comparison-row data-row ${index === 0 ? 'highlighted' : ''}`}>
              <div className="column platform-column">
                <div className="platform-info">
                  <div className="platform-icon">{row.icon}</div>
                  <div className="platform-details">
                    <h3 className="platform-name font-primary tracking-wide">{row.name}</h3>
                    <p className="platform-description tracking-wide">{row.description}</p>
                  </div>
                </div>
              </div>
              <div className="column metric-column">
                <span className={`metric-badge ${row.metrics.speed ? 'positive' : 'negative'}`}>
                  {row.metrics.speed ? '✓' : '✕'}
                </span>
              </div>
              <div className="column metric-column">
                <span className={`metric-badge ${row.metrics.flexibility ? 'positive' : 'negative'}`}>
                  {row.metrics.flexibility ? '✓' : '✕'}
                </span>
              </div>
              <div className="column metric-column">
                <span className={`metric-badge ${row.metrics.quality ? 'positive' : 'negative'}`}>
                  {row.metrics.quality ? '✓' : '✕'}
                </span>
              </div>
              <div className="column metric-column">
                <span className={`metric-badge ${row.metrics.scalability ? 'positive' : 'negative'}`}>
                  {row.metrics.scalability ? '✓' : '✕'}
                </span>
              </div>
              <div className="column metric-column">
                <span className={`metric-badge ${row.metrics.affordability ? 'positive' : 'negative'}`}>
                  {row.metrics.affordability ? '✓' : '✕'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
