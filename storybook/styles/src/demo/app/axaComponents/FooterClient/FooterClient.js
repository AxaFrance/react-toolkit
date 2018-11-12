import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './footer-client.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const FooterClient = () => (
  <article className="component">
    <h2 className="component__title">Footer Client</h2>
    <Tabs>
      <TabList>
        <Tab>Démo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={500} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
    </Tabs>
  </article>
);

export default FooterClient;
