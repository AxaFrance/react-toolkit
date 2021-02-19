const chalk = require('chalk');
const find = require('find');
const rimraf = require('rimraf');

const { packages, dist, allPackage, componentDistAll } = require('./config');

const log = (prefix, message, inverse) => {
  const darkGray = '#111111';
  const yellow = '#e8be00';
  const blue = '#0c93f2';
  if (inverse) {
    console.log(
      chalk.hex(blue).bgHex(darkGray)(` ${prefix} `),
      chalk.hex(yellow).bgHex(darkGray)(` ${message} `)
    );
  } else {
    console.log(
      chalk.hex(darkGray).bgHex(blue)(` ${prefix} `),
      chalk.hex(darkGray).bgHex(yellow)(` ${message} `)
    );
  }
};

const logStart = (prefix, inverse = false) => log(prefix, 'Starting', inverse);
const logFinished = (prefix, inverse = false) =>
  log(prefix, 'Finished', inverse);

/**************************************************************************** */
/* Compile SCSS files to CSS files for packages except Core and All package   */
/**************************************************************************** */

const getDistFolders = () => {
  try {
    const distExceptAll = find
      .dirSync(new RegExp(dist, 'g'), packages)
      .filter(
        (dirPath) => !dirPath.includes('node_modules') && dirPath.endsWith(dist)
      );
    const distComponentAll = find
      .dirSync(new RegExp(componentDistAll, 'g'), allPackage)
      .filter(
        (dirPath) =>
          !dirPath.includes('node_modules') &&
          dirPath.endsWith(componentDistAll)
      );
    return [].concat(distExceptAll, distComponentAll);
  } catch (err) {
    console.error(err);
  }
};

/**************************************************************************** */
/* Main                                                                       */
/**************************************************************************** */
try {
  logStart('Clean all dist');
  const allDistFolders = getDistFolders() || [];
  console.log('Folders to remove: ', allDistFolders);
  allDistFolders.map((distFolder) => rimraf.sync(distFolder));
} catch (err) {
  console.error(err);
} finally {
  logFinished('Clean all dist');
}
