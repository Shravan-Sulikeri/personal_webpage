import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import f1Image from '../assest/f1.jpg';
import f1Architecture from '../assest/F1-Dash System arc.png';
import careSightImage from '../assest/care_sight.jpeg';
import careSightArchitecture from '../assest/caresight_system_arc.png';
import soundSwipeImage from '../assest/sound_swipe_project_card.jpg';
import soundSwipeArchitecture from '../assest/sound_swipe_arc_img.png';
import profileImage from '../assest/Generated Image September 05, 2025 - 11_45PM.jpeg';
import resume from '../assest/Shravan_Sulikeri_Resume.pdf';
import diploma from '../assest/Diploma.pdf';
import ChatBot from './ChatBot.jsx';
import './editorial.css';

/*
 * Editorial portfolio, inspired by the spare typography, quiet image grids,
 * and restrained navigation of independent creative portfolios.
 * Edit the arrays below to maintain content without changing components.
 */
const projects = [
  {
    number: '01',
    name: 'F1 Dash',
    discipline: 'Software / Machine Learning',
    year: '2025',
    image: f1Image,
    architecture: f1Architecture,
    alt: 'F1 Dash project visual',
    summary: 'A full-stack Formula 1 analytics platform turning historical racing telemetry into model-driven predictions and an interactive React experience.',
    overview: 'Built an end-to-end workflow spanning data ingestion, feature engineering, machine learning, and a responsive frontend. The platform processes historical lap records, evaluates race-prediction models, and presents ranked predictions with a clear visual interface.',
    stack: ['Python', 'DuckDB', 'Scikit-learn', 'React', 'Tailwind'],
    facts: ['221K+ lap records', '61 engineered features', '0.8907 test AUC'],
    github: 'https://github.com/Shravan-Sulikeri/f1-dash',
    feature: true,
  },
  {
    number: '02',
    name: 'CareSight',
    discipline: 'Data Platform / Healthcare AI',
    year: '2025',
    image: careSightImage,
    architecture: careSightArchitecture,
    alt: 'CareSight healthcare analytics project visual',
    summary: 'A clinical analytics system combining orchestrated data pipelines, vector search, and retrieval-augmented intelligence.',
    overview: 'Designed a healthcare-focused data and AI platform with Airflow ETL, dbt transformations, PostgreSQL, FAISS vector search, and a FastAPI retrieval layer. The architecture supports analysis of large clinical datasets and makes complex records easier to query.',
    stack: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'FAISS', 'FastAPI'],
    facts: ['8M+ clinical records', '40% lower ETL latency', '35% faster BI queries'],
    github: 'https://github.com/Shravan-Sulikeri/caresight',
  },
  {
    number: '03',
    name: 'SoundSwipe',
    discipline: 'Full-Stack / Product Engineering',
    year: '2025',
    image: soundSwipeImage,
    architecture: soundSwipeArchitecture,
    alt: 'SoundSwipe music discovery app visual',
    summary: 'A swipe-first music discovery application with recommendation logic and playlist creation through Spotify.',
    overview: 'Created an interactive music discovery flow that pairs a React interface with a Node.js backend, real-time events, recommendation scoring, and Spotify integrations. The experience is built around fast previews, intuitive discovery, and one-tap playlist building.',
    stack: ['React', 'Node.js', 'Spotify API', 'WebSockets', 'Recommendations'],
    facts: ['Under 150ms scoring', 'Under 120ms swipe preview', 'Spotify playlist sync'],
    github: 'https://github.com/Shravan-Sulikeri/sound-swipe-app',
  },
];

const experience = [
  {
    company: 'Varsinix',
    position: 'Junior Data Engineer',
    period: 'Aug 2025 – Present',
    location: 'Cary, NC',
    description: 'Engineering reliable clinical data and ML infrastructure across GCP and Azure, from schema-governed ingestion to reproducible retrieval pipelines.',
    outcomes: ['5M+ clinical notes processed', '45% less schema drift', '30% improvement in Recall@K reliability'],
  },
  {
    company: 'First Citizens Bank',
    position: 'Systems Engineer Intern',
    period: 'May 2025 – Aug 2025',
    location: 'Raleigh, NC',
    description: 'Built observability and automation workflows using Nexthink telemetry, NQL, and Power BI to improve enterprise endpoint operations.',
    outcomes: ['20K+ endpoints monitored', '35% faster triage', '25% better issue detection'],
  },
  {
    company: 'Control Infotech',
    position: 'Cybersecurity Analyst Intern',
    period: 'May 2023 – Aug 2023',
    location: 'Raleigh, NC',
    description: 'Developed cloud log-ingestion scripts and Python-based security automation for more efficient monitoring and vulnerability operations.',
    outcomes: ['35% higher data throughput', '30% less manual work', '40% faster analyst onboarding'],
  },
];

