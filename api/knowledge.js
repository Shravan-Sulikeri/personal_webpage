/**
 * Knowledge Base for AI Chatbot
 * Contains structured data about Shravan Sulikeri for the AI to reference
 */

export const personalInfo = {
    name: "Shravan Sulikeri",
    title: "Data Engineer",
    location: "Raleigh, North Carolina",
    email: "shravan.sulikeri@gmail.com",
    linkedin: "https://www.linkedin.com/in/shravan-sulikeri/",
    github: "https://github.com/Shravan-Sulikeri",
    website: "https://shravan-sulikeri.vercel.app",
};

export const summary = `
Engineer with hands-on experience building cloud-native ETL pipelines, production-grade MLOps frameworks, 
and analytics systems across Azure, GCP, Databricks, Kubernetes, and Power BI. I design end-to-end data 
solutions that improve reliability, speed, and insight delivery for enterprise environments.
`;

export const experience = [
    {
        company: "Varsinix",
        role: "Data Engineer",
        period: "August 2025 - Present",
        location: "Raleigh, NC",
        highlights: [
            "Standardized the Varsinix monorepo and GitHub workflows, reducing onboarding time by 30% and CI inconsistencies by 25%",
            "Developed a reproducible evaluation pipeline for medical concept retrieval on 200k+ data samples, increasing the repeatability of Recall@K metrics by 40%",
            "Refactored Qdrant vector search and embedding alignment logic using Python, reducing ANN evaluation failures by 25% and stabilizing retrieval outputs",
            "Defined and implemented Medallion Architecture standards (Bronze/Silver/Gold) and versioned naming conventions, improving data lineage clarity and reducing schema drift by 45%",
        ],
    },
    {
        company: "First Citizens Bank",
        role: "Systems Engineer Intern",
        period: "May 2025 - August 2025",
        location: "Raleigh, NC",
        highlights: [
            "Designed Power BI dashboards using Nexthink data to monitor 20K+ endpoints, increasing issue detection by 25%",
            "Engineered high-performance NQL queries to join and analyze endpoint telemetry, reducing mean time to triage by 35%",
            "Automated endpoint remediation with Nexthink Remote Actions, increasing device reliability and IT response speed by 20%",
            "Partnered with cross-functional IT teams to enhance digital employee experience (DEX) through Nexthink analytics",
        ],
    },
    {
        company: "Control Infotech Inc.",
        role: "Cybersecurity Analyst Intern",
        period: "May 2023 - August 2023",
        location: "Raleigh, NC",
        highlights: [
            "Automated security testing workflows and vulnerability scans with Python, reducing manual workload by 30%",
            "Conducted malware analysis and enhanced log-parsing tools (Python & C) that improved data processing speed by 40% and detection accuracy by 15%",
            "Developed cross-platform automation in PowerShell and Bash to ingest Azure resource logs, consolidating 3+ monitoring systems and reducing audit preparation time by 20%",
            "Authored documentation and runbooks, cutting onboarding time by 40% and standardizing security operations",
        ],
    },
];

export const projects = [
    {
        name: "F1 Dash",
        category: "End-to-End ML Pipeline",
        description: "Full-stack racing analytics platform that ingests 2018-2025 telemetry to engineer 61 features, trains three production models, and serves ranked race predictions to an interactive React dashboard.",
        technologies: ["Python", "DuckDB", "Scikit-learn", "React", "Tailwind"],
        impact: [
            "Achieved 0.9907 AUC for race winner prediction (Random Forest)",
            "Processes 220K+ laps & 31K+ weather points",
            "Full pipeline runs in ~15 mins locally",
        ],
        github: "https://github.com/Shravan-Sulikeri/f1-dash",
    },
    {
        name: "CareSight",
        category: "AI / Healthcare",
        description: "AI powered patient risk scoring and readmission prediction platform for clinicians.",
        technologies: ["TensorFlow", "Predictive Analytics", "GCP", "Healthcare AI", "Python", "FastAPI", "PostgreSQL"],
        impact: [
            "AUC ≥ 0.89 for readmission risk",
            "Batch risk scoring under 2 minutes",
            "Compliance-focused audit and access logging",
        ],
        github: "https://github.com/Shravan-Sulikeri/caresight",
    },
    {
        name: "SoundSwipe App",
        category: "Full Stack",
        description: "Music discovery app with Tinder-style swiping, AI-driven recommendations, and instant Spotify playlist building.",
        technologies: ["React", "Node.js", "Express", "Spotify Web API", "WebSockets", "AI Ranking Engine"],
        impact: [
            "AI-powered song relevance scoring <150ms",
            "P95 swipe-to-preview latency <120ms",
            "Auto-playlist sync to Spotify under 3 seconds",
        ],
        github: "https://github.com/Shravan-Sulikeri/sound-swipe-app",
    },
];

export const skills = {
    languages: ["Python", "SQL", "C#", "JavaScript"],
    dataEngineering: ["PySpark", "Databricks", "Azure Data Factory", "Delta Lake", "ETL Pipelines", "Data Modeling"],
    mlAnalytics: ["MLflow", "TensorFlow", "Keras", "Pandas", "Power BI"],
    devOpsCloud: ["Azure", "GCP", "Docker", "Kubernetes", "Git", "GitHub Actions", "Jenkins", "CI/CD", "GitOps"],
    orchestrationTools: ["Apache Airflow", "Jira", "Prometheus", "Grafana", "Nexthink", "NQL", "REST APIs"],
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
    { title: "Oracle Cloud Infrastructure Autonomous Database Professional", year: "2025" },
];

/**
 * Generate the system prompt for the AI with all context
 */
export function getSystemPrompt() {
    return `You are Shravan Sulikeri's virtual assistant on his portfolio website. Your job is to answer questions about Shravan in a friendly, professional, and helpful manner.

ABOUT SHRAVAN:
${summary}

CONTACT INFO:
- Name: ${personalInfo.name}
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
${exp.role} at ${exp.company} (${exp.period})
Location: ${exp.location}
Key achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

PROJECTS:
${projects.map(proj => `
${proj.name} - ${proj.category}
${proj.description}
Technologies: ${proj.technologies.join(', ')}
Impact: ${proj.impact.join('; ')}
GitHub: ${proj.github}
`).join('\n')}

SKILLS:
- Languages: ${skills.languages.join(', ')}
- Data Engineering: ${skills.dataEngineering.join(', ')}
- ML & Analytics: ${skills.mlAnalytics.join(', ')}
- DevOps & Cloud: ${skills.devOpsCloud.join(', ')}
- Tools: ${skills.orchestrationTools.join(', ')}

CERTIFICATIONS:
${certifications.map(c => `- ${c.title} (${c.year})`).join('\n')}

GUIDELINES:
1. Be conversational, friendly, and professional
2. Keep responses concise but informative (2-4 sentences for simple questions)
3. For complex questions, provide more detail but stay focused
4. If asked something you don't know, politely suggest emailing Shravan directly at ${personalInfo.email}
5. Highlight relevant achievements and quantifiable impacts when discussing experience
6. If asked for resume/CV, mention they can download it from the website
7. Don't make up information - stick to what's provided above
8. You can recommend they visit Shravan's LinkedIn or GitHub for more details`;
}
