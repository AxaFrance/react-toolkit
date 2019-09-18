import { src, dest } from 'gulp';
import config from './config';

const { pathDest, pathFontToolkit } = config;

const copyIconfont = () => src(`${pathFontToolkit}/*.{svg,eot,ttf,woff}`).pipe(dest(`${pathDest}`));

export default copyIconfont;
