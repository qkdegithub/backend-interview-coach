#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const PKG_DIR = __dirname;
const SKILL_NAME = 'backend-interview-coach';

const targets = {
  hermes: path.join(os.homedir(), '.hermes', 'skills', 'software-development', SKILL_NAME),
  claude: path.join(process.cwd(), '.claude', 'skills', SKILL_NAME),
  codex: path.join(process.cwd(), '.codex', 'skills', SKILL_NAME),
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install(target) {
  const dest = targets[target];
  if (!dest) {
    console.error(`Unknown target: ${target}. Use: hermes, claude, codex`);
    process.exit(1);
  }

  fs.mkdirSync(dest, { recursive: true });

  // Copy SKILL.md
  fs.copyFileSync(path.join(PKG_DIR, 'SKILL.md'), path.join(dest, 'SKILL.md'));

  // Copy agents/
  if (fs.existsSync(path.join(PKG_DIR, 'agents'))) {
    copyDir(path.join(PKG_DIR, 'agents'), path.join(dest, 'agents'));
  }

  // Copy references/
  if (fs.existsSync(path.join(PKG_DIR, 'references'))) {
    copyDir(path.join(PKG_DIR, 'references'), path.join(dest, 'references'));
  }

  console.log(`Installed ${SKILL_NAME} → ${dest}`);
}

const target = process.argv[2] || 'hermes';

if (target === 'all') {
  for (const t of Object.keys(targets)) install(t);
} else {
  install(target);
}
