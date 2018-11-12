import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './list-demo.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const List = () => (
  <article className="component">
    <h2 className="component__title">List</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel>
        <Iframe height="700" css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
    </Tabs>
  </article>
);

export default List;
