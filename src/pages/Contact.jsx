import { useState } from 'react';
import profile from '../data/profile';
import './Contact.css';

const contactItems = [
  {
    label: 'Email',
    icon: '✉️',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'LinkedIn',
    icon: '🔗',
    value: 'linkedin.com/in/zanegraper',
    href: profile.linkedin,
  },
  {
    label: 'Credly',
    icon: '🏅',
    value: 'credly.com/users/zgraper',
    href: profile.credly,
  },
  {
    label: 'GitHub',
    icon: '💻',
    value: 'github.com/zgraper',
    href: profile.github,
  },
  {
    label: 'Location',
    icon: '📍',
    value: profile.location,
    href: null,
  },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/zgraper@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Let&apos;s connect! Reach out via email or LinkedIn.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact cards */}
        <div className="contact-cards">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-card">
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-value contact-link"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Send a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="form-feedback form-success">Message sent! I&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="form-feedback form-error">Something went wrong. Please try again or email directly.</p>
          )}
        </form>
      </div>
    </main>
  );
}

export default Contact;
