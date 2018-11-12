import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './footer.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const Footer = () => (
  <article className="component">
    <h2 className="component__title">Footer</h2>
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
        <h3>Dépendances</h3>
        <code>
          <ul>
            <li>af-toolkit-core/bootstrap</li>
            <li>af-toolkit-core/axa-components/logo/logo</li>
            <li>af-toolkit-core/axa-components/footer/footer</li>
          </ul>
        </code>
      </TabPanel>
    </Tabs>
  </article>
);

export default Footer;
