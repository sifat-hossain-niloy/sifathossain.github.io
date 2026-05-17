import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let data;
  try {
    data = getPostBySlug(slug);
  } catch {
    notFound();
  }
  const { content, meta } = data!;
  return (
    <article className="pt-10">
      <Link href="/blog" className="font-sans text-xs text-ink-faint dark:text-neutral-500 hover:text-ink dark:hover:text-neutral-100">← all posts</Link>
      <h1 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight">{meta.title}</h1>
      <time className="mt-2 block font-mono text-xs text-ink-faint dark:text-neutral-500">
        {new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <div className="prose dark:prose-invert mt-10 font-serif">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
        />
      </div>
    </article>
  );
}
