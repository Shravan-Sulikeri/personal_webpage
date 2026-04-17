/**
 * Portfolio page structure: NavBar, Hero, ExperienceSection (ExperienceCard), ProjectsSection (ProjectCard),
 * SkillsSection, EducationSection, CertificationsSection, and Footer are all defined in this file for a single-page layout.
 * Content controls: update heroContent, aboutContent, quickStats, navLinks, experienceEntries, projectEntries, skillCategories,
 * educationContent, certifications, contactInfo, and topBanner to edit copy or assets without touching layout code.
 * To add items: (1) duplicate an object in projectEntries/experienceEntries/skillCategories, (2) fill in titles, metrics,
 * tags, and image/logo URLs (or leave null for text fallback), (3) save—components render automatically in the grid layout.
 */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, Github, Menu, Minus, Plus, X } from 'lucide-react';
import heroBackground from '../assest/Hero _Image.jpg';
import controlInfotechImage from '../assest/cit offfice.jpg';
import controlInfotechLogo from '../assest/control_inftech_logo.png';
import nexthinkIcon from '../assest/nexthink_icon.png';
import ciCdIcon from '../assest/ci_cd.jpg';
import deltaLakeIcon from '../assest/delta_lake_icon.png';
import gitOpsIcon from '../assest/git_ops_icon.png';
import uncCharlotteImage from '../assest/unc_clt.jpg';
import f1Image from '../assest/f1.jpg';
import f1ArchitectureImage from '../assest/F1-Dash System arc.png';
import firstCitizensImage from '../assest/fcb_image.webp';
import firstCitizensLogo from '../assest/url.jpg';
import careSightImage from '../assest/care_sight.jpeg';
import careSightArchitectureImage from '../assest/caresight_system_arc.png';
import soundSwipeImage from '../assest/sound_swipe_project_card.jpg';
import soundSwipeArchitectureImage from '../assest/sound_swipe_arc_img.png';
import varsinixLogo from '../assest/Gemini_Generated_Image_iuo4k9iuo4k9iuo4.jpg';
import varsinixOfficeImage from '../assest/Gemini_Generated_Image_55f8wj55f8wj55f8.jpg';
import restApiIcon from '../assest/rest_api_icon.jpg.png';
import dataModelIcon from '../assest/data_model_icon.jpg';
import etlPipelineIcon from '../assest/etl_pipeline_icon.png';
import aboutHeadshot from '../assest/Generated Image September 05, 2025 - 11_45PM.jpeg';
import resumePdf from '../assest/Shravan_Sulikeri_Resume.pdf';
import diplomaPdf from '../assest/Diploma.pdf';
import gmailIcon from '../assest/gmailicon.png';
import linkedinIcon from '../assest/linkedinicon.png';
import ProjectDetail from './ProjectDetail';
import ChatBot from './ChatBot';

// --- GLOBAL CONTENT CONFIG ---
const topBanner = {
  message: 'Junior Data Engineer @ Varsinix • Open to Opportunities',
  linkLabel: 'View LinkedIn',
  linkHref: 'https://www.linkedin.com/in/shravan-sulikeri/',
};

const heroContent = {
  title: 'Shravan Sulikeri',
  subheadline: 'Data Engineer · Open to New Grad Roles',
  description: 'Building clinical ML pipelines on GCP and Azure. Open to Data Engineering, Software Engineering, and Data Analyst roles.',
  primaryCta: { label: 'View Projects', targetId: 'projects' },
  secondaryCta: { label: 'View Experience', targetId: 'experience' },
  resumeAnchorId: 'resume',
  backgroundImage: heroBackground,
};

const aboutContent = {
  name: 'Shravan Sulikeri',
  bio: `I'm a Computer Science graduate from UNC Charlotte with a focus on data engineering, ML pipelines, and cloud infrastructure. I've built production systems on GCP and Azure, from clinical NER pipelines to vector search workflows processing millions of records.

I led a team of five for my senior capstone, taking an idea from 2023 all the way to production. That experience taught me how to scope requirements, manage trade-offs, and ship as a team, not just write code alone.

Today I'm looking for Data Engineering, Software Engineering, or Data Analyst roles where I can keep building things that matter.`,
  headshotSrc: aboutHeadshot,
  headshotAlt: 'Shravan Sulikeri headshot',
};

const quickStats = [
  { label: 'Records Processed', value: '5M+ CLINICAL' },
  { label: 'Top Skills', value: 'PYTHON • SQL • DATA ENGINEERING' },
  { label: 'Location', value: 'RALEIGH, NC' },
];

