import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';

import inputTextarea from './input-textarea.pug';
import inputTextareaDisabled from './input-textarea-disabled.pug';
import inputTextareaSuccess from './input-textarea-success.pug';
import inputTextareaError from './input-textarea-error.pug';

import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Input Textarea classic', cmpt: inputTextarea, height: 200 },
  { title: 'Input Textarea success', cmpt: inputTextareaSuccess, height: 200 },
  { title: 'Input Textarea error', cmpt: inputTextareaError, height: 200 },
  { title: 'Input Textarea disabled', cmpt: inputTextareaDisabled, height: 200 },
];
const styles = [axaComponents];

const Textarea = () => (
  <article className="component">
    <h2 className="component__title">Input Text</h2>
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

export default Textarea;
