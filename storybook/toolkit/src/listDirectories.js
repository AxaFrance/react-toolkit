const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const filterDirectories = directories =>
  directories.filter(dir => !dir.name.includes('-'));

const sortDirectories = directories =>
  directories.sort((a, b) => {
    const aName = a.name;
    const bName = b.name;
    const aSum = aName.replace(/\./g, '');
    const bSum = bName.replace(/\./g, '');
    const result = aSum < bSum ? 1 : -1;
    return result;
  });

const getDirectories = source =>
  readdirSync(source)
    .map(name => {
      const nameTrimed = name.trim();
      return { source: join(source, nameTrimed), name: nameTrimed };
    })
    .filter(info => isDirectory(info.source));

const isDirectory = source => lstatSync(source).isDirectory();

const listDirectories = () => {
  const directories = getDirectories('./public');
  return sortDirectories(directories);
};

exports.sortDirectories = sortDirectories;
exports.listDirectories = listDirectories;
exports.filterDirectories = filterDirectories;
