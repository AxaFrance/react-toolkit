import { series } from 'gulp';

import clean from './clean';
import jsDev, { jsProd } from './js';
import sassDev, { sassBuild } from './sass';
import pug from './pug';
import copyImages from './copy';
import sprite from './sprite';
import serve from './serve';

const build = series(clean, jsProd, sassBuild, sprite, pug, copyImages);
const dev = series(clean, jsDev, sassDev, pug, copyImages, serve);

export default build;
export {
  dev, build, clean, jsDev, jsProd, sassBuild, sassDev, pug, copyImages, sprite,
};
