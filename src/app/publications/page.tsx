import type { Metadata } from 'next';
import { publications } from '@/content/publications';
import { PublicationItem } from '@/components/publication-item';
import { ScholarBadge } from '@/components/scholar-badge';

export const metadata: Metadata = { title: 'Publications' };

export default function PublicationsPage() {
  return (
    <article className="pt-10">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">Publications</h1>
      <p className="mt-3 font-sans text-sm text-ink-muted dark:text-neutral-400">
        * denotes equal contribution. Reverse-chronological order. Click <em>Abstract</em> or <em>BibTeX</em> on any entry to expand.
      </p>
      <div className="mt-5"><ScholarBadge /></div>
      <ol className="ref-list mt-10">
        {publications.map((p, i) => <PublicationItem key={p.id} pub={p} index={i} />)}
      </ol>
    </article>
  );
}
