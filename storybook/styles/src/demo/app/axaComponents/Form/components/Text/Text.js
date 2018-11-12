import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';

import inputText from './input-text.pug';
import inputTextBulle from './input-text-bulle.pug';
import inputTextBulleError from './input-text-bulle-error.pug';
import inputTextBulleSuccess from './input-text-bulle-success.pug';
import inputTextDisabled from './input-text-disabled.pug';
import inputTextSuccess from './input-text-success.pug';
import inputTextError from './input-text-error.pug';
import inputWithClear from './input-text-clear.pug';
import inputWithClearError from './input-text-clear-error.pug';

import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Input text classic', cmpt: inputText, height: 200 },
  { title: 'Input text success', cmpt: inputTextSuccess, height: 200 },
  { title: 'Input text error', cmpt: inputTextError, height: 200 },
  { title: 'Input text error with info bulle', cmpt: inputTextBulleError, height: 200 },
  { title: 'Input text success with info bulle', cmpt: inputTextBulleSuccess, height: 200 },
  { title: 'Input text with info bulle', cmpt: inputTextBulle, height: 200 },
  { title: 'Input text disabled', cmpt: inputTextDisabled, height: 200 },
  { title: 'Input text with clear', cmpt: inputWithClear, height: 200 },
  { title: 'Input text error with clear', cmpt: inputWithClearError, height: 200 },
];
const styles = [axaComponents];

const Text = () => (
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

export default Text;
