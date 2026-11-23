import { Link, useParams } from 'react-router-dom';
import { PROJECTS, getProject } from '../data/projects';
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon, LockIcon } from '../components/Icons';
import NoPage from './NoPage';
import './ProjectDetail.css';

function ArchitectureDiagram({ architecture }) {
    return (
        <figure className="arch">
            <ol className="arch-flow">
                {architecture.nodes.map((node, i) => (
                    <li key={node.title} className="arch-step" data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                        <div className="arch-node">
                            <span className="arch-index">{String(i + 1).padStart(2, '0')}</span>
                            <h3>{node.title}</h3>
                            <p className="arch-subtitle">{node.subtitle}</p>
                            <ul>
                                {node.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        {i < architecture.nodes.length - 1 && <span className="arch-arrow" aria-hidden="true" />}
                    </li>
                ))}
            </ol>
            <figcaption>{architecture.caption}</figcaption>
        </figure>
    );
}

function ProjectDetail() {
    const { slug } = useParams();
    const project = getProject(slug);
    if (!project) return <NoPage />;

    const { details = {} } = project;
    const index = PROJECTS.indexOf(project);
    const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(index + 1) % PROJECTS.length];
    const [hero, ...gallery] = project.media;
    const isWideHero = project.layout === 'wide' || project.mediaVariant === 'strips';

    const meta = [
        details.type && { label: 'Type', value: details.type },
        details.role && { label: 'Role', value: details.role },
        details.timeline && { label: 'Timeline', value: details.timeline },
    ].filter(Boolean);

    return (
        <article className="page detail">
            <Link to="/projects" className="text-link detail-back">
                <ArrowRightIcon style={{ transform: 'rotate(180deg)' }} /> All projects
            </Link>

            {/* Header */}
            <header className="detail-header">
                <h1 className="detail-title">{project.title}</h1>
                <p className="detail-tagline">{project.tagline}</p>
                <ul className="project-tags detail-tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                        <li key={tag} className="tag">{tag}</li>
                    ))}
                </ul>
            </header>

            {/* Quick facts + link */}
            <div className="card detail-meta" data-reveal>
                {meta.map(({ label, value }) => (
                    <div key={label} className="detail-meta-item">
                        <span>{label}</span>
                        <strong>{value}</strong>
                    </div>
                ))}
                <div className="detail-meta-action">
                    {project.link ? (
                        <a className="btn btn-primary" href={project.link.href} target="_blank" rel="noopener noreferrer">
                            {project.link.kind === 'github' && <GitHubIcon width="16" height="16" />}
                            {project.link.label} <ArrowUpRightIcon />
                        </a>
                    ) : (
                        <p className="detail-private">
                            <LockIcon /> {project.privateNote}
                        </p>
                    )}
                </div>
            </div>

            {/* Hero screenshot(s) */}
            <div className={`detail-hero ${isWideHero ? 'is-wide' : `media-${project.mediaVariant || 'default'}`}`} data-reveal>
                {(project.mediaVariant === 'strips' ? project.media : [hero]).map((img) => (
                    <img key={img.alt} src={img.src} alt={img.alt} />
                ))}
            </div>

            {/* Overview */}
            <section className="detail-section" data-reveal>
                <h2>Overview</h2>
                <p className="detail-lead">{project.description}</p>
            </section>

            {/* How it works */}
            {details.architecture && (
                <section className="detail-section">
                    <h2 data-reveal>How it works</h2>
                    <ArchitectureDiagram architecture={details.architecture} />
                </section>
            )}

            {/* Features */}
            <section className="detail-section">
                <h2 data-reveal>Key features</h2>
                <ul className="detail-features">
                    {project.features.map((feature, i) => (
                        <li key={feature} className="card" data-reveal style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}>
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Challenges: only shown once content is added in src/data/projects.js */}
            {details.challenges?.length > 0 && (
                <section className="detail-section">
                    <h2 data-reveal>Challenges &amp; what I learned</h2>
                    <div className="detail-challenges">
                        {details.challenges.map((c) => (
                            <div key={c.title} className="card detail-challenge" data-reveal>
                                <h3>{c.title}</h3>
                                <p>{c.body}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Extra screenshots (non-strip projects) */}
            {project.mediaVariant !== 'strips' && gallery.length > 0 && (
                <section className="detail-section">
                    <h2 data-reveal>Screenshots</h2>
                    <div className="detail-gallery">
                        {gallery.map((img) => (
                            <img key={img.alt} src={img.src} alt={img.alt} loading="lazy" data-reveal />
                        ))}
                    </div>
                </section>
            )}

            {/* Prev / next */}
            <nav className="detail-pager" aria-label="More projects">
                <Link to={`/projects/${prev.slug}`} className="card detail-pager-link">
                    <span>← Previous</span>
                    <strong>{prev.title}</strong>
                </Link>
                <Link to={`/projects/${next.slug}`} className="card detail-pager-link is-next">
                    <span>Next →</span>
                    <strong>{next.title}</strong>
                </Link>
            </nav>
        </article>
    );
}

export default ProjectDetail;
