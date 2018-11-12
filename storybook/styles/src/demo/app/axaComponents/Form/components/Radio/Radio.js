import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import radioClassic from './radio-classic.pug';
import radioClassicError from './radio-classic-error.pug';
import radioCustom from './radio-custom.pug';
import radioCustomError from './radio-custom-error.pug';
import radioInline from './radio-inline.pug';
import radioInlineError from './radio-inline-error.pug';
import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Radio classic', cmpt: radioClassic, height: 350 },
  { title: 'Radio classic error', cmpt: radioClassicError, height: 350 },
  { title: 'Radio custom', cmpt: radioCustom, height: 150 },
  { title: 'Radio custom error', cmpt: radioCustomError, height: 150 },
  { title: 'Radio inline', cmpt: radioInline, height: 150 },
  { title: 'Radio inline error', cmpt: radioInlineError, height: 150 },
];
const styles = [axaComponents];

const Radio = () => (
  <article className="component">
    <h2 className="component__title">Radio</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height={demo.height ? demo.height : '300'} css={styles} template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Radio;
