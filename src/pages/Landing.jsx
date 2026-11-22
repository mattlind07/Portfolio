import { Link } from 'react-router-dom';
import Headshot from '../assets/Headshot.jpeg';
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data/links';
import './Landing.css';

function Landing() {
    return (
        <section className="page landing">
            <div className="landing-text">
                <p className="landing-eyebrow">Software Developer &amp; IT Technician</p>
                <h1 className="landing-title">
                    Welcome to my Portfolio. <span className="accent">Thanks for visiting!</span>
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
    );
}

export default Landing;
