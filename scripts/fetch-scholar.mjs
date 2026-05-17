// Build-time Google Scholar fetcher.
// Reads scholarUserId from src/content/profile.ts, scrapes the public citations page,
// and writes public/scholar.json with { citations, hIndex, i10Index, updatedAt }.
// Fails gracefully — if the network call or parse fails, the badge is simply hidden.

import fs from 'node:fs';
import path from 'node:path';

const profilePath = path.join(process.cwd(), 'src', 'content', 'profile.ts');
const outPath = path.join(process.cwd(), 'public', 'scholar.json');

function extractUserId() {
  try {
    const src = fs.readFileSync(profilePath, 'utf8');
    const m = src.match(/scholarUserId:\s*['"]([^'"]+)['"]/);
    return m?.[1] || '';
  } catch {
    return '';
  }
}

async function main() {
  const userId = extractUserId();
  if (!userId) {
    console.log('[scholar] No scholarUserId set in profile.ts — skipping badge.');
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
    return;
  }
  const url = `https://scholar.google.com/citations?user=${userId}&hl=en`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const nums = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map((m) => parseInt(m[1], 10));
    if (nums.length < 6) throw new Error('Could not parse citation table');
    const data = {
      citations: nums[0],
      hIndex: nums[2],
      i10Index: nums[4],
      updatedAt: new Date().toISOString(),
    };
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
    console.log(`[scholar] Wrote ${outPath}:`, data);
  } catch (e) {
    console.warn('[scholar] Fetch failed, badge will be hidden:', e.message);
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
  }
}

main();
