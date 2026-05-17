export type Project = {
  name: string;
  stack: string;
  description: string;
  kind: 'research' | 'software';
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'LLM Benchmark Data Pipeline',
    stack: 'Python · Selenium · BeautifulSoup · SQLite3',
    kind: 'research',
    description:
      'Engineered the data pipeline underlying LLM-ProS and A-ProS — scraping 166 ICPC problems, normalizing LaTeX/HTML, and structuring components (statements, I/O specs, constraints, samples) for automated LLM prompting and verdict logging. Extended to Codeforces (200+ additional problems), forming the 367-problem A-ProS benchmark. SQLite-backed per-attempt metadata (verdict, runtime, memory, iteration).',
  },
  {
    name: 'TikTok Scraper',
    stack: 'Python · Selenium · Requests · BeautifulSoup · SQLite3',
    kind: 'research',
    description:
      'Scraper extracting video descriptions and author metadata for specified keywords and tags, enabling structured analysis across 5,000+ videos. Selenium for dynamic rendering, BeautifulSoup for parsing, SQLite3 for storage — the same scraping architecture later applied in the LLM benchmark pipeline.',
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
    description:
      'Job search platform with automated CV generation and personalized job matching, integrating live job scraping to fetch and rank relevant listings.',
  },
  {
    name: 'OyeAmigo',
    stack: 'Kotlin · Android SDK',
    kind: 'software',
    description:
      'Personality-based social networking Android app with null-safe Kotlin architecture, reducing crash rates and improving runtime stability.',
  },
];

export const education = {
  school: 'University of Dhaka',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  cgpa: '3.13 / 4.00',
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
      title: 'Zelf Hackathon 2.0 — Honorable Mention',
      detail: 'Scraping Engineer track.',
    },
  ],
  competitive: [
    {
      title: 'Codeforces',
      detail: 'Max rating 1603 (Expert) · 1000+ problems solved.',
    },
    { title: 'CodeChef', detail: '4★' },
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
  'Cloud & DevOps': [
    'AWS (EC2, S3, RDS, CloudWatch)',
    'Terraform',
    'Docker',
    'Jenkins',
    'WebLogic',
    'Nginx',
  ],
  Tools: ['Git', 'Linux', 'Bash', 'JUnit5'],
};
