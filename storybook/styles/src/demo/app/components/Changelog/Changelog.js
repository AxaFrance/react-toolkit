import React from 'react';
import Markdown from '../Markdown/Markdown';

// eslint-disable-next-line import/no-webpack-loader-syntax
const md = require('raw-loader!./../../../../../CHANGELOG.md');

const Changelog = () => (
  <div className="component">
    <Markdown data={md} />
  </div>
);

export default Changelog;
