import React from 'react';
import Markdown from '../Markdown/Markdown';

// eslint-disable-next-line import/no-webpack-loader-syntax
const md = require('raw-loader!./../../../../../CONTRIBUTING.md');

const Contribution = () => (
  <div className="component">
    <Markdown data={md} />
  </div>
);

export default Contribution;
