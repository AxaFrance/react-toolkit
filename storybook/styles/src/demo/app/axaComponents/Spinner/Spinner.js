import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './spinner.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const Spinner = () => (
  <article className="component">
    <h2 className="component__title">Spinner</h2>
    <Tabs>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel>
        <Iframe css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
    </Tabs>
  </article>
);

export default Spinner;
