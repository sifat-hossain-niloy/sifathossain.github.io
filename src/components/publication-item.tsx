'use client';

import { useState } from 'react';
import { Publication } from '@/content/publications';
import { asset } from '@/lib/path';
import { ChevronDown, Copy, Check } from 'lucide-react';

export function PublicationItem({ pub, index }: { pub: Publication; index: number }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <li className="ref-item relative pl-12 mb-10">
      <div className="absolute left-0 top-0 font-mono text-sm text-ink-faint dark:text-neutral-500 w-8 text-right">
        [{index + 1}]
      </div>
      {pub.figure && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={asset(pub.figure.src)}
          alt={pub.figure.alt}
          loading="lazy"
          className="mb-4 w-full max-w-2xl rounded-sm border border-ink/10 dark:border-neutral-800 bg-paper-alt dark:bg-neutral-900"
        />
      )}
      <h3 className="font-serif text-[17px] leading-snug font-semibold text-ink dark:text-neutral-100">
        {pub.title}
      </h3>
      <p className="mt-1 text-sm font-sans text-ink-muted dark:text-neutral-400">
        {pub.authors.split(',').map((a, i, arr) => {
          const trimmed = a.trim();
          const isMe = trimmed.replace('*', '').trim() === 'Md Sifat Hossain';
          return (
            <span key={i}>
              <span className={isMe ? 'font-semibold text-ink dark:text-neutral-200 underline decoration-dotted underline-offset-4' : ''}>
                {trimmed}
              </span>
              {i < arr.length - 1 ? ', ' : ''}
            </span>
          );
        })}
      </p>
      <p className="mt-1 text-sm font-sans italic text-ink-muted dark:text-neutral-400">
        {pub.venue}
        {pub.note ? ` · ${pub.note}` : ''}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans">
        <span className="chip">{pub.venueShort}</span>
        {pub.status === 'under-review' && <span className="chip border-accent/40 text-accent dark:border-accent-dark/50 dark:text-accent-dark">Under review</span>}
        {pub.links?.map((l) => (
          <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
        <button
          type="button"
          className="link inline-flex items-center gap-1"
          onClick={() => setShowAbstract((s) => !s)}
        >
          Abstract <ChevronDown size={12} className={showAbstract ? 'rotate-180 transition' : 'transition'} />
        </button>
        <button
          type="button"
          className="link inline-flex items-center gap-1"
          onClick={() => setShowBibtex((s) => !s)}
        >
          BibTeX <ChevronDown size={12} className={showBibtex ? 'rotate-180 transition' : 'transition'} />
        </button>
      </div>
      {showAbstract && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted dark:text-neutral-400 border-l-2 border-ink/10 dark:border-neutral-700 pl-4">
          {pub.abstract}
        </p>
      )}
      {showBibtex && (
        <div className="mt-3 relative">
          <pre className="font-mono text-xs bg-paper-alt dark:bg-neutral-900 border border-ink/10 dark:border-neutral-800 rounded-sm p-3 overflow-x-auto">
            {pub.bibtex}
          </pre>
          <button
            type="button"
            onClick={copy}
            className="absolute top-2 right-2 text-xs font-sans text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 inline-flex items-center gap-1"
          >
            {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
          </button>
        </div>
      )}
    </li>
  );
}
