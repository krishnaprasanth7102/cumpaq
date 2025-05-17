import React, { useRef, useState } from 'react';
import './App.css';


const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const services = [
    'Black & White Printing ',
    'Color Printing ',
    'Lamination ',
    'Spiral Binding ',
    'Typing (English) ',
    'Typing (Malayalam) ',
    'Typing (Hindi) ',
    'Typing (Sanskrit) ',
    'CSC Services ',
    'PSC Registration ',
    'Website Building '
  ];

  const faqs = [
    {
      question: "How can I place an order?",
      answer: "You can visit our shop directly or call us at +91 9447147770 to place your order."
    },
    {
      question: "What are your working hours?",
      answer: "We're open Monday to Saturday from 9 AM to 8 PM. Closed on Sundays."
    },
    {
      question: "Can I get urgent printing done?",
      answer: "Yes, we provide express services for urgent printing needs."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we provide basic design services for your printing needs."
    }
  ];

  return (
    <div className="app">
 <nav className="deepseek-nav">
  <div className="nav-container">
    {/* Brand Logo */}
    <div className="nav-brand">
      <div className="logo">CUMPAQ</div>
    </div>

    {/* Desktop Menu */}
        <div className="nav-links">
          <button onClick={() => scrollTo(homeRef)}>Home</button>
          <button onClick={() => scrollTo(servicesRef)}>Services</button>
          <button onClick={() => scrollTo(featuresRef)}>Features</button>
          <button onClick={() => scrollTo(faqRef)}>FAQ</button>
          <button onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-links">
          <button onClick={() => scrollTo(homeRef)}>Home</button>
          <button onClick={() => scrollTo(servicesRef)}>Services</button>
          <button onClick={() => scrollTo(featuresRef)}>Features</button>
          <button onClick={() => scrollTo(faqRef)}>FAQ</button>
          <button onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>
      )}
    </nav>
      {/* Hero Section */}
      <section ref={homeRef} className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>PRINTING & DIGITAL SERVICES</h1>
          <p>Where quality meets affordability</p>
          <button className="cta-button" onClick={() => scrollTo(servicesRef)}>
            Explore Services
          </button>
        </div>
        <div className="printing-icons">
          <div className="icon">✂️</div>
          <div className="icon">🖨️</div>
          <div className="icon">📄</div>
          <div className="icon">📊</div>
          <div className="icon">🖥️</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>ABOUT CUMPAQ</h2>
          <p>
            CUMPAQ is your trusted partner for all printing and digital needs. 
            With our affordable pricing and professional services, we deliver 
            quality results for individuals and businesses alike.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services">
        <div className="container">
          <h2>OUR SERVICES</h2>
          <p className="section-subtitle">Every service, delivered with trust</p>
          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="services-bg-pattern"></div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features">
        <div className="container">
          <h2>WHY CHOOSE US</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Affordable Pricing</h3>
              <p>Reliable services. Trusted by many</p>
            </div>
            <div className="feature-card">
              <h3>Fast Service</h3>
              <p>Quick turnaround times</p>
            </div>
            <div className="feature-card">
              <h3>Quality Materials</h3>
              <p>Premium quality printing materials</p>
            </div>
            <div className="feature-card">
              <h3>Expert Staff</h3>
              <p>Knowledgeable and helpful team</p>
            </div>
            <div className="feature-card">
              <h3>Multiple Languages</h3>
              <p>Typing services in 4 languages</p>
            </div>
            <div className="feature-card">
              <h3>Digital Services</h3>
              <p>From printing to website building</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="faq">
        <div className="container">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${activeQuestion === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleQuestion(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span>{activeQuestion === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <div className="container">
          <h2>CONTACT US</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>GET IN TOUCH</h3>
              <p><strong>Phone:</strong> +91 9447147770</p>
              <p><strong>Email:</strong> cumpaqkrs@gmail.com</p>
              <p><strong>Working Hours:</strong> 9AM - 8PM (Mon-Sat)</p>
              <p><strong>Closed:</strong> Sundays</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">CUMPAQ</div>
            <div className="footer-links">
              <button onClick={() => scrollTo(homeRef)}>Home</button>
              <button onClick={() => scrollTo(servicesRef)}>Services</button>
              <button onClick={() => scrollTo(featuresRef)}>Features</button>
              <button onClick={() => scrollTo(faqRef)}>FAQ</button>
              <button onClick={() => scrollTo(contactRef)}>Contact</button>
            </div>
            <div className="footer-contact">
              <p>+91 9447147770</p>
              <p>cumpaqkrs@gmail.com</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} CUMPAQ Printing Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;