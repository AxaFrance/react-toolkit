import del from 'del';

import config from './config';

const { pathDest, pathImg } = config;

const clean = () => del([`${pathDest}`]);

export default clean;

export const cleanImages = () => del([`${pathDest}/${pathImg}`]);
