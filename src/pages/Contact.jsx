import './Contact.css';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '../components/Icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL } from '../data/links';

const CONTACTS = [
    { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, Icon: MailIcon },
    { label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, Icon: PhoneIcon },
    { label: 'GitHub', value: 'github.com/mattlind07', href: GITHUB_URL, Icon: GitHubIcon, external: true },
    { label: 'LinkedIn', value: 'Matthew Lindsey', href: LINKEDIN_URL, Icon: LinkedInIcon, external: true },
];

function Contact() {
    return (
        <section className="page">
            <header className="section-header">
                <h1 className="section-title">Contact</h1>
                <p className="section-subtitle">
                    Feel free to reach out about opportunities, projects, or just to connect.
                </p>
            </header>

            <div className="contact-grid">
                {CONTACTS.map(({ label, value, href, Icon, external }) => (
                    <a
                        key={label}
                        className="card contact-card"
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                        <span className="contact-icon">
                            <Icon width="24" height="24" />
                        </span>
                        <span className="contact-label">{label}</span>
                        <span className="contact-value">{value}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;
