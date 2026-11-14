export const profile = {
  name: 'Md Sifat Hossain',
  shortName: 'Sifat Hossain',
  tagline:
    'CS researcher & software engineer building LLM agents that find and fix bugs across programming languages, and making autonomous software engineering more reliable.',
  status: 'Open to PhD positions for Fall 2027.',
  location: 'Dhaka, Bangladesh',
  email: 'sifatb910@gmail.com',
  phone: '+880 1828 102576',
  photo: '/Profile-picture.png',
  // Set this to your Google Scholar user id (the value after "user=" in the URL)
  // to auto-fetch citation counts at build time. Leave empty to hide the badge.
  scholarUserId: 'ufzmCDQAAAAJ',
  links: {
    email: 'mailto:sifatb910@gmail.com',
    github: 'https://github.com/sifat-hossain-niloy',
    linkedin: 'https://www.linkedin.com/in/md-sifat-hossain-niloy/',
    scholar: 'https://scholar.google.com/citations?user=ufzmCDQAAAAJ&hl=en',
    cv: '/cv',
    arxiv: 'https://arxiv.org/abs/2502.04355',
  },
  interests: [
    'Cross-Language Program Repair & Polyglot Debugging',
    'Large Language Models for Code Generation',
    'Agentic AI Systems & Multi-Model Feedback',
    'Autonomous Software Engineering',
    'Competitive Programming as LLM Benchmark',
    'AI Alignment & RLHF',
  ],
};

export const bio = `I am a Software Engineer at Therap BD Ltd and a recent Computer Science graduate from the University of Dhaka. My research focuses on **cross-language debugging and automated program repair**: LLM agents that find and fix bugs when the cause sits in one language and the failure shows up in another.

At the **RISE Lab, UMBC**, with Tarannum Shaila Zaman, I study bugs that cross language boundaries in **polyglot repositories** (Java+TypeScript, Python+Go), where LLM agents drop sharply from their single-language performance. I mined confirmed cross-language bug fixes from **100+ GitHub repositories** and built a **SCIP-based cross-language navigation graph** (~90% precision) that lets an agent follow REST routes, RPC calls, and shared types across the boundary. The paper is **under review** at a top-tier software engineering conference. With Rick Kazman (University of Hawaii), I have also submitted a **Registered Report** on whether explicit architecture decisions help LLMs keep cross-language interface contracts consistent.

At the Data Mining Research Lab (University of Dhaka), with Md. Fahim Arefin, I co-authored **LLM-ProS** (LLM4Code @ ICSE 2025) and **A-ProS** (ACM TOSEM 2026), on how LLMs solve ICPC-level problems and how persistent multi-model feedback makes autonomous code generation more reliable.

I am applying for PhD programs starting **Fall 2027**, to keep building reliable AI systems for software engineering, especially debugging and repair across languages.`;
