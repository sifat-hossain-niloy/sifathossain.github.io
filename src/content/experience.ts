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

// Bullets support **bold** for emphasis (rendered by ExperienceList in src/app/page.tsx).
export const research: Role[] = [
  {
    org: 'RISE Lab (Reliable and Intelligent Software Engineering), UMBC',
    title: 'Remote Research Intern',
    location: 'Remote',
    start: 'Sep 2024',
    end: 'Present',
    kind: 'research',
    supervisor:
      'Tarannum Shaila Zaman (Assistant Professor, Dept. of Information Systems, UMBC)',
    bullets: [
      '**Polyglot debugging:** an agentic approach to cross-language bug localization and repair in **Java+TypeScript** and **Python+Go** repositories.',
      'Mined **100+ GitHub repositories** to build a corpus of confirmed cross-language bug fixes.',
      'Built a **SCIP-based cross-language navigation graph** with **~90% precision**.',
      'Paper **under review** at a top-tier software engineering conference.',
      'Also contributed to **LLM-ProS** and **A-ProS**.',
    ],
  },
  {
    org: 'Data Mining Research Lab, University of Dhaka',
    title: 'Research Assistant',
    location: 'Dhaka, Bangladesh',
    start: 'Aug 2023',
    end: 'Present',
    kind: 'research',
    supervisor: 'Md. Fahim Arefin (Assistant Professor, University of Dhaka)',
    bullets: [
      '**LLM-ProS** · **ICSE 2025** (LLM4Code): benchmark of **166 ICPC World Finals problems** (2011-2024) with automated Codeforces Gym submission.',
      'Compared **five state-of-the-art LLMs** on correctness, resource use, and reasoning.',
      '**A-ProS** · **ACM TOSEM 2026**: a multi-model agentic framework that separates solution generation from debugging feedback.',
      'Built the **orchestration pipeline**, Codeforces browser automation, and verdict logging.',
      'Ran ablations on **persistent vs. stateless context** and **critic calibration (ECE)**.',
      '**Thesis:** a test-driven pipeline pairing **OpenAI o3-mini** with specialist LLMs (**DeepSeek, Qwen**) to diagnose and fix code.',
    ],
  },
  {
    org: 'micro1',
    title: 'Competitive Coder Expert & Software Engineer',
    location: 'Remote',
    start: 'Jun 2025',
    end: 'Present',
    kind: 'research',
    bullets: [
      'Authored and reviewed **100+ competitive-programming tasks** end-to-end: statements, editorials, reference solutions, and test suites.',
      'Validated tests against **brute-force oracles** in sandboxed Docker verifiers; calibrated tasks to **defeat frontier models** (avg@8 ≤ 0.4).',
      'Completed **100+ frontend evaluation tasks** for a top AI lab at **94.8% accuracy**.',
      'Authored **80+ containerized RL environments** with hidden automated verifiers, calibrated against frontier-model pass rates.',
      'Built **long-horizon cloud-infrastructure tasks**: an agent deploys, repairs, and tears down a multi-service system with **Terraform/OpenTofu**, scored on the live system.',
      'Consistently ranked **#1 on the contributor leaderboard** for accuracy and throughput.',
    ],
  },
  {
    org: 'Turing Enterprises Inc.',
    title: 'RLHF Data Researcher & Pod Lead',
    location: 'Remote',
    start: 'Jul 2025',
    end: 'Present',
    kind: 'research',
    bullets: [
      'Created **RLHF data** for large-scale AI model alignment, focused on **code and reasoning tasks**.',
      'Owned dataset quality, consistency, and annotation methodology.',
      '**Pod lead for a team of 10**: set quality-control protocols and consistency standards for downstream model training.',
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
      'Build and maintain features for Therap’s **EHR SaaS platform**, used across **50 US states**.',
      'Stack: **Java, Spring, Hibernate, JSP, Oracle DB**, with a focus on correctness and reliability under **HIPAA** compliance.',
      'Build and containerize full-stack modules with **React** and **Docker**, deployed on **WebLogic Server**.',
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
      'Built and deployed web applications for **5+ clients** with **React** and **FastAPI**.',
      'Set up **CI/CD pipelines** with automated testing on **AWS** (EC2, S3, RDS).',
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
