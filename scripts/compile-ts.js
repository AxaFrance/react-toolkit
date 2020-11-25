/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { dist, tsConfigFile } = require('./config');

function getCommand(watch, outDir) {
  const tsc = path.join(__dirname, '..', 'node_modules', '.bin', 'tsc');

  const args = [
    `-p ${tsConfigFile}`,
    `--outDir ${outDir}`,
    `--declarationDir ${outDir}`,
  ];

  if (watch) {
    args.push('-w');
  }
  return `${tsc} ${args.join(' ')}`;
}

function handleExit(code, errorCallback) {
  if (code !== 0) {
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback();
    }

    shell.exit(code);
  }
}

function tscfy(options = {}) {
  const {
    watch = false,
    silent = false,
    errorCallback,
    outDir = dist,
  } = options;

  if (!fs.existsSync(tsConfigFile)) {
    if (!silent) console.log(`No ${tsConfigFile}`);
    return;
  }

  const command = getCommand(watch, outDir);
  const { code } = shell.exec(command, { silent });

  handleExit(code, errorCallback);
}

module.exports = {
  tscfy,
};
