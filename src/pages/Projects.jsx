import projects from '../data/projects';
import './Projects.css';

const CATEGORIES = ['Applications', 'AI / ML Systems', 'Automation'];

function Projects() {
  return (
    <main className="projects-page">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A curated selection of AI, data, and automation projects I&apos;ve built.
        </p>
      </div>

      {CATEGORIES.map((category) => {
        const categoryProjects = projects.filter((p) => p.category === category);
        if (categoryProjects.length === 0) return null;
        return (
          <section key={category} className="project-category">
            <h2 className="category-title">{category}</h2>
            <div className="projects-grid">
              {categoryProjects.map((project) => (
                <article
                  key={project.id}
                  className={`project-card${project.flagship ? ' project-card--flagship' : ''}`}
                >
                  <div className="project-card-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.flagship && (
                      <span className="flagship-badge">Flagship</span>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        View Live
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                      >
                        View Repo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Projects;
