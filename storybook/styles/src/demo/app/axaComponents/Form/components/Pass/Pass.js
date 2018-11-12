import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import passInput from './input-password.pug';
import axaComponents from './axa-components.scss';

const demos = [{ title: 'Pass input', cmpt: passInput }];
const styles = [axaComponents];

const Pass = () => (
  <article className="component">
    <h2 className="component__title">File input</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height="800" css={styles} template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Pass;
