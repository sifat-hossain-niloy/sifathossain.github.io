import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="mt-24 mb-10 pt-6 border-t border-ink/10 dark:border-neutral-800 font-sans text-xs text-ink-faint dark:text-neutral-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <span>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.</span>
      <span>
        <a className="link" href={profile.links.email}>{profile.email}</a>
      </span>
    </footer>
  );
}
