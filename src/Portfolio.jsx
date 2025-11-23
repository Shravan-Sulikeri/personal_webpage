/**
 * Portfolio page structure: NavBar, Hero, ExperienceSection (ExperienceCard), ProjectsSection (ProjectCard),
 * SkillsSection, EducationSection, CertificationsSection, and Footer are all defined in this file for a single-page layout.
 * Content controls: update heroContent, quickStats, navLinks, experienceEntries, projectEntries, skillCategories,
 * educationContent, certifications, contactInfo, and topBanner to edit copy or assets without touching layout code.
 * To add items: (1) duplicate an object in projectEntries/experienceEntries/skillCategories, (2) fill in titles, metrics,
 * tags, and image/logo URLs (or leave null for text fallback), (3) save—components render automatically in the grid layout.
 */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Github, Linkedin, Mail, Menu, Minus, Plus, X } from 'lucide-react';
import heroBackground from '../assest/Hero_img_backround.jpg';
import controlInfotechImage from '../assest/cit offfice.jpg';
import controlInfotechLogo from '../assest/control_inftech_logo.png';
import nexthinkIcon from '../assest/nexthink_icon.png';
import ciCdIcon from '../assest/ci_cd.jpg';
import deltaLakeIcon from '../assest/delta_lake_icon.png';
import gitOpsIcon from '../assest/git_ops_icon.png';
import uncCharlotteImage from '../assest/unc_clt.jpg';
import f1Image from '../assest/f1.jpg';
import firstCitizensImage from '../assest/fcb_image.webp';
import firstCitizensLogo from '../assest/url.jpg';
import careSightImage from '../assest/care_sight.jpeg';
import spotifyImage from '../assest/spotify_icon.png';
import soundSwipeImage from '../assest/sound_swipe_project_card.jpg';
import varsinixLogo from '../assest/Gemini_Generated_Image_iuo4k9iuo4k9iuo4.jpg';
import varsinixOfficeImage from '../assest/varsinix_wide_office.png';
import restApiIcon from '../assest/rest_api_icon.jpg.png';
import dataModelIcon from '../assest/data_model_icon.jpg';
import etlPipelineIcon from '../assest/etl_pipeline_icon.png';
import resumePdf from '../assest/Shravan_Sulikeri_Resume_2025.pdf';
import diplomaPdf from '../assest/Diploma.pdf';

// --- GLOBAL CONTENT CONFIG ---
const topBanner = {
  message: 'Recent Graduate • Summer 2025',
  linkLabel: 'View LinkedIn',
  linkHref: 'https://www.linkedin.com/in/shravan-sulikeri/',
};

const heroContent = {
  title: 'Shravan Sulikeri',
  subheadline: '',
  description:
    'Engineer with hands-on experience building cloud-native ETL pipelines, production-grade MLOps frameworks, and analytics systems across Azure, GCP, Databricks, Kubernetes, and Power BI. I design end-to-end data solutions that improve reliability, speed, and insight delivery for enterprise environments',
  primaryCta: { label: 'View Projects', targetId: 'projects' },
  secondaryCta: { label: 'View Experience', targetId: 'experience' },
  resumeAnchorId: 'resume',
  backgroundImage: heroBackground,
};

const quickStats = [
  { label: 'Experience', value: '1+ YEARS' },
  { label: 'Top Skills', value: 'PYTHON • DATA ANALYSIS • DATA ENGINEERING' },
  { label: 'Location', value: 'RALEIGH, NC' },
];

