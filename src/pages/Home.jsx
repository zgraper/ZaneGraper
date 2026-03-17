import { Link } from 'react-router-dom';
import profile from '../data/profile';
import './Home.css';

const skills = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'SQL', 'HTML/CSS'] },
  { category: 'AI & ML', items: ['LLMs', 'RAG Pipelines', 'NLP', 'Deep Learning', 'PyTorch', 'TensorFlow'] },
  { category: 'Cloud', items: ['AWS (Certified)', 'Azure ML', 'S3', 'Lambda', 'DynamoDB'] },
  { category: 'Frameworks', items: ['LangChain', 'CrewAI', 'React', 'Bubble.io'] },
  { category: 'Project Management', items: ['Agile/Scrum', 'Lean Six Sigma Black Belt', 'CAPM®', 'Jira'] },
  { category: 'Data & Analytics', items: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'scikit-learn'] },
];

function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-title">{profile.title}</h2>
          {profile.tagline && <p className="hero-tagline">{profile.tagline}</p>}
          <p className="hero-location">📍 {profile.location}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="section quick-nav">
        <h2 className="section-title">Explore More</h2>
        <div className="quick-nav-grid">
          <Link to="/projects" className="quick-card">
            <span className="quick-icon">🚀</span>
            <h3>Projects</h3>
            <p>AI platforms, data tools, and more</p>
          </Link>
          <Link to="/experience" className="quick-card">
            <span className="quick-icon">💼</span>
            <h3>Experience</h3>
            <p>Career history and education</p>
          </Link>
          <Link to="/contact" className="quick-card">
            <span className="quick-icon">✉️</span>
            <h3>Contact</h3>
            <p>Let&apos;s connect and collaborate</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
