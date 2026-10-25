export type Project = {
  name: string;
  stack: string;
  description: string;
  kind: 'research' | 'software';
  link?: string;
  figure?: { src: string; alt: string; caption: string };
};

export const projects: Project[] = [
  {
    name: 'Cross-Language Bug Localization & Repair in Polyglot Repositories',
    stack: 'LLM Agents · SCIP · tree-sitter · Java · TypeScript · Python · Go',
    kind: 'research',
    description:
      'Agentic approach to localizing and repairing bugs that cross language boundaries in Java-TypeScript and Python-Go repositories, where LLM agents otherwise drop sharply from their single-language performance. Built on a mined corpus of confirmed cross-language bug fixes and a unified SCIP-based navigation graph with thousands of boundary edges (~90% estimated precision), combined with contract checking and compilation, lint, and test feedback. Also documents information leakage through Git history, caches, and network access as a threat to reliable agent evaluation. Paper submitted to a top-tier software engineering conference (under review).',
    figure: {
      src: '/Polyglot-Overview.png',
      alt: 'Three-panel overview. (a) Corpus construction narrows GitHub repositories to merged pull requests, candidates, confirmed cross-language bug fixes, and executable bugs. (b) A cross-language dependency graph links Language A and Language B through REST routes, HTTP headers, IPC signals, payload and enum types, and gRPC, built on SCIP and tree-sitter. (c) The agent pipeline inside a sandbox: localization agent, contract reasoning, editing agent, validation gate, and feedback tests, with failures routed back by side and scoring hidden from the agent.',
      caption:
        'Overview of the study: (a) corpus construction, (b) the cross-language dependency graph, and (c) the localize-then-edit agent pipeline, run inside a sandbox with hidden scoring.',
    },
  },
  {
    name: 'A-ProS',
    stack: 'Python · OpenAI · DeepSeek · Selenium · Playwright · SQLite',
    kind: 'research',
    link: 'https://github.com/sifat-hossain-niloy/A-Pros',
    description:
      'Reference implementation of A-ProS (TOSEM 2026) - an autonomous agentic framework separating solution generation (GPT-4 / GPT-5) from specialized debugging feedback (DeepSeek-R1, Llama-3.3, Codestral) under a 2×3 factorial design. Persistent multi-model feedback loops achieve 2.2-2.3× greater gains than stateless baselines on 367 ICPC and Codeforces problems.',
  },
  {
    name: 'Hybrid Feedback Loop - LLM Benchmark Pipeline',
    stack: 'Python · Selenium · BeautifulSoup · SQLite3',
    kind: 'research',
    link: 'https://github.com/sifat-hossain-niloy/Hybrid-Feedback-Loop---LLM',
    description:
      'Data and orchestration pipeline underlying LLM-ProS (ICSE 2025) and the broader A-ProS benchmark - scraping 166 ICPC World Finals problems, normalizing LaTeX/HTML, structuring statements / I/O specs / constraints / samples, automating Codeforces Gym submissions, and capturing per-attempt verdict + runtime + memory in SQLite. Extended to Codeforces, forming the 367-problem benchmark used in A-ProS.',
  },
  {
    name: 'TikTok Scraper',
    stack: 'Python · Selenium · Requests · BeautifulSoup · SQLite3',
    kind: 'research',
    link: 'https://github.com/sifat-hossain-niloy/Tiktok-Scraper',
    description:
      'Scraper extracting video descriptions and author metadata for specified keywords and tags, enabling structured analysis across 5,000+ videos. Selenium for dynamic rendering, BeautifulSoup for parsing, SQLite3 for storage - the same scraping architecture later applied in the LLM benchmark pipeline.',
  },
  {
    name: 'CF-Live - Contamination-Resistant Codeforces Evaluation',
    stack: 'Python · Docker · Codeforces · static leaderboard',
    kind: 'research',
    link: 'https://github.com/sifat-hossain-niloy/cp-live-benchmark',
    description:
      'Evaluation infrastructure for LLM competitive programming that avoids training-data contamination by using only newly released Codeforces problems, reviewed private tests, sandboxed Docker execution, and a static public leaderboard. Currently an infrastructure preview rather than a finished benchmark: the first collection found 94 candidate problems and prepared private draft problem directories, and no model scores are published yet.',
  },
  {
    name: 'Grammar-Seeded Agentic Fuzzer for tomlc99',
    stack: 'Python · Hypothesis · C · AddressSanitizer · UBSan',
    kind: 'research',
    link: 'https://github.com/sifat-hossain-niloy/agentic-fuzzing',
    description:
      'Fuzzer for a C TOML parser that uses no coverage instrumentation: a language model reads the formal TOML grammar, writes a Hypothesis input strategy, and refines it over five iterations from run measurements, with sanitizers as the crash oracle. Also measured where the grammar and the parser disagree and surfaced a conformance bug in how the parser validates lowercase hex escapes.',
  },
  {
    name: 'Poray Kemon (পড়ায় কেমন)',
    stack: 'Next.js 15 · TypeScript · PostgreSQL · Prisma · Redis · NextAuth · Tailwind · Docker',
    kind: 'software',
    link: 'https://github.com/sifat-hossain-niloy/poray-kemon',
    description:
      'Anonymous professor and course review platform for Bangladeshi universities, the equivalent of RateMyProfessors for a country it does not cover. Reading is public; Google sign-in is required to review or vote, yet the reviews table stores no user ID and a separate submissions table only enforces one review per account per course, so authorship cannot be joined back to a review. Includes a 161-university catalog with crowdsourced departments and university requests, helpful votes, abuse reports, super-admin / admin / moderator roles with audit logging, and Vitest and Playwright test suites.',
  },
  {
    name: 'Wok and Fire',
    stack: 'React · Redux · FastAPI · PostgreSQL · Firebase · Stripe',
    kind: 'software',
    link: 'https://github.com/sifat-hossain-niloy/Wok-and-Fire',
    description:
      'Full-stack restaurant ordering and management app with menu management, Firebase authentication, and Stripe payments.',
  },
  {
    name: 'Smart Event Ticketing System',
    stack: 'Java · Spring MVC · Hibernate/JPA · PostgreSQL · JSP',
    kind: 'software',
    description:
      'Multi-role event management platform with pessimistic locking to guarantee transactional consistency and prevent concurrent booking conflicts at scale. Real-time event filtering with asynchronous data retrieval for responsive search.',
  },
  {
    name: 'JobGenie',
    stack: 'React.js · FastAPI · MongoDB',
    kind: 'software',
    link: 'https://github.com/sifat-hossain-niloy/jobgenie',
    description:
      'Job search platform with automated CV generation and personalized job matching, integrating live job scraping to fetch and rank relevant listings.',
  },
  {
    name: 'OyeAmigo',
    stack: 'Kotlin · Android SDK',
    kind: 'software',
    link: 'https://github.com/sifat-hossain-niloy/OyeAmigo',
    description:
      'Personality-based social networking Android app with null-safe Kotlin architecture, reducing crash rates and improving runtime stability.',
  },
];

