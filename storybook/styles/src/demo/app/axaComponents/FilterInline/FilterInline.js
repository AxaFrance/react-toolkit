import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './filter-inline-demo.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const FilterInline = () => (
  <article className="component">
    <h2 className="component__title">Filters inline</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
        <Tab>Dépendances</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={300} css={styles} template={template} />
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
            <li>@axa-fr/react-toolkit-form-input-select/dist/select.scss</li>
            <li>@axa-fr/react-toolkit-form-input-checkbox/dist/checkbox.scss</li>
            <li>@axa-fr/react-toolkit-form-filter-inline/dist/filter-inline.scss</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default FilterInline;
