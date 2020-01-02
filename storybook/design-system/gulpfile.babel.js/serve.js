import { watch, series } from 'gulp';
import { create } from 'browser-sync';
import sass from './sass';
import js from './js';
import pug from './pug';
import sprite from './sprite';
import { reloadImages } from '.';
import config from './config';

const browserSync = create();
export const { reload, notify } = browserSync;

const {
  pathDest,
  pathSrc,
  sassFiles,
  jsFiles,
  pugWatchFiles,
  jsonPageFiles,
  jsonFiles,
  svgFiles,
  pathImgFiles,
  imgFiles,
  pathSvg,
} = config;

const initBrowserSync = () => browserSync.init({
  port: 5001,
  server: {
    watch: true,
    baseDir: pathDest,
  },
});

const serve = () => {
  initBrowserSync();

  watch([`${pathSrc}${sassFiles}`], series(sass));
  watch([`${pathSrc}${jsFiles}`], series(js));
  watch(
    [
      `${pathSrc}${pugWatchFiles}`,
      `${pathSrc}${jsonFiles}`,
      `${pathSrc}${jsonPageFiles}`,
      `${pathSrc}/pages/**/*.pug`,
      `${pathSrc}/pages/**/*.md`,
      `${pathSrc}/pages/**/*.json`,
    ],
    series(pug),
  );
  watch([`${pathSrc}${pathSvg}${svgFiles}`], series(sprite));
  watch([`${pathSrc}${pathImgFiles}${imgFiles}`], series(reloadImages));
};

export default serve;
