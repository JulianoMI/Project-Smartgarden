import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'climate',
    budget: 'under-5k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setStep(1);
      setFormData({ name: '', email: '', phone: '', projectType: 'climate', budget: 'under-5k', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Contact TechNova</h1>
            <p className="contact-subtitle">Tell us about your home. We'll design an intelligent system tailored to you.</p>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid single">
            {/* Wizard Form */}
            <div className="contact-form-section">
              <h2>Project Planner</h2>
              <div className="wizard-steps">
                <div className={`wizard-step ${step >= 1 ? 'active' : ''}`}>1. Basics</div>
                <div className={`wizard-step ${step >= 2 ? 'active' : ''}`}>2. Details</div>
                <div className={`wizard-step ${step >= 3 ? 'active' : ''}`}>3. Review</div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="jane@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 650 000 0000" />
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="projectType">Project Type *</label>
                      <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required>
                        <option value="climate">Climate & Air Quality</option>
                        <option value="energy">Energy Optimization</option>
                        <option value="security">Security & Access</option>
                        <option value="automation">Whole-home Automation</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Estimated Budget *</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Goals & Notes</label>
                      <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us what matters most (comfort, savings, privacy, etc.)" />
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                      <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="card">
                      <div className="mb-4"><strong>Name:</strong> {formData.name || '—'}</div>
                      <div className="mb-4"><strong>Email:</strong> {formData.email || '—'}</div>
                      <div className="mb-4"><strong>Phone:</strong> {formData.phone || '—'}</div>
                      <div className="mb-4"><strong>Project:</strong> {formData.projectType}</div>
                      <div className="mb-4"><strong>Budget:</strong> {formData.budget}</div>
                      <div className="mb-4"><strong>Notes:</strong> {formData.message || '—'}</div>
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                      <button type="submit" className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </>
                )}

                {submitStatus === 'success' && (
                  <div className="success-message">✅ Thanks! We will contact you within 24 hours.</div>
                )}
              </form>
            </div>

            {/* Company Info removed as requested */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 