import { src, dest } from 'gulp';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';

import config from './config';

const { pathSrc, pathDest, pathImgDist } = config;

const images = () => src(`${pathSrc}${pathImgDist}/**/*`)
  .pipe(
    cache(
      imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [{ removeViewBox: false }],
      }),
    ),
  )
  .pipe(dest(`${pathDest}${pathImgDist}`));

export default images;
