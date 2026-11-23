// All project content lives here. The Projects page shows every project;
// the home page shows the ones marked `featured: true` (in this order).
import MacroCoach from '../assets/MacroCoach.png';
import AssemblyToMachine from '../assets/assemblytomachine.png';
import MachineToAssembly from '../assets/machinetoassembly.png';
import HexToAssembly from '../assets/hextoassembly.png';
import IronKernelMenu from '../assets/IronKernelMenu.png';
import ListExpanded from '../assets/ListExpanded.png';

// To add a project, add an object to this list. `link` is optional;
// use `privateNote` instead when the source can't be shared.
// `details` powers the project's own page at /projects/<slug>.
export const PROJECTS = [
    {
        title: 'Status Hawk',
        slug: 'status-hawk',
        details: {
            type: 'Internship project · WVU Medicine',
            role: 'Full-Stack Developer',
            timeline: 'Jul 2026 – Aug 2026',
            architecture: {
                caption: 'Check scheduling (Control Plane) is separated from check execution (Execution Plane).',
                nodes: [
                    { title: 'Worker Service', subtitle: 'Execution Plane', points: ['Pulls due checks (PendingChecks)', 'Runs site & health-point HTTP checks', 'Reports results (ReportResult)'] },
                    { title: 'REST API', subtitle: 'Control Plane', points: ['Parses check results', 'Opens & auto-resolves incidents', 'Honors maintenance windows'] },
                    { title: 'SQL Server', subtitle: 'Entity Framework Core', points: ['Applications & endpoints', 'Check results & incidents', 'Maintenance schedules'] },
                    { title: 'Blazor Dashboard', subtitle: 'MudBlazor UI', points: ['Live status tree view', 'Incident & maintenance management', 'Admin vs. read-only roles'] },
                ],
            },
            // { title, body } entries power the "Challenges & what I learned" section
            challenges: [
                {
                    title: 'Parsing inconsistent health-check responses',
                    body: 'The hardest part was reading the endpoint health checks, because they didn’t share a format: some returned their results as an array, others as a dictionary. Instead of special-casing each endpoint, I built a dynamic parser that adapts to whatever structure an endpoint returns.',
                },
                {
                    title: 'A dashboard that answers questions at a glance',
                    body: 'I chose which details to surface on the main status view so users get everything they need at a quick glance, without drilling down. The deeper, check-by-check detail is still one click away, but that’s mainly for developers rather than everyday users.',
                },
                {
                    title: 'Building software on a real team',
                    body: 'This was my first time developing a real project on a real team. I learned how to communicate clearly when I ran into issues, when to ask for help, and how to collaborate closely with my senior developer. That’s experience I’ll keep building on in my next role.',
                },
            ],
        },
        featured: true,
        // short blurb for the home page card
        summary: 'Health-monitoring platform that automates endpoint checks to track application uptime across WVU Medicine.',
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
        slug: 'iron-kernel',
        details: {
            type: 'Operating Systems course project · Team',
            timeline: 'Jan 2026 – May 2026',
            architecture: {
                caption: 'How a command typed into the serial shell reaches the kernel.',
                nodes: [
                    { title: 'Serial Shell', subtitle: 'COM1 command interface', points: ['Process, date/time & alarm commands', 'Memory inspection', 'Shutdown'] },
                    { title: 'System Calls', subtitle: 'Interrupt-based', points: ['User programs request kernel services', 'Cooperative context switching'] },
                    { title: 'Scheduler', subtitle: 'Process management', points: ['Process Control Blocks', 'Ready & blocked queues', 'Priority scheduling'] },
                    { title: 'Memory Manager', subtitle: 'Custom heap', points: ['Allocate & free blocks', 'Split & merge free memory'] },
                ],
            },
            challenges: [
                {
                    title: 'Learning operating systems by building one',
                    body: 'I had never studied operating systems before this project, so the hardest part was learning how an OS works at the same time we were building one.',
                },
                {
                    title: 'Debugging the CPU scheduler',
                    body: 'Our toughest bug was in CPU scheduling. I had forgotten to switch the context, so when the scheduler moved to a different process, the previous context was lost and scheduling stopped working correctly. Fixing it meant making sure each process’s context was properly saved and switched.',
                },
                {
                    title: 'Collaborating as a team',
                    body: 'I learned how to split up work among teammates so everything got done, and how to jump in and help debug when a teammate was stuck.',
                },
            ],
        },
        featured: true,
        // short blurb for the home page card
        summary: 'Multiprogramming OS kernel in C and x86 Assembly with scheduling, system calls, and a custom heap.',
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
        slug: 'macro-coach',
        details: {
            type: 'Personal project',
            architecture: {
                caption: 'The main pieces of the stack.',
                nodes: [
                    { title: 'React Frontend', subtitle: 'User interface', points: ['Calorie & macro calculator', 'Weekly weigh-in tracker', 'Progress history'] },
                    { title: 'Serverless Functions', subtitle: 'Backend', points: ['Server-side logic', 'Requests to AI coaching'] },
                    { title: 'Supabase', subtitle: 'Postgres database', points: ['User data & weigh-ins', 'Login'] },
                    { title: 'Google Gemini', subtitle: 'AI coaching', points: ['Coaching features'] },
                ],
            },
            challenges: [
                {
                    title: 'Building the adaptive recalibration logic',
                    body: 'The hardest part was the adaptive recalibration logic: adjusting each user’s calorie and macro targets over time based on the progress they actually log.',
                },
                {
                    title: 'Real weigh-ins over a fixed formula',
                    body: 'The decision I’m proudest of is recalibrating targets from users’ real weigh-in data instead of relying on a fixed formula, so the targets reflect how each person is actually progressing.',
                },
                {
                    title: 'Integrating AI into an application',
                    body: 'Macro Coach taught me how to integrate AI into a real application, using Google Gemini to power its coaching features.',
                },
            ],
        },
        featured: true,
        // short blurb for the home page card
        summary: 'Full-stack nutrition app that adapts calorie and macro targets from real weigh-in data.',
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
        slug: 'mips-translatron',
        details: {
            type: 'Firmware engineering project',
            timeline: 'Oct 2025 – Nov 2025',
            architecture: {
                caption: 'Translation works in both directions between source and machine code.',
                nodes: [
                    { title: 'MIPS Assembly', subtitle: 'Source', points: ['e.g. MULT $t1, $t5'] },
                    { title: 'Assembler', subtitle: 'Assembly → machine code', points: ['Opcode & register encoding', 'New MULT, ORI, SLTI support'] },
                    { title: 'Machine Code', subtitle: 'Binary & hex', points: ['e.g. 0x012D0018'] },
                    { title: 'Disassembler', subtitle: 'Machine code → assembly', points: ['Decodes binary or hex input', 'Recovers corrupted encodings'] },
                ],
            },
            challenges: [
                {
                    title: 'Fixing bugs in legacy code',
                    body: 'The hardest part was tracking down and fixing bugs in an existing codebase I hadn’t written, where opcode, register, and control flow logic had all gone wrong.',
                },
                {
                    title: 'Bit manipulation and registers in practice',
                    body: 'I learned how bit manipulation and registers work in actual code, not just on paper, by encoding and decoding real MIPS instructions bit by bit.',
                },
            ],
        },
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

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