const navLinks = [
  { label: 'About Me', action: 'about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: resumePdf, external: true },
];

const experienceEntries = [
  {
    id: 'varsinix',
    company: 'Varsinix',
    logoUrl: varsinixLogo,
    role: 'JUNIOR DATA ENGINEER',
    period: 'AUG 2025 - PRESENT',
    location: 'CARY, NC',
    metrics: ['CLINICAL NOTES PROCESSED 5M+', 'SCHEMA DRIFT -45%', 'RECALL@K RELIABILITY +30%'],
    details: [
      'Architected a Python-based GCP ingestion pipeline using Vertex AI to process 5M+ unstructured clinical notes; enforced strict schema validation and deterministic preprocessing to enable scalable entity extraction and NER model training.',
      'Engineered an Azure-based Medallion architecture (Bronze-Silver-Gold) utilizing contract-driven schemas and automated lineage tracking to stabilize biomedical ingestion, reducing pipeline drift by 45%.',
      'Streamlined Python-based Qdrant vector search and embedding workflows to mitigate ANN retrieval instability across iterative model updates, reducing evolution failures by 35% and stabilizing retrieval consistency for production clinical search.',
      'Developed a containerized and fully reproducible ML data pipeline within an Agile framework; engineered end-to-end quality controls across 2M+ clinical samples, improving Recall@K reliability by 30% for production risk modeling.',
    ],
    image: varsinixOfficeImage,
    imageAlt: 'Varsinix office',
    imageClass: 'object-cover',
    theme: 'dark',
  },
  {
    id: 'first-citizens',
    company: 'First Citizens Bank',
    logoUrl: firstCitizensLogo,
    role: 'SYSTEMS ENGINEER INTERN',
    period: 'MAY 2025 - AUG 2025',
    location: 'RALEIGH, NC',
    metrics: ['ISSUE DETECTION +25%', 'TRIAGE TIME -35%', 'DEVICE RELIABILITY +20%'],
    details: [
      'Designed Power BI dashboards using Nexthink data to monitor 20K+ endpoints, increasing issue detection by 25%.',
      'Formulated high-performance NQL queries to join and analyze endpoint telemetry, reducing mean time to triage by 35%.',
      'Automated endpoint remediation with Nexthink Remote Actions, increasing device reliability and IT response speed by 20%.',
      'Partnered with cross-functional IT teams to enhance digital employee experience (DEX) through Nexthink analytics.',
    ],
    image: firstCitizensImage,
    imageAlt: 'Enterprise data center hallway',
    theme: 'blue',
  },
  {
    id: 'control-infotech',
    company: 'Control Infotech Inc.',
    logoUrl: controlInfotechLogo,
    role: 'CYBERSECURITY ANALYST INTERN',
    period: 'MAY 2023 - AUG 2023',
    location: 'RALEIGH, NC',
    metrics: ['DATA THROUGHPUT +35%', 'DETECTION ACCURACY +15%', 'MANUAL WORKLOAD -30%'],
    details: [
      'Developed PowerShell and Bash pipelines to ingest Azure resource logs, consolidating data from 3+ monitoring systems.',
      'Optimized log-processing algorithms using Python and C, increasing data throughput by 35% and detection accuracy by 15%.',
      'Scripted Python automation scripts for security workflows, reducing the manual workload for vulnerability scans by 30%.',
      'Standardized security operation by authoring technical runbooks in Jira, reducing new analyst onboarding time by 40%.',
    ],
    image: controlInfotechImage,
    imageAlt: 'Cybersecurity operations room',
    theme: 'gray',
  },
];

const projectEntries = [
  {
    title: 'F1 Dash',
    category: 'END-TO-END ML PIPELINE',
    description:
      'Full-stack racing analytics platform that ingests 2018-2025 telemetry to engineer 61 features, trains three production models, and serves ranked race predictions to an interactive React dashboard.',
    image: f1Image,
    link: 'https://github.com/Shravan-Sulikeri/f1-dash',
    demoLink: null,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg',
    tags: ['PYTHON', 'DUCKDB', 'MACHINE LEARNING', 'REACT'],
    stackLabel: 'PYTHON • DUCKDB • SCIKIT-LEARN • REACT • TAILWIND',
    theme: 'orange',
    stackSummary: 'PYTHON • DUCKDB • SCIKIT-LEARN • REACT • TAILWIND',
    impactSummary:
      'Achieved 0.8907 AUC for race winner prediction • Engineered 61 ML-ready features • Automated orchestration from raw ingestion to frontend delivery.',
    impactStats: [
      'BEST MODEL TEST AUC: 0.8907 (RANDOM FOREST)',
      'PROCESSES 221K+ LAP RECORDS',
      'FULL PIPELINE RUNS IN ~15 MINS LOCALLY',
    ],
    architectureImage: f1ArchitectureImage,
    codeSnippet: `# Delta Live Tables config\nspark.conf.set("spark.databricks.delta.formatCheck.enabled", "false")\n\n@dlt.table\ndef bronze_ingest():\n    return spark.readStream.format("cloudFiles")\\\n        .option("cloudFiles.format", "json")\\\n        .load("/mnt/f1/raw")`,
  },
  {
    title: 'CareSight',
    category: 'HEALTHCARE ANALYTICS',
    description:
      'Healthcare analytics platform with a FAISS + FastAPI RAG pipeline analyzing 8M+ clinical notes and Airflow-orchestrated ETL across 8M+ records.',
    image: careSightImage,
    imageClass: 'object-center',
    link: 'https://github.com/Shravan-Sulikeri/caresight',
    demoLink: null,
    logo: null,
    tags: ['FAISS', 'FASTAPI', 'DBT', 'APACHE AIRFLOW', 'POSTGRESQL', 'HEALTHCARE AI'],
    theme: 'green',
    impactStats: [
      'BI QUERY PERFORMANCE +35% VIA DBT STAR SCHEMAS',
      'RISK DETECTION ACCURACY +50% WITH RAG PIPELINE',
      'END-TO-END ETL LATENCY -40% WITH AIRFLOW',
    ],
    architectureImage: careSightArchitectureImage,
    stackSummary:
      'dbt • PostgreSQL • FAISS • FastAPI • Apache Airflow • Python • Healthcare Analytics',
  },
  {
    title: 'SOUNDSWIPE APP',
    category: 'FULL STACK',
    description:
      'Music discovery app with Tinder-style swiping, AI-driven recommendations, and instant Spotify playlist building.',

    image: soundSwipeImage,
    link: 'https://github.com/Shravan-Sulikeri/sound-swipe-app',
    demoLink: null,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    tags: ['REACT', 'NODE.JS', 'SPOTIFY API', 'AI RECOMMENDATION ENGINE', 'REALTIME'],
    theme: 'purple',
    impactStats: [
      'AI-powered song relevance scoring <150ms',
      'P95 swipe-to-preview latency <120ms',
      'Auto-playlist sync to Spotify under 3 seconds',
    ],
    architectureImage: soundSwipeArchitectureImage,
    stackSummary:
      'React • Node.js • Express • Spotify Web API • WebSockets • AI Ranking Engine (Embeddings + Similarity Models)',
  },
];

const SKILL_ICONS = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  r: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  powershell: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg',
  c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  pyspark: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
  duckdb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/duckdb/duckdb-original.svg',
  dbt: 'https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/dbt-icon.svg',
  databricks: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  azure_factory: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  delta_lake: deltaLakeIcon,
  mlflow: 'https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/mlflow-icon.svg',
  vertex_ai: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  scikit_learn: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  faiss: 'https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/meta-icon.svg',
  qdrant: 'https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/qdrant-icon.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  powerbi: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  gcp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github_actions: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  airflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
  jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  grafana: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
  nexthink: nexthinkIcon,
  ci_cd: ciCdIcon,
  gitops: gitOpsIcon,
  rest_api: restApiIcon,
  data_modeling: dataModelIcon,
  etl_pipeline: etlPipelineIcon,
};

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SKILL_ICONS.python },
      { name: 'SQL', icon: SKILL_ICONS.sql },
      { name: 'JavaScript', icon: SKILL_ICONS.javascript },
      { name: 'TypeScript', icon: SKILL_ICONS.typescript },
      { name: 'C#', icon: SKILL_ICONS.csharp },
      { name: 'C', icon: SKILL_ICONS.c },
      { name: 'PowerShell', icon: SKILL_ICONS.powershell },
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      { name: 'PySpark', icon: SKILL_ICONS.pyspark },
      { name: 'DuckDB', icon: SKILL_ICONS.duckdb },
      { name: 'dbt', icon: SKILL_ICONS.dbt },
      { name: 'Azure Databricks', icon: SKILL_ICONS.databricks },
      { name: 'Azure Data Factory', icon: SKILL_ICONS.azure_factory },
      { name: 'Delta Lake', icon: SKILL_ICONS.delta_lake },
    ],
  },
  {
    title: 'ML & Analytics',
    skills: [
      { name: 'Scikit-Learn', icon: SKILL_ICONS.scikit_learn },
      { name: 'MLflow', icon: SKILL_ICONS.mlflow },
      { name: 'Vertex AI', icon: SKILL_ICONS.vertex_ai },
      { name: 'FAISS', icon: SKILL_ICONS.faiss },
      { name: 'Qdrant', icon: SKILL_ICONS.qdrant },
      { name: 'Pandas', icon: SKILL_ICONS.pandas },
      { name: 'Power BI', icon: SKILL_ICONS.powerbi },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Azure', icon: SKILL_ICONS.azure },
      { name: 'GCP', icon: SKILL_ICONS.gcp },
      { name: 'Docker', icon: SKILL_ICONS.docker },
      { name: 'Kubernetes', icon: SKILL_ICONS.kubernetes },
      { name: 'Git', icon: SKILL_ICONS.git },
      { name: 'GitHub Actions', icon: SKILL_ICONS.github_actions },
      { name: 'Jenkins', icon: SKILL_ICONS.jenkins },
      { name: 'CI/CD', icon: SKILL_ICONS.ci_cd },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'FastAPI', icon: SKILL_ICONS.fastapi },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Apache Airflow', icon: SKILL_ICONS.airflow },
      { name: 'PostgreSQL', icon: SKILL_ICONS.postgresql },
      { name: 'Nexthink', icon: SKILL_ICONS.nexthink },
      { name: 'Grafana', icon: SKILL_ICONS.grafana },
    ],
  },
];

