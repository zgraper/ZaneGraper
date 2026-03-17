import { experience, education, certifications } from '../data/experience';
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
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">{job.company}</p>
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
        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert} className="cert-item">
              <span className="cert-icon">✔</span>
              {cert}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Experience;
