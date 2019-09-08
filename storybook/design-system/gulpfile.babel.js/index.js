import { series } from 'gulp';

import clean from './clean';
import jsDev, { jsProd } from './js';
import sassDev, { sassProd } from './sass';
import pugDev, { pugProd } from './pug';
import copyImages from './copy';
import sprite from './sprite';
import serve from './serve';
import copyIconfont from './copyiconfont';

const build = series(clean, jsProd, sassProd, sprite, pugProd, copyImages, copyIconfont);
const dev = series(clean, jsDev, sassDev, pugDev, copyImages, copyIconfont, serve);

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
  copyImages,
  sprite,
  copyIconfont,
};