const educationContent = {
  university: 'University of North Carolina at Charlotte',
  degree: 'B.S. in Computer Science',
  concentration: 'Software, Systems, and Networks Concentration',
  graduation: 'August 2025',
  ctaLabel: 'View Degree',
  resumeHref: diplomaPdf,
  campusImage: uncCharlotteImage,
};

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure',
    sub: 'GenAI Professional',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=E076BF3A4388ED6DB58C4D27FC1607DA3A270098007DAF4001F0C9AE56D4CC18',
  },
  {
    title: 'Oracle Cloud Infrastructure',
    sub: 'Data Science Professional',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D69AF070D387B2F2B5DB8B1752DD8ED73B9F10ABA9222270CE7B431802A818AF',
  },
  {
    title: 'Oracle Cloud Infrastructure',
    sub: 'Autonomous Database Professional',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2126CB82328B8BBF110E4639C71E2B3C076D357D7B43EA529874EA73D22CFD39',
  },
  {
    title: 'MySQL 8.0 Database Developer',
    sub: 'Oracle Certified Professional',
    year: '2026',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3A60BB40634063E5BAC512E076D54CDBC3141258FABEFD80CF0DFC7D045FCD78',
  },
  {
    title: 'MySQL Implementation',
    sub: 'Certified Associate',
    year: '2026',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2B0BE47888174080A0F79370BFF28C17C7CB295C1ED364CD49131E7995ACB295',
  },
];

const contactInfo = {
  branding: 'Shravan Sulikeri',
  location: 'Raleigh, North Carolina',
  email: 'shravan.sulikeri@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shravan-sulikeri/' },
    { label: 'GitHub', href: 'https://github.com/Shravan-Sulikeri' },
    { label: 'Email', href: 'mailto:shravan.sulikeri@gmail.com' },
  ],
};

