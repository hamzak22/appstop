import React from 'react';
import './Comparison.css';

const Comparison = () => {
  const appStopPoints = [
    'Dedicated strategist and product-focused team from day one',
    'Fast milestone releases with transparent weekly updates',
    'Unlimited revisions until your goals are fully met',
    'Custom architecture built to scale with your business',
    '24/7 support after launch with proactive optimization'
  ];

  const otherAgencyPoints = [
    'Team switching can break product context and momentum',
    'Longer delivery cycles due to handoff-heavy workflows',
    'Fixed revision limits can increase final project cost',
    'Template-first approach often limits product uniqueness',
    'Post-launch support is usually time-limited or paid separately'
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-ambient-orb comparison-ambient-orb-left" aria-hidden="true" />
      <div className="comparison-ambient-orb comparison-ambient-orb-right" aria-hidden="true" />

      <div className="comparison-shell">
        <div className="comparison-header">
          <span className="comparison-badge">App Stop vs Other Agencies</span>
          <h2 className="comparison-title font-primary">
            Why Teams Choose <span className="font-playfair italic">App Stop</span>
          </h2>
          <p className="comparison-subtitle font-primary">
            A partner built for speed, quality, and outcomes from first strategy call to long-term support.
          </p>
        </div>

        <div className="comparison-grid" aria-label="App Stop and other agencies comparison">
          <article className="comparison-card comparison-card-appstop">
            <header className="comparison-card-header">
              <span className="comparison-card-label">App Stop</span>
              <h3 className="comparison-card-title font-primary">Built as your growth partner</h3>
              <p className="comparison-card-description">
                We align strategy, design, and development into one focused workflow that keeps launches sharp and predictable.
              </p>
            </header>

            <ul className="comparison-list" aria-label="Benefits of App Stop">
              {appStopPoints.map((point, index) => (
                <li
                  key={point}
                  className="comparison-list-item positive"
                  style={{ '--stagger': `${index * 90}ms` }}
                >
                  <span className="comparison-point-icon" aria-hidden="true">+</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="comparison-card-footer">
              <span className="comparison-chip">Unlimited revisions</span>
              <span className="comparison-chip">Long-term support</span>
              <span className="comparison-chip">Custom solutions</span>
            </div>
          </article>

          <article className="comparison-card comparison-card-other">
            <header className="comparison-card-header">
              <span className="comparison-card-label">Other Agencies</span>
              <h3 className="comparison-card-title font-primary">Often built around internal process</h3>
              <p className="comparison-card-description">
                Many agencies deliver solid work, but execution can be rigid, slower, and less aligned with your evolving goals.
              </p>
            </header>

            <ul className="comparison-list" aria-label="Challenges with generic agencies">
              {otherAgencyPoints.map((point, index) => (
                <li
                  key={point}
                  className="comparison-list-item negative"
                  style={{ '--stagger': `${index * 90}ms` }}
                >
                  <span className="comparison-point-icon" aria-hidden="true">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="comparison-card-footer">
              <span className="comparison-chip comparison-chip-muted">Revision caps</span>
              <span className="comparison-chip comparison-chip-muted">Longer timelines</span>
              <span className="comparison-chip comparison-chip-muted">Limited support windows</span>
            </div>
          </article>
        </div>

        <p className="comparison-conclusion font-primary">
          If you want a team that treats your product like a long-term business asset, App Stop is the better choice.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