const capabilities = [
  { title: 'Software development', tools: 'React, JavaScript, TypeScript, Node.js, FastAPI, Python, SQL' },
  { title: 'Data & machine learning', tools: 'Airflow, dbt, DuckDB, Spark, FAISS, Qdrant, scikit-learn' },
  { title: 'Cloud & infrastructure', tools: 'Google Cloud, Azure, Databricks, Docker, Git, CI/CD' },
];

const certificates = [
  { name: 'Oracle Cloud Infrastructure', focus: 'Generative AI Professional', year: '2025', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E076BF3A4388ED6DB58C4D27FC1607DA3A270098007DAF4001F0C9AE56D4CC18' },
  { name: 'Oracle Cloud Infrastructure', focus: 'Data Science Professional', year: '2025', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D69AF070D387B2F2B5DB8B1752DD8ED73B9F10ABA9222270CE7B431802A818AF' },
  { name: 'Oracle Cloud Infrastructure', focus: 'Autonomous Database Professional', year: '2025', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2126CB82328B8BBF110E4639C71E2B3C076D357D7B43EA529874EA73D22CFD39' },
  { name: 'MySQL 8.0 Database Developer', focus: 'Oracle Certified Professional', year: '2026', link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3A60BB40634063E5BAC512E076D54CDBC3141258FABEFD80CF0DFC7D045FCD78' },
  { name: 'MySQL Implementation', focus: 'Certified Associate', year: '2026', link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2B0BE47888174080A0F79370BFF28C17C7CB295C1ED364CD49131E7995ACB295' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/Shravan-Sulikeri', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shravan-sulikeri/', icon: Linkedin },
  { name: 'Email', href: 'mailto:shravan.sulikeri@gmail.com', icon: Mail },
];

function SectionHeading({ index, label, title, description }) {
  return (
    <div className="ep-section-heading">
      <div className="ep-section-kicker"><span>{index} / {label}</span><span className="ep-kicker-line" /></div>
      <div className="ep-section-heading-main">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const nodes = Array.from(document.querySelectorAll('.ep-dialog a, .ep-dialog button')).filter((node) => !node.disabled);
        if (!nodes.length) return;
        if (event.shiftKey && document.activeElement === nodes[0]) { event.preventDefault(); nodes[nodes.length - 1].focus(); }
        if (!event.shiftKey && document.activeElement === nodes[nodes.length - 1]) { event.preventDefault(); nodes[0].focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKey); previous?.focus?.(); };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="ep-dialog-scrim" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="ep-dialog" role="dialog" aria-modal="true" aria-label={project.name + ' project details'}>
        <div className="ep-dialog-top">
          <span>CASE STUDY &nbsp; / &nbsp; {project.number}</span>
          <button ref={closeRef} type="button" className="ep-icon-btn" onClick={onClose} aria-label="Close project details"><X size={22} /></button>
        </div>
        <div className="ep-dialog-content">
          <div className="ep-dialog-heading">
            <p className="ep-eyebrow">{project.discipline} &nbsp;·&nbsp; {project.year}</p>
            <h2>{project.name}</h2>
            <p>{project.overview}</p>
          </div>
          <div className="ep-dialog-photo"><img src={project.image} alt={project.alt} /></div>
          <div className="ep-dialog-facts">
            {project.facts.map((fact) => <div key={fact}><span className="ep-mini-square" />{fact}</div>)}
          </div>
          <div className="ep-dialog-bottom">
            <div><p className="ep-eyebrow">Technology</p><p>{project.stack.join(' / ')}</p></div>
            <a className="ep-text-link" target="_blank" rel="noopener noreferrer" href={project.github}>Explore repository <ArrowUpRight size={17} /></a>
          </div>
          <div className="ep-architecture"><p className="ep-eyebrow">System architecture</p><a href={project.architecture} target="_blank" rel="noopener noreferrer" aria-label={'Open full architecture diagram for ' + project.name}><img src={project.architecture} alt={project.name + ' architecture diagram'} loading="lazy" /></a></div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className={'ep-project ep-project-' + project.number}>
      <button type="button" className="ep-project-image" onClick={() => onOpen(project)} aria-label={'View case study for ' + project.name}>
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="ep-project-view">View project <ArrowUpRight size={19} /></span>
      </button>
      <div className="ep-project-meta"><span>{project.number} / {project.discipline}</span><span>{project.year}</span></div>
      <div className="ep-project-info">
        <div><h3>{project.name}</h3><p>{project.summary}</p></div>
        <button type="button" className="ep-project-arrow" aria-label={'Read more about ' + project.name} onClick={() => onOpen(project)}><ArrowUpRight size={26} /></button>
      </div>
      <div className="ep-project-tags">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

export default function PortfolioEditorial() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const watcher = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-in-view'); watcher.unobserve(entry.target); } });
    }, { rootMargin: '0px 0px -36px 0px', threshold: 0.08 });
    document.querySelectorAll('.ep-reveal').forEach((el) => watcher.observe(el));
    return () => watcher.disconnect();
  }, []);

  const dismissMenu = () => setMenuOpen(false);
  const closeProject = () => setActiveProject(null);

  return (
    <div className="ep" id="top">
      <a className="ep-skip" href="#content">Skip to content</a>
      <header className="ep-header">
        <div className="ep-header-inner">
          <a className="ep-wordmark" href="#top" onClick={dismissMenu} aria-label="Shravan Sulikeri home">SHRAVAN <span>SULIKERI<span className="ep-wordmark-dot">.</span></span></a>
          <nav className="ep-nav" aria-label="Primary navigation">
            <a href="#work">Work <sup>03</sup></a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight size={12} /></a>
          </nav>
          <div className="ep-header-right"><span className="ep-status-dot" /> OPEN TO OPPORTUNITIES</div>
          <button type="button" className="ep-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="ep-mobile-nav" aria-label="Mobile navigation"><a onClick={dismissMenu} href="#work">Selected work</a><a onClick={dismissMenu} href="#experience">Experience</a><a onClick={dismissMenu} href="#expertise">Expertise</a><a onClick={dismissMenu} href="#about">About</a><a onClick={dismissMenu} href="#contact">Contact</a></nav>}
      </header>

      <main id="content">
        <section className="ep-hero ep-wrap" aria-labelledby="hero-title">
          <div className="ep-hero-top"><span>INDEPENDENT ENGINEER / PORTFOLIO 2026</span><span>RALEIGH, NORTH CAROLINA &nbsp; ↗</span></div>
          <div className="ep-hero-inner">
            <div className="ep-hero-copy">
              <p className="ep-eyebrow ep-reveal">HELLO, I'M SHRAVAN SULIKERI</p>
              <h1 id="hero-title" className="ep-reveal">Engineering<br /><em>better</em> digital<br />experiences<span className="ep-accent">.</span></h1>
              <div className="ep-hero-bottom ep-reveal">
                <p>Software engineer and data engineer building purposeful products, intelligent systems, and dependable cloud infrastructure.</p>
                <div className="ep-hero-actions"><a href="#work" className="ep-pill ep-pill-dark">Explore my work <ArrowDown size={17} /></a><a href={resume} className="ep-text-link" target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={16} /></a></div>
              </div>
            </div>
            <div className="ep-hero-art ep-reveal" aria-label="Featured engineering project">
              <div className="ep-hero-art-top"><span>SELECTED PROJECT</span><span>001 / 003</span></div>
              <div className="ep-hero-art-frame"><img src={f1Image} alt="F1 Dash data engineering and racing analytics project" /><div className="ep-hero-art-caption"><span>F1 DASH</span><span>DATA × SOFTWARE</span></div></div>
              <div className="ep-hero-art-foot"><span>DESIGN. ENGINEER. ITERATE.</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>
          </div>
          <div className="ep-hero-index"><span>01 / INTRODUCTION</span><span>BUILT WITH CURIOSITY & PRECISION</span><span>© 2026 SS</span></div>
        </section>

        <section className="ep-work ep-wrap" id="work" aria-labelledby="work-heading">
          <SectionHeading index="02" label="SELECTED WORK" title={<span id="work-heading">A few things <em>I've built.</em></span>} description="A curated selection of software, data, and intelligent systems, built from the architecture up." />
          <div className="ep-project-grid ep-reveal">{projects.map((p) => <ProjectCard key={p.name} project={p} onOpen={setActiveProject} />)}</div>
          <div className="ep-work-note"><span>03 PROJECTS / END TO END</span><a className="ep-text-link" href="https://github.com/Shravan-Sulikeri" target="_blank" rel="noopener noreferrer">All repositories on GitHub <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="ep-experience" id="experience" aria-labelledby="experience-heading">
          <div className="ep-wrap">
            <SectionHeading index="03" label="EXPERIENCE" title={<span id="experience-heading">From idea <em>to impact.</em></span>} description="Industry experience at the intersection of engineering, data reliability, and real-world operations." />
            <div className="ep-experience-rows">
              {experience.map((job, i) => <article className="ep-experience-row ep-reveal" key={job.company}>
                <span className="ep-job-no">0{i + 1}</span>
                <div className="ep-job-name"><h3>{job.company}</h3><p>{job.position}</p></div>
                <div className="ep-job-details"><p>{job.description}</p><div className="ep-job-metrics">{job.outcomes.map((o) => <span key={o}>{o}</span>)}</div></div>
                <div className="ep-job-dates">{job.period}<br /><span>{job.location}</span></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="ep-expertise ep-wrap" id="expertise" aria-labelledby="expertise-heading">
          <SectionHeading index="04" label="CRAFT & CAPABILITIES" title={<span id="expertise-heading">What I <em>work with.</em></span>} description="A toolkit shaped by building systems that need to be useful, scalable, and maintainable." />
          <div className="ep-capabilities">
            {capabilities.map((capability, i) => <div key={capability.title} className="ep-capability ep-reveal"><span className="ep-cap-number">0{i + 1} /</span><h3>{capability.title}</h3><p>{capability.tools}</p></div>)}
          </div>
        </section>

        <section className="ep-about" id="about" aria-labelledby="about-heading">
          <div className="ep-wrap ep-about-grid">
            <div className="ep-about-photo ep-reveal"><img src={profileImage} alt="Portrait featured on Shravan Sulikeri's portfolio" loading="lazy" /><div className="ep-about-photo-label"><span>BEHIND THE WORK</span><span>SS / 2026</span></div></div>
            <div className="ep-about-copy ep-reveal">
              <p className="ep-eyebrow">05 / A LITTLE ABOUT ME</p>
              <h2 id="about-heading">Curious by nature.<br /><em>Engineer</em> by choice.</h2>
              <p>I'm a Computer Science graduate from UNC Charlotte. I like the full journey of making software: understanding the problem, architecting the system, getting the details right, and shipping something people can actually use.</p>
              <p>My experience spans cloud-based clinical data platforms, machine learning pipelines, developer tooling, and full-stack applications. I'm especially interested in the places where solid engineering and thoughtful product design meet.</p>
              <div className="ep-about-actions"><a className="ep-text-link" href={resume} target="_blank" rel="noopener noreferrer">Download résumé <ArrowUpRight size={17} /></a><a className="ep-text-link" href={diploma} target="_blank" rel="noopener noreferrer">UNC Charlotte degree <ArrowUpRight size={17} /></a></div>
              <div className="ep-about-credentials"><span>EDUCATION</span><div><strong>University of North Carolina at Charlotte</strong><small>B.S. Computer Science · Software, Systems & Networks · 2025</small></div></div>
            </div>
          </div>
        </section>

        <section className="ep-credentials ep-wrap" aria-labelledby="cert-heading">
          <div className="ep-credentials-top"><span>06 / CONTINUOUS LEARNING</span><h2 id="cert-heading">Credentials <em>& curiosity.</em></h2></div>
          <div className="ep-credentials-list">{certificates.map((cert) => <a key={cert.focus} className="ep-credential" href={cert.link} target="_blank" rel="noopener noreferrer"><span>{cert.name}</span><strong>{cert.focus}</strong><span>{cert.year}</span><ArrowUpRight size={18} /></a>)}</div>
        </section>

        <footer className="ep-footer" id="contact">
          <div className="ep-wrap">
            <div className="ep-footer-head"><span>07 / HAVE SOMETHING IN MIND?</span><span>AVAILABLE FOR SOFTWARE & DATA ENGINEERING OPPORTUNITIES</span></div>
            <h2>Let's make<br /><em>something matter.</em></h2>
            <a className="ep-footer-email" href="mailto:shravan.sulikeri@gmail.com">shravan.sulikeri@gmail.com <ArrowUpRight size={29} /></a>
            <div className="ep-footer-bottom"><a className="ep-footer-brand" href="#top">SHRAVAN SULIKERI<span>.</span></a><div className="ep-footer-socials">{socials.map((social) => <a key={social.name} href={social.href} target={social.name === 'Email' ? undefined : '_blank'} rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}>{social.name} <ArrowUpRight size={13} /></a>)}</div><span>© 2026 · DESIGNED TO LAST</span></div>
          </div>
        </footer>
      </main>
      {activeProject && <ProjectDialog project={activeProject} onClose={closeProject} />}
      <ChatBot email="shravan.sulikeri@gmail.com" />
    </div>
  );
}
