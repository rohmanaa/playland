const fs = require('fs');
const path = require('path');
const vm = require('vm');

const GAMES_DIR = path.join(__dirname, 'games');

function getHtmlFiles(dir) {
  const files = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.html') && !entry.name.endsWith('.old.html')) {
        files.push(full);
      }
    }
  }
  walk(dir);
  return files;
}

function extractInlineScripts(html) {
  const scripts = [];
  const regex = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const scriptTag = match[0];
    const content = match[1];
    // Skip if has src attribute
    if (/\bsrc\s*=/i.test(scriptTag)) continue;
    // Skip if type="module" or importmap
    if (/\btype\s*=\s*["']module["']/i.test(scriptTag)) continue;
    if (/\btype\s*=\s*["']importmap["']/i.test(scriptTag)) continue;
    // Only process type="" or type="text/javascript" or no type
    const typeMatch = scriptTag.match(/\btype\s*=\s*["']([^"']*)["']/i);
    if (typeMatch && typeMatch[1] && typeMatch[1] !== 'text/javascript') continue;
    scripts.push({ content, tagStart: match.index, tagEnd: match.index + match[0].length });
  }
  return scripts;
}

function getLineNumber(html, index) {
  return html.substring(0, index).split('\n').length;
}

const files = getHtmlFiles(GAMES_DIR);
console.log(`Total files: ${files.length}`);
console.log('');

let totalScripts = 0;
let totalOk = 0;
let totalErrors = 0;

for (const file of files) {
  const rel = path.relative(GAMES_DIR, file);
  const html = fs.readFileSync(file, 'utf8');
  const scripts = extractInlineScripts(html);
  let fileOk = 0;
  let fileErrors = 0;
  const errors = [];

  for (let i = 0; i < scripts.length; i++) {
    const { content, tagStart } = scripts[i];
    const line = getLineNumber(html, tagStart);
    try {
      // Use vm.Script to check syntax without executing
      new vm.Script(content, { filename: rel + `:script${i+1} (line ${line})` });
      fileOk++;
    } catch (e) {
      fileErrors++;
      errors.push(`  Script ${i+1} (line ~${line}): ${e.message.split('\n')[0]}`);
    }
  }

  totalScripts += scripts.length;
  totalOk += fileOk;
  totalErrors += fileErrors;

  if (fileErrors > 0) {
    console.log(`${rel} | scripts: ${scripts.length} | ERROR (${fileErrors})`);
    for (const err of errors) console.log(err);
  } else {
    console.log(`${rel} | scripts: ${scripts.length} | OK`);
  }
}

console.log('');
console.log(`Total: ${files.length} files, ${totalScripts} script blocks, ${totalOk} OK, ${totalErrors} ERROR`);
process.exit(totalErrors > 0 ? 1 : 0);