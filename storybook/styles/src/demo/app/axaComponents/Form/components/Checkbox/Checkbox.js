import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import checkboxClassic from './checkbox-classic.pug';
import checkboxClassicError from './checkbox-classic-error.pug';
import checkboxCustom from './checkbox-custom.pug';
import checkboxCustomError from './checkbox-custom-error.pug';
import checkboxInline from './checkbox-inline.pug';
import checkboxInlineError from './checkbox-inline-error.pug';
import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Checkbox classic', cmpt: checkboxClassic, height: 350 },
  { title: 'Checkbox classic error', cmpt: checkboxClassicError, height: 350 },
  { title: 'Checkbox custom', cmpt: checkboxCustom, height: 150 },
  { title: 'Checkbox custom error', cmpt: checkboxCustomError, height: 150 },
  { title: 'Checkbox inline', cmpt: checkboxInline, height: 150 },
  { title: 'Checkbox inline error', cmpt: checkboxInlineError, height: 150 },
];
const styles = [axaComponents];

const Checkbox = () => (
  <article className="component">
    <h2 className="component__title">Checkbox</h2>
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

export default Checkbox;
