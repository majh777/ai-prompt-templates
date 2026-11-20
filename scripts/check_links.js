// Buyer-facing link check for the published site.
// Verifies that every link/image referenced by the published pages resolves:
//   - relative links must exist in the repo (no 404s)
//   - absolute links are fetched and must return 200
// HTML comments are stripped first, so commented-out placeholders (e.g. the
// WhatsApp link) don't produce false failures.
const fs = require('fs');
const path = require('path');
const BASE = 'https://majh777.github.io/ai-prompt-templates/';
const FILES = ['index.html', 'free-templates.html', '404.html'];

function stripComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

(async () => {
  const seen = new Set();
  const problems = [];
  const rows = [];

  for (const f of FILES) {
    const html = stripComments(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'));
    const urls = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((m) => m[1]);
    for (const u of urls) {
      if (/^(#|mailto:|tel:|data:|javascript:)/i.test(u)) continue;
      const rel = u.split('#')[0].split('?')[0];
      if (!rel) continue;
      if (!/^https?:/i.test(rel)) {
        const local = path.join(__dirname, '..', rel.replace(/^\.\//, ''));
        if (!fs.existsSync(local)) {
          problems.push(f + ' -> missing local file: ' + rel);
        }
        continue;
      }
      const abs = rel;
      if (seen.has(abs)) continue;
      seen.add(abs);
      let status = 'ERR';
      try {
        const res = await fetch(abs, { redirect: 'follow' });
        status = String(res.status);
        if (res.status >= 400) problems.push(f + ' -> ' + res.status + ' ' + abs);
      } catch (e) {
        status = 'ERR';
        problems.push(f + ' -> unreachable ' + abs + ' (' + e.message + ')');
      }
      rows.push(status.padEnd(5) + abs);
    }
  }

  console.log(rows.join('\n'));
  if (problems.length) {
    console.log('\nPROBLEMS:');
    console.log(problems.join('\n'));
    process.exit(1);
  }
  console.log('\nAll links resolve.');
})();