const navLinks = [
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
    role: 'DATA ENGINEER (ML & CLOUD)',
    period: 'AUG 2025 - PRESENT',
    location: 'RALEIGH, NC',
    metrics: ['DEPLOYMENT TIME -40%', 'PROCESSING SPEED +55%', 'RELEASE ERRORS -40%'],
    details: [
      'Engineered a monorepo-based MLOps framework with Docker, Kubernetes, and GitHub Actions, cutting deployment time by 40% and standardizing CI/CD automation across teams.',
      'Designed ETL pipelines in Python, SQL & Databricks (GCP), improving data processing speed by 55% and analytics delivery by 20%.',
      'Automated ML lifecycle and experiment tracking with MLflow & GCP Cloud Build, boosting reproducibility by 45%.',
      'Deployed monitoring and CI/CD dashboards via Prometheus, Grafana & GitOps, reducing release errors by 40%.',
    ],
    image: varsinixOfficeImage,
    imageAlt: 'Varsinix office',
    imageClass: 'object-contain',
    imageWrapperClass: 'bg-black',
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
      'Designed Power BI dashboards from Nexthink data to monitor 20K+ endpoints, boosting issue detection by 25%.',
      'Engineered high-performance NQL queries to join and analyze endpoint telemetry, reducing triage time by 35%.',
      'Automated endpoint remediation with Nexthink Remote Actions, boosting device reliability and IT response speed by 20%.',
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
    metrics: ['MANUAL WORKLOAD -30%', 'PROCESSING SPEED +40%', 'DETECTION ACCURACY +15%'],
    details: [
      'Automated security testing workflows and vulnerability scans with Python, reducing manual workload by 30%.',
      'Conducted malware analysis and log-parsing tools (Python & C) that improved data processing speed by 40%.',
      'Developed cross-platform automation in PowerShell and Bash to ingest Azure resource logs.',
    ],
    image: controlInfotechImage,
    imageAlt: 'Cybersecurity operations room',
    theme: 'gray',
  },
];

const projectEntries = [
  {
    title: 'F1 LakeHouse',
    category: 'DATA ARCHITECTURE',
    description: 'Ollama-Powered Local Lakehouse for F1 Data Analysis.',

    image: f1Image,
    link: 'https://github.com/Shravan-Sulikeri/f1-lakehouse',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg',
    tags: ['Ollama', 'Delta Lake', 'Databricks', 'Data Engineering'],
    theme: 'orange',
  },
  {
    title: 'CareSight',
    category: 'AI / HEALTHCARE',
    description: 'AI Powered Patient risk scoring & readmission prediction platform.',

    image: careSightImage,
    imageClass: 'object-center',
    link: 'https://github.com/Shravan-Sulikeri/caresight',
    logo: null,
    tags: ['TensorFlow', 'Predictive Analytics', 'GCP', 'Healthcare AI'],
    theme: 'blue',
  },
  {
    title: 'Spotify Data Pipeline',
    category: 'DATA ENGINEERING',
    description: 'Azure Data Factory, Databricks & Delta Lake Architecture.',

    image: spotifyImage,
    link: 'https://github.com/Shravan-Sulikeri/dataeng_azure_project',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    tags: ['Azure Data Factory', 'Databricks', 'Delta Lake', 'Python'],
    theme: 'black',
  },
  {
    title: 'SOUNDSWIPE APP',
    category: 'FULL STACK',
    description: 'Music discovery with swipe-based UI & real-time previews.',
   
    image: soundSwipeImage,
    link: 'https://github.com/Shravan-Sulikeri/sound-swipe-app',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    tags: ['React', 'Node.js', 'Realtime', 'Music'],
    theme: 'purple',
  },
];

