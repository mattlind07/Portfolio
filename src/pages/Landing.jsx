import { Link } from 'react-router-dom';
import Headshot from '../assets/Headshot.jpeg';
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data/links';
import { FEATURED_PROJECTS } from '../data/projects';
import { HOME_SKILLS } from '../data/skills';
import './Landing.css';

function Landing() {
    return (
        <>
            {/* Hero */}
            <section className="page landing">
                <div className="landing-text">
                    <p className="landing-eyebrow">Software Developer &amp; IT Technician</p>
                    <h1 className="landing-title">
                        Hi, I’m <span className="accent">Matthew Lindsey</span>
                    </h1>
                    <p className="intro-text">
                        Senior at West Virginia University studying Computer Science with an
                        emphasis in Cybersecurity. Pursuing a career in Software and IT Technology.
                    </p>

                    <div className="landing-actions">
                        <Link to="/projects" className="btn btn-primary">
                            View Projects <ArrowRightIcon />
                        </Link>
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume <ArrowUpRightIcon />
                        </a>
                    </div>

                    <div className="landing-socials">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <GitHubIcon />
                        </a>
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <LinkedInIcon />
                        </a>
                        <a href={`mailto:${EMAIL}`} aria-label="Email">
                            <MailIcon />
                        </a>
                    </div>
                </div>

                <div className="headshot-wrap">
                    <img className="head-shot" src={Headshot} alt="Matthew Lindsey" />
                </div>
            </section>

            {/* Tech strip */}
            <section className="page home-skills" aria-label="Technologies I work with" data-reveal>
                <p className="home-skills-label">Technologies I work with</p>
                <ul className="home-skills-list">
                    {HOME_SKILLS.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Featured projects */}
            <section className="page home-featured" aria-labelledby="featured-heading">
                <div className="home-section-head" data-reveal>
                    <h2 id="featured-heading" className="home-section-title">Featured Projects</h2>
                    <Link to="/projects" className="text-link home-see-all">
                        See all projects <ArrowRightIcon />
                    </Link>
                </div>

                <div className="featured-grid">
                    {FEATURED_PROJECTS.map((project, i) => (
                        <Link
                            key={project.slug}
                            data-reveal
                            style={{ '--reveal-delay': `${i * 110}ms` }}
                            to={`/projects/${project.slug}`}
                            className="card featured-card"
                        >
                            <div className="featured-thumb">
                                <img src={project.media[0].src} alt="" loading="lazy" />
                            </div>
                            <div className="featured-body">
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                                <ul className="featured-tags">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <li key={tag} className="tag">{tag}</li>
                                    ))}
                                </ul>
                                <span className="featured-more">
                                    Read more <ArrowRightIcon />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Landing;
