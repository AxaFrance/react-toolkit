import { src, dest } from 'gulp';
import chmod from 'gulp-chmod';

import config from './config';

const { pathSrc, pathDest, pathImgDist } = config;

const copyAssets = () => src(`${pathSrc}${pathImgDist}/**/*`)
  .pipe(chmod(777))
  .pipe(dest(`${pathDest}${pathImgDist}`));

export default copyAssets;

export const copyImages = () => src(`${pathSrc}${pathImgDist}/images/**/*`)
  .pipe(chmod(777))
  .pipe(dest(`${pathDest}${pathImgDist}/images`));
