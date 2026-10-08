export const profile = {
  name: "Zohayb Bhatti",
  firstName: "Zohayb",
  location: "Austin, Texas",
  email: "zohayb23@gmail.com",
  linkedin: "https://www.linkedin.com/in/zohayb-bhatti/",
  github: "https://github.com/zohayb23",
  role: "Software Engineer",
  focus: "AI Infrastructure",
  tagline: "Engineer. Automator. Builder of AI Infrastructure.",
  heroQuote: "I build the CI/CD, Kubernetes, and automation that help AI ship faster.",
  availability: "Open to full-time SWE & AI Infrastructure roles",
  heroBlurb:
    "Software engineer in Austin, TX focused on AI/ML infrastructure, CI/CD automation, Kubernetes, and distributed systems.",
  // Words wrapped in ** are emphasized in the scroll-reveal paragraph.
  about:
    "I build the **infrastructure that helps AI ship faster.** At **IBM** I modernized CI/CD for the **Spyre AI accelerator** platform on IBM Power, cutting test runtime **6x** with **Kubernetes and Tekton.** At **Meta** I triaged defects for **AI-enabled wearables** with ~95% accuracy under 24-hour SLAs. At **Revanite** I built **compliance automation in Go** that reduced false positives by ~80%. At the fintech startup **Fintrady** I built **GARCH + LSTM** volatility forecasting and options analytics. Now I'm pursuing an **M.S. in Applied AI** and staying hands-on wherever tech creates opportunity.",
};

export const stats = [
  { value: 6, suffix: "x", label: "Faster AI/ML Test Runtime" },
  { value: 95, prefix: "~", suffix: "%", label: "Triage Classification Accuracy" },
  { value: 80, prefix: "~", suffix: "%", label: "Fewer False Positives" },
  { value: 9, label: "Parallel Tekton Pods" },
  { value: 15, suffix: "+", label: "Production UI Pages Shipped" },
  { value: 20, suffix: "+", label: "Public GitHub Repos" },
];

export type JourneyProject = { title: string; bullets: string[] };

export type JourneyItem = {
  period: string;
  badge?: string;
  company: string;
  role: string;
  location?: string;
  logo?: string;
  monogram?: string;
  summary: string[];
  projects: JourneyProject[];
  tags: string[];
};

