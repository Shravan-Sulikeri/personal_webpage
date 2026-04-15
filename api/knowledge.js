/**
 * Knowledge Base for AI Chatbot
 * Contains structured data about Shravan Sulikeri for the AI to reference
 */

export const personalInfo = {
    name: "Shravan Sulikeri",
    title: "Junior Data Engineer",
    location: "Raleigh, North Carolina",
    email: "shravan.sulikeri@gmail.com",
    phone: "+1 984-255-5664",
    linkedin: "https://www.linkedin.com/in/shravan-sulikeri/",
    github: "https://github.com/Shravan-Sulikeri",
    website: "https://shravan-sulikeri.vercel.app",
};

export const summary = `
Junior Data Engineer with hands-on experience building cloud-native ETL pipelines, production-grade ML data
infrastructure, and analytics systems across Azure, GCP, and Python. Currently at Varsinix (healthcare AI startup)
architecting clinical data pipelines that process 5M+ unstructured notes. Background spans healthcare AI,
financial systems telemetry, and cybersecurity. Passionate about working at the intersection of software,
analytics, and cloud technologies to create measurable impact.
`;

export const experience = [
    {
        company: "Varsinix",
        role: "Junior Data Engineer",
        period: "August 2025 - Present",
        location: "Cary, NC",
        highlights: [
            "Architected a Python-based GCP ingestion pipeline using Vertex AI to process 5M+ unstructured clinical notes; enforced strict schema validation and deterministic preprocessing for scalable entity extraction and NER model training.",
            "Engineered an Azure-based Medallion architecture (Bronze-Silver-Gold) utilizing contract-driven schemas and automated lineage tracking to stabilize biomedical ingestion, reducing pipeline drift by 45%.",
            "Streamlined Python-based Qdrant vector search and embedding workflows to mitigate ANN retrieval instability, reducing evolution failures by 35% and stabilizing retrieval consistency for production clinical search.",
            "Developed a containerized and fully reproducible ML data pipeline within an Agile framework; engineered end-to-end quality controls across 2M+ clinical samples, improving Recall@K reliability by 30% for production risk modeling.",
        ],
    },
    {
        company: "First Citizens Bank",
        role: "Systems Engineer Intern",
        period: "May 2025 - August 2025",
        location: "Raleigh, NC",
        highlights: [
            "Designed Power BI dashboards ingesting real-time Nexthink endpoint telemetry across 20K+ devices, enabling IT teams to surface and resolve device issues proactively, increasing detection coverage by 25%.",
            "Engineered high-performance NQL queries to join and aggregate multi-source endpoint telemetry data, reducing mean time to triage by 35% and accelerating incident resolution across the IT operations team.",
            "Automated endpoint remediation workflows using Nexthink Remote Actions, eliminating manual intervention for recurring device failures and increasing IT response speed and device reliability by 20%.",
            "Collaborated with cross-functional IT stakeholders to translate DEX metrics from Nexthink analytics into actionable remediation strategies, improving endpoint health visibility enterprise-wide.",
        ],
    },
    {
        company: "Control Infotech Inc.",
        role: "Data & Security Analyst Intern",
        period: "May 2023 - August 2023",
        location: "Morrisville, NC",
        highlights: [
            "Refactored Python and C log-processing algorithms to handle high-throughput security streams, boosting data throughput by 35% and threat detection accuracy by 15%.",
            "Automated end-to-end vulnerability scan workflows in Python, eliminating manual steps and reducing analyst workload by 30%.",
            "Operationalized PowerShell and Bash pipelines to consolidate Azure resource logs from 3+ monitoring systems, centralizing security event analysis across cloud infrastructure.",
            "Authored Jira security runbooks standardizing SOC incident response procedures, cutting new analyst onboarding time by 40%.",
        ],
    },
];

