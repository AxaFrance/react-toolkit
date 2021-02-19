/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { src, dist } = require('./config');

function getCommand(watch, outDir) {
  const babel = path.join(__dirname, '..', 'node_modules', '.bin', 'babel');

  const args = [
    '--root-mode upward',
    src,
    `--out-dir ${outDir}`,
    '--source-maps true',
    '--extensions ".js,.ts,.tsx"',
    '--ignore "**/*.spec.js,**/*.spec.ts,**/*.spec.tsx,**/*.stories.js,**/*.stories.ts,**/*.stories.tsx"',
  ];

  if (watch) {
    args.push('-w');
  }

  return `${babel} ${args.join(' ')}`;
}

function handleExit(code, errorCallback) {
  if (code !== 0) {
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback();
    }

    shell.exit(code);
  }
}

function babelify(options = {}) {
  const {
    watch = false,
    silent = false,
    errorCallback,
    outDir = dist,
  } = options;

  if (!fs.existsSync('src')) {
    if (!silent) console.log('No src dir');
    return;
  }

  const command = getCommand(watch, outDir);
  const { code } = shell.exec(command, { silent });

  handleExit(code, errorCallback);
}

module.exports = {
  babelify,
};
