import './Resume.css';
import ResumePreview from '../assets/ResumePreview.jpg';
import { ArrowUpRightIcon, DownloadIcon } from './Icons';
import { RESUME_URL } from '../data/links';

// When you replace public/Matthew_Lindsey_Resume.pdf, update this date
// (and regenerate src/assets/ResumePreview.jpg if page 1 changed).
const LAST_UPDATED = 'November 2026';

function Resume() {
    return (
        <section className="page">
            <header className="section-header">
                <h1 className="section-title">Resume</h1>
                <p className="section-subtitle">
                    Computer Science @ West Virginia University · Cybersecurity emphasis
                </p>
            </header>

            <div className="card resume-card">
                <a
                    className="resume-preview"
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open full resume PDF in a new tab"
                >
                    <img src={ResumePreview} alt="Preview of the first page of Matthew Lindsey's resume" />
                    <span className="resume-preview-overlay">
                        <span className="resume-preview-label">
                            Click to view full PDF <ArrowUpRightIcon />
                        </span>
                    </span>
                </a>

                <div className="resume-actions">
                    <a className="btn btn-primary" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                        View Full Resume <ArrowUpRightIcon />
                    </a>
                    <a className="btn btn-outline" href={RESUME_URL} download="Matthew_Lindsey_Resume.pdf">
                        Download PDF <DownloadIcon />
                    </a>
                </div>

                <p className="resume-meta">PDF · 2 pages · Last updated {LAST_UPDATED}</p>
            </div>
        </section>
    );
}

export default Resume;
