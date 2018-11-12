import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';

import inputSelect from './input-select.pug';
import inputSelectError from './input-select-error.pug';
import inputSelectSuccess from './input-select-success.pug';
import inputSelectDisabled from './input-select-disabled.pug';
import inputInlineSelect from './input-select-inline.pug';
import inputInlineSelectError from './input-select-inline-error.pug';
import inputInlineSelectSuccess from './input-select-inline-success.pug';

import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Input select classic', cmpt: inputSelect, height: 200 },
  { title: 'Input select success', cmpt: inputSelectSuccess, height: 200 },
  { title: 'Input select error', cmpt: inputSelectError, height: 200 },
  { title: 'Input select disabled', cmpt: inputSelectDisabled, height: 200 },
  { title: 'Input select inline', cmpt: inputInlineSelect, height: 200 },
  { title: 'Input select inline error', cmpt: inputInlineSelectError, height: 200 },
  { title: 'Input select inline success', cmpt: inputInlineSelectSuccess, height: 200 },
];
const styles = [axaComponents];

const Select = () => (
  <article className="component">
    <h2 className="component__title">Input Select</h2>
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

export default Select;
