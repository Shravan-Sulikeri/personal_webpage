import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X, Loader2 } from 'lucide-react';
import resumePdf from '../assest/Shravan_Sulikeri_Resume.pdf';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const has = (text, keywords) => keywords.some((kw) => text.includes(kw));

// ---------------------------------------------------------------------------
// Knowledge base — all answers live here
// ---------------------------------------------------------------------------
const ANSWERS = {
  resume: () => ({
    text: "You can download Shravan's resume from the navigation bar at the top of the page, or use the link below.",
    link: { href: resumePdf, label: 'Download Resume PDF' },
  }),

  about: () => ({
    text: "Shravan Sulikeri is a Junior Data Engineer based in Raleigh, NC. He graduated from UNC Charlotte (B.S. Computer Science, Aug 2025) and currently works at Varsinix — a healthcare AI startup — building clinical data pipelines on GCP and Azure.\n\nHis focus is data engineering, ML infrastructure, and cloud-native analytics. Feel free to ask about his experience, projects, skills, or certifications!",
  }),

  openToWork: () => ({
    text: "Yes — Shravan is open to new opportunities, especially in data engineering, ML infrastructure, and cloud-native data systems. The best way to reach him is shravan.sulikeri@gmail.com or LinkedIn.",
  }),

  currentJob: () => ({
    text: "Shravan is currently a Junior Data Engineer at Varsinix, a healthcare AI startup in Cary, NC (August 2025 – Present).\n\n• Builds Python-based GCP ingestion pipelines processing 5M+ clinical notes\n• Architected Azure Medallion (Bronze-Silver-Gold) data architecture\n• Built Qdrant vector search infrastructure for production clinical search\n• Engineered end-to-end ML data pipelines across 2M+ clinical samples",
  }),

  experience: () => ({
    text: "Shravan's work history:\n\n1. Varsinix — Junior Data Engineer (Aug 2025 – Present, Cary NC)\n   GCP/Azure clinical pipelines, 5M+ notes, Qdrant vector search\n\n2. First Citizens Bank — Systems Engineer Intern (May – Aug 2025, Raleigh NC)\n   Power BI, Nexthink telemetry, NQL queries across 20K+ devices\n\n3. Control Infotech Inc. — Data & Security Analyst Intern (May – Aug 2023, Morrisville NC)\n   Python/C log processing, vulnerability automation, Azure log pipelines\n\nAsk me about any role for more detail!",
  }),

  fcb: () => ({
    text: "At First Citizens Bank (May – Aug 2025, Raleigh NC) Shravan was a Systems Engineer Intern:\n\n• Built Power BI dashboards on Nexthink telemetry across 20K+ devices — +25% issue detection\n• Engineered NQL queries cutting mean time-to-triage by 35%\n• Automated endpoint remediation via Nexthink Remote Actions — +20% device reliability\n• Collaborated with IT stakeholders to translate DEX metrics into actionable strategies",
  }),

  controlInfotech: () => ({
    text: "At Control Infotech Inc. (May – Aug 2023, Morrisville NC) Shravan was a Data & Security Analyst Intern:\n\n• Refactored Python/C log-processing algorithms — +35% throughput, +15% threat detection\n• Automated vulnerability scan workflows — -30% analyst workload\n• Built PowerShell/Bash pipelines consolidating Azure logs from 3+ monitoring systems\n• Authored Jira SOC runbooks — -40% analyst onboarding time",
  }),

  skills: () => ({
    text: "Shravan's core tech stack:\n\n• Languages: Python, SQL, JavaScript, TypeScript, C#, C, PowerShell\n• Data Engineering: Apache Airflow, dbt, DuckDB, PySpark, Azure Data Factory, Delta Lake, Databricks\n• ML & Analytics: Scikit-Learn, MLflow, Vertex AI, FAISS, Qdrant, Pandas, Power BI\n• Cloud & DevOps: Azure, GCP, Docker, Kubernetes, GitHub Actions\n• Tools & Frameworks: FastAPI, Flask, React.js, Nexthink, Grafana\n• Databases: PostgreSQL, MongoDB, MySQL, DuckDB",
  }),

  python: () => ({
    text: "Python is Shravan's primary language — he uses it daily for data pipelines, ML workflows, FastAPI/Flask backends, and automation scripts. It's at the core of all his professional work and personal projects.",
  }),

  cloud: () => ({
    text: "Shravan works across both major cloud platforms:\n\n• GCP: Vertex AI for ML model training, ingestion pipelines at Varsinix\n• Azure: Azure Data Factory, Azure Databricks, Delta Lake, Medallion architecture, Azure log consolidation\n\nHe also holds two Oracle Cloud (OCI) certifications for GenAI and Data Science.",
  }),

  dataEngineering: () => ({
    text: "Shravan's data engineering expertise covers:\n\n• Pipeline orchestration: Apache Airflow, Azure Data Factory\n• Transformation: dbt (star schemas, lineage tracking)\n• Storage: Delta Lake, DuckDB, PostgreSQL\n• Processing: PySpark, Python (Pandas), Azure Databricks\n• Architecture: Medallion (Bronze-Silver-Gold), batch & streaming ETL\n• Vector search: Qdrant, FAISS for ML/RAG workloads",
  }),

  ml: () => ({
    text: "Shravan's ML & AI experience:\n\n• Frameworks: Scikit-Learn, MLflow, Vertex AI\n• Vector search: FAISS (8M+ clinical notes RAG), Qdrant (production clinical search)\n• Projects: F1 race prediction models (AUC 0.8907), SoundSwipe recommendation engine, CareSight risk detection\n• Infrastructure: ML data pipelines, feature engineering, model serving via FastAPI",
  }),

  f1: () => ({
    text: "F1 Dash (Dec 2025 – Feb 2026) is a full-stack ML race prediction pipeline:\n\n• Bronze-Silver-Gold DuckDB pipeline across 221K+ lap records — -45% feature refresh latency\n• Engineered 61 ML-ready features across weather, venue, and driver form\n• Trained 3 Random Forest models — best test AUC: 0.8907\n• Dockerized FastAPI + React dashboard with sub-100ms inference\n\nGitHub → github.com/Shravan-Sulikeri/f1-dash",
  }),

  caresight: () => ({
    text: "CareSight (Oct 2025 – Present) is a healthcare analytics platform:\n\n• FAISS + FastAPI RAG pipeline analyzing 8M+ clinical notes — +50% risk detection accuracy\n• dbt star schemas on PostgreSQL — +35% BI query performance\n• Airflow-orchestrated ETL across 8M+ records — -40% end-to-end latency\n\nGitHub → github.com/Shravan-Sulikeri/caresight",
  }),

  soundswipe: () => ({
    text: "SoundSwipe (Jan – May 2025) is a music discovery app:\n\n• Tinder-style swiping with real-time Spotify integration\n• Led a team of 5 engineers — 100+ active test users at launch\n• Scikit-Learn + Flask recommendation engine — -70% playlist curation time\n• MongoDB-backed CI/CD on Render — -25% production API failures\n\nGitHub → github.com/Shravan-Sulikeri/sound-swipe-app",
  }),

  projects: () => ({
    text: "Shravan has shipped three major projects:\n\n1. F1 Dash — ML race prediction pipeline (DuckDB, Scikit-Learn, FastAPI, React, Docker)\n2. CareSight — Healthcare analytics platform (FAISS, dbt, Airflow, PostgreSQL)\n3. SoundSwipe — AI music discovery app (React, Node.js, Spotify API, Scikit-Learn, Flask)\n\nAsk me about any of them for more detail!",
  }),

  education: () => ({
    text: "Shravan graduated from the University of North Carolina at Charlotte with a B.S. in Computer Science (Software, Systems, and Networks concentration) in August 2025.",
  }),

  certifications: () => ({
    text: "Shravan holds three professional certifications:\n\n• OCI GenAI Professional (Oracle, 2025)\n• OCI Data Science Professional (Oracle, 2025)\n• MySQL Implementation Certified Associate (Oracle, 2026)",
  }),

  contact: () => ({
    text: "Shravan is best reached via:\n\n• Email: shravan.sulikeri@gmail.com\n• LinkedIn: linkedin.com/in/shravan-sulikeri\n• GitHub: github.com/Shravan-Sulikeri\n\nOr scroll to the Contact section at the bottom of this page.",
  }),

  location: () => ({
    text: "Shravan is based in Raleigh, North Carolina.",
  }),

  greeting: () => ({
    text: "Hey! I'm Shravan's assistant. Ask me anything about his experience, skills, projects, or background — or pick a question below to get started.",
  }),

  thanks: () => ({
    text: "Happy to help! Feel free to ask anything else about Shravan.",
  }),

  hire: () => ({
    text: "Shravan brings:\n\n• Production experience across GCP, Azure, and Python data pipelines\n• Proven track record with measurable impact (5M+ clinical records, 20K+ devices)\n• Strong project ownership — led teams, shipped end-to-end ML products\n• Fast learner who bridges data engineering and ML infrastructure\n\nHe's actively open to new opportunities. Reach him at shravan.sulikeri@gmail.com.",
  }),

  docker: () => ({
    text: "Shravan uses Docker regularly — his F1 Dash project deploys a fully Dockerized FastAPI + React stack with sub-100ms inference. He also has Kubernetes experience for container orchestration.",
  }),

  sql: () => ({
    text: "SQL is a core skill for Shravan — he writes complex queries daily, builds dbt data models (star schemas, lineage tracking), and has worked with PostgreSQL, MySQL, and DuckDB across multiple production systems.",
  }),

  react: () => ({
    text: "Shravan builds frontend dashboards in React — including the F1 Dash race prediction dashboard and his portfolio site you're browsing right now. He pairs React with FastAPI or Node.js backends.",
  }),

  airflow: () => ({
    text: "Shravan uses Apache Airflow extensively for ETL orchestration — most notably in CareSight, where he orchestrated partitioned pipelines across 8M+ clinical records, cutting end-to-end latency by 40%.",
  }),

  dbt: () => ({
    text: "Shravan uses dbt for data transformation — he modeled clinical datasets into star schemas on PostgreSQL for CareSight, improving BI query performance by 35%. He applies dbt for lineage tracking and schema validation.",
  }),
};

