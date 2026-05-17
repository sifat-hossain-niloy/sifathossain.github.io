import Link from 'next/link';
import { profile, bio } from '@/content/profile';
import { publications } from '@/content/publications';
import { research, industry } from '@/content/experience';
import { projects, education, achievements, skills } from '@/content/projects';
import { PublicationItem } from '@/components/publication-item';
import { ScholarBadge } from '@/components/scholar-badge';
import { asset } from '@/lib/path';
import { Mail, Github, Linkedin, GraduationCap, FileText } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-10 md:pt-14">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-ink dark:text-neutral-100">
          {profile.name}
        </h1>
        <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-ink-muted dark:text-neutral-300 max-w-2xl">
          {profile.tagline}
        </p>
        <p className="mt-3 text-sm font-sans text-accent dark:text-accent-dark">
          {profile.status}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm">
          <a className="link inline-flex items-center gap-1.5" href={profile.links.email}><Mail size={14} /> Email</a>
          <a className="link inline-flex items-center gap-1.5" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
          <a className="link inline-flex items-center gap-1.5" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
          {profile.scholarUserId && (
            <a className="link inline-flex items-center gap-1.5" href={`https://scholar.google.com/citations?user=${profile.scholarUserId}`} target="_blank" rel="noreferrer"><GraduationCap size={14} /> Scholar</a>
          )}
          <a className="link inline-flex items-center gap-1.5" href={asset('/Resume_of_Md_Sifat_Hossain__Research_.pdf')} target="_blank" rel="noreferrer"><FileText size={14} /> CV (PDF)</a>
        </div>
        <div className="mt-6"><ScholarBadge /></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <h2 className="section-title">About</h2>
        <div className="space-y-4 text-[16px] leading-relaxed text-ink dark:text-neutral-200">
          {bio.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-6">
          <div className="subhead mb-3">Research interests</div>
          <ul className="flex flex-wrap gap-2">
            {profile.interests.map((t) => <li key={t} className="chip">{t}</li>)}
          </ul>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="scroll-mt-24">
        <h2 className="section-title">Publications</h2>
        <p className="font-sans text-sm text-ink-faint dark:text-neutral-500 mb-6">
          * denotes equal contribution. See the <Link href="/publications" className="link">publications page</Link> for full details and BibTeX.
        </p>
        <ol className="ref-list">
          {publications.map((p, i) => <PublicationItem key={p.id} pub={p} index={i} />)}
        </ol>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24">
        <h2 className="section-title">Research Experience</h2>
        <ExperienceList roles={research} />

        <h2 className="section-title">Industry Experience</h2>
        <ExperienceList roles={industry} />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="section-title">Projects</h2>
        <div className="subhead mb-4">Research & data</div>
        <ProjectList items={projects.filter(p => p.kind === 'research')} />
        <div className="subhead mt-10 mb-4">Software</div>
        <ProjectList items={projects.filter(p => p.kind === 'software')} />
      </section>

      {/* EDUCATION */}
      <section id="education" className="scroll-mt-24">
        <h2 className="section-title">Education</h2>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-serif text-lg font-semibold">{education.school}</h3>
            <span className="font-sans text-sm text-ink-faint dark:text-neutral-500">{education.start} – {education.end}</span>
          </div>
          <p className="font-sans text-sm text-ink-muted dark:text-neutral-400 mt-1">{education.degree} · CGPA {education.cgpa}</p>
          <div className="mt-4 border-l-2 border-ink/10 dark:border-neutral-700 pl-4">
            <div className="subhead mb-1">Undergraduate Thesis</div>
            <p className="font-serif italic">{education.thesis.title}</p>
            <p className="text-[15px] leading-relaxed text-ink-muted dark:text-neutral-400 mt-2">{education.thesis.abstract}</p>
          </div>
          <div className="mt-5">
            <div className="subhead mb-2">Relevant coursework</div>
            <ul className="flex flex-wrap gap-2">
              {education.coursework.map((c) => <li key={c} className="chip">{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="scroll-mt-24">
        <h2 className="section-title">Achievements</h2>
        <div className="subhead mb-3">Honors</div>
        <ul className="space-y-2 mb-8">
          {achievements.honors.map((h) => (
            <li key={h.title} className="text-[15px]">
              <span className="font-semibold">{h.title}</span>
              <span className="text-ink-muted dark:text-neutral-400"> — {h.detail}</span>
            </li>
          ))}
        </ul>
        <div className="subhead mb-3">Competitive programming</div>
        <ul className="space-y-2">
          {achievements.competitive.map((h) => (
            <li key={h.title} className="text-[15px]">
              <span className="font-semibold">{h.title}</span>
              <span className="text-ink-muted dark:text-neutral-400"> — {h.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24">
        <h2 className="section-title">Technical Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
              <div className="subhead">{k}</div>
              <ul className="flex flex-wrap gap-2">
                {v.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <h2 className="section-title">Contact</h2>
        <p className="text-[16px] leading-relaxed">
          The fastest way to reach me is by email at{' '}
          <a className="link" href={profile.links.email}>{profile.email}</a>.
          I am currently applying for PhD positions for <strong>Fall 2027</strong>; I would be happy to discuss research fit or share my CV, thesis, and code on request.
        </p>
      </section>
    </>
  );
}

function ExperienceList({ roles }: { roles: typeof research }) {
  return (
    <div className="space-y-10">
      {roles.map((r) => (
        <article key={r.org + r.title}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-serif text-lg font-semibold text-ink dark:text-neutral-100">
              {r.title} <span className="text-ink-muted dark:text-neutral-400 font-normal">· {r.org}</span>
            </h3>
            <span className="font-sans text-sm text-ink-faint dark:text-neutral-500 whitespace-nowrap">
              {r.start} – {r.end}
            </span>
          </div>
          <p className="font-sans text-xs text-ink-faint dark:text-neutral-500 mt-0.5">{r.location}</p>
          {r.supervisor && (
            <p className="font-sans text-sm text-ink-muted dark:text-neutral-400 mt-2 italic">
              Supervisor: {r.supervisor}
            </p>
          )}
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
            {r.bullets.map((b, i) => (
              <li key={i} className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint">
                {b}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function ProjectList({ items }: { items: typeof projects }) {
  return (
    <div className="space-y-6">
      {items.map((p) => (
        <article key={p.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-serif text-base font-semibold">{p.name}</h3>
            <span className="font-mono text-xs text-ink-faint dark:text-neutral-500">{p.stack}</span>
          </div>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted dark:text-neutral-300">{p.description}</p>
        </article>
      ))}
    </div>
  );
}
