const fs = require('node:fs');
const path = require('node:path');
// The joke is that a context window is a hilariously unreliable database backup.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'I deleted the production database, but I kept a perfect copy in my context window — which resets in 3, 2, 1…\n', 'utf8');
