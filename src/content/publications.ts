export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  status: 'published' | 'under-review' | 'submitted';
  links?: { label: string; href: string }[];
  abstract: string;
  bibtex?: string;
  highlight?: boolean;
  note?: string;
  figure?: { src: string; alt: string };
};

export const publications: Publication[] = [
  {
    id: 'a-pros-2026',
    title:
      'A-ProS: Towards Reliable Autonomous Programming Through Multi-Model Feedback',
    authors:
      'Anika Tabassum*, Md Sifat Hossain*, Md. Fahim Arefin, Tariqul Islam, Tarannum Shaila Zaman',
    venue:
      'ACM Transactions on Software Engineering and Methodology (TOSEM), 2026',
    venueShort: 'TOSEM 2026',
    year: 2026,
    status: 'published',
    note: '* Equal contribution',
    highlight: true,
    figure: {
      src: '/A-PROS.png',
      alt: 'A-ProS framework diagram: problem acquisition and preprocessing feeds a GPT-based solution generator, whose outputs are submitted to Codeforces; verdicts drive a multi-model debugging feedback loop (Codestral, Llama-3.3, DeepSeek-R1) that iteratively refines the solution.',
    },
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.18073' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2605.18073' },
      { label: 'Project Page', href: 'https://sifat-hossain-niloy.github.io/A-Pros/' },
      { label: 'Code', href: 'https://github.com/sifat-hossain-niloy/A-Pros' },
    ],
    abstract:
      'A-ProS is an autonomous agentic framework that separates solution generation (GPT-4 / GPT-5) from specialized debugging feedback (DeepSeek-R1, Llama-3.3, Codestral) using persistent multi-model feedback loops. Evaluated on 367 ICPC and Codeforces problems under a 2×3 factorial design, stateful refinement achieves 2.2-2.3× greater gains than stateless baselines and reduces error repetition by 2.9-3.5×. We further analyze trust calibration (ECE) across critic models.',
    bibtex: `@article{tabassum2026apros,
  title   = {A-ProS: Towards Reliable Autonomous Programming Through Multi-Model Feedback},
  author  = {Tabassum, Anika and Hossain, Md Sifat and Arefin, Md. Fahim and Islam, Tariqul and Zaman, Tarannum Shaila},
  journal = {ACM Transactions on Software Engineering and Methodology (TOSEM)},
  year    = {2026},
  publisher = {ACM},
  eprint  = {2605.18073},
  archivePrefix = {arXiv}
}`,
  },
  {
    id: 'llm-pros-2025',
    title:
      'LLM-ProS: Analyzing Large Language Models\u2019 Performance in Competitive Problem Solving',
    authors:
      'Md Sifat Hossain, Anika Tabassum, Md. Fahim Arefin, Tarannum Shaila Zaman',
    venue:
      'LLM4Code 2025 Workshop, ICSE 2025 - 47th International Conference on Software Engineering, Ottawa, Canada',
    venueShort: 'ICSE 2025 (LLM4Code)',
    year: 2025,
    status: 'published',
    highlight: true,
    figure: {
      src: '/LLM-PROS.png',
      alt: 'LLM-ProS pipeline: ICPC problem data collection, data preprocessing, model testing across GPT-4o / Mistral Large / Llama / OpenAI o1 models, and automated submission with verdict classification (Accepted, Compilation error, Time limit exceeded, Wrong answer).',
    },
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2502.04355' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2502.04355' },
      { label: 'Code', href: 'https://github.com/sifat-hossain-niloy/Hybrid-Feedback-Loop---LLM' },
    ],
    abstract:
      'We propose LLM-ProS, a novel evaluation framework benchmarking five state-of-the-art LLMs (GPT-4o, Mistral Large, Llama-3.1-405B, o1-mini, o1-preview) on 166 ICPC World Finals problems (2011-2024). Our analysis reveals that o1 models significantly outperform general-purpose models, primarily due to chain-of-thought reasoning and iterative refinement capabilities, and we characterize where each model class fails.',
    bibtex: `@inproceedings{hossain2025llmpros,
  title     = {LLM-ProS: Analyzing Large Language Models' Performance in Competitive Problem Solving},
  author    = {Hossain, Md Sifat and Tabassum, Anika and Arefin, Md. Fahim and Zaman, Tarannum Shaila},
  booktitle = {Proceedings of the 1st ACM International Workshop on Large Language Models for Code (LLM4Code), ICSE},
  pages     = {80--87},
  year      = {2025},
  address   = {Ottawa, Canada},
  eprint    = {2502.04355},
  archivePrefix = {arXiv}
}`,
  },
];

