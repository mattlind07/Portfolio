import { Link } from 'react-router-dom';
import './Projects.css';
import { PROJECTS } from '../data/projects';
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon, LockIcon } from '../components/Icons';

function ProjectLink({ link, privateNote }) {
    if (link) {
        return (
            <a className="btn btn-outline project-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.kind === 'github' && <GitHubIcon width="16" height="16" />}
                {link.label}
                <ArrowUpRightIcon />
            </a>
        );
    }
    return (
        <p className="project-private">
            <LockIcon /> {privateNote}
        </p>
    );
}

function Projects() {
    return (
        <section className="page">
            <header className="section-header">
                <h1 className="section-title">Projects</h1>
                <p className="section-subtitle">
                    A mix of professional, academic, and personal work, from OS kernels to full-stack web apps.
                </p>
            </header>

            <div className="projects-list">
                {PROJECTS.map((project) => (
                    <article
                        key={project.slug}
                        id={project.slug}
                        data-reveal
                        className={`card project-card ${project.layout === 'wide' ? 'project-card--wide' : ''}`}
                    >
                        <header className="project-header">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-tagline">{project.tagline}</p>
                            <ul className="project-tags" aria-label="Technologies">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="tag">{tag}</li>
                                ))}
                            </ul>
                        </header>

                        <div className="project-body">
                            <div className={`project-media ${project.mediaVariant ? `media-${project.mediaVariant}` : ''}`}>
                                {project.media.map((img) => (
                                    <img key={img.alt} src={img.src} alt={img.alt} loading="lazy" />
                                ))}
                            </div>

                            <div className="project-info">
                                <h3>Overview</h3>
                                <p className="project-description">{project.description}</p>

                                <h3>Key Features</h3>
                                <ul className="project-features">
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="project-footer">
                                    <Link to={`/projects/${project.slug}`} className="btn btn-primary project-link">
                                        View details <ArrowRightIcon />
                                    </Link>
                                    <ProjectLink link={project.link} privateNote={project.privateNote} />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
