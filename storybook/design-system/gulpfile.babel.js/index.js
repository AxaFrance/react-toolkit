import { series } from 'gulp';

import clean, { cleanImages } from './clean';
import jsDev, { jsProd } from './js';
import sassDev, { sassProd } from './sass';
import pugDev, { pugProd } from './pug';
import copyAssets, { copyImages } from './copy';
import sprite from './sprite';
import serve from './serve';
import copyIconfont from './copyiconfont';

const reloadImages = series(cleanImages, copyImages);
const build = series(clean, jsProd, sassProd, sprite, pugProd, copyAssets, copyIconfont);
const dev = series(clean, jsDev, sassDev, pugDev, copyAssets, copyIconfont, serve);

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
  copyIconfont,
  reloadImages,
};