const SKILL_ICONS = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  pyspark: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
  databricks: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
  azure_factory: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  delta_lake: deltaLakeIcon,
  mlflow: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  keras: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  powerbi: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  gcp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github_actions: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  airflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
  jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  prometheus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
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
      { name: 'C#', icon: SKILL_ICONS.csharp },
      { name: 'JavaScript', icon: SKILL_ICONS.javascript },
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      { name: 'PySpark', icon: SKILL_ICONS.pyspark },
      { name: 'Databricks', icon: SKILL_ICONS.databricks },
      { name: 'Azure Data Factory', icon: SKILL_ICONS.azure_factory },
      { name: 'Delta Lake', icon: SKILL_ICONS.delta_lake },
      { name: 'ETL Pipelines', icon: SKILL_ICONS.etl_pipeline },
      { name: 'Data Modeling', icon: SKILL_ICONS.data_modeling },
    ],
  },
  {
    title: 'ML & Analytics',
    skills: [
      { name: 'MLflow', icon: SKILL_ICONS.mlflow },
      { name: 'TensorFlow', icon: SKILL_ICONS.tensorflow },
      { name: 'Keras', icon: SKILL_ICONS.keras },
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
      { name: 'GitOps', icon: SKILL_ICONS.gitops },
    ],
  },
  {
    title: 'Orchestration & Tools',
    skills: [
      { name: 'Apache Airflow', icon: SKILL_ICONS.airflow },
      { name: 'Jira', icon: SKILL_ICONS.jira },
      { name: 'Prometheus', icon: SKILL_ICONS.prometheus },
      { name: 'Grafana', icon: SKILL_ICONS.grafana },
      { name: 'Nexthink', icon: SKILL_ICONS.nexthink },
      { name: 'NQL', icon: SKILL_ICONS.nexthink },
      { name: 'REST APIs', icon: SKILL_ICONS.rest_api },
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
const navSafeAreaStyle = { top: 'env(safe-area-inset-top, 0px)' };

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
        className={`flex items-center justify-center font-serif italic px-4 ${className} ${
          isDarkTheme ? 'bg-white text-black' : 'bg-neutral-900 text-white'
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
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- COMPONENTS ---
const NavBar = ({ brand, links, isMenuOpen, onToggleMenu, scrolled, onNavigate }) => {
  return (
    <nav
      style={navSafeAreaStyle}
      className={`sticky top-0 z-50 relative overflow-visible bg-gradient-to-r from-[#2563eb]/90 to-[#0f172a]/90 transition-all duration-500 border-b ${
        scrolled ? 'py-3 border-gray-700' : 'py-6 border-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
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
          {links.slice(0, 3).map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} />
          ))}
        </div>

        <span
          className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] cursor-default select-none"
        >
          {brand}
        </span>

        <div className="hidden md:flex items-center gap-7 text-[11px] font-bold tracking-[0.15em] uppercase">
          {links.slice(3).map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} />
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full z-[60] bg-[#0f172a] border-t border-gray-700 py-6 px-6 flex flex-col gap-4 text-center shadow-2xl text-white"
        >
          {links.map((link) => (
            <NavLink key={link.label} link={link} onNavigate={onNavigate} isMobile />
          ))}
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ link, onNavigate, isMobile }) => (
  <a
    href={link.href}
    target={link.external ? '_blank' : undefined}
    rel={link.external ? 'noreferrer' : undefined}
    className={`text-xs font-bold tracking-[0.2em] uppercase text-white transition-all duration-200 hover:text-white hover:scale-105 ${
      isMobile ? 'py-2' : ''
    } ${focusRing}`}
    onClick={(e) => onNavigate(e, link)}
    aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
  >
    {link.label}
  </a>
);

