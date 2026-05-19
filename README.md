# sifathossain.github.io - academic portfolio

Personal academic portfolio for **Md Sifat Hossain** - built with Next.js 15 (static export), Tailwind CSS, and MDX. Deployed for free via GitHub Pages, with an upgrade path to a custom domain like `sifathossain.com`.

## Stack

- Next.js 15 (App Router, `output: 'export'`)
- TypeScript + Tailwind CSS + `@tailwindcss/typography`
- MDX blog (`content/blog/*.mdx`) via `next-mdx-remote`
- `next-themes` for light/dark mode
- Build-time Google Scholar scraper (`scripts/fetch-scholar.mjs`) - refreshes daily on a cron in CI

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

To produce the static site that GitHub Pages will serve:

```bash
npm run build
# output goes to ./out
```

## Deploy: Option A - free, on `https://sifathossain.github.io`

This is the **recommended starting point**.

1. Create a new public repository on GitHub **named exactly** `sifathossain.github.io` (this triggers user-site routing - no base path needed).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin git@github.com:sifathossain/sifathossain.github.io.git
   git push -u origin main
   ```
3. On GitHub → **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.
5. Your site is live at **https://sifathossain.github.io** within a minute or two.

> If you ever fork this into a repo with a **different name** (e.g. `portfolio`), edit the workflow and set `NEXT_PUBLIC_BASE_PATH: '/portfolio'`.

## Deploy: Option B - custom domain `sifathossain.com` (~$10/year)

Recommended before PhD application season - `me@sifathossain.com` looks great on application forms.

1. Buy the domain on **Cloudflare Registrar** (at-cost, no markup) or Namecheap.
2. Add a file `public/CNAME` containing exactly one line:
   ```
   sifathossain.com
   ```
3. Commit and push - the workflow will publish the CNAME with your site.
4. In your DNS provider, add records pointing to GitHub Pages:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `sifathossain.github.io.`
5. On GitHub → **Settings → Pages**, enter `sifathossain.com` as the custom domain and tick **Enforce HTTPS** once the certificate is issued (usually 5-30 min).
6. Set up an email forward on Cloudflare (free) - e.g. `me@sifathossain.com` → your Gmail.

## Editing content

All site content lives in plain TypeScript files - no CMS, no database.

| Section | File |
| --- | --- |
| Name, tagline, links, research interests | `src/content/profile.ts` |
| Publications (title, authors, BibTeX, abstract) | `src/content/publications.ts` |
| Research & industry experience | `src/content/experience.ts` |
| Projects, education, achievements, skills | `src/content/projects.ts` |
| Blog posts | `content/blog/*.mdx` |
| CV PDFs | `public/Resume_of_Md_Sifat_Hossain*.pdf` |

### Enabling the Google Scholar badge

1. Create your Google Scholar profile and make it public.
2. Copy the user id from the URL - it is the value after `user=` in `https://scholar.google.com/citations?user=XXXXXXXXX`.
3. Paste it into `scholarUserId` inside `src/content/profile.ts`.
4. Commit and push. The daily cron in `deploy.yml` will refresh citations automatically; if scraping ever fails, the badge is hidden silently.

## URL strategy (the short version)

- **Day 1:** `https://sifathossain.github.io` (free, professional, the academic standard).
- **Before PhD applications:** add `sifathossain.com` on top (~$10/yr) without rebuilding anything - just DNS + a `CNAME` file.
- Use `sifathossain@<domain>` or `me@<domain>` as your application contact email.