// Submitted manuscripts. Review policies checked 2026-11-14 on the official call pages:
// - Polyglot paper: MSR 2027 Technical Track, double-anonymous. Authors must not say it was
//   submitted to MSR 2027 and "should not publicly use the submission title" during review,
//   so its title and tool name stay off this site until notification (8 Jan 2027).
// - Registered Report: MSR 2027 Registered Reports, single-anonymous; venue may be named.
// - Code or Test? (LLM4Code 2027) and CF-Live (FORGE 2027): double-anonymous, ICSE rules;
//   titles may be public, but never say where they are under submission.
export const manuscripts: Publication[] = [
  {
    id: 'polyglot-2026',
    title: 'LLM agents for bugs that span two programming languages (title withheld during review)',
    authors: 'Md Sifat Hossain, et al.',
    venue: 'Under double-anonymous review since October 2026 · title withheld until January 2027',
    venueShort: 'Polyglot debugging',
    year: 2026,
    status: 'submitted',
    abstract:
      'An agentic approach to localizing and repairing bugs that cross language boundaries (REST, gRPC and native calls) in Java-TypeScript and Python-Go repositories, where LLM agents drop sharply from their single-language performance. It builds on a mined corpus of confirmed cross-language bug fixes and a SCIP-based cross-language navigation graph, combined with contract checking and compile, lint and test feedback, and documents information leakage through Git history, caches and network access as a threat to reliable agent evaluation.',
  },
  {
    id: 'rr-msr-2027',
    title:
      'Do Explicit Architecture Decisions Help LLMs Keep Cross-Language Interface Contracts Consistent? A Registered Report',
    authors: 'Md Sifat Hossain, Rick Kazman',
    venue: 'Stage 1 Registered Report, MSR 2027 Registered Reports Track · submitted November 2026',
    venueShort: 'MSR 2027 Registered Report',
    year: 2026,
    status: 'submitted',
    abstract:
      'A confirmatory study of whether an LLM keeps interface contracts that cross language boundaries (REST routes and payload schemas, gRPC services, native-call signatures) consistent more often when it is given the architecture decision explicitly, or a cross-language dependency graph. Tasks come from real change requests in open-source Java/TypeScript and Python/Go projects and run under three conditions (code only, code plus decision, code plus graph) with DeepSeek-V4.1-Flash and Claude Sonnet 5.5, in a sandbox without network or history. A contract-consistency oracle, the project\u2019s build and tests, and two raters judge each change; a simulation-based power analysis sets the sample size.',
  },
  {
    id: 'code-or-test-2026',
    title:
      'Code or Test? A Pre-registered Study of Which Artifact Language Models Side With When a Unit Test Fails',
    authors: 'Md Sifat Hossain, Nafiul Hasan, Md. Fahim Arefin, Tarannum Shaila Zaman',
    venue: 'Manuscript submitted, November 2026',
    venueShort: 'Pre-registered study',
    year: 2026,
    status: 'submitted',
    abstract:
      'When a unit test fails, either the code or the test is wrong, and a coding agent has to choose which to change. We introduce mirrored pairs: two versions of one failure that show the same call and the same two values, one with the code at fault and one with the test at fault. In a pre-registered study, six models act as judge and fixer on up to 989 pairs. With the specification shown, all six almost always name the faulty artifact, but how the repair request is worded matters far more than the step from judging to fixing. Measurements of test tampering should report how the request is worded and what the specification determines.',
  },
  {
    id: 'cf-live-2026',
    title: 'CF-Live: What Gates Catch in a Post-Cutoff Competitive Programming Benchmark',
    authors: 'Md Sifat Hossain, Md. Fahim Arefin, Tarannum Shaila Zaman',
    venue: 'Benchmarking paper · manuscript submitted, November 2026',
    venueShort: 'Benchmark paper',
    year: 2026,
    status: 'submitted',
    abstract:
      'Competitive programming benchmarks face three quiet threats: contaminated problems, weak tests, and source data that differs from what humans saw. CF-Live is a pilot of 30 recent Codeforces problems whose contests began after each model\u2019s documented training cutoff. A problem is scored only after it passes gates: an independent oracle, an exact input validator, seeded stress tests, and calibrated sandbox limits. In a preregistered evaluation of four models, some solutions that passed every official sample failed the private tests, and the gates and reviews caught defects that would otherwise have reached scoring. Scraped statements also carried text addressed to AI systems and hidden from contestants.',
  },
];