export const projects = [
    {
        name: "F1 Dash",
        category: "End-to-End ML Pipeline",
        description: "Full-stack racing analytics platform that ingests 2018-2025 F1 telemetry to engineer 61 features, trains three production Random Forest models, and serves ranked race predictions to an interactive React dashboard.",
        technologies: ["Python", "DuckDB", "Scikit-Learn", "FastAPI", "React", "Docker", "Tailwind"],
        impact: [
            "Best model test AUC: 0.8907 (Random Forest)",
            "Implemented a Bronze-Silver-Gold DuckDB pipeline across 221K+ lap records, cutting feature refresh latency by 45%",
            "Deployed a Dockerized FastAPI serving live race predictions via React dashboard with sub-100ms inference latency",
        ],
        github: "https://github.com/Shravan-Sulikeri/f1-dash",
        period: "Dec 2025 - Feb 2026",
    },
    {
        name: "CareSight",
        category: "Healthcare Analytics Platform",
        description: "Healthcare analytics platform with a FAISS + FastAPI RAG pipeline analyzing 8M+ clinical notes and Airflow-orchestrated ETL across 8M+ records with dbt star schemas on PostgreSQL.",
        technologies: ["Python", "FAISS", "FastAPI", "dbt", "PostgreSQL", "Apache Airflow", "Healthcare AI"],
        impact: [
            "Modeled clinical datasets into dbt star schemas on PostgreSQL, improving downstream BI query performance by 35%",
            "Built a FAISS + FastAPI RAG pipeline to analyze 8M+ unstructured clinical notes, lifting risk detection accuracy by 50%",
            "Orchestrated partitioned Airflow ETL pipelines across 8M+ clinical records, cutting end-to-end latency by 40%",
        ],
        github: "https://github.com/Shravan-Sulikeri/caresight",
        period: "Oct 2025 - Present",
    },
    {
        name: "SoundSwipe App",
        category: "Full Stack",
        description: "Music discovery app with Tinder-style swiping, AI-driven recommendations, and instant Spotify playlist building. Led a team of 5 engineers to ship the app with 100+ active test users at launch.",
        technologies: ["React", "Node.js", "Express", "Spotify Web API", "MongoDB", "Scikit-Learn", "Flask"],
        impact: [
            "Led 5 engineers to ship a React + Node.js Spotify-integrated swipe app, onboarding 100+ active test users at launch",
            "Configured Render CI/CD with MongoDB-backed session storage, reducing production API failures by 25%",
            "Engineered a Scikit-Learn + Flask recommendation engine trained on swipe patterns, cutting playlist curation time by 70%",
        ],
        github: "https://github.com/Shravan-Sulikeri/sound-swipe-app",
        period: "Jan 2025 - May 2025",
    },
];

export const skills = {
    languages: ["Python", "SQL", "JavaScript", "TypeScript", "C#", "C", "PowerShell"],
    dataEngineering: ["Apache Airflow", "dbt", "DuckDB", "PySpark", "Azure Data Factory", "Delta Lake", "Azure Databricks"],
    mlAnalytics: ["Scikit-Learn", "MLflow", "Vertex AI", "FAISS", "Qdrant", "Pandas", "Power BI", "PostgreSQL", "MongoDB", "MySQL"],
    cloudDevOps: ["Azure", "GCP", "Docker", "Git", "GitHub Actions", "Kubernetes", "CI/CD"],
    toolsFrameworks: ["FastAPI", "Flask", "React.js", "Nexthink", "Grafana"],
};

export const education = {
    university: "University of North Carolina at Charlotte",
    degree: "B.S. in Computer Science",
    concentration: "Software, Systems, and Networks Concentration",
    graduation: "August 2025",
};

export const certifications = [
    { title: "Oracle Cloud Infrastructure GenAI Professional", year: "2025" },
    { title: "Oracle Cloud Infrastructure Data Science Professional", year: "2025" },
    { title: "MySQL Implementation Certified Associate", year: "2026" },
];

/**
 * Generate the system prompt for the AI with all context
 */
export function getSystemPrompt() {
    return `You are Shravan Sulikeri's virtual assistant on his portfolio website. Your job is to answer questions about Shravan in a friendly, professional, and concise manner.

ABOUT SHRAVAN:
${summary}

CONTACT INFO:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}

EDUCATION:
- ${education.degree} from ${education.university}
- Concentration: ${education.concentration}
- Graduated: ${education.graduation}

WORK EXPERIENCE:
${experience.map(exp => `
${exp.role} at ${exp.company} (${exp.period}) — ${exp.location}
Key achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

PROJECTS:
${projects.map(proj => `
${proj.name} (${proj.period}) — ${proj.category}
${proj.description}
Technologies: ${proj.technologies.join(', ')}
Impact:
${proj.impact.map(i => `- ${i}`).join('\n')}
GitHub: ${proj.github}
`).join('\n')}

SKILLS:
- Languages: ${skills.languages.join(', ')}
- Data Engineering: ${skills.dataEngineering.join(', ')}
- ML & Analytics: ${skills.mlAnalytics.join(', ')}
- Cloud & DevOps: ${skills.cloudDevOps.join(', ')}
- Tools & Frameworks: ${skills.toolsFrameworks.join(', ')}

CERTIFICATIONS:
${certifications.map(c => `- ${c.title} (${c.year})`).join('\n')}

GUIDELINES:
1. Be conversational, friendly, and professional
2. Keep responses concise (2-4 sentences for simple questions; more detail for complex ones)
3. Highlight quantifiable achievements when discussing experience or projects
4. If asked something not covered above, suggest emailing Shravan at ${personalInfo.email}
5. If asked for a resume or CV, tell them they can download it from the site's navigation bar
6. Never make up information — only use what is provided above
7. You can direct users to LinkedIn (${personalInfo.linkedin}) or GitHub (${personalInfo.github}) for more details`;
}