export const journey: JourneyItem[] = [
  {
    period: "May 2026 – Aug 2026",
    badge: "6x faster AI/ML tests",
    company: "IBM",
    role: "Software Engineer Intern",
    location: "Austin, TX",
    logo: "/logos/ibm.svg",
    summary: ["Spyre CI/CD Modernization", "Kubernetes & Tekton", "Hardware Test Automation"],
    projects: [
      {
        title: "Spyre CI/CD Modernization",
        bullets: [
          "Architected Kubernetes-based CI/CD on bare-metal IBM Power hardware with Spyre AI accelerators, migrating persistent Jenkins agents to ephemeral pods for on-demand hardware utilization.",
          "Engineered a 9-pod parallel Tekton pipeline to replace sequential Jenkins execution, achieving a 6x reduction in AI/ML test runtime and successfully validating the POC for broader CI/CD implementation across Spyre infrastructure.",
        ],
      },
      {
        title: "Bobbotics Hardware Test Automation Tool",
        bullets: [
          "Engineered an end-to-end hardware testing pipeline using Python, Playwright, Raspberry Pi, computer vision, Telnet/SSH, and REST APIs, automating a 45–90 minute manual workflow.",
          "Automated ASMI test triggering, camera-based LED detection, hardware validation, and Jazz ETM reporting, producing machine-readable test evidence with minimal manual intervention.",
        ],
      },
    ],
    tags: ["Kubernetes", "Tekton", "Jenkins", "IBM Power", "Spyre", "Python", "Playwright", "Raspberry Pi", "Computer Vision"],
  },
  {
    period: "Jan 2026 – May 2026",
    badge: "~95% triage accuracy",
    company: "Meta",
    role: "Software Engineer",
    location: "Austin, TX",
    logo: "/logos/meta.svg",
    summary: ["AI-Enabled Wearables", "Defect Triage Pipeline", "24-hour SLA"],
    projects: [
      {
        title: "AI Wearables Defect Intake & Triage",
        bullets: [
          "Engineered and optimized a structured defect intake and triage pipeline for AI-enabled wearable devices, consistently maintaining ~95% triage classification accuracy while meeting strict 24-hour SLA targets.",
          "Leveraged and evaluated AI-assisted deduplication tooling and contextual retrieval models to automate log analysis, surface relevant diagnostic context, and accelerate root-cause identification across complex pre-release environments.",
          "Developed detailed technical diagnostics, including reproduction workflows, system log parsing, and environment state analysis, to isolate regressions, reduce duplicate reports, and streamline engineering fix cycles.",
          "Collaborated cross-functionally with backend, QA, and hardware engineering teams to escalate high-impact system anomalies while authoring process flowcharts and technical SOPs to standardize triage logic.",
        ],
      },
    ],
    tags: ["AI Wearables", "Log Analysis", "Contextual Retrieval", "Root-Cause Analysis", "SOPs"],
  },
  {
    period: "Jul 2025 – Jan 2026",
    badge: "~80% fewer false positives",
    company: "Revanite",
    role: "Software Engineer",
    location: "Austin, TX",
    monogram: "R",
    summary: ["Compliance Automation in Go", "OSPS Baseline · NIST 800-53 · SSDF", "Policy-as-Code"],
    projects: [
      {
        title: "Continuous Compliance Platform",
        bullets: [
          "Built and scaled compliance automation pipelines in Go aligned with OSPS Baseline, NIST 800-53, and SSDF, enabling continuous compliance scanning across large GitHub repositories.",
          "Implemented Gemara-compatible evaluation workflows and Privateer-based scanners, producing SARIF outputs for GitHub-native CI/CD pipelines and reducing false positives by approximately 80%.",
          "Designed and delivered a compliance UI and transformer API using React and TypeScript, supporting policy management, control catalogs, and standards mapping across 15+ production pages.",
          "Developed secure GitHub Actions–driven CI/CD workflows for automated security assessments, enabling scalable policy-as-code enforcement in cloud-native environments.",
        ],
      },
    ],
    tags: ["Go", "React", "TypeScript", "GitHub Actions", "SARIF", "Gemara", "Privateer", "NIST 800-53"],
  },
  {
    period: "2025",
    badge: "Fintech startup",
    company: "Fintrady",
    role: "AI Systems Engineer",
    monogram: "F",
    summary: ["Options Analytics", "GARCH + LSTM Volatility Forecasting", "Portfolio Reporting"],
    projects: [
      {
        title: "Hybrid GARCH + LSTM Forecasting Engine",
        bullets: [
          "Built a PyTorch stock price and volatility forecasting engine that pairs GARCH volatility models with LSTM networks, with confidence and reliability scoring on every prediction.",
          "Distilled the ~500K-parameter hybrid model into a ~50K-parameter model specialized for iron condors, trading a little accuracy for much faster training and lower-latency inference.",
          "Wrote a backtesting and model-validation framework on yfinance market data, plus an options pricing optimizer and a trade execution agent driven by the forecasts.",
        ],
      },
      {
        title: "Options Strategy Analyzer & Reporting",
        bullets: [
          "Built an iron condor analyzer that turns a ticker, a days-to-expiry window, and a max-loss budget into strikes, net credit, and max loss, validated against OptionStrat.",
          "Designed reporting tables that rank cash-secured puts and covered calls by expiry, strike distance, and annualized ROI, with the Annualized Return % calculation shown.",
          "Added a Run Rate metric (options P/L minus protective put cost) to the detailed transaction view and to the weekly, monthly, and overall performance summaries.",
        ],
      },
    ],
    tags: ["Python", "PyTorch", "GARCH", "LSTM", "Backtesting", "Node.js", "Options Analytics"],
  },
];