// ---------------------------------------------------------------------------
// Routing — maps keywords to answers
// ---------------------------------------------------------------------------
function getLocalReply(userInput) {
  const t = userInput.trim().toLowerCase();

  // Greeting (exact short messages only)
  if (/^(hi|hey|hello|howdy|sup|yo|good\s*(morning|afternoon|evening))[\s!?.]*$/.test(t)) {
    return { sender: 'bot', ...ANSWERS.greeting() };
  }

  // Thanks
  if (has(t, ['thank', 'thanks', 'thx', 'appreciate', 'great answer', 'awesome', 'perfect', 'helpful', 'that helps'])) {
    return { sender: 'bot', ...ANSWERS.thanks() };
  }

  // Resume
  if (has(t, ['resume', 'cv', 'curriculum vitae', 'download'])) {
    return { sender: 'bot', ...ANSWERS.resume() };
  }

  // Who / about
  if (has(t, ['who is', 'who are', 'about shravan', 'about yourself', 'about you', 'introduce', 'tell me about', 'who\'s shravan', "who's shravan"])) {
    return { sender: 'bot', ...ANSWERS.about() };
  }

  // Why hire
  if (has(t, ['why hire', 'why should i hire', 'why should we hire', 'what makes him', 'what makes you', 'strength', 'qualified', 'why pick', 'why choose'])) {
    return { sender: 'bot', ...ANSWERS.hire() };
  }

  // Open to work
  if (has(t, ['open to', 'looking for', 'available for', 'hiring', 'job search', 'new role', 'new job', 'new opportunity', 'opportunities', 'relocat', 'actively looking'])) {
    return { sender: 'bot', ...ANSWERS.openToWork() };
  }

  // Specific companies — check before generic experience
  if (has(t, ['varsinix', 'healthcare startup', 'current job', 'current role', 'current employer', 'current company', 'working now', 'works now', 'where does he work', 'where do you work'])) {
    return { sender: 'bot', ...ANSWERS.currentJob() };
  }

  if (has(t, ['first citizens', 'fcb', 'nexthink', 'bank intern', 'bank job', 'power bi'])) {
    return { sender: 'bot', ...ANSWERS.fcb() };
  }

  if (has(t, ['control infotech', 'cybersecurity', 'security analyst', 'soc ', 'vulnerability', 'security intern'])) {
    return { sender: 'bot', ...ANSWERS.controlInfotech() };
  }

  // General experience
  if (has(t, ['experience', 'work history', 'work background', 'background', 'previous job', 'previous role', 'where did', 'where has', 'internship', 'intern at', 'worked at', 'employment'])) {
    return { sender: 'bot', ...ANSWERS.experience() };
  }

  // Specific projects — check before generic "projects"
  if (has(t, ['f1 dash', 'f1dash', 'formula one', 'formula 1', 'race prediction', 'f1 project', 'f1 pipeline'])) {
    return { sender: 'bot', ...ANSWERS.f1() };
  }

  if (has(t, ['caresight', 'care sight', 'healthcare platform', 'clinical platform', 'rag pipeline', 'patient risk', 'clinical notes project'])) {
    return { sender: 'bot', ...ANSWERS.caresight() };
  }

  if (has(t, ['soundswipe', 'sound swipe', 'music app', 'spotify app', 'spotify project', 'music discovery', 'song swipe'])) {
    return { sender: 'bot', ...ANSWERS.soundswipe() };
  }

  // General projects
  if (has(t, ['project', 'portfolio', 'built', 'build', 'shipped', 'what did he make', 'what have you made', 'show me', 'work samples', 'github'])) {
    return { sender: 'bot', ...ANSWERS.projects() };
  }

  // Specific tech topics
  if (has(t, ['docker', 'container', 'containerize', 'kubernetes', 'k8s'])) {
    return { sender: 'bot', ...ANSWERS.docker() };
  }

  if (has(t, ['airflow', 'orchestrat', 'workflow', 'dag', 'pipeline scheduling'])) {
    return { sender: 'bot', ...ANSWERS.airflow() };
  }

  if (has(t, ['dbt', 'data build tool', 'transformation', 'star schema', 'data model'])) {
    return { sender: 'bot', ...ANSWERS.dbt() };
  }

  if (has(t, ['react', 'frontend', 'front-end', 'ui ', 'dashboard', 'web app'])) {
    return { sender: 'bot', ...ANSWERS.react() };
  }

  if (has(t, ['sql', 'database', 'postgres', 'postgresql', 'mysql', 'duckdb', 'query', 'queries'])) {
    return { sender: 'bot', ...ANSWERS.sql() };
  }

  if (has(t, ['machine learning', 'ml ', 'ai ', 'artificial intelligence', 'model', 'predict', 'scikit', 'sklearn', 'mlflow', 'vertex', 'faiss', 'qdrant', 'vector', 'embedding', 'rag '])) {
    return { sender: 'bot', ...ANSWERS.ml() };
  }

  if (has(t, ['cloud', 'azure', 'gcp', 'google cloud', 'aws', 'aws ', 'cloud platform', 'cloud service', 'cloud computing'])) {
    return { sender: 'bot', ...ANSWERS.cloud() };
  }

  if (has(t, ['data engineer', 'data pipeline', 'etl', 'elt', 'data infra', 'medallion', 'bronze silver gold', 'delta lake', 'spark', 'pyspark', 'databricks', 'data factory'])) {
    return { sender: 'bot', ...ANSWERS.dataEngineering() };
  }

  if (has(t, ['\bpython\b', 'python ']) || t === 'python') {
    return { sender: 'bot', ...ANSWERS.python() };
  }

  // Skills (broad)
  if (has(t, ['skill', 'stack', 'tech stack', 'technology', 'language', 'framework', 'tool', 'expertise', 'proficien', 'know how', 'what do you know', 'what does he know', 'what can he do', 'what can you do', 'what does he use', 'programming'])) {
    return { sender: 'bot', ...ANSWERS.skills() };
  }

  // Education
  if (has(t, ['education', 'degree', 'university', 'college', 'school', 'graduated', 'graduate', 'study', 'studied', 'major', 'concentration', 'unc', 'uncc', 'charlotte', 'computer science', 'gpa', 'academic'])) {
    return { sender: 'bot', ...ANSWERS.education() };
  }

  // Certifications
  if (has(t, ['certif', 'oracle', 'oci', 'credential', 'certified', 'badge', 'genai cert', 'data science cert'])) {
    return { sender: 'bot', ...ANSWERS.certifications() };
  }

  // Contact
  if (has(t, ['contact', 'email', 'reach', 'reach out', 'message', 'connect', 'linkedin', 'phone', 'get in touch', 'talk to', 'hire him'])) {
    return { sender: 'bot', ...ANSWERS.contact() };
  }

  // Location
  if (has(t, ['where', 'locat', 'city', 'raleigh', 'north carolina', ' nc ', 'based', 'live'])) {
    return { sender: 'bot', ...ANSWERS.location() };
  }

  // Fallback with helpful suggestions
  return {
    sender: 'bot',
    text: "I'm not sure about that one. I can answer questions about Shravan's:\n\n• Work experience & current role\n• Skills & tech stack\n• Projects (F1 Dash, CareSight, SoundSwipe)\n• Education & certifications\n• Contact info\n\nOr email him directly at shravan.sulikeri@gmail.com — he responds quickly!",
  };
}

