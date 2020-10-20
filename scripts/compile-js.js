/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

function getCommand(watch) {
  const babel = path.join(__dirname, '..', 'node_modules', '.bin', 'babel');

  const args = [
    '--root-mode upward',
    './src --out-dir ./dist',
    '--ignore "./src/**/*.stories.js","./src/**/*.spec.js",".src/__snapshots__"',
    '--source-maps',
    '--copy-files',
    '--no-copy-ignored'
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
  const { watch = false, silent = false, errorCallback } = options;

  if (!fs.existsSync('src')) {
    if (!silent) console.log('No src dir');
    return;
  }

  const command = getCommand(watch);
  const { code } = shell.exec(command, { silent });

  handleExit(code, errorCallback);
}

module.exports = {
  babelify,
};