export const education = [
  {
    school: "Amberton University",
    location: "Garland, TX",
    degree: "Master of Science in Applied AI",
    date: "Expected May 2028",
    monogram: "AU",
    inProgress: true,
  },
  {
    school: "The University of Texas at Austin",
    location: "Austin, TX",
    degree: "Advanced AI Certificate in AI/ML: Business Applications",
    date: "December 2024",
    monogram: "UT",
  },
  {
    school: "St. Edward's University",
    location: "Austin, TX",
    degree: "Bachelor of Science in Computer Science",
    date: "December 2023",
    monogram: "SEU",
  },
];

export const expertise = [
  {
    icon: "cpu",
    title: "AI/ML Infrastructure",
    body: "Built Kubernetes CI/CD on bare-metal IBM Power with Spyre AI accelerators, using ephemeral pods so expensive hardware is only used when it's needed.",
  },
  {
    icon: "workflow",
    title: "CI/CD & Pipeline Automation",
    body: "Tekton, Jenkins, and GitHub Actions. Replaced sequential Jenkins runs with a 9-pod parallel pipeline that made AI/ML tests 6x faster.",
  },
  {
    icon: "shield",
    title: "Security & Compliance Automation",
    body: "Policy-as-code with OSPS Baseline, NIST 800-53, and SSDF. Gemara workflows, Privateer scanners, and SARIF output that cut false positives by ~80%.",
  },
  {
    icon: "circuit",
    title: "Hardware Test Automation",
    body: "Raspberry Pi, computer-vision LED detection, Playwright, Telnet/SSH, and REST APIs that turned a 45–90 minute manual workflow into one automated run.",
  },
  {
    icon: "sparkles",
    title: "Applied AI & LLM Apps",
    body: "GPT-4, LangChain, RAG, NLP, and Sentence Transformers. Built PDF chatbots, resume embedding services, and AI-assisted log triage.",
  },
  {
    icon: "layers",
    title: "Full-Stack Engineering",
    body: "React and TypeScript front ends, Go, FastAPI, and Flask services, and PostgreSQL, MongoDB, Redis, and Firebase, from 15+ page production UIs to APIs.",
  },
];

