import { series } from 'gulp';

import clean, { cleanImages } from './clean';
import jsDev, { jsProd } from './js';
import sassDev, { sassProd } from './sass';
import pugDev, { pugProd } from './pug';
import copyAssets, { copyImages } from './copy';
import sprite from './sprite';
import serve from './serve';
import copyIcons, { generatePugIcons } from './copyIcons';
import generateGithubInfos from './generateGithubInfos';
import generateContributors from './generateContributors';

const reloadImages = series(cleanImages, copyImages);
const build = series(
  clean,
  generateContributors,
  copyIcons,
  generateGithubInfos,
  generatePugIcons,
  jsProd,
  sassProd,
  sprite,
  pugProd,
  copyAssets,
);

const dev = series(
  clean,
  generateContributors,
  copyIcons,
  generateGithubInfos,
  generatePugIcons,
  jsDev,
  sassDev,
  pugDev,
  copyAssets,
  serve,
);

export default build;
export {
  dev,
  build,
  clean,
  jsDev,
  jsProd,
  sassProd,
  sassDev,
  pugDev,
  pugProd,
  copyAssets,
  sprite,
  copyIcons,
  generatePugIcons,
  reloadImages,
};