export const education = {
  school: 'University of Dhaka',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  cgpa: '3.13 / 4.00',
  ielts: {
    overall: '7.5',
    breakdown: 'L 8.5 · R 7.5 · W 6.5 · S 6.5',
  },
  start: 'Jan 2020',
  end: 'Feb 2025',
  thesis: {
    title:
      'A Hybrid LLM Feedback Framework for Automated Competitive Programming Workflows',
    abstract:
      'Proposed a novel test-driven iterative benchmarking framework integrating multiple LLMs (OpenAI o3-mini, DeepSeek, Qwen) with Codeforces-based validation to evaluate and improve automated code generation and error correction in competitive programming contexts.',
  },
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Software Design Patterns',
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Theory of Computation',
    'Compiler Design',
    'Operating Systems',
    'Database Management Systems',
    'Software Engineering',
    'Probability & Statistics',
  ],
};

export const achievements = {
  honors: [
    {
      title: 'Zelf Hackathon 2.0 - Honorable Mention',
      detail: 'Scraping Engineer track.',
    },
  ],
  competitive: [
    {
      title: 'Codeforces',
      detail: 'Max rating 1603 (Expert) · 1000+ problems solved.',
      href: 'https://codeforces.com/profile/Kacchi',
    },
    {
      title: 'CodeChef',
      detail: '4★ · max rating 1921.',
      href: 'https://www.codechef.com/users/kacchi',
    },
    {
      title: 'AtCoder',
      detail: 'Handle sifat_sif · regular contest participant.',
      href: 'https://atcoder.jp/users/sifat_sif',
    },
    {
      title: 'LeetCode',
      detail: 'Handle sifat_sif.',
      href: 'https://leetcode.com/u/sifat_sif/',
    },
    {
      title: 'ICPC Dhaka Regional Onsite',
      detail: 'Top-35 of 220+ teams (2023) · Top-49 of 309 teams (2024).',
    },
    {
      title: 'BUET Inter-University Programming Contest 2023',
      detail: '5th of 102 teams.',
    },
    {
      title: 'Samsung R&D BD Coding Contest 2024',
      detail: 'Final Round qualifier · 55th of 908 in Round 1.',
    },
    {
      title: 'Meta Hacker Cup 2024',
      detail: 'Round 2 qualifier · global rank 2,166.',
    },
    { title: 'NCPC 2023', detail: '44th of 198 teams.' },
  ],
};

export const skills = {
  Languages: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Kotlin'],
  'Frameworks & Libraries': [
    'Spring Boot',
    'Hibernate',
    'FastAPI',
    'React.js',
    'Next.js',
    'JSP',
    'Selenium',
    'Playwright',
  ],
  Databases: ['PostgreSQL', 'Oracle DB', 'MongoDB', 'SQLite'],
  'Research & ML': [
    'PyTorch',
    'HuggingFace Transformers',
    'OpenAI API',
    'Pandas',
    'NumPy',
    'Jupyter',
    'LaTeX',
  ],
  Tools: ['Git', 'Linux', 'Bash', 'Docker', 'Jenkins', 'Nginx', 'JUnit5'],
};