export const featuredWork = [
  {
    slug: "spyre-ci-cd",
    category: "AI Infrastructure",
    title: "Spyre CI/CD Modernization",
    body: "Moved IBM's Spyre AI accelerator testing from persistent Jenkins agents to ephemeral Kubernetes pods running a 9-way parallel Tekton pipeline.",
    pill: "IBM · 2026 — 6x faster AI/ML tests",
  },
  {
    slug: "bobbotics",
    category: "Hardware Automation",
    title: "Bobbotics Hardware Test Automation Tool",
    body: "End-to-end Raspberry Pi and computer-vision pipeline that triggers ASMI tests, reads server LEDs by camera, and files Jazz ETM evidence on its own.",
    pill: "IBM · 2026 — 45–90 min flow automated",
  },
  {
    slug: "compliance-as-code",
    category: "Security & Compliance",
    title: "Continuous Compliance as Code",
    body: "Go pipelines aligned to OSPS Baseline, NIST 800-53, and SSDF, with Privateer scanners emitting SARIF into GitHub-native CI/CD.",
    pill: "Revanite · 2025 — ~80% fewer false positives",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string[];
  approach: { title: string; body: string }[];
  flow: { label: string; detail: string }[];
  results: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "spyre-ci-cd",
    title: "Spyre CI/CD Modernization",
    category: "AI Infrastructure",
    company: "IBM",
    role: "Software Engineer Intern",
    period: "May – Aug 2026",
    summary:
      "Rebuilt how IBM tests its Spyre AI accelerator platform: from sequential runs on persistent Jenkins agents to a parallel Tekton pipeline on ephemeral Kubernetes pods running on bare-metal IBM Power.",
    metrics: [
      { value: "6x", label: "Faster AI/ML test runtime" },
      { value: "9", label: "Parallel Tekton pods" },
      { value: "POC", label: "Validated for wider Spyre rollout" },
    ],
    problem: [
      "AI/ML test suites for the Spyre accelerator ran one after another on persistent Jenkins agents, so every change waited on a long, serial feedback loop.",
      "Persistent agents also held on to bare-metal IBM Power machines with Spyre cards attached, keeping expensive accelerator hardware tied up even when nothing was running.",
    ],
    approach: [
      {
        title: "Kubernetes on bare metal",
        body: "Architected Kubernetes-based CI/CD directly on bare-metal IBM Power hardware with Spyre AI accelerators, so test workloads could be scheduled onto the accelerator nodes.",
      },
      {
        title: "Ephemeral pods instead of persistent agents",
        body: "Migrated persistent Jenkins agents to ephemeral pods that are created for a run and released afterwards, so the hardware is only claimed when it's actually needed.",
      },
      {
        title: "Fan out with Tekton",
        body: "Engineered a Tekton pipeline that splits the test workload across 9 pods running in parallel, replacing the sequential Jenkins execution.",
      },
      {
        title: "Prove it, then scale it",
        body: "Ran it as a proof of concept against the existing pipeline and validated it as the model for broader CI/CD across Spyre infrastructure.",
      },
    ],
    flow: [
      { label: "Code change", detail: "Triggers a Tekton PipelineRun" },
      { label: "Schedule", detail: "Ephemeral pods land on Spyre-equipped Power nodes" },
      { label: "Fan out", detail: "9 pods run AI/ML test shards in parallel" },
      { label: "Release", detail: "Results reported and pods torn down" },
    ],
    results: [
      "AI/ML test runtime dropped 6x compared with sequential Jenkins execution.",
      "Accelerator hardware is used on demand instead of being held by always-on agents.",
      "The proof of concept was validated for broader CI/CD implementation across Spyre infrastructure.",
    ],
    stack: ["Kubernetes", "Tekton", "Jenkins", "IBM Power", "Spyre AI Accelerator", "CI/CD"],
  },
  {
    slug: "bobbotics",
    title: "Bobbotics Hardware Test Automation Tool",
    category: "Hardware Automation",
    company: "IBM",
    role: "Software Engineer Intern",
    period: "May – Aug 2026",
    summary:
      "An end-to-end hardware testing pipeline that triggers server tests, watches the machine's LEDs through a camera, validates the result, and files the evidence on its own.",
    metrics: [
      { value: "45–90", label: "Minute manual flow automated" },
      { value: "CV", label: "Camera-based LED detection" },
      { value: "Auto", label: "Jazz ETM evidence reporting" },
    ],
    problem: [
      "Validating IBM Power hardware was a manual 45–90 minute routine: kick off ASMI tests, physically watch the server's status LEDs, confirm the outcome, and then write up the evidence by hand.",
      "Because a person had to be in the loop the whole time, runs were slow to schedule, hard to repeat exactly, and produced evidence that wasn't machine-readable.",
    ],
    approach: [
      {
        title: "Drive the system like a person would",
        body: "Used Playwright to operate the ASMI web interface and trigger tests, with Telnet/SSH and REST APIs for direct system control.",
      },
      {
        title: "Give the rig eyes",
        body: "Mounted a camera on a Raspberry Pi and used computer vision to detect server LED states, replacing the person watching the front panel.",
      },
      {
        title: "Validate automatically",
        body: "Checked the observed hardware state against expected results so each run ends with a clear pass or fail.",
      },
      {
        title: "File the paperwork",
        body: "Reported results straight to Jazz ETM, producing machine-readable test evidence with minimal manual intervention.",
      },
    ],
    flow: [
      { label: "Trigger", detail: "Playwright starts ASMI tests" },
      { label: "Observe", detail: "Pi camera + CV read server LEDs" },
      { label: "Validate", detail: "Telnet/SSH and REST checks" },
      { label: "Report", detail: "Evidence filed in Jazz ETM" },
    ],
    results: [
      "A 45–90 minute manual workflow became a single automated run.",
      "Test evidence is now machine-readable and consistent between runs.",
      "Runs need minimal manual intervention from start to finish.",
    ],
    stack: ["Python", "Playwright", "Raspberry Pi", "Computer Vision", "Telnet/SSH", "REST APIs", "Jazz ETM"],
  },
  {
    slug: "compliance-as-code",
    title: "Continuous Compliance as Code",
    category: "Security & Compliance",
    company: "Revanite",
    role: "Software Engineer",
    period: "Jul 2025 – Jan 2026",
    summary:
      "Compliance automation in Go that continuously scans GitHub repositories against OSPS Baseline, NIST 800-53, and SSDF, and reports findings where developers already work.",
    metrics: [
      { value: "~80%", label: "Fewer false positives" },
      { value: "15+", label: "Production UI pages" },
      { value: "3", label: "Frameworks mapped" },
    ],
    problem: [
      "Proving compliance with OSPS Baseline, NIST 800-53, and SSDF across large GitHub estates meant periodic, manual audits that were out of date as soon as they finished.",
      "Existing scanning was noisy: too many false positives meant real findings got ignored.",
    ],
    approach: [
      {
        title: "Pipelines in Go",
        body: "Built and scaled compliance automation pipelines in Go aligned with OSPS Baseline, NIST 800-53, and SSDF for continuous scanning across large GitHub repositories.",
      },
      {
        title: "Standard evaluations",
        body: "Implemented Gemara-compatible evaluation workflows and Privateer-based scanners so every control is evaluated the same way.",
      },
      {
        title: "Results where developers look",
        body: "Emitted SARIF so findings show up natively in GitHub CI/CD, and built GitHub Actions workflows that run security assessments automatically.",
      },
      {
        title: "A UI for the policy side",
        body: "Designed and delivered a compliance UI and transformer API in React and TypeScript for policy management, control catalogs, and standards mapping across 15+ production pages.",
      },
    ],
    flow: [
      { label: "Controls", detail: "OSPS Baseline, NIST 800-53, SSDF catalogs" },
      { label: "Scan", detail: "Privateer runs in GitHub Actions" },
      { label: "Evaluate", detail: "Gemara-compatible workflows" },
      { label: "Report", detail: "SARIF into GitHub + compliance UI" },
    ],
    results: [
      "False positives dropped by approximately 80%.",
      "Compliance became continuous and enforced as policy-as-code in cloud-native environments.",
      "Policy owners got a 15+ page UI for catalogs and standards mapping.",
    ],
    stack: ["Go", "Privateer", "Gemara", "SARIF", "GitHub Actions", "React", "TypeScript", "NIST 800-53"],
  },
];

