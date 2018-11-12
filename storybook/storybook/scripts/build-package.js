/* eslint-disable no-console */
const fs = require('fs');
const packages = require('../package.json');
const fsExtra = require('fs-extra');

console.log('Build toolkit static');

function copyFolderRecursiveSync(source, target) {
  console.log(`copy ${source} to ${target}`);
  // check if folder needs to be created or integrated
  // const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(target)) {
    console.log(`mkdir ${target}`);
    fsExtra.ensureDirSync(target);
  }
  fsExtra.copySync(source, target);
}

function deleteFolderRecursive(folderPath) {
  console.log(`delete ${folderPath}`);
  retry(() => fsExtra.removeSync(folderPath));
}

function retry(func) {
  try {
    func();
  } catch (error) {
    console.log(error);
    func();
  }
}

deleteFolderRecursive(`./../toolkit/public/${packages.version}`);
copyFolderRecursiveSync(
  `${process.cwd()}/storybook-static`,
  `${process.cwd()}/../toolkit/public/${packages.version}`
);
