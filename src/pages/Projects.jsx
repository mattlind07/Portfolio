import './Projects.css';
import MacroCoach from '../assets/MacroCoach.png';
import AssemblyToMachine from '../assets/assemblytomachine.png';
import MachineToAssembly from '../assets/machinetoassembly.png';
import HexToAssembly from '../assets/hextoassembly.png';
import IronKernelMenu from '../assets/IronKernelMenu.png';
import ListExpanded from '../assets/ListExpanded.png';
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from '../components/Icons';

// To add a project, add an object to this list. `link` is optional;
// use `privateNote` instead when the source can't be shared.
const PROJECTS = [
    {
        title: 'Status Hawk',
        tagline:
            'Built a full-stack health-monitoring platform in .NET and Blazor that automates endpoint checks to track application uptime across a software development department.',
        tags: ['C#', '.NET', 'Blazor', 'MudBlazor', 'EF Core', 'SQL Server', 'Azure DevOps'],
        media: [{ src: ListExpanded, alt: 'Status Hawk system status dashboard' }],
        // wide screenshot + long feature list: stack vertically, features in 2 columns
        layout: 'wide',
        description:
            'StatusHawk is a health-monitoring platform that automatically verifies application uptime across WVU Medicine. A worker service (Execution Plane) performs scheduled HTTP checks against configured endpoints, while the server (Control Plane) parses results, tracks incident state, and serves a Blazor/MudBlazor UI. The system supports application and endpoint management, automated and manual incident tracking, recurring scheduled maintenance, and a live status dashboard drilling from application down to individual check results. Built with .NET, Blazor, MudBlazor, Entity Framework Core, and SQL Server on Azure DevOps.',
        features: [
            'Built a REST API with both CRUD and worker-facing endpoints (PendingChecks, ReportResult)',
            'Implemented two check types: site checks (status-code only) and health-point checks (parses a JSON health body that can report unhealthy dependencies behind a 200)',
            'Auto-creates incidents when an endpoint crosses a failure threshold, and auto-resolves them on recovery',
            'Real-time System Status dashboard with a hierarchical view (Application → server instance → individual check) via MudTreeView',
            'Scheduled maintenance windows that suppress checks on covered endpoints to prevent false incidents during planned work',
            'Role-based access: admin (dev team) for full edit, read-only viewer (IT) for scoped visibility',
        ],
        privateNote: 'Source code private: internship work at WVU Medicine.',
    },
    {
        title: 'Iron Kernel',
        tagline:
            'Built an operating system in C and x86 Assembly with process scheduling, system calls, serial I/O, and custom memory management.',
        tags: ['C', 'x86 Assembly', 'Operating Systems'],
        media: [{ src: IronKernelMenu, alt: 'Iron Kernel command shell menu' }],
        mediaVariant: 'tall',
        description:
            'Built a multiprogramming operating system kernel in C and x86 Assembly. The system supports process creation/management, priority scheduling, cooperative multitasking, interrupt-based system calls, serial I/O, RTC date/time commands, alarms, and memory inspection. Implemented core OS components including Process Control Blocks, ready/blocked queues, context switching, serial command shell, and custom heap allocation with block splitting, freeing, and merging.',
        features: [
            'Built a multiprogramming OS kernel in C and x86 Assembly',
            'Implemented PCB-based process management and priority scheduling',
            'Created ready and blocked queues for process state management',
            'Designed interrupt-based system calls for kernel service requests',
            'Implemented manual process loading and cooperative context switching',
            'Built an interactive COM1 serial command shell',
            'Added commands to create, delete, block, suspend, resume, and inspect processes',
            'Supported RTC date/time commands, alarms, memory inspection, and shutdown',
            'Created a custom heap manager with allocation, freeing, splitting, and merging',
        ],
        privateNote: 'Source code private due to university academic policy.',
    },
    {
        title: 'Macro Coach',
        tagline:
            'A full-stack nutrition web app that calculates personalized calorie and macro targets and adapts them over time.',
        tags: ['React', 'Supabase', 'PostgreSQL', 'Serverless', 'Gemini API'],
        media: [{ src: MacroCoach, alt: 'Macro Coach app' }],
        mediaVariant: 'square',
        description:
            'Macro Coach is a full-stack nutrition web app that calculates personalized calorie and macro targets and adapts them over time. Users log their weight each week, and the app recalibrates their targets based on real progress instead of a fixed formula. It’s built with React, Supabase Postgres, and serverless functions, with Google Gemini powering AI coaching features.',
        features: [
            'Personalized calorie and macro calculator',
            'Adaptive weekly target recalibration',
            'Weigh-in tracker with progress history',
            'AI-powered coaching with Google Gemini',
            'Login Page',
        ],
        link: { href: 'https://macro-coach-ten.vercel.app', label: 'Visit Macro Coach', kind: 'live' },
    },
    {
        title: 'MIPS Translatron Revamp',
        tagline:
            'Demonstrating bidirectional translation of the MULT instruction between Assembly, Binary, and Hex.',
        tags: ['C', 'MIPS Assembly', 'Binary Forensics'],
        media: [
            { src: AssemblyToMachine, alt: 'Assembly to machine code translation' },
            { src: MachineToAssembly, alt: 'Machine code to assembly translation' },
            { src: HexToAssembly, alt: 'Hex to assembly translation' },
        ],
        mediaVariant: 'strips',
        description:
            'Rebuilt and modernized a legacy MIPS assembler/disassembler written in C. Focused on restoring core functionality by debugging opcode decoding, register mapping, and control flow logic. Implemented new MULT, ORI, and SLTI instruction support across both assembler and disassembler modules, improving instruction coverage and reliability. Conducted binary forensics on corrupted machine code, tracing bit-flip anomalies and reconstructing valid instruction encodings to ensure accurate translation between source and machine code.',
        features: [
            'Refactored and debugged legacy MIPS assembler/disassembler in C',
            'Implemented new MULT, ORI, and SLTI instructions',
            'Enhanced opcode, register, and control flow accuracy',
            'Reconstructed corrupted machine code using bit-pattern analysis',
            'Improved translation reliability and maintainability across modules',
        ],
        link: { href: 'https://github.com/zacharyhaufe/assembler_project', label: 'View Source on GitHub', kind: 'github' },
    },
];

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
                        key={project.title}
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
