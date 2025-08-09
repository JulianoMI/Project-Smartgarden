import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Next-Generation IoT for
              <span className="gradient-text"> Intelligent Homes</span>
            </h1>
            <p className="hero-subtitle">
              Experience the future of living with TechNova's revolutionary climate monitoring and energy management systems. 
              Seamlessly integrate temperature sensors, air quality monitors, and automated controls.
            </p>
            <div className="hero-buttons">
              <Link to="/temperature" className="btn btn-primary">
                📊 Live Climate Data
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                🚀 Start Your Journey
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="smart-home-illustration">
              <div className="house-icon">🌟</div>
              <div className="sensor-dots">
                <span className="dot temp-sensor"></span>
                <span className="dot humidity-sensor"></span>
                <span className="dot air-quality-sensor"></span>
                <span className="dot energy-sensor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">Discover TechNova's Innovations</h2>
          <div className="interactive-features">
            {[
              {
                id: 'climate',
                icon: '🌡️',
                title: 'Advanced Climate Control',
                preview: 'Precision temperature and humidity management',
                details: 'Our revolutionary climate sensors provide real-time monitoring with ±0.1°C accuracy. Automated HVAC integration maintains optimal comfort while reducing energy consumption by up to 35%.'
              },
              {
                id: 'energy',
                icon: '⚡',
                title: 'Smart Energy Analytics',
                preview: 'Intelligent power consumption optimization',
                details: 'Machine learning algorithms analyze your usage patterns and automatically adjust systems for maximum efficiency. Track real-time consumption and receive personalized recommendations.'
              },
              {
                id: 'air',
                icon: '💨',
                title: 'Air Quality Monitoring',
                preview: 'Comprehensive atmospheric analysis',
                details: 'Monitor CO2, VOCs, particulates, and allergens with laboratory-grade sensors. Automated ventilation controls maintain healthy indoor air quality 24/7.'
              },
              {
                id: 'automation',
                icon: '🤖',
                title: 'Intelligent Automation',
                preview: 'Context-aware smart responses',
                details: 'Our AI learns your daily routines and preferences, creating personalized automation scenarios. From morning wake-up sequences to energy-saving sleep modes.'
              },
              {
                id: 'security',
                icon: '🛡️',
                title: 'Privacy-First Architecture',
                preview: 'Enterprise-grade data protection',
                details: 'End-to-end encryption, local data processing, and zero-knowledge architecture ensure your privacy. Military-grade security protocols protect all communications.'
              },
              {
                id: 'integration',
                icon: '🔗',
                title: 'Universal Compatibility',
                preview: 'Works with existing smart devices',
                details: 'Seamlessly integrates with 200+ smart home brands. Our open API and protocol adapters ensure compatibility with legacy and future devices.'
              }
            ].map((feature) => (
              <div 
                key={feature.id}
                className={`feature-dropdown ${activeFeature === feature.id ? 'active' : ''}`}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p className="feature-preview">{feature.preview}</p>
                  </div>
                  <div className="dropdown-arrow">
                    {activeFeature === feature.id ? '▼' : '▶'}
                  </div>
                </div>
                {activeFeature === feature.id && (
                  <div className="feature-details">
                    <p>{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="stats">
        <div className="container">
          <h2 className="stats-title">Proven Performance</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15K+</div>
              <div className="stat-label">Homes Automated</div>
              <div className="stat-description">Across 50+ countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5M+</div>
              <div className="stat-label">Sensors Deployed</div>
              <div className="stat-description">Real-time monitoring</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35%</div>
              <div className="stat-label">Energy Savings</div>
              <div className="stat-description">Average reduction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">System Reliability</div>
              <div className="stat-description">Continuous operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-container">
            {[
              {
                id: 'setup',
                question: 'How quickly can I set up TechNova systems?',
                answer: 'Most installations are completed within 2-4 hours. Our wireless sensors require no rewiring, and our technicians handle the entire setup process including network configuration and mobile app integration.'
              },
              {
                id: 'compatibility',
                question: 'Will it work with my existing smart home devices?',
                answer: 'Yes! TechNova integrates with 200+ brands including Google Home, Amazon Alexa, Apple HomeKit, Philips Hue, Nest, and many more. Our universal hub acts as a bridge between different protocols.'
              },
              {
                id: 'privacy',
                question: 'How is my data protected?',
                answer: 'We use military-grade encryption and local processing. Your data never leaves your home network unless you explicitly choose cloud backup. Zero-knowledge architecture means even we cannot access your personal information.'
              },
              {
                id: 'savings',
                question: 'What kind of energy savings can I expect?',
                answer: 'Our customers typically see 25-40% reduction in energy costs within the first year. The AI optimization continuously improves, learning your patterns and automatically adjusting for maximum efficiency.'
              },
              {
                id: 'support',
                question: 'What support do you provide?',
                answer: 'We offer 24/7 remote diagnostics, firmware updates, and technical support. Our mobile app includes troubleshooting guides, and our expert team is available via chat, phone, or video call.'
              }
            ].map((faq) => (
              <div 
                key={faq.id}
                className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{activeFaq === faq.id ? '−' : '+'}</span>
                </div>
                {activeFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Future?</h2>
            <p>Join 15,000+ homeowners who have revolutionized their living spaces with TechNova.</p>
            <div className="cta-buttons">
              <Link to="/temperature" className="btn btn-primary">
                📊 View Live Demo
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                🚀 Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 