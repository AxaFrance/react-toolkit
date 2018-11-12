import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './panel.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: #f5f5f5; padding:2rem;}'];

const Panel = () => (
  <article className="component">
    <h2 className="component__title">Panels</h2>
    <Tabs>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
        <Tab>Dependencies</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={500} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <h3>Dépendances</h3>
        <code>
          <ul>
            <li>af-toolkit-core/axa-components/panel/af-panel</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Panel;
