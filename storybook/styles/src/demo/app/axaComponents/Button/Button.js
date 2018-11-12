import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './button.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const Button = () => (
  <article className="component">
    <h2 className="component__title">Buttons classics</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
        <Tab>Dépendances</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={700} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <code>
          <ul>
            <li>@axa-fr/react-toolkit-button/dist/button.scss</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Button;
