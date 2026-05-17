import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = { title: 'Blog & Notes' };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <article className="pt-10">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">Blog & Notes</h1>
      <p className="mt-3 font-sans text-sm text-ink-muted dark:text-neutral-400 max-w-xl">
        Occasional notes on LLMs, autonomous software engineering, research engineering, and things I&apos;m learning.
      </p>
      <ul className="mt-10 space-y-6">
        {posts.length === 0 && (
          <li className="font-sans text-sm text-ink-faint dark:text-neutral-500">
            No posts yet. The first one is coming soon.
          </li>
        )}
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-ink/10 dark:border-neutral-800 pb-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <Link href={`/blog/${p.slug}`} className="font-serif text-lg font-semibold hover:text-accent dark:hover:text-accent-dark transition">
                {p.title}
              </Link>
              <time className="font-mono text-xs text-ink-faint dark:text-neutral-500">
                {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
            </div>
            {p.description && (
              <p className="mt-1.5 text-[15px] text-ink-muted dark:text-neutral-400">{p.description}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
