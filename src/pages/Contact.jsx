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
    label: 'Location',
    icon: '📍',
    value: profile.location,
    href: null,
  },
  {
    label: 'GitHub',
    icon: '💻',
    value: 'github.com/zgraper',
    href: profile.github,
  },
];

function Contact() {
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
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for your message! (Demo only — no backend connected)');
            e.target.reset();
          }}
        >
          <h2 className="form-title">Send a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Your message..." required />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
