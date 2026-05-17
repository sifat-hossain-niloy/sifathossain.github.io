import type { Metadata } from 'next';
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { profile } from '@/content/profile';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sifathossain.github.io'),
  title: {
    default: `${profile.name} — CS Researcher & Software Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — CS Researcher & Software Engineer`,
    description: profile.tagline,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: 'Software Engineer & Researcher',
              email: profile.email,
              url: 'https://sifathossain.github.io',
              sameAs: [profile.links.github, profile.links.linkedin],
              knowsAbout: profile.interests,
              alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Dhaka' },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
