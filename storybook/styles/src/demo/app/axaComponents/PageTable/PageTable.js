import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import titleBar from '../TitleBar/axa-components.scss';
import template from './page-table.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [titleBar, axaComponents];

const PageTable = () => (
  <article className="component">
    <h3 className="af-subtitle">Page layout table</h3>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={1600} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
    </Tabs>
  </article>
);

export default PageTable;
