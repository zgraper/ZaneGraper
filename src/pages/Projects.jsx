import projects from '../data/projects';
import './Projects.css';

function Projects() {
  return (
    <main className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A selection of AI, data, and automation projects I&apos;ve built or led.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <h2 className="project-title">{project.title}</h2>
              <span className="project-period">{project.period}</span>
            </div>
            <p className="project-role">{project.role}</p>
            <p className="project-description">{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
