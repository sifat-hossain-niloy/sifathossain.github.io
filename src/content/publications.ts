export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  status: 'published' | 'under-review';
  links?: { label: string; href: string }[];
  abstract: string;
  bibtex: string;
  highlight?: boolean;
  note?: string;
};

export const publications: Publication[] = [
  {
    id: 'a-pros-2026',
    title:
      'A-ProS: Towards Reliable Autonomous Programming Through Multi-Model Feedback',
    authors:
      'Anika Tabassum*, Md Sifat Hossain*, Md. Fahim Arefin, Tariqul Islam, Tarannum Shaila Zaman',
    venue:
      'Under review (2nd phase) at ACM Transactions on Software Engineering and Methodology (TOSEM)',
    venueShort: 'TOSEM 2026',
    year: 2026,
    status: 'under-review',
    note: '* Equal contribution',
    highlight: true,
    links: [],
    abstract:
      'A-ProS is an autonomous agentic framework that separates solution generation (GPT-4 / GPT-5) from specialized debugging feedback (DeepSeek-R1, Llama-3.3, Codestral) using persistent multi-model feedback loops. Evaluated on 367 ICPC and Codeforces problems under a 2×3 factorial design, stateful refinement achieves 2.2–2.3× greater gains than stateless baselines and reduces error repetition by 2.9–3.5×. We further analyze trust calibration (ECE) across critic models.',
    bibtex: `@article{tabassum2026apros,
  title   = {A-ProS: Towards Reliable Autonomous Programming Through Multi-Model Feedback},
  author  = {Tabassum, Anika and Hossain, Md Sifat and Arefin, Md. Fahim and Islam, Tariqul and Zaman, Tarannum Shaila},
  journal = {Under review at ACM Transactions on Software Engineering and Methodology (TOSEM)},
  year    = {2026}
}`,
  },
  {
    id: 'llm-pros-2025',
    title:
      'LLM-ProS: Analyzing Large Language Models\u2019 Performance in Competitive Problem Solving',
    authors:
      'Md Sifat Hossain, Anika Tabassum, Md. Fahim Arefin, Tarannum Shaila Zaman',
    venue:
      'LLM4Code 2025 Workshop, ICSE 2025 — 47th International Conference on Software Engineering, Ottawa, Canada',
    venueShort: 'ICSE 2025 (LLM4Code)',
    year: 2025,
    status: 'published',
    highlight: true,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2502.04355' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2502.04355' },
    ],
    abstract:
      'We propose LLM-ProS, a novel evaluation framework benchmarking five state-of-the-art LLMs (GPT-4o, Mistral Large, Llama-3.1-405B, o1-mini, o1-preview) on 166 ICPC World Finals problems (2011–2024). Our analysis reveals that o1 models significantly outperform general-purpose models, primarily due to chain-of-thought reasoning and iterative refinement capabilities, and we characterize where each model class fails.',
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
