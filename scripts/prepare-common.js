/* eslint-disable no-console */
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const log = require('npmlog');
const fs = require('fs');
const { babelify } = require('./compile-js');
const { tscfy } = require('./compile-ts');

const getPackageJson = () => {
  const modulePath = path.resolve('./');
  // eslint-disable-next-line global-require,import/no-dynamic-require
  return require(path.join(modulePath, 'package.json'));
};

const copyLicence = () => {
  const licence = path.join(__dirname, '..', 'LICENSE');
  shell.cp(licence, './');
};

const logError = (type, packageJson) => {
  log.error(
    `FAILED to compile ${type}: ${chalk.bold(
      `${packageJson.name}@${packageJson.version}`
    )}`
  );
};

const copyReadmeToDist = () => {
  const modulePath = path.resolve('./');
  const readmePath = path.join(modulePath, 'README.md');
  if (fs.existsSync(readmePath)) {
    shell.cp(readmePath, path.join(modulePath, 'dist'));
  }
};

const compile = (packageJson, outDir) => {
  const hasTypescript = shell.find('src').some((it) => it.match(/\.tsx?$/));

  if (hasTypescript) {
    tscfy({ outDir, errorCallback: () => logError('ts', packageJson) });
  } else {
    babelify({ outDir, errorCallback: () => logError('js', packageJson) });
  }
};

module.exports = {
  compile,
  copyLicence,
  copyReadmeToDist,
  logError,
  getPackageJson,
};
