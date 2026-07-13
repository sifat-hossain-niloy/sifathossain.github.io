export type Role = {
  org: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  kind: 'research' | 'industry' | 'leadership';
  supervisor?: string;
};

export const research: Role[] = [
  {
    org: 'Data Mining Research Lab, University of Dhaka',
    title: 'Research Assistant',
    location: 'Dhaka, Bangladesh',
    start: 'Aug 2023',
    end: 'Present',
    kind: 'research',
    supervisor:
      'Md. Fahim Arefin (DU CSE), in collaboration with Prof. Tarannum Shaila Zaman (UMBC, Information Systems).',
    bullets: [
      'Designed and implemented LLM-ProS, a novel evaluation framework for benchmarking LLM performance on ICPC World Finals problems. Curated a 166-problem dataset (2011-2024), built automated submission pipelines via Codeforces Gym, and analyzed five state-of-the-art models across correctness, resource utilization, and chain-of-thought reasoning. Published at ICSE 2025 (LLM4Code).',
      'Extended this work into A-ProS, an autonomous multi-model agentic framework that separates solution generation from specialized debugging feedback under a 2×3 factorial design. Developed the full orchestration pipeline, Codeforces browser automation (Selenium + Playwright), verdict capture, and SQLite logging. Ran ablations on persistent vs. stateless context and trust calibration (ECE) across critic models. Accepted at ACM TOSEM 2026.',
      'Completed undergraduate thesis “A Hybrid LLM Feedback Framework for Automated Competitive Programming Workflows,” proposing an iterative test-driven benchmarking pipeline integrating OpenAI o3-mini with specialist LLMs (DeepSeek, Qwen) for error diagnosis and code refinement via Codeforces-based validation.',
      '(Ongoing) Polyglot Codebase Debugging and Cross-Language Program Repair with LLMs and Agentic AI - investigating the 40-60 point performance gap of LLM agents on cross-boundary bugs in Java+TypeScript and Python+Go enterprise stacks. Designing a localize-then-edit agent built on SCIP-based unified cross-language call graphs and REST/gRPC schema-aware reasoning, extending IBM iSWE-style AST tooling across language boundaries. Targeting an empirical taxonomy paper (MSR/ICSE) and a full systems evaluation on SWE-PolyBench and xCodeEval for ICSE/FSE 2027.',
    ],
  },
  {
    org: 'Turing Enterprises Inc.',
    title: 'RLHF Data Researcher & Pod Lead',
    location: 'Remote',
    start: 'Jul 2025',
    end: 'Dec 2025',
    kind: 'research',
    bullets: [
      'Contributed to Reinforcement Learning from Human Feedback (RLHF) data creation supporting large-scale AI model alignment research, focusing on dataset quality, consistency, and annotation methodology for code and reasoning tasks.',
      'Led a team of 10, establishing quality control protocols that ensured annotation reliability across diverse task domains.',
      'Coordinated cross-functional team activities and maintained consistency standards critical to downstream model training, directly supporting AI alignment objectives.',
    ],
  },
  {
    org: 'Brainwave Matrix Solutions',
    title: 'Machine Learning Research Intern',
    location: 'Remote, India',
    start: 'Aug 2024',
    end: 'Sep 2024',
    kind: 'research',
    bullets: [
      'Developed a fraud detection model applying anomaly detection and supervised learning on imbalanced datasets, achieving 85% precision. Investigated model behavior under class imbalance and precision-recall trade-offs.',
      'Automated model training and deployment pipelines using Docker and Jenkins, enabling reproducible ML experimentation and continuous integration of model updates.',
    ],
  },
];

