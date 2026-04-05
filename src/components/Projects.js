import React from "react"
import { projectItems } from "./portfolioData"

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="section-label">Development</div>
            <h2 className="section-title">Projects &amp; Repositories</h2>

            <div className="projects-grid">
                {projectItems.map((project) => (
                    <a
                        className="project-card reveal-on-scroll"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        key={project.name}
                    >
                        <div className="project-img-wrap">
                            <div className={`project-img-placeholder ${project.variant}`}>
                                <img
                                    className="project-img"
                                    src={project.image}
                                    alt={project.name}
                                />
                            </div>
                        </div>
                        <div className="project-body">
                            <div className="project-type">{project.type}</div>
                            <div className="project-name">{project.name}</div>
                            <p className="project-desc">{project.desc}</p>
                            <span className="project-link">Learn More →</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
