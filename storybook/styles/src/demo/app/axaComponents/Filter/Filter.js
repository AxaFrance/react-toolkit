import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './filter-demo.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const Filter = () => (
  <article className="component">
    <h2 className="component__title">Filters</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
        <Tab>Dépendances</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={800} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>        
        <code>
          <ul>
            <li>@axa-fr/react-toolkit-button/dist/button.scss</li>
            <li>@axa-fr/react-toolkit-link/dist/link.scss</li>
            <li>@axa-fr/react-toolkit-form-input-text/dist/inputtext.scss</li>
            <li>@axa-fr/react-toolkit-collapse/dist/accordion.scss</li>
            <li>@axa-fr/react-toolkit-panel/dist/panel.scss</li>
            <li>@axa-fr/react-toolkit-form-filter/dist/filter.scss</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Filter;