export const industry: Role[] = [
  {
    org: 'Therap BD Ltd',
    title: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    start: 'Apr 2025',
    end: 'Present',
    kind: 'industry',
    bullets: [
      'Develop and maintain scalable features for Therap’s EHR SaaS platform (used across all 50 US states) using Java, Spring, Hibernate, JSP, and Oracle DB, with a focus on correctness and reliability under HIPAA constraints.',
      'Build and containerize full-stack modules using React.js and Docker, deployed on WebLogic Server, contributing to platform stability and consistent delivery across environments.',
    ],
  },
  {
    org: 'Zeroxa DT',
    title: 'Software Engineer (Part-time)',
    location: 'Remote, London, UK',
    start: 'Mar 2023',
    end: 'Jun 2024',
    kind: 'industry',
    bullets: [
      'Built and deployed scalable web applications for 5+ clients using React.js and FastAPI, significantly reducing average page load times through targeted performance optimization.',
      'Architected CI/CD pipelines with automated testing and deployment workflows on AWS (EC2, S3, RDS), accelerating release cycles while maintaining production code quality.',
    ],
  },
];

export type Mentee = {
  name: string;
  affiliation: string;
  program: string;
  courses?: { code: string; name: string }[];
  summary: string;
};

export const menteesSummary =
  'Beyond the named mentees below, I have mentored 30+ students one-on-one through the Bangladesh Higher Secondary Certificate (HSC, classes 11-12) curriculum, and guided 10+ students preparing for Bangladesh public and private university admission tests.';

export const mentees: Mentee[] = [
  {
    name: 'Ilhaan S Abdullah',
    affiliation: 'University of California, Riverside (UCR)',
    program: 'B.S. in Computer Science with Business Applications',
    summary:
      'Guided Ilhaan through the theoretical foundations and applied problem-solving for a broad slice of the UCR CS undergraduate core - from assembly and discrete structures through algorithms, theory of computation, operating systems, networks, security, and AI. Focus was on building durable intuition (why an algorithm works, what an OS abstraction is really protecting) rather than answer patterns.',
    courses: [
      { code: 'CS 061', name: 'Machine Organization and Assembly Language Programming' },
      { code: 'CS 100', name: 'Software Construction' },
      { code: 'CS 105', name: 'Computer Systems and C Programming' },
      { code: 'CS 111', name: 'Discrete Structures' },
      { code: 'CS 141', name: 'Intermediate Data Structures and Algorithms' },
      { code: 'CS 150', name: 'Automata and Formal Languages' },
      { code: 'CS 153', name: 'Design of Operating Systems' },
      { code: 'CS 164', name: 'Computer Networks' },
      { code: 'CS 165', name: 'Computer Security I' },
      { code: 'CS 170', name: 'Introduction to Artificial Intelligence' },
    ],
  },
  {
    name: 'Md Mahi',
    affiliation: 'BRAC University, Dhaka',
    program: 'B.Sc. in Computer Science',
    summary:
      'Mentored Mahi since class 9 - starting with training for the Bangladesh Mathematical Olympiad, then progressing into competitive programming (data structures, algorithms, and problem-solving under contest constraints) and foundational Python. Continuing to advise on university-level CS coursework and project work.',
    courses: [
      { code: 'Olympiad', name: 'Bangladesh Mathematical Olympiad training' },
      { code: 'CP', name: 'Competitive Programming (algorithms, data structures)' },
      { code: 'Python', name: 'Introductory & intermediate Python programming' },
    ],
  },
];

export const leadership: Role[] = [
  {
    org: 'Notre Dame English Club, Notre Dame College, Dhaka',
    title: 'Vice President, ICT and Graphics',
    location: 'Dhaka, Bangladesh',
    start: '2018',
    end: '2019',
    kind: 'leadership',
    bullets: [
      'Organized the 6th National English Carnival, a national-level academic competition with 10,000+ participants across 30+ events; previously co-ordinated the 5th edition (5,000+ participants).',
      'Owned judge coordination and external communications, managing scheduling and briefing for judges drawn from industry, academia, and senior education across parallel event tracks.',
      'Led sponsorship outreach, securing corporate partnerships that funded event operations and prize pools.',
    ],
  },
];
