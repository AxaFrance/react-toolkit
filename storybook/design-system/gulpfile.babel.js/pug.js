import { src, dest } from 'gulp';
import pugg from 'pug';
import pretty from 'pretty';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import fs from 'fs';
import fetch from 'node-fetch';
import { reload } from './serve';
import config from './config';
import setClass from '../src/commons/js/setClass';
import setClassActive from '../src/commons/js/setClassActive';

global.fetch = fetch;

const { pathSrc, pathDest } = config;

const basedir = './';
const baseData = './src/data/';
const getFileData = fileName => JSON.parse(fs.readFileSync(`${baseData}${fileName}.json`));

const pugTsk = () => {
  const base = getFileData('base');
  const general = getFileData('general');
  const menu = getFileData('menu');

  const data = {
    base,
    general,
    menu,
    basedir,
    functions: { setClass, setClassActive, pugg, pretty },
    require,
  };

  return src([`${pathSrc}/index.pug`, `${pathSrc}/pages/**/*.pug`])
    .pipe(plumber())
    .pipe(
      pug({
        locals: data,
        //debug: true,
        //compileDebug: true,
        //pretty: true,
      }),
    )
    .pipe(dest(pathDest))
    .pipe(reload({ stream: true }));
};

export default pugTsk;