// ---------------------------------------------------------------------------
// Suggested prompts
// ---------------------------------------------------------------------------
const SUGGESTED_PROMPTS = [
  "Where do you work?",
  "What's your tech stack?",
  "Tell me about F1 Dash",
  "What certifications do you have?",
  "Are you open to opportunities?",
  "How can I contact you?",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([
        {
          sender: 'bot',
          text: "Hi! I'm Shravan's assistant. Ask me anything about his experience, skills, projects, or background — or pick a question below to get started.",
        },
      ]);
      setHasGreeted(true);
      setShowChips(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setShowChips(false);
    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getLocalReply(trimmed);
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 350);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <div className="relative w-full sm:w-[380px]">
        {/* Chat panel */}
        <div
          className={`absolute bottom-full mb-3 left-0 w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          role="dialog"
          aria-label="Portfolio assistant"
          aria-hidden={!isOpen}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-[0.2em]">
              <Bot size={18} />
              AI Assistant
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-full sm:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="relative bg-gray-50"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)',
            }}
          >
            <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
            <div className="relative h-64 sm:h-72 max-h-[55vh] overflow-y-auto px-4 py-4 space-y-3 touch-scroll">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow ${
                      msg.sender === 'user'
                        ? 'bg-[#1e3a8a] text-white rounded-br-sm'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    {msg.link && (
                      <a
                        href={msg.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-[#2563eb] underline underline-offset-4"
                      >
                        {msg.link.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Prompt chips */}
          {showChips && (
            <div className="px-3 py-2 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isTyping}
                  className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border border-[#2563eb]/30 text-[#2563eb] bg-[#2563eb]/5 sm:hover:bg-[#2563eb] sm:hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about experience, skills, projects..."
              disabled={isTyping}
              className="flex-1 border border-gray-200 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Chat input"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={isTyping || !input.trim()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide sm:hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0f172a] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 sm:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb]"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
};

export default ChatBot;