const Hero = ({ content, stats, onPrimaryClick, onSecondaryClick }) => {
  const [heroPointer, setHeroPointer] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setHeroPointer({ x, y });
  };

  const handleMouseLeave = () => setHeroPointer({ x: 50, y: 50 });

  return (
    <header
      id={content.resumeAnchorId}
      className="relative w-full min-h-[80vh] md:h-[88vh] overflow-hidden bg-black group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-[2000ms] group-hover:scale-105"
        style={{ backgroundImage: `url("${content.backgroundImage}")` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#2563eb]/60 to-[#0f172a]/40 mix-blend-multiply"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${heroPointer.x}% ${heroPointer.y}%, rgba(255,255,255,0.08), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-end pb-14 md:pb-24 px-4 sm:px-8 lg:px-14">
        <div className="max-w-4xl text-white space-y-5">
          {content.subheadline ? (
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-100 bg-black/60 inline-block px-3 py-1">
              {content.subheadline}
            </p>
          ) : null}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium uppercase tracking-[0.18em] leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
            {content.title}
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-[0.18em] text-gray-200 max-w-2xl uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {content.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/30 bg-white/5 px-4 py-3 flex flex-col gap-1 text-left transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-300">{stat.label}</span>
                <span className="text-sm sm:text-base font-semibold tracking-[0.12em] uppercase">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button
              type="button"
              onClick={onPrimaryClick}
              className={`inline-flex items-center justify-center gap-2 bg-[#2563eb]/20 border-2 border-[#2563eb] text-white px-8 sm:px-10 py-3 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#2563eb] ${focusRing}`}
              aria-label={`${content.primaryCta.label} section`}
            >
              {content.primaryCta.label}
              <ArrowRight size={14} />
            </button>
            <button
              type="button"
              onClick={onSecondaryClick}
              className={`inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/50 text-white px-8 sm:px-10 py-3 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white hover:text-[#0f172a] ${focusRing}`}
              aria-label={`${content.secondaryCta.label} section`}
            >
              {content.secondaryCta.label}
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const ExperienceSection = ({ entries, expandedId, onToggle }) => (
  <section id="experience" className="w-full">
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
        ? 'border-white text-white hover:bg-white hover:text-[#1a365d]'
        : isGrayTheme
          ? 'border-white text-white hover:bg-white hover:text-[#000000]'
        : isDarkTheme
          ? 'border-white text-white hover:bg-white hover:text-[#5c2a70]'
          : 'border-black hover:bg-black hover:text-white';
      const patternColor = isBlueTheme ? '#bee3f8' : isGrayTheme ? '#d1d5db' : isDarkTheme ? '#ffffff' : '#e5e5e5';
      return (
        <article
          key={exp.id}
          className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[560px]`}
        >
          <div
            className={`w-full md:w-1/2 p-10 sm:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${
              backgroundClass
            }`}
          >
            <div
              className={`absolute inset-0 ${isDarkTheme ? 'opacity-10' : 'opacity-20'}`}
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, ${
                  patternColor
                } 50px, ${patternColor} 51px)`,
              }}
              aria-hidden="true"
            />
            <div
              className={`absolute inset-0 ${
                isBlueTheme
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium uppercase tracking-[0.2em]">{exp.company}</h3>
                <p
                  className={`text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase ${
                    accentTextClass
                  }`}
                >
                  {exp.role}
                </p>
                <p className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase ${metaTextClass}`}>
                  {exp.period} • {exp.location}
                </p>
              </div>

              <div className="space-y-3">
                {exp.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className={`w-1 h-6 ${metricBarClass}`} />
                    <span className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold ${metricTextClass}`}>
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              <div
                id={`${exp.id}-details`}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded ? 'max-h-[520px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="list-none space-y-3 text-left">
                  {exp.details.map((detail) => (
                    <li
                      key={detail}
                      className={`text-xs sm:text-sm leading-relaxed font-medium flex gap-3 ${
                        detailTextClass
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
                  className={`border px-8 sm:px-10 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition-all flex items-center gap-2 group ${
                    buttonClass
                  } ${focusRing}`}
                >
                  {isExpanded ? 'Close Details' : 'View Details'}
                  {isExpanded ? (
                    <Minus size={12} className="group-hover:rotate-180 transition-transform" aria-hidden="true" />
                  ) : (
                    <Plus size={12} className="group-hover:rotate-90 transition-transform" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-auto relative order-first md:order-none ${
              exp.imageWrapperClass || ''
            }`}
          >
            <img
              src={exp.image}
              alt={exp.imageAlt || `${exp.company} workspace`}
              className={`absolute inset-0 w-full h-full ${
                exp.imageClass || 'object-cover'
              } grayscale hover:grayscale-0 transition-all duration-700`}
              loading="lazy"
            />
          </div>
        </article>
      );
    })}
  </section>
);

const ProjectsSection = ({ projects }) => (
  <section
    id="projects"
    className="w-full relative overflow-hidden bg-gradient-to-br from-[#15803d] to-[#052e16] text-white py-20 sm:py-24"
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />

    <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-[0.2em] mb-3">Projects</h2>
        <div className="h-px w-24 bg-[#86efac] mx-auto" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Reveal key={project.title} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => {
  const isOrange = project.theme === 'orange';
  const isBlack = project.theme === 'black';
  const isBlue = project.theme === 'blue';
  const isPurple = project.theme === 'purple';
  const isLightBlue = project.theme === 'lightblue';
  const cardClasses = isOrange
    ? 'border border-orange-900 bg-gradient-to-br from-[#f97316] to-[#7c2d12] text-white hover:border-orange-700'
    : isBlack
      ? 'border border-neutral-900 bg-gradient-to-br from-neutral-900 to-black text-white hover:border-neutral-900'
      : isBlue
        ? 'border border-blue-900 bg-gradient-to-br from-[#3b82f6] to-[#000050] text-white hover:border-blue-800'
        : isPurple
          ? 'border border-purple-900 bg-gradient-to-br from-[#7c3aed] to-[#2e1065] text-white hover:border-purple-800'
        : isLightBlue
          ? 'border border-gray-200 hover:border-[#e0f2fe] bg-[#e0f2fe] text-black'
          : 'border border-gray-200 hover:border-[#86efac] bg-white text-black';
  const textColorClass = isOrange || isBlack || isBlue || isPurple ? 'text-white' : 'text-black';
  const bodyTextClass = isOrange || isBlack || isBlue || isPurple ? 'text-white' : 'text-gray-500';
  const tagClass =
    isOrange || isBlack || isBlue || isPurple
      ? 'bg-white/20 text-white'
      : isLightBlue
        ? 'bg-blue-100 text-gray-800'
        : 'bg-gray-100 text-gray-600';
  const buttonClass = isBlack
    ? 'border border-white text-white hover:bg-white hover:text-black'
    : 'border border-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black';

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClasses} ${focusRing}`}
      aria-label={`${project.title} on GitHub`}
    >
      <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${project.imageClass || ''} mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700`}
        loading="lazy"
      />
      <div className="absolute top-4 left-0 bg-black text-white text-[9px] px-3 py-1 font-bold tracking-[0.2em] uppercase">
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
      <p className={`text-[10px] font-bold tracking-[0.2em] uppercase line-clamp-2 ${bodyTextClass}`}>
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`text-[9px] tracking-[0.18em] uppercase font-bold px-3 py-1 ${tagClass}`}>
            {tag}
          </span>
        ))}
      </div>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isOrange || isBlack ? 'text-white' : ''}`}>
        {project.stackLabel}
      </p>
      <span
        className={`w-full inline-flex items-center justify-center gap-2 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
          isBlack ? buttonClass : 'border border-black bg-black text-white group-hover:bg-white group-hover:text-black'
        }`}
      >
        <Github size={14} aria-hidden="true" /> View GitHub Repo
      </span>
    </div>
  </a>
  );
};

const SkillsSection = ({ categories }) => (
  <section
    id="skills"
    className="w-full relative overflow-hidden bg-gradient-to-br from-[#3a7ca5] to-[#1d3354] text-white py-20 sm:py-24"
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />

    <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-14 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-medium uppercase tracking-[0.2em] text-white">Technical Arsenal</h2>
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#a5d8dd] uppercase">
          Core Technologies & Frameworks
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {categories.map((category) => (
          <Reveal key={category.title}>
            <div className="flex flex-col gap-5 h-full bg-white/10 backdrop-blur-sm p-4 sm:p-5 border border-white/20 text-white">
              <div className="flex items-center">
                <h3 className="text-sm font-black tracking-[0.2em] uppercase border-b border-white/30 pb-2">
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
                        className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors" />
                      </div>
                    )}
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-100 group-hover:text-white transition-colors line-clamp-1">
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
    className="w-full min-h-[520px] flex flex-col md:flex-row relative overflow-hidden"
    aria-labelledby="education-heading"
  >
    <div className="w-full md:w-1/2 p-10 sm:p-14 lg:p-20 flex flex-col justify-end md:justify-center relative z-10 bg-gradient-to-br from-[#a49665] to-[#cbb77a]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 space-y-6">
        <h2
          id="education-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium uppercase tracking-[0.2em] leading-tight text-[#00502b] drop-shadow-sm"
        >
          {content.university}
        </h2>
        <div className="space-y-3 text-[#00502b]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 mb-1">Degree</p>
            <p className="text-sm sm:text-lg font-bold tracking-wide uppercase">{content.degree}</p>
            <p className="text-xs opacity-90 tracking-wide mt-1">{content.concentration}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 mb-1">Graduation</p>
            <p className="text-sm sm:text-lg font-bold tracking-wide uppercase">{content.graduation}</p>
          </div>
        </div>
        <a
          href={content.resumeHref}
          target="_blank"
          rel="noreferrer"
          className={`mt-10 inline-block border-2 border-[#00502b] text-[#00502b] px-7 py-3 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#00502b] hover:text-[#cbb77a] transition-all w-fit ${focusRing}`}
        >
          {content.ctaLabel}
        </a>
      </div>
    </div>

    <div className="w-full md:w-1/2 h-[320px] sm:h-[400px] md:h-auto relative">
      <img
        src={content.campusImage}
        alt="University campus"
        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        loading="lazy"
      />
    </div>
  </section>
);

const CertificationsSection = ({ items }) => (
  <section
    id="certifications"
    className="w-full relative overflow-hidden bg-gradient-to-br from-[#991b1b] to-[#450a0a] text-white py-16 sm:py-20"
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />

    <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-[0.2em] mb-10">Professional Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {items.map((cert) => (
          <a
            key={`${cert.title}-${cert.sub}`}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className={`border border-white/20 text-white p-8 transition-colors group block hover:bg-white hover:text-[#7f1d1d] ${focusRing}`}
            aria-label={`${cert.title} ${cert.sub} certification (opens in new tab)`}
          >
            <div
              className="w-12 h-1 bg-[#fca5a5] mb-6 mx-auto group-hover:bg-[#7f1d1d] transition-colors"
              aria-hidden="true"
            />
            <h4 className="font-bold text-sm tracking-[0.16em] uppercase mb-2">{cert.title}</h4>
            <p className="text-[10px] sm:text-xs text-red-200 tracking-[0.24em] uppercase mb-4 group-hover:text-[#7f1d1d]">
              {cert.sub}
            </p>
            <span className="text-[10px] font-bold border border-white/30 px-3 py-1 rounded-full group-hover:text-[#7f1d1d] group-hover:border-[#7f1d1d]">
              {cert.year}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ contact }) => {
  const linkedin = contact.socials.find((social) => social.label === 'LinkedIn');

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] to-[#450a0a] text-white py-6 sm:py-8"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col min-h-[240px] gap-6 text-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            <a
              href={`mailto:${contact.email}`}
              className={`group border border-white/25 bg-transparent backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-300 ease-out rounded-lg p-7 flex items-center justify-between gap-4 text-left hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/40 min-h-[190px] ${focusRing}`}
              aria-label="Email Shravan"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-white">Email</p>
                  <p className="text-sm sm:text-base font-semibold text-white">{contact.email}</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-white" />
            </a>

            <a
              href={linkedin?.href || '#'}
              target="_blank"
              rel="noreferrer"
              className={`group border border-white/25 bg-transparent backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-300 ease-out rounded-lg p-7 flex items-center justify-between gap-4 text-left hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/40 min-h-[190px] ${
                linkedin ? focusRing : ''
              }`}
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Linkedin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-white">LinkedIn</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {linkedin ? linkedin.label : 'Profile'}
                  </p>
                </div>
              </div>
              <ArrowRight size={18} className="text-white" />
            </a>
          </div>
        </div>

        <p className="text-xs tracking-[0.2em] uppercase text-white">
          © 2025 {contact.branding} · Data &amp; Analytics.
        </p>
      </div>
    </footer>
  );
};

// --- MAIN ---
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (event, link) => {
    if (link?.external) return;
    if (link?.href?.startsWith('#')) {
      event.preventDefault();
      const targetId = link.href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
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
      className="safe-area-top min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white scroll-smooth"
    >
      <a
        href="#main"
        className={`sr-only focus:not-sr-only absolute left-4 top-4 bg-black text-white px-3 py-2 text-sm ${focusRing}`}
      >
        Skip to content
      </a>

      <div className="relative overflow-hidden bg-gradient-to-r from-[#2563eb]/90 to-[#0f172a]/90 text-white text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-center py-2 uppercase">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, #ffffff 50px, #ffffff 51px)' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10">
          {topBanner.message} •{' '}
          <a
            href={topBanner.linkHref}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors underline-offset-4"
          >
            {topBanner.linkLabel}
          </a>
        </div>
      </div>

      <NavBar
        brand="Sulikeri"
        links={navLinks}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        scrolled={scrolled}
        onNavigate={handleNavigate}
      />

      <Hero
        content={heroContent}
        stats={quickStats}
        onPrimaryClick={() => scrollTo(heroContent.primaryCta.targetId)}
        onSecondaryClick={() => scrollTo(heroContent.secondaryCta.targetId)}
      />

      <main id="main">
        <ExperienceSection entries={experienceEntries} expandedId={expandedExperience} onToggle={toggleExperience} />
        <ProjectsSection projects={projectEntries} />
        <SkillsSection categories={skillCategories} />
        <EducationSection content={educationContent} />
        <CertificationsSection items={certifications} />
      </main>

      <Footer contact={contactInfo} />
    </div>
  );
};

export default Portfolio;
