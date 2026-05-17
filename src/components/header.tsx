import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { profile } from '@/content/profile';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Anchor links go to /#section (must include the slash before the hash so the
// browser resolves to home/index.html and then scrolls). Real page links use <Link>.
const anchors = [
  { href: `${base}/#about`, label: 'About' },
  { href: `${base}/#experience`, label: 'Experience' },
  { href: `${base}/#projects`, label: 'Projects' },
];

const pages = [
  { href: '/publications', label: 'Publications' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 md:py-8 border-b border-ink/10 dark:border-neutral-800">
      <Link href="/" className="font-serif font-semibold text-lg tracking-tight">
        {profile.shortName}
      </Link>
      <nav className="flex items-center gap-5 text-sm font-sans">
        <a
          href={anchors[0].href}
          className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
        >
          {anchors[0].label}
        </a>
        <Link
          href="/publications"
          className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
        >
          Publications
        </Link>
        <a
          href={anchors[1].href}
          className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
        >
          {anchors[1].label}
        </a>
        <a
          href={anchors[2].href}
          className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
        >
          {anchors[2].label}
        </a>
        <Link
          href="/blog"
          className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
        >
          Blog
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
