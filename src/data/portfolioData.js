/**
 * ============================================================
 *  PORTFOLIO CONTENT — single source of truth
 * ============================================================
 *  Edit ONLY this file to update your portfolio content.
 *  No need to touch any component code.
 *
 *  Tip: search for "TODO" to find things you may want to update
 *  (e.g. individual GitHub repo links for each project).
 * ============================================================
 */

export const profile = {
  name: "Muddasani Siri",
  // Short role shown big in the hero
  title: "AI / Machine Learning Developer",
  // Smaller line under the title
  subtitle: "Computer Science (AI & ML) Undergraduate",
  location: "Warangal, India",
  // Professional summary (About section)
  summary:
    "Computer Science (AI & ML) undergraduate who enjoys building practical AI applications. " +
    "I work with Large Language Models, Retrieval-Augmented Generation, and multi-agent systems, " +
    "and have hands-on experience turning ideas into working software through internship and project work. " +
    "I'm focused on writing clean, reliable code and shipping things that solve real problems.",
  // A couple of quick at-a-glance stats for the hero
  stats: [
    { value: "500+", label: "Documents processed in internship" },
    { value: "3+", label: "AI & software projects built" },
    { value: "8.15", label: "CGPA" },
  ],
};

export const contact = {
  email: "muddasanisiri@gmail.com",
  phone: "+91 95158 93723",
  github: "https://github.com/sirivarma-dev",
  linkedin: "https://www.linkedin.com/in/siri-muddasani",
  // File lives in /public — replace the file there to update the download
  resume: "/Muddasani_Siri_Resume.pdf",
};

/**
 * Technical skills, grouped.
 * Add / remove groups or items freely.
 */
export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["LangChain", "FastAPI", "Pandas", "NumPy"],
  },
  {
    group: "AI / Machine Learning",
    items: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Natural Language Processing (NLP)",
      "Vector Databases",
      "OCR Integration",
      "Multi-Agent Systems",
    ],
  },
  {
    group: "Tools & Practices",
    items: ["Git & GitHub", "REST APIs", "Backend Development"],
  },
];

/**
 * Work / internship experience.
 */
export const experience = [
  {
    role: "AI Developer Intern",
    company: "AutomatR",
    period: "Mar 2026 – Jun 2026",
    location: "Internship",
    points: [
      "Developed and optimized AI-powered document processing solutions across OCR, PDF parsing, and structured data extraction.",
      "Built FastAPI-based APIs and knowledge-base systems, contributing to the processing of 500+ documents.",
      "Supported backend development, API integration, testing, and optimization of document-processing workflows.",
    ],
    tech: ["Python", "FastAPI", "OCR", "LLMs", "REST APIs"],
  },
];

/**
 * Projects.
 * TODO: replace each `github` link with the real repository URL.
 */
export const projects = [
  {
    title: "Autonomous Multi-Agent Research Assistant",
    tagline: "Scientific literature analysis with LLMs",
    description:
      "An AI assistant that uses multiple cooperating agents and Large Language Models to search, read, and summarize scientific research papers — reducing the time spent on manual literature review.",
    highlights: [
      "Multi-agent workflow that coordinates search, reading, and summarization",
      "Uses LLMs to extract and synthesize key findings from papers",
      "End-to-end pipeline from query to summarized output",
    ],
    tech: ["Python", "LLMs", "LangChain", "RAG", "FastAPI"],
    github: "https://github.com/sirivarma-dev", // TODO: link the real repo
    featured: true,
  },
  {
    title: "SSNA — Federated Learning Framework",
    tagline: "Secure semi-asynchronous aggregation",
    description:
      "A privacy-preserving federated learning framework that trains a shared model across multiple devices without sharing raw data, using a secure semi-asynchronous aggregation method to handle devices that run at different speeds.",
    highlights: [
      "Collaborative model training without exposing raw data",
      "Secure semi-asynchronous aggregation for heterogeneous devices",
      "Focus on data privacy in decentralized settings",
    ],
    tech: ["Python", "Federated Learning", "Machine Learning"],
    github: "https://github.com/sirivarma-dev", // TODO: link the real repo
    featured: true,
  },
  {
    title: "Personal Finance Tracker",
    tagline: "Track and manage everyday spending",
    description:
      "A Python application to record, categorize, and review daily income and expenses, giving users a clear and organized view of where their money goes.",
    highlights: [
      "Add, categorize, and review income and expenses",
      "Clear summaries of spending in one place",
      "Built with Python for data handling and calculations",
    ],
    tech: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/sirivarma-dev", // TODO: link the real repo
    featured: false,
  },
];

/**
 * Education timeline (most recent first).
 */
export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "Sumathi Reddy Institute of Technology for Women",
    period: "Expected 2027",
    detail: "CGPA: 8.15",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "SR Junior College",
    period: "2022",
    detail: "91%",
  },
  {
    degree: "Class X (CBSE)",
    institution: "Ekashila Digi School",
    period: "2020",
    detail: "85%",
  },
];

/**
 * Certifications.
 * TODO: add your IEEE certification once you have the exact name.
 */
export const certifications = [
  { name: "Introduction to Networks", issuer: "Cisco" },
  { name: "Introduction to Modern AI", issuer: "Cisco" },
  { name: "AI Developer Internship Completion", issuer: "AutomatR" },
];

/**
 * Areas of interest / target roles.
 */
export const interests = [
  {
    title: "AI Developer",
    description:
      "Building AI-powered applications using LLMs, RAG, and multi-agent systems.",
  },
  {
    title: "Software Developer",
    description:
      "Writing clean, maintainable backend services and APIs that scale.",
  },
  {
    title: "Machine Learning Engineer",
    description:
      "Designing, training, and deploying ML models for real-world problems.",
  },
];

// SEO / metadata (also update index.html <title> and meta tags if needed)
export const seo = {
  siteTitle: "Muddasani Siri — AI / ML Developer",
  description:
    "Portfolio of Muddasani Siri, a Computer Science (AI & ML) undergraduate and AI/ML developer building practical AI applications with LLMs, RAG, and multi-agent systems.",
  url: "https://your-domain.com", // TODO: update after deploying
};
