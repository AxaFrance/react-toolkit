import React from 'react';
import axaComponents from './axa-components.scss';
import template from './colors.pug';
import Iframe from '../../components/Iframe/Iframe';

const Colors = () => (
  <article className="component">
    <h2 className="component__title">Colors</h2>
    <Iframe height={800} css={[axaComponents]} template={template} />
  </article>
);

export default Colors;
