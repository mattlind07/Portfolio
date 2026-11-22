import './About.css';
import family from '../assets/family.png';

const QUICK_FACTS = [
    { label: 'School', value: 'West Virginia University' },
    { label: 'Major', value: 'Computer Science, Cybersecurity' },
    { label: 'Graduating', value: 'Spring 2027' },
    { label: 'Experience', value: 'Software Engineer Intern, WVU Medicine' },
];

function About() {
    return (
        <section className="page">
            <header className="section-header">
                <h1 className="section-title">About Me</h1>
            </header>

            <div className="about-grid">
                <aside className="about-side">
                    <img className="family" src={family} alt="Matthew Lindsey with family" />
                    <dl className="card about-facts">
                        {QUICK_FACTS.map(({ label, value }) => (
                            <div key={label} className="about-fact">
                                <dt>{label}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                    </dl>
                </aside>

                <div className="card about-text">
                    <p className="about-lead">
                        Hi! I’m Matthew Lindsey, a Computer Science student at West Virginia University with an emphasis in
                        cybersecurity, graduating in Spring 2027. Technology keeps me motivated because it never stops
                        evolving, and there’s always something new to learn.
                    </p>
                    <p>
                        This past summer I worked as a software engineer at WVU Medicine, where I helped build StatusHawk,
                        a health-monitoring platform that automatically checks application endpoints across the
                        development department to track uptime and incidents. I worked across the full stack in C#,
                        .NET, Blazor, MudBlazor, Entity Framework Core, and SQL Server, building API controllers, data
                        models, and the dashboard UI that shows live system status. I also shipped features for other
                        internal tools, including an embeddable form feature for the WVU Medicine campaign editor and a
                        filterable notification management grid.
                    </p>
                    <p>
                        Outside of work, I build my own projects. Macro Coach is a full-stack nutrition app (React,
                        Supabase, serverless functions, Gemini API) with an adaptive engine that recalibrates calorie
                        targets from real weigh-in data, backed by 97 automated tests. I’ve also built Iron-Kernel, an
                        operating system kernel in C and x86 assembly with a custom memory allocator and interrupt-driven
                        serial I/O. For my senior capstone, INDRA, I’m contributing to a drone reconnaissance and
                        forensic analysis platform, including a GPS attack simulation module for defensive security
                        research.
                    </p>
                    <p>
                        I enjoy working anywhere from low-level systems to polished user interfaces, and I’m always
                        looking for new challenges that push me to grow as an engineer.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
