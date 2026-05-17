export type Role = {
  org: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  kind: 'research' | 'industry';
  supervisor?: string;
};

export const research: Role[] = [
  {
    org: 'Data Mining Research Lab, University of Dhaka',
    title: 'Research Assistant',
    location: 'Dhaka, Bangladesh',
    start: 'Jan 2024',
    end: 'Feb 2025',
    kind: 'research',
    supervisor:
      'Md. Fahim Arefin (DU CSE), in collaboration with Prof. Tarannum Shaila Zaman (UMBC, Information Systems).',
    bullets: [
      'Designed and implemented LLM-ProS, a novel evaluation framework for benchmarking LLM performance on ICPC World Finals problems. Curated a 166-problem dataset (2011–2024), built automated submission pipelines via Codeforces Gym, and analyzed five state-of-the-art models across correctness, resource utilization, and chain-of-thought reasoning. Published at ICSE 2025 (LLM4Code).',
      'Extended this work into A-ProS, an autonomous multi-model agentic framework that separates solution generation from specialized debugging feedback under a 2×3 factorial design. Developed the full orchestration pipeline, Codeforces browser automation (Selenium + Playwright), verdict capture, and SQLite logging. Ran ablations on persistent vs. stateless context and trust calibration (ECE) across critic models. Accepted at ACM TOSEM 2026 (under 2nd-phase review).',
      'Completed undergraduate thesis “A Hybrid LLM Feedback Framework for Automated Competitive Programming Workflows,” proposing an iterative test-driven benchmarking pipeline integrating OpenAI o3-mini with specialist LLMs (DeepSeek, Qwen) for error diagnosis and code refinement via Codeforces-based validation.',
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
      'Led a team of 10 researchers, establishing quality control protocols that ensured annotation reliability across diverse task domains.',
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
      'Developed a fraud detection model applying anomaly detection and supervised learning on imbalanced datasets, achieving 85% precision. Investigated model behavior under class imbalance and precision–recall trade-offs.',
      'Automated model training and deployment pipelines using Docker and Jenkins, enabling reproducible ML experimentation and continuous integration of model updates.',
    ],
  },
];

export const industry: Role[] = [
  {
    org: 'Therap Services LLC',
    title: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    start: 'Apr 2025',
    end: 'Present',
    kind: 'industry',
    bullets: [
      'Develop and maintain scalable features for Therap’s EHR SaaS platform (used across all 50 US states) using Java, Spring, Hibernate, JSP, and Oracle DB, with a focus on correctness and reliability under HIPAA constraints.',
      'Build and containerize full-stack modules using React.js and Docker, deployed on WebLogic Server, contributing to platform stability and consistent delivery across environments.',
      'Manage infrastructure provisioning with Terraform and AWS CloudFormation, and maintain CloudWatch-based monitoring to improve system reliability and reduce downtime.',
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
