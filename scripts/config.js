const path = require('path');

const src = 'src';
const dist = 'dist';
const packages = 'packages';
const core = 'core';
const all = 'all';
const tasks = './scripts/tasks';
const coreSrc = path.join(packages, core, src);
const coreDist = path.join(packages, core, dist);
const allSrc = path.join(packages, all, src);
const allDist = path.join(packages, all, dist);
const assets = `${coreSrc}/common`;
const bootstrap = `${coreSrc}/bootstrap`;

const autoprefixerConfig = {
  overrideBrowserslist: ['last 2 versions', '> 2%', 'IE 9'],
  cascade: false,
};

const sassConfig = {
  errLogToConsole: true,
  outputStyle: 'compressed',
  sourceMapContents: true,
  includePaths: [
    path.resolve(process.cwd(), assets),
    path.resolve(process.cwd(), bootstrap),
    path.resolve(process.cwd(), 'node_modules'),
    path.resolve(process.cwd(), `packages/all/node_modules`),
  ],
};

const cleanCssConfig = { compatibility: 'ie9' };

module.exports = {
  tasks,
  assets,
  coreSrc,
  src,
  coreDist,
  dist,
  packages,
  bootstrap,
  allDist,
  allSrc,
  all,
  core,
  sassConfig,
  cleanCssConfig,
  autoprefixerConfig,
};