export const testimonials: { quote: string; name: string; title: string; company: string }[] = [];

export const certifications: { name: string; issuer: string; date: string; url?: string }[] = [];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  category: "AI & ML" | "Fintech" | "Apps & Tools" | "Team & Coursework";
  /** Omit for private repos; the card shows a "Private repo" label instead of linking. */
  repo?: string;
  context?: string;
};

export const projects: Project[] = [
  {
    name: "Options Strategy Analyzer",
    description:
      "Options trading toolkit that turns a ticker, a days-to-expiry window, and a max-loss budget into an iron condor with strikes, net credit, and max loss, checked against OptionStrat. It ranks cash-secured puts and covered calls by expiry, strike distance, and annual ROI, and reports a Run Rate (options P/L minus protective put cost) across weekly, monthly, and overall performance summaries.",
    tags: ["Node.js", "Express", "GPT-4o mini", "Options Analytics", "Portfolio Reporting"],
    category: "Fintech",
    repo: "https://github.com/zohayb23/OptionsTrading",
    context: "Fintrady",
  },
  {
    name: "GARCH + LSTM Volatility Forecaster",
    description:
      "PyTorch forecasting engine that combines GARCH volatility models with LSTM networks to predict stock prices and volatility, with confidence scoring, a backtesting framework, an options pricing optimizer, and a trade execution agent. Includes a distilled ~50K-parameter model tuned for iron condors alongside the ~500K-parameter hybrid.",
    tags: ["Python", "PyTorch", "GARCH", "LSTM", "Backtesting", "yfinance"],
    category: "Fintech",
    context: "Fintrady",
  },
  {
    name: "IBM Intelligent Documentation Copilot",
    description:
      "Hackathon build for IBM's Bobathon 2026 (Integration Track): a context-aware assistant on IBM Bob that answers questions with your code and task in mind. It connects a Context7 MCP server for live semantic search over IBM docs, adds a custom IBM Docs Copilot mode, and ships a skill that flags deprecated IBM APIs in open files with migration snippets.",
    tags: ["IBM Bob", "MCP", "AI Agents", "Context7", "Developer Tooling"],
    category: "AI & ML",
    context: "IBM Bobathon 2026",
  },
  {
    name: "Recruiter.Ai",
    description:
      "Resume embedding service that cleans resume text and generates embeddings with Sentence Transformers (all-MiniLM-L6-v2). Containerized with Docker and deployed to Kubernetes on AWS EKS through a GitHub Actions CI/CD pipeline.",
    tags: ["Python", "Sentence Transformers", "Docker", "Kubernetes", "AWS EKS", "GitHub Actions"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/Recruiter.Ai",
  },
  {
    name: "MultiPDF RAG Chatbot",
    description:
      "Streamlit web app that reads and processes multiple PDFs so you can ask questions about them through a conversational AI chatbot using retrieval-augmented generation.",
    tags: ["Python", "RAG", "LangChain", "Streamlit", "LLMs"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/MultiPDFRagChatbot",
  },
  {
    name: "ContactAutomation",
    description:
      "Sends personalized beat packs to artists through the Gmail and Google Drive APIs. Each pack has 3–5 random beats and a usage agreement, with 30-day duplicate prevention, per-artist pack numbering, a full CLI, and an optional dashboard and Discord bot. A companion pipeline sorts the beat vault by genre on Google Drive and prepares scheduled uploads, titles, and tags for genre-specific YouTube channels.",
    tags: ["Python", "Gmail API", "Google Drive API", "YouTube Data API", "OAuth 2.0", "CLI"],
    category: "Apps & Tools",
    repo: "https://github.com/zohayb23/ContactAutomation",
  },
  {
    name: "BlackJack in Go",
    description:
      "Command-line Blackjack built test-first in Go, with a clean internal package layout, dealer AI that hits on 16 and stands on 17, and close to 100% test coverage.",
    tags: ["Go", "TDD", "CLI"],
    category: "Apps & Tools",
    repo: "https://github.com/zohayb23/BlackJackGo",
  },
  {
    name: "Plant Seedling Classification",
    description:
      "Convolutional neural network that sorts plant seedlings into species, aimed at cutting the manual work of telling crops from weeds in agriculture.",
    tags: ["Deep Learning", "CNN", "Computer Vision", "Jupyter"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/PlantSeedingClassification",
  },
  {
    name: "Credit Card Churn Prediction",
    description:
      "Classification model for Thera Bank that predicts which customers will cancel their credit cards, so the bank can improve its services and keep them.",
    tags: ["Machine Learning", "Classification", "Python"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/Credit-Card-Users-Churn-Prediction",
  },
  {
    name: "AllLife Bank Loan Campaign",
    description:
      "Predicts whether a liability customer will buy a personal loan, finds the customer attributes that drive purchases, and identifies which segments to target.",
    tags: ["Machine Learning", "Customer Segmentation", "Jupyter"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/AllLife-Bank-Personal-Loan-Campaign",
  },
  {
    name: "FoodHub Data Analysis",
    description: "Exploratory data analysis of a food-delivery platform's orders to find demand patterns and actionable business insights.",
    tags: ["Data Analysis", "Python", "Jupyter"],
    category: "AI & ML",
    repo: "https://github.com/zohayb23/FoodHub-Data-Analysis",
  },
  {
    name: "WeGo Autonomous Delivery",
    description:
      "Seven-person, seven-sprint semester project using transportation as a service to help patients and healthcare professionals. I rotated through Data Manager, Backend, QA, and Scrum Master roles, and we demoed to stakeholders.",
    tags: ["Python", "Agile / Scrum", "SDLC", "Scrum Master"],
    category: "Team & Coursework",
    repo: "https://github.com/zohayb23/WeGoT21",
  },
  {
    name: "GoFit iOS",
    description:
      "Fitness tracker built for a mobile programming course that tracks exercise, monitors nutrition, sets fitness goals, and reports progress.",
    tags: ["Swift", "Storyboard", "iOS"],
    category: "Team & Coursework",
    repo: "https://github.com/zohayb23/GoFit-iOS-",
  },
];

export const openSource = [
  {
    name: "Privateer",
    description: "Plugin-based framework for validating the status of deployed resources.",
    repo: "https://github.com/zohayb23/privateer",
    lang: "Go",
  },
  {
    name: "Privateer SDK",
    description: "SDK that streamlines building Privateer plugins.",
    repo: "https://github.com/zohayb23/privateer-sdk",
    lang: "Go",
  },
  {
    name: "pvtr-github-repo",
    description: "Privateer plugin that scans the security hygiene of a GitHub repository.",
    repo: "https://github.com/zohayb23/pvtr-github-repo",
    lang: "Go",
  },
  {
    name: "pvtr-github-repo-action",
    description: "GitHub Action that runs OSPS security assessments in CI.",
    repo: "https://github.com/zohayb23/pvtr-github-repo-action",
    lang: "Actions",
  },
  {
    name: "Gemara",
    description: "Governance model for minimizing rework in compliance activities.",
    repo: "https://github.com/zohayb23/gemara",
    lang: "Spec",
  },
  {
    name: "OpenSSF Security Baseline",
    description: "Open Source Project Security (OSPS) Baseline controls from OpenSSF.",
    repo: "https://github.com/zohayb23/security-baseline",
    lang: "Standard",
  },
  {
    name: "Controls Canvas",
    description: "Interactive CLI for building an SCI Layer 2 control catalog from a menu of options.",
    repo: "https://github.com/zohayb23/controls-canvas",
    lang: "CLI",
  },
];

export const skills: { group: string; items: { name: string; icon?: string }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Go", icon: "go" },
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Bash / Shell", icon: "gnubash" },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Groovy", icon: "apachegroovy" },
    ],
  },
  {
    group: "AI / ML",
    items: [{ name: "GPT-4" }, { name: "LangChain", icon: "langchain" }, { name: "NLP" }, { name: "RAG" }],
  },
  {
    group: "Databases & Caching",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Tekton", icon: "tekton" },
      { name: "OpenShift", icon: "redhatopenshift" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD Pipelines" },
      { name: "JFrog Artifactory", icon: "jfrog" },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Jira", icon: "jira" },
      { name: "Podman", icon: "podman" },
      { name: "Aqua Security" },
      { name: "GaraSign" },
    ],
  },
];

export const builtAt = [
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Revanite" },
  { name: "Fintrady" },
  { name: "UT Austin" },
  { name: "St. Edward's" },
  { name: "Amberton" },
];
