import { src, dest } from 'gulp';
import chmod from 'gulp-chmod';

import config from './config';

const { pathSrc, pathDest, pathImgDist } = config;

const copyImages = () => src(`${pathSrc}${pathImgDist}/**/*`)
  .pipe(chmod(777))
  .pipe(dest(`${pathDest}${pathImgDist}`));

export default copyImages;
