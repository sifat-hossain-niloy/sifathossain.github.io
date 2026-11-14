export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  status: 'published' | 'under-review' | 'manuscript';
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

// Work not yet under review. Keep `venue` honest: say "to be submitted" until the
// submission is made, then switch status to 'under-review'. Double-anonymous venues
// are not named here while the paper is in review.
export const manuscripts: Publication[] = [
  {
    id: 'rr-msr-2027',
    title:
      'Do Explicit Architecture Decisions Help LLMs Keep Cross-Language Interface Contracts Consistent? A Registered Report',
    authors: 'Md Sifat Hossain, Rick Kazman',
    venue: 'Stage 1 Registered Report, MSR 2027 Registered Reports Track · to be submitted November 2026',
    venueShort: 'MSR 2027 Registered Report',
    year: 2026,
    status: 'manuscript',
    abstract:
      'A confirmatory study of whether an LLM keeps interface contracts that cross language boundaries (REST routes and payload schemas, gRPC services, native-call signatures) consistent more often when it is given the architecture decision explicitly, or a cross-language dependency graph. Tasks come from real change requests in open-source Java/TypeScript and Python/Go projects and run under three conditions (code only, code plus decision, code plus graph) with DeepSeek-V4.1-Flash and Claude Sonnet 5.5, in a sandbox without network or history. A contract-consistency oracle, the project\u2019s build and tests, and two raters judge each change; a simulation-based power analysis sets the sample size.',
  },
  {
    id: 'code-or-test-2026',
    title:
      'Code or Test? A Pre-registered Study of Which Artifact Language Models Side With When a Unit Test Fails',
    authors: 'Md Sifat Hossain, Md. Fahim Arefin',
    venue: 'Manuscript · to be submitted November 2026',
    venueShort: 'Pre-registered study',
    year: 2026,
    status: 'manuscript',
    abstract:
      'When a unit test fails, either the code or the test is wrong, and a coding agent has to choose which to change. We introduce mirrored pairs: two versions of one failure that show the same call and the same two values, one with the code at fault and one with the test at fault. In a pre-registered study, six models act as judge and fixer on up to 989 pairs. With the specification shown, all six almost always name the faulty artifact, but how the repair request is worded matters far more than the step from judging to fixing. Measurements of test tampering should report how the request is worded and what the specification determines.',
  },
];
