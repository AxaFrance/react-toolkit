import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import templateSimple from './tabsSimple.pug';
import templateComplex from './tabsComplex.pug';
import templateWithTooLongText from './tabsWithTooLongText.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const demos = [
  { title: 'Tabs simple', cmpt: templateSimple, height: '200' },
  { title: 'Tabs complex', cmpt: templateComplex, height: '200' },
  { title: 'Tabs long text', cmpt: templateWithTooLongText, height: '200' },
];

const TabsCmpt = () => (
  <article className="component">
    <h2 className="component__title">Tabs</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height={demo.height} css={styles} template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default TabsCmpt;
