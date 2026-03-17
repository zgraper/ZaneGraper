import { Link } from 'react-router-dom';
import profile from '../data/profile';
import projects from '../data/projects';
import './Home.css';

const focusAreas = [
  {
    icon: '🤖',
    title: 'AI / Machine Learning',
    description: 'LLMs, RAG pipelines, NLP, vector search, and production-grade AI systems.',
  },
  {
    icon: '📈',
    title: 'Quantitative Finance',
    description: 'Commodity analytics, algorithmic trading platforms, and financial modeling.',
  },
  {
    icon: '⚡',
    title: 'Automation & Agents',
    description: 'Multi-agent systems with CrewAI and LangChain that replace manual workflows.',
  },
  {
    icon: '💻',
    title: 'Full-Stack Development',
    description: 'React front-ends, Python APIs, and AWS cloud infrastructure at production scale.',
  },
];

const featuredProjects = projects.slice(0, 4);

function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-summary">{profile.heroSummary}</p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <a href={profile.resumePdf} target="_blank" rel="noreferrer" className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="feat-card">
              <div className="feat-card-header">
                <h3 className="feat-title">{project.title}</h3>
                {project.flagship && <span className="feat-flagship">Flagship</span>}
              </div>
              <p className="feat-description">{project.description}</p>
              <div className="feat-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="featured-footer">
          <Link to="/projects" className="btn btn-outline">View All Projects →</Link>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section focus-section">
        <h2 className="section-title">Skills &amp; Focus Areas</h2>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div key={area.title} className="focus-card">
              <span className="focus-icon">{area.icon}</span>
              <h3 className="focus-title">{area.title}</h3>
              <p className="focus-description">{area.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
