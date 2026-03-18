import { experience, education, certifications, internships } from '../data/experience';
import mensaBadge from '../certifications/american-mensa-member.png';
import './Experience.css';

function Experience() {
  return (
    <main className="experience-page">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">Career history, education, and certifications.</p>
      </div>

      {/* Work experience */}
      <section className="exp-section">
        <h2 className="exp-section-title">Professional Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-header-left">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="company-logo"
                      />
                    )}
                    <div>
                      <h3 className="job-role">{job.role}</h3>
                      <p className="job-company">{job.company}</p>
                    </div>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="job-tools">
                  {job.tools.map((tool) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="exp-section">
        <h2 className="exp-section-title">Education</h2>
        <div className="edu-grid">
          {education.map((edu) => (
            <div key={edu.id} className="edu-card">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="edu-logo"
                />
              )}
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school} — {edu.location}</p>
              <p className="edu-period">{edu.period}{edu.gpa && ` · GPA: ${edu.gpa}`}</p>
              <ul className="edu-highlights">
                {edu.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="exp-section">
        <h2 className="exp-section-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card-body">
                <span className="cert-icon">✔</span>
                <div className="cert-card-info">
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="cert-view-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Mensa */}
      <aside className="mensa-aside">
        <img src={mensaBadge} alt="American Mensa Member badge" className="mensa-badge" />
        <div className="mensa-text">
          <h3 className="mensa-title">American Mensa Member</h3>
          <p className="mensa-description">
            Mensa International is the world's largest and most well-known high-IQ society,
            open to individuals who score in the top 2% of the population on an accepted
            standardized intelligence test. Membership is a testament to exceptional
            cognitive ability and intellectual curiosity.
          </p>
        </div>
      </aside>

      {/* Internships & Other */}
      <section className="exp-section">
        <h2 className="exp-section-title">Internships &amp; Other</h2>
        <div className="timeline">
          {internships.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-header-left">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="company-logo"
                      />
                    )}
                    <div>
                      <h3 className="job-role">{job.role}</h3>
                      <p className="job-company">{job.company}</p>
                    </div>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="job-tools">
                  {job.tools.map((tool) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Experience;
