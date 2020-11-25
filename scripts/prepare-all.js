/* eslint-disable no-console */
require('shelljs');
const chalk = require('chalk');
const { getPackageJson, compile, copyLicence } = require('./prepare-common');
const { componentDistAll } = require('./config');

const packageJson = getPackageJson();

compile(packageJson, componentDistAll);

copyLicence();

console.log(
  chalk.gray(
    `Built: ${chalk.bold(`${packageJson.name}@${packageJson.version}`)}`
  )
);
