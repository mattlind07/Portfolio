import { useState } from 'react';
import './Contact.css';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from '../components/Icons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL } from '../data/links';

const CONTACTS = [
    { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, Icon: MailIcon },
    { label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, Icon: PhoneIcon },
    { label: 'GitHub', value: 'github.com/mattlind07', href: GITHUB_URL, Icon: GitHubIcon, external: true },
    { label: 'LinkedIn', value: 'Matthew Lindsey', href: LINKEDIN_URL, Icon: LinkedInIcon, external: true },
];

const EMPTY_FORM = { name: '', email: '', message: '' };

// Sends the form to Netlify Forms. Netlify matches it to the hidden
// <form name="contact"> in public/index.html via the "form-name" field.
async function submitToNetlify(fields) {
    const body = new URLSearchParams({ 'form-name': 'contact', ...fields }).toString();
    const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
    });
    if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
}

function ContactForm() {
    const [fields, setFields] = useState(EMPTY_FORM);
    const [botField, setBotField] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const update = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await submitToNetlify({ ...fields, 'bot-field': botField });
            setStatus('sent');
            setFields(EMPTY_FORM);
        } catch {
            setStatus('error');
        }
    };

    if (status === 'sent') {
        return (
            <div className="card contact-form contact-form-success" role="status">
                <span className="contact-icon">
                    <MailIcon width="24" height="24" />
                </span>
                <h2>Message sent!</h2>
                <p>Thanks for reaching out. I’ll get back to you as soon as I can.</p>
                <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className="card contact-form" name="contact" onSubmit={handleSubmit}>
            <h2>Send me a message</h2>

            {/* Honeypot: hidden from people, bots fill it in and get filtered out by Netlify */}
            <p className="contact-honeypot" aria-hidden="true">
                <label>
                    Don’t fill this out:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} />
                </label>
            </p>

            <div className="form-row">
                <label className="form-field">
                    <span>Name</span>
                    <input type="text" name="name" value={fields.name} onChange={update} required autoComplete="name" />
                </label>
                <label className="form-field">
                    <span>Email</span>
                    <input type="email" name="email" value={fields.email} onChange={update} required autoComplete="email" />
                </label>
            </div>

            <label className="form-field">
                <span>Message</span>
                <textarea name="message" rows={6} value={fields.message} onChange={update} required />
            </label>

            {status === 'error' && (
                <p className="form-error" role="alert">
                    Something went wrong sending your message. Please try again, or email me directly at{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
            )}

            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
        </form>
    );
}

function Contact() {
    return (
        <section className="page">
            <header className="section-header">
                <h1 className="section-title">Contact</h1>
                <p className="section-subtitle">
                    Feel free to reach out about opportunities, projects, or just to connect.
                </p>
            </header>

            <div className="contact-layout">
                <ContactForm />

                <div className="contact-list">
                    {CONTACTS.map(({ label, value, href, Icon, external }) => (
                        <a
                            key={label}
                            className="card contact-card"
                            href={href}
                            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                            <span className="contact-icon">
                                <Icon width="22" height="22" />
                            </span>
                            <span className="contact-text">
                                <span className="contact-label">{label}</span>
                                <span className="contact-value">{value}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
