import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './accordion.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const Accordion = () => (
  <article className="component">
    <h3 className="af-subtitle">Accordions</h3>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
        <Tab>Dépendances</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={900} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <code>
          <ul>
            <li>@axa-fr/react-toolkit-collapse/dist/accordion.scss</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Accordion;
