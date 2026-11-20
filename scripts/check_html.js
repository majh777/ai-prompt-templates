#!/usr/bin/env node
/**
 * check_html.js — structural sanity check for the static pages.
 *
 * Why this exists: index.html once shipped with a `<script>` that was never
 * closed. Browsers then swallow every following tag as script text, so the
 * header, hero headline, price and primary CTA silently vanished from the
 * rendered page while the served HTML still "looked" fine.
 *
 * Checks:
 *   1. Every `<script>` element is closed.
 *   2. Script bodies do not contain real HTML markup (only JS string literals).
 *   3. Tag nesting is balanced (no stray close tags, nothing left open).
 *
 * Usage: node scripts/check_html.js [file.html ...]
 * Exits non-zero if any page fails.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr', 'basefont', 'frame', 'isindex',
]);

const IMPLICIT_CLOSE = new Set(['p', 'li', 'dt', 'dd', 'option', 'tr', 'td', 'th', 'thead', 'tbody']);

function checkScriptBalance(file, raw, errors) {
  const re = /<script\b[^>]*>/gi;
  let m;
  while ((m = re.exec(raw)) !== null) {
    const start = m.index;
    const line = raw.slice(0, start).split(/\r?\n/).length;
    const rest = raw.slice(start + m[0].length);
    const close = /<\/script\s*>/i.exec(rest);
    if (!close) {
      errors.push(`${file}:${line}  <script> is never closed`);
      return;
    }
    const body = rest.slice(0, close.index);
    // A script body may legitimately contain HTML *strings* (innerHTML,
    // document.write). Those always sit after JS code on the same line, e.g.
    //   promptDiv.innerHTML = '<div ...>';
    // Markup that a missing </script> has swallowed instead starts its own
    // line, so only flag tags at the start of a line.
    const bodyStart = raw.slice(0, start).split(/\r?\n/).length;
    // Mask multi-line template literals (backtick strings) so HTML inside
    // them is not mistaken for swallowed markup. Spaces keep line numbers.
    const bodyNoTemplates = body.replace(/`(?:\\.|[^`\\])*`/gs, (m) => m.replace(/[^\n]/g, ' '));
    const bodyLines = bodyNoTemplates.split(/\r?\n/);
    bodyLines.forEach((bl, i) => {
      if (/^\s*<\/?(?:div|section|header|main|footer|nav|p|h[1-6]|ul|ol|li|table|form)\b/i.test(bl)) {
        errors.push(`${file}:${bodyStart + i}  <script> body contains real HTML markup — check for a missing </script>`);
      }
    });
    re.lastIndex = start + m[0].length + close.index + close[0].length;
  }
}

function checkNesting(file, raw, errors) {
  // Blank out comments, script/style bodies and data: URIs so their contents
  // are not mistaken for markup. Masking (not stripping) keeps offsets valid.
  const masked = raw.split('');
  const blank = (a, b) => {
    for (let i = a; i < b && i < masked.length; i++) if (masked[i] !== '\n') masked[i] = ' ';
  };
  const ranges = [];
  const collect = (re) => { let m; while ((m = re.exec(raw)) !== null) ranges.push([m.index, m.index + m[0].length]); };
  collect(/<!--[\s\S]*?-->/g);
  collect(/<script\b[\s\S]*?<\/script>/gi);
  collect(/<style\b[\s\S]*?<\/style>/gi);
  collect(/(?:href|src)="data:[^"]*"/gi);
  for (const [a, b] of ranges) blank(a, b);

  const html = masked.join('');
  const stack = [];
  const lineAt = (idx) => raw.slice(0, idx).split(/\r?\n/).length;
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*?(\/?)>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    if (VOID.has(tag) || m[3] === '/') continue;
    if (!closing) {
      stack.push({ tag, line: lineAt(m.index) });
      continue;
    }
    const idx = stack.map((e) => e.tag).lastIndexOf(tag);
    if (idx === -1) {
      errors.push(`${file}:${lineAt(m.index)}  stray </${tag}>`);
      continue;
    }
    // Anything opened inside the matched element was left unclosed.
    for (const dropped of stack.slice(idx + 1)) {
      errors.push(`${file}:${dropped.line}  <${dropped.tag}> is never closed (closed implicitly by </${tag}> at line ${lineAt(m.index)})`);
    }
    stack.length = idx;
  }
  for (const open of stack) {
    errors.push(`${file}:${open.line}  <${open.tag}> is never closed`);
  }
}

const defaults = ['index.html', 'free-templates.html', '404.html'];
const files = process.argv.slice(2).length ? process.argv.slice(2) : defaults;
const root = path.resolve(__dirname, '..');
let failed = false;

for (const rel of files) {
  const file = path.resolve(process.cwd(), rel);
  if (!fs.existsSync(file)) {
    console.log(`  ${rel}: NOT FOUND (skipped)`);
    continue;
  }
  const raw = fs.readFileSync(file, 'utf8');
  const errors = [];
  checkScriptBalance(rel, raw, errors);
  checkNesting(rel, raw, errors);
  if (errors.length) {
    failed = true;
    console.log(`  ${rel}: ${errors.length} problem(s)`);
    for (const e of errors) console.log(`     - ${e}`);
  } else {
    console.log(`  ${rel}: OK`);
  }
}

if (failed) {
  console.log('\nHTML structure check FAILED');
  process.exit(1);
}
console.log('\nHTML structure check passed');
