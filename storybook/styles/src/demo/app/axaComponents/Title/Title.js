import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './title.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const Title = () => (
  <article className="component">
    <h2 className="component__title">Title</h2>
    <Tabs>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
        <Tab>Dependencies</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={600} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <code>
          <ul>
            <li>bootstrap/reboot </li>
            <li>bootstrap/grid </li>
            <li>bootstrap/type </li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Title;
