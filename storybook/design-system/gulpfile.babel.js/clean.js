import del from 'del';

import config from './config';
const { pathDest } = config;

const clean = () => del([`${pathDest}`]);

export default clean;
