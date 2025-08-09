import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About TechNova</h1>
            <p className="about-subtitle">
              We build intelligent, sustainable living experiences through advanced IoT, edge computing,
              and human-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="values">
        <div className="container">
          <h2 className="section-title text-center">Company Snapshot</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Global Footprint</h3>
              <p>Operating in 50+ countries with regional data centers for low-latency processing.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>Edge-first</h3>
              <p>Privacy by default. 80% of automations run locally on our secure home hub.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔐</div>
              <h3>Zero-Trust Security</h3>
              <p>End-to-end encryption, hardware keys, and verifiable builds for every release.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>Designed for longevity: modular hardware, OTA updates, and minimal standby power.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <div className="story-icon">🕒</div>
            </div>
            <div className="story-content">
              <h2>Milestones</h2>
              <p>From a research project to a global IoT platform powering millions of sensors.</p>
              <div className="story-stats">
                <div className="story-stat">
                  <div className="stat-number">2019</div>
                  <div className="stat-label">R&D Lab</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">2021</div>
                  <div className="stat-label">Public Launch</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">2024</div>
                  <div className="stat-label">2.5M+ Devices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="team">
        <div className="container">
          <h2 className="section-title text-center">Leadership</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">🧭</div>
              <h3>Alex Rivera</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">Systems engineer focused on resilient, privacy-preserving home automation.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🧪</div>
              <h3>Priya Nair</h3>
              <p className="team-role">Chief Scientist</p>
              <p className="team-bio">Applied ML researcher specializing in energy optimization and anomaly detection.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🎨</div>
              <h3>Kenji Mori</h3>
              <p className="team-role">Head of Product</p>
              <p className="team-bio">Designs thoughtful experiences that make complex systems feel effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Building Homes That Think With You</h2>
            <p>Discover how TechNova can help you reduce energy costs and elevate comfort.</p>
            <a href="/contact" className="btn btn-primary">Talk to Our Team</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 