// --- UTILS & PRIMITIVES ---
const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus-visible:ring-0';
const navSafeAreaStyle = { top: 'env(safe-area-inset-top, 0px)', paddingTop: 'env(safe-area-inset-top, 0px)' };

const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const CompanyLogo = ({ url, name, className = '', isDarkTheme = false }) => {
  const [error, setError] = useState(false);
  if (error || !url) {
    return (
      <div
        className={`flex items-center justify-center font-serif italic px-4 ${className} ${isDarkTheme ? 'bg-white text-black' : 'bg-neutral-900 text-white'
          }`}
        aria-label={`${name} logo placeholder`}
      >
        {name}
      </div>
    );
  }
  return (
    <img
      src={url}
      alt={`${name} logo`}
      className={`object-contain ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const Reveal = ({ children, className = '' }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${className}`}
    >
      {children}
    </div>
  );
};

// --- COMPONENTS ---
const NavBar = ({ brand, links, about, isMenuOpen, onToggleMenu, scrolled, onNavigate, isAboutOpen, onCloseAbout }) => {
  const splitIndex = Math.ceil(links.length / 2);
  return (
    <nav
      style={navSafeAreaStyle}
      className={`sticky top-0 z-50 relative overflow-visible bg-black/90 transition-all duration-500 border-b ${scrolled ? 'border-gray-700' : 'border-transparent'
        }`}
      aria-label="Primary"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      <div
        className={`relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between ${scrolled ? 'py-3' : 'py-6'
          }`}
      >
        <button
          type="button"
          className={`md:hidden p-2 text-white ${focusRing}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={onToggleMenu}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden md:flex gap-7 text-[11px] font-bold tracking-[0.15em] uppercase">
          {links.slice(0, splitIndex).map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} isAboutOpen={isAboutOpen} />
          ))}
        </div>

        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] cursor-default select-none pointer-events-none"
        >
          {brand}
        </span>

        <div className="hidden md:flex items-center gap-7 text-[11px] font-bold tracking-[0.15em] uppercase">
          {links.slice(splitIndex).map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} isAboutOpen={isAboutOpen} />
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full z-[60] bg-black border-t border-gray-700 py-6 px-6 flex flex-col gap-4 text-center shadow-2xl text-white"
        >
          {links.map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} isMobile isAboutOpen={isAboutOpen} />
          ))}
        </div>
      )}

      <AboutDropdown content={about} isOpen={isAboutOpen} onClose={onCloseAbout} />
    </nav>
  );
};

const NavLink = ({ link, onNavigate, isMobile, isAboutOpen }) => {
  const isToggle = link?.action === 'about';
  const baseClassName = `text-[11px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white transition-all duration-200 sm:hover:text-white sm:hover:scale-105 inline-flex items-center gap-2 ${isMobile ? 'py-2 w-full justify-center' : ''
    } ${focusRing}`;

  if (isToggle) {
    return (
      <button
        type="button"
        className={baseClassName}
        onClick={(e) => onNavigate(e, link)}
        aria-expanded={isAboutOpen}
        aria-controls="about-panel"
        aria-haspopup="dialog"
      >
        <span>{link.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
    );
  }

  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noreferrer' : undefined}
      className={baseClassName}
      onClick={(e) => onNavigate(e, link)}
      aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
    >
      {link.label}
    </a>
  );
};

const AboutDropdown = ({ content, isOpen, onClose }) => {
  if (!content) return null;
  const { name, bio, headshotSrc, headshotAlt } = content;
  const bioParagraphs = bio.split('\n\n').filter(Boolean);
  return (
    <div
      id="about-panel"
      role="dialog"
      aria-label="About me"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[80] flex items-start sm:items-center justify-center px-4 sm:px-8 py-6 sm:py-10 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 sm:bg-black/50 sm:backdrop-blur-2xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        aria-label="Close About Me panel"
      />
      <div
        className={`relative z-10 w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 sm:border-white/15 bg-white text-slate-900 sm:bg-white/5 sm:text-white sm:backdrop-blur-2xl shadow-lg sm:shadow-2xl sm:shadow-black/70 transition-all duration-300 ease-out ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/30 pointer-events-none hidden sm:block" />
        <div className="relative z-10 p-5 sm:p-10 md:p-12 overflow-y-auto overscroll-contain max-h-[90vh] sm:max-h-[85vh] touch-scroll">
          <button
            type="button"
            onClick={onClose}
            className={`absolute right-4 top-4 text-slate-600 sm:text-white/80 sm:hover:text-white transition ${focusRing}`}
            aria-label="Close About Me panel"
          >
            <X size={16} />
          </button>
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
            {headshotSrc ? (
              <img
                src={headshotSrc}
                alt={headshotAlt || 'Headshot'}
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover border border-slate-200 sm:border-white/25 shadow-xl"
                loading="lazy"
              />
            ) : (
              <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-slate-100 sm:bg-white/10 border border-slate-200 sm:border-white/25 flex items-center justify-center text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 sm:text-white/70">
                Headshot
              </div>
            )}
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.08em] sm:tracking-[0.14em] sm:uppercase text-slate-900 sm:text-white text-center">
                {name}
              </h3>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-slate-700 sm:text-gray-100 leading-relaxed text-left">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={`${name}-bio-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ content, stats, onPrimaryClick, onSecondaryClick }) => {
  return (
    <header
      id={content.resumeAnchorId}
      className="relative w-full min-h-[100svh] md:h-[88vh] overflow-hidden bg-black group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-[2000ms] sm:group-hover:scale-105 pointer-events-none"
        style={{ backgroundImage: `url("${content.backgroundImage}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-gradient-drift pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.45) 50px, rgba(255,255,255,0.45) 51px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 px-4 sm:px-8 lg:px-14">
        <div className="relative h-full flex flex-col">
          <div className="pt-16 sm:pt-20 md:pt-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center pointer-events-none">
            <h1 className="relative text-4xl sm:text-6xl lg:text-8xl font-ronzino uppercase tracking-[0.06em] sm:tracking-[0.12em] leading-tight text-center drop-shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
              <span className="absolute inset-0 text-white/30 blur-2xl scale-105" aria-hidden="true">
                {content.title}
              </span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white">
                {content.title}
              </span>
            </h1>
          </div>

          <div className="mt-auto pb-10 md:pb-24">
            <div className="max-w-4xl space-y-5 text-left text-white">
              {content.subheadline ? (
                <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-100 bg-black/60 inline-block px-3 py-1">
                  {content.subheadline}
                </p>
              ) : null}
              {content.description ? (
                <p className="text-sm sm:text-base font-medium tracking-[0.08em] sm:tracking-[0.18em] text-gray-200 max-w-2xl uppercase leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                  {content.description}
                </p>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 items-stretch">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/30 bg-white/5 px-4 py-3 flex flex-col gap-1 text-left transition-all duration-300 sm:hover:bg-white/10 h-full"
                  >
                    <span className="text-[11px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gray-300">
                      {stat.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold tracking-[0.08em] sm:tracking-[0.12em] uppercase">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  type="button"
                  onClick={onPrimaryClick}
                  className={`inline-flex items-center justify-center gap-2 bg-[#2563eb]/20 border-2 border-[#2563eb] text-white px-8 sm:px-10 py-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase transition-all duration-300 sm:hover:bg-[#2563eb] ${focusRing}`}
                  aria-label={`${content.primaryCta.label} section`}
                >
                  {content.primaryCta.label}
                  <ArrowRight size={14} />
                </button>
                <button
                  type="button"
                  onClick={onSecondaryClick}
                  className={`inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/50 text-white px-8 sm:px-10 py-3 text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase transition-all duration-300 sm:hover:bg-white sm:hover:text-[#0f172a] ${focusRing}`}
                  aria-label={`${content.secondaryCta.label} section`}
                >
                  {content.secondaryCta.label}
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ExperienceSection = ({ entries, expandedId, onToggle }) => (
  <section id="experience" className="w-full" aria-labelledby="experience-heading">
    <div className="relative overflow-hidden bg-black text-white py-10 sm:py-16">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2
          id="experience-heading"
          className="text-2xl sm:text-4xl font-medium uppercase tracking-[0.12em] sm:tracking-[0.2em]"
        >
          Experience
        </h2>
        <div className="h-px w-16 sm:w-24 bg-white/30 mx-auto mt-3" aria-hidden="true" />
      </div>
    </div>

    {entries.map((exp, index) => {
      const isExpanded = expandedId === exp.id;
      const isBlueTheme = exp.theme === 'blue';
      const isGrayTheme = exp.theme === 'gray';
      const isDarkTheme = exp.theme === 'dark' || isBlueTheme || isGrayTheme;
      const backgroundClass = isBlueTheme
        ? 'bg-gradient-to-br from-[#3182ce] to-[#1a365d] text-white'
        : isGrayTheme
          ? 'bg-gradient-to-br from-[#4a4a4a] to-[#000000] text-white'
          : isDarkTheme
            ? 'bg-gradient-to-br from-[#5c2a70] to-[#83429b] text-white'
            : 'bg-gray-100 text-black';
      const accentTextClass = isBlueTheme
        ? 'text-[#bee3f8]'
        : isGrayTheme
          ? 'text-[#d1d5db]'
          : isDarkTheme
            ? 'text-[#dfbbfb]'
            : 'text-gray-600';
      const metaTextClass = isDarkTheme ? 'text-gray-100' : 'text-gray-500';
      const metricBarClass = isBlueTheme
        ? 'bg-[#bee3f8]'
        : isGrayTheme
          ? 'bg-[#d1d5db]'
          : isDarkTheme
            ? 'bg-[#dfbbfb]'
            : 'bg-black';
      const metricTextClass = isDarkTheme ? 'text-white' : 'text-black';
      const detailTextClass = isBlueTheme ? 'text-gray-100' : isDarkTheme ? 'text-gray-200' : 'text-gray-700';
      const detailBulletClass = isBlueTheme
        ? 'text-[#bee3f8]'
        : isGrayTheme
          ? 'text-[#d1d5db]'
          : isDarkTheme
            ? 'text-[#dfbbfb]'
            : 'text-black';
      const buttonClass = isBlueTheme
        ? 'border-white text-white sm:hover:bg-white sm:hover:text-[#1a365d]'
        : isGrayTheme
          ? 'border-white text-white sm:hover:bg-white sm:hover:text-[#000000]'
          : isDarkTheme
            ? 'border-white text-white sm:hover:bg-white sm:hover:text-[#5c2a70]'
            : 'border-black sm:hover:bg-black sm:hover:text-white';
      const patternColor = isBlueTheme ? '#bee3f8' : isGrayTheme ? '#d1d5db' : isDarkTheme ? '#ffffff' : '#e5e5e5';
      return (
        <article
          key={exp.id}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:min-h-[560px]`}
        >
          <div
            className={`w-full md:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${backgroundClass
              }`}
          >
            <div
              className={`absolute inset-0 pointer-events-none ${isDarkTheme ? 'opacity-10' : 'opacity-20'}`}
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, ${patternColor
                  } 50px, ${patternColor} 51px)`,
              }}
              aria-hidden="true"
            />
            <div
              className={`absolute inset-0 pointer-events-none ${isBlueTheme
                ? 'bg-gradient-to-b from-[#0f2748]/40 to-transparent'
                : isGrayTheme
                  ? 'bg-gradient-to-b from-black/30 to-transparent'
                  : isDarkTheme
                    ? 'bg-gradient-to-b from-purple-900/10 to-transparent'
                    : 'bg-gradient-to-b from-white/50 to-gray-200/50 mix-blend-overlay'
                }`}
              aria-hidden="true"
            />

            <div className="relative z-10 text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start items-center h-14">
                <CompanyLogo
                  url={exp.logoUrl}
                  name={exp.company}
                  className="h-full w-auto max-w-[180px] max-h-[56px] text-lg"
                  isDarkTheme={isDarkTheme}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em]">
                  {exp.company}
                </h3>
                <p
                  className={`text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase ${accentTextClass
                    }`}
                >
                  {exp.role}
                </p>
                <p className={`text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase ${metaTextClass}`}>
                  {exp.period} • {exp.location}
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                {exp.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-3 w-full justify-start">
                    <div className={`w-1 h-6 ${metricBarClass}`} />
                    <span className={`text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-bold ${metricTextClass}`}>
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              <div
                id={`${exp.id}-details`}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[520px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
              >
                <ul className="list-none space-y-3 text-left">
                  {exp.details.map((detail) => (
                    <li
                      key={detail}
                      className={`text-xs sm:text-sm leading-relaxed font-medium flex gap-3 ${detailTextClass
                        }`}
                    >
                      <span className={`${detailBulletClass} font-bold`}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => onToggle(exp.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`${exp.id}-details`}
                  className={`border px-8 sm:px-10 py-3 text-[11px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase transition-all flex items-center gap-2 group ${buttonClass
                    } ${focusRing} touch-manipulation active:scale-[0.99] select-none`}
                >
                  {isExpanded ? 'Close Details' : 'View Details'}
                  {isExpanded ? (
                    <Minus size={12} className="sm:group-hover:rotate-180 transition-transform" aria-hidden="true" />
                  ) : (
                    <Plus size={12} className="sm:group-hover:rotate-90 transition-transform" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 h-[280px] sm:h-[420px] md:h-auto relative order-first md:order-none ${exp.imageWrapperClass || ''
              }`}
          >
            <img
              src={exp.image}
              alt={exp.imageAlt || `${exp.company} workspace`}
              className={`absolute inset-0 w-full h-full ${exp.imageClass || 'object-cover'
                } grayscale sm:hover:grayscale-0 transition-all duration-700`}
              loading="lazy"
            />
          </div>
        </article>
      );
    })}
  </section>
);

const ProjectsSection = ({ projects, onProjectSelect }) => (
  <section
    id="projects"
    className="w-full relative overflow-hidden bg-gradient-to-br from-[#1f2937] to-[#111827] text-white py-20 sm:py-24"
  >
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" aria-hidden="true" />

    <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em] mb-3">
          Projects
        </h2>
        <div className="h-px w-16 sm:w-24 bg-slate-700 mx-auto" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Reveal key={project.title} className="h-full">
            <ProjectCard project={project} onSelect={onProjectSelect} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, onSelect }) => {
  const isOrange = project.theme === 'orange';
  const isBlack = project.theme === 'black';
  const isBlue = project.theme === 'blue';
  const isPurple = project.theme === 'purple';
  const isLightBlue = project.theme === 'lightblue';
  const isGreen = project.theme === 'green';
  const cardClasses = isOrange
    ? 'border border-orange-900 bg-gradient-to-br from-[#f97316] to-[#7c2d12] text-white sm:hover:border-orange-700'
    : isBlack
      ? 'border border-neutral-900 bg-gradient-to-br from-neutral-900 to-black text-white sm:hover:border-neutral-900'
      : isBlue
        ? 'border border-blue-900 bg-gradient-to-br from-[#3b82f6] to-[#000050] text-white sm:hover:border-blue-800'
        : isPurple
          ? 'border border-purple-900 bg-gradient-to-br from-[#7c3aed] to-[#2e1065] text-white sm:hover:border-purple-800'
          : isGreen
            ? 'border border-emerald-900 bg-gradient-to-br from-[#22c55e] to-[#14532d] text-white sm:hover:border-emerald-700'
            : isLightBlue
              ? 'border border-gray-200 sm:hover:border-[#e0f2fe] bg-[#e0f2fe] text-black'
              : 'border border-gray-200 sm:hover:border-[#86efac] bg-white text-black';
  const textColorClass = isOrange || isBlack || isBlue || isPurple || isGreen ? 'text-white' : 'text-black';
  const bodyTextClass = isOrange || isBlack || isBlue || isPurple || isGreen ? 'text-white' : 'text-gray-500';
  const tagClass =
    isOrange || isBlack || isBlue || isPurple || isGreen
      ? 'bg-white/20 text-white'
      : isLightBlue
        ? 'bg-blue-100 text-gray-800'
        : 'bg-gray-100 text-gray-600';
  const buttonClass = isBlack
    ? 'border border-white text-white sm:hover:bg-white sm:hover:text-black'
    : 'border border-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase bg-black text-white transition-all duration-300 sm:group-hover:bg-white sm:group-hover:text-black';

  const handleClick = () => {
    onSelect?.(project);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group block h-full transition-all duration-300 sm:hover:-translate-y-1 sm:hover:shadow-lg ${cardClasses} ${focusRing} text-left touch-manipulation active:scale-[0.99] select-none`}
      aria-label={`${project.title} details`}
    >
      <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${project.imageClass || ''} mix-blend-multiply opacity-90 sm:group-hover:scale-105 transition-transform duration-700`}
          loading="lazy"
        />
        <div className="absolute top-4 left-0 bg-black text-white text-[10px] sm:text-[9px] px-3 py-1 font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase">
          {project.category}
        </div>
        {project.logo && (
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full p-2 flex items-center justify-center">
            <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" loading="lazy" />
          </div>
        )}
      </div>

      <div className="px-5 pt-4 text-center">
        <h3 className={`text-lg font-medium uppercase tracking-[0.18em] ${textColorClass}`}>
          {project.title}
        </h3>
      </div>

      <div className="px-5 pb-6 pt-3 text-center space-y-3">
        <p className={`text-[11px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase line-clamp-2 ${bodyTextClass}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] sm:text-[9px] tracking-[0.14em] sm:tracking-[0.18em] uppercase font-bold px-3 py-1 ${tagClass}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className={`text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] ${isOrange || isBlack ? 'text-white' : ''}`}>
          {project.stackLabel}
        </p>
        <span
          className={`w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-300 ${isBlack ? buttonClass : 'border border-black bg-black text-white sm:group-hover:bg-white sm:group-hover:text-black'
            }`}
        >
          <Github size={14} aria-hidden="true" /> View GitHub Repo
        </span>
      </div>
    </button>
  );
};

const SkillsSection = ({ categories }) => (
  <section
    id="skills"
    className="w-full relative overflow-hidden bg-gradient-to-br from-[#0b132b] to-[#1c2541] text-white py-20 sm:py-24"
  >
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" aria-hidden="true" />

    <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-14 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white">
          Technical Arsenal
        </h2>
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.28em] text-[#a5d8dd] uppercase">
          Core Technologies & Frameworks
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {categories.map((category) => (
          <Reveal key={category.title}>
            <div className="flex flex-col gap-5 h-full bg-white/10 backdrop-blur-sm p-4 sm:p-5 border border-white/20 text-white">
              <div className="flex items-center">
                <h3 className="text-sm font-black tracking-[0.16em] sm:tracking-[0.2em] uppercase border-b border-white/30 pb-2">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 object-contain opacity-80 sm:group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full sm:group-hover:bg-white transition-colors" />
                      </div>
                    )}
                    <span className="text-[11px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase text-gray-100 sm:group-hover:text-white transition-colors line-clamp-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const EducationSection = ({ content }) => (
  <section
    id="education"
    className="w-full md:min-h-[520px] flex flex-col md:flex-row relative overflow-hidden"
    aria-labelledby="education-heading"
  >
    <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-end md:justify-center relative z-10 bg-gradient-to-br from-[#00502b] to-[#00502b]">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 space-y-6">
        <h2
          id="education-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em] leading-tight text-[#cbb77a] drop-shadow-sm"
        >
          {content.university}
        </h2>
        <div className="space-y-3 text-[#cbb77a]">
          <div>
            <p className="text-[11px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase opacity-80 mb-1">
              Degree
            </p>
            <p className="text-sm sm:text-lg font-bold tracking-wide uppercase">{content.degree}</p>
            <p className="text-xs opacity-90 tracking-wide mt-1">{content.concentration}</p>
          </div>
          <div>
            <p className="text-[11px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase opacity-80 mb-1">
              Graduation
            </p>
            <p className="text-sm sm:text-lg font-bold tracking-wide uppercase">{content.graduation}</p>
          </div>
        </div>
        <a
          href={content.resumeHref}
          target="_blank"
          rel="noreferrer"
          className={`mt-10 inline-block border-2 border-[#cbb77a] text-[#cbb77a] px-7 py-3 text-[11px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase sm:hover:bg-[#cbb77a] sm:hover:text-[#00502b] transition-all w-fit ${focusRing}`}
        >
          {content.ctaLabel}
        </a>
      </div>
    </div>

    <div className="w-full md:w-1/2 h-[280px] sm:h-[400px] md:h-auto relative">
      <img
        src={content.campusImage}
        alt="University campus"
        className="absolute inset-0 w-full h-full object-cover grayscale sm:hover:grayscale-0 transition-all duration-700"
        loading="lazy"
      />
    </div>
  </section>
);

const CertificationsSection = ({ items }) => {
  const total = items.length;
  const hasCenteredPair = total % 3 === 2;

  return (
    <section
      id="certifications"
      className="w-full relative overflow-hidden bg-gradient-to-br from-[#991b1b] to-[#450a0a] text-white py-16 sm:py-20"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-[0.14em] sm:tracking-[0.2em]">
          Professional Certifications
        </h3>
        <div className="h-px w-16 sm:w-24 bg-white/30 mx-auto mt-3 mb-10" aria-hidden="true" />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
          {items.map((cert, index) => {
            const isSecondLast = hasCenteredPair && index === total - 2;
            const isLast = hasCenteredPair && index === total - 1;
            const colStartClass = isSecondLast ? 'md:col-start-2' : isLast ? 'md:col-start-4' : '';

            return (
              <a
                key={`${cert.title}-${cert.sub}`}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className={`border border-white/20 text-white p-6 sm:p-8 transition-colors group block sm:hover:bg-white sm:hover:text-[#7f1d1d] md:col-span-2 ${colStartClass} ${focusRing}`}
                aria-label={`${cert.title} ${cert.sub} certification (opens in new tab)`}
              >
                <div
                  className="w-12 h-1 bg-[#fca5a5] mb-6 mx-auto sm:group-hover:bg-[#7f1d1d] transition-colors"
                  aria-hidden="true"
                />
                <h4 className="font-bold text-sm tracking-[0.16em] uppercase mb-2">{cert.title}</h4>
                <p className="text-[11px] sm:text-xs text-red-200 tracking-[0.18em] sm:tracking-[0.24em] uppercase mb-4 sm:group-hover:text-[#7f1d1d]">
                  {cert.sub}
                </p>
                <span className="text-[11px] sm:text-[10px] font-bold border border-white/30 px-3 py-1 rounded-full sm:group-hover:text-[#7f1d1d] sm:group-hover:border-[#7f1d1d]">
                  {cert.year}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ contact }) => {
  const linkedin = contact.socials.find((social) => social.label === 'LinkedIn');

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b0b0b] to-[#1f2937] text-white py-6 sm:py-8"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col min-h-[240px] gap-6 text-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            <a
              href={`mailto:${contact.email}`}
              className={`group border border-white/25 bg-transparent backdrop-blur-md sm:hover:bg-white/10 sm:hover:border-white transition-all duration-300 ease-out rounded-lg p-5 sm:p-7 flex items-center justify-between gap-4 text-left sm:hover:scale-[1.03] sm:hover:-translate-y-1 sm:hover:shadow-2xl sm:hover:shadow-slate-900/60 min-h-[160px] sm:min-h-[190px] ${focusRing}`}
              aria-label="Email Shravan"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <img
                    src={gmailIcon}
                    alt=""
                    className="h-14 w-14 object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase text-white">
                    Email
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">{contact.email}</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-white" />
            </a>

            <a
              href={linkedin?.href || '#'}
              target="_blank"
              rel="noreferrer"
              className={`group border border-white/25 bg-transparent backdrop-blur-md sm:hover:bg-white/10 sm:hover:border-white transition-all duration-300 ease-out rounded-lg p-5 sm:p-7 flex items-center justify-between gap-4 text-left sm:hover:scale-[1.03] sm:hover:-translate-y-1 sm:hover:shadow-2xl sm:hover:shadow-slate-900/60 min-h-[160px] sm:min-h-[190px] ${linkedin ? focusRing : ''
                }`}
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="h-14 w-14 object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.24em] uppercase text-white">
                    LinkedIn
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {linkedin ? linkedin.label : 'Profile'}
                  </p>
                </div>
              </div>
              <ArrowRight size={18} className="text-white" />
            </a>
          </div>
        </div>

        <p className="text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase text-white">
          © 2026 {contact.branding} · Junior Data Engineer.
        </p>
      </div>
    </footer>
  );
};

// --- MAIN ---
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isAboutOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsAboutOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAboutOpen]);

  useEffect(() => {
    if (!isAboutOpen && !selectedProject) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isAboutOpen, selectedProject]);

  const handleNavigate = (event, link) => {
    if (link?.action === 'about') {
      event.preventDefault();
      setIsAboutOpen((prev) => !prev);
      setIsMenuOpen(false);
      return;
    }
    if (link?.external) return;
    if (link?.href?.startsWith('#')) {
      event.preventDefault();
      const targetId = link.href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      setIsAboutOpen(false);
    }
  };

  const toggleExperience = (id) => {
    setExpandedExperience((prev) => (prev === id ? null : id));
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="top"
      className="safe-area-top min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white scroll-smooth overflow-x-hidden"
    >
      <a
        href="#main"
        className={`sr-only focus:not-sr-only absolute left-4 top-4 bg-black text-white px-3 py-2 text-sm ${focusRing}`}
      >
        Skip to content
      </a>

      <div className="relative overflow-hidden bg-black/90 text-white text-[11px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.2em] text-center py-2 uppercase">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10">
          {topBanner.message} •{' '}
          <a
            href={topBanner.linkHref}
            target="_blank"
            rel="noreferrer"
            className="sm:hover:text-gray-300 transition-colors underline-offset-4"
          >
            {topBanner.linkLabel}
          </a>
        </div>
      </div>

      <NavBar
        brand="Sulikeri"
        links={navLinks}
        isMenuOpen={isMenuOpen}
        about={aboutContent}
        onToggleMenu={() => {
          setIsMenuOpen((prev) => !prev);
          setIsAboutOpen(false);
        }}
        scrolled={scrolled}
        onNavigate={handleNavigate}
        isAboutOpen={isAboutOpen}
        onCloseAbout={() => setIsAboutOpen(false)}
      />

      <Hero
        content={heroContent}
        stats={quickStats}
        onPrimaryClick={() => scrollTo(heroContent.primaryCta.targetId)}
        onSecondaryClick={() => scrollTo(heroContent.secondaryCta.targetId)}
      />

      <main id="main">
        <ExperienceSection entries={experienceEntries} expandedId={expandedExperience} onToggle={toggleExperience} />
        <ProjectsSection projects={projectEntries} onProjectSelect={setSelectedProject} />
        <SkillsSection categories={skillCategories} />
        <EducationSection content={educationContent} />
        <CertificationsSection items={certifications} />
      </main>

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />

      <Footer contact={contactInfo} />

      <ChatBot email={contactInfo.email} />
    </div>
  );
};

export default Portfolio;
