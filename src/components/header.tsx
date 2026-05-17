import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { profile } from '@/content/profile';

const nav = [
  { href: '/#about', label: 'About' },
  { href: '/publications', label: 'Publications' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 md:py-8 border-b border-ink/10 dark:border-neutral-800">
      <Link href="/" className="font-serif font-semibold text-lg tracking-tight">
        {profile.shortName}
      </Link>
      <nav className="flex items-center gap-5 text-sm font-sans">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 transition"
          >
            {n.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
