import { profile } from '@/content/profile';
import fs from 'node:fs';
import path from 'node:path';

type ScholarData = { citations: number; hIndex: number; i10Index: number; updatedAt: string } | null;

function loadScholar(): ScholarData {
  if (!profile.scholarUserId) return null;
  try {
    const p = path.join(process.cwd(), 'public', 'scholar.json');
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

export function ScholarBadge() {
  const data = loadScholar();
  if (!data) return null;
  const url = `https://scholar.google.com/citations?user=${profile.scholarUserId}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 px-3 py-2 border border-ink/15 dark:border-neutral-700 rounded-sm bg-paper-alt/60 dark:bg-neutral-900 font-sans text-xs hover:border-ink/40 dark:hover:border-neutral-500 transition"
      title={`Updated ${new Date(data.updatedAt).toLocaleDateString()}`}
    >
      <span className="font-semibold tracking-tight">Google Scholar</span>
      <span className="text-ink-faint dark:text-neutral-500">·</span>
      <span><span className="font-semibold text-ink dark:text-neutral-100">{data.citations}</span> citations</span>
      <span className="text-ink-faint dark:text-neutral-500">·</span>
      <span>h-index <span className="font-semibold text-ink dark:text-neutral-100">{data.hIndex}</span></span>
    </a>
  );
}
