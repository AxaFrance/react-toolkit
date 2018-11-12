import React from 'react';
import Markdown from '../Markdown/Markdown';

// eslint-disable-next-line import/no-webpack-loader-syntax
const md = require('raw-loader!./../../../../../GET_STARTED.md');

const Getstarted = () => (
  <div className="component">
    <Markdown data={md} />
  </div>
);

export default Getstarted;
