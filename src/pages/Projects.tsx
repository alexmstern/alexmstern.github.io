import { projects } from '../data/projects'
import { techIcons } from '../data/techIcons'

export default function Projects() {
  return (
    <section className="page projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.name}
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="project-icon" src={project.icon} alt="" />
            <div className="project-body">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((key) => {
                  const { label, viewBox, path } = techIcons[key]
                  return (
                    <svg
                      key={key}
                      className="project-tech-icon"
                      viewBox={viewBox}
                      width="16"
                      height="16"
                      fill="currentColor"
                      role="img"
                      aria-label={label}
                    >
                      <title>{label}</title>
                      <path d={path} />
                    </svg>
                  )
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
