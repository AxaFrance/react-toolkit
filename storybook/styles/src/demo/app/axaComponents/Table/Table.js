import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './table.pug';
import templateEpargne from './table-epargne.pug';
import templateSante from './table-sante.pug';
import templateAxa from './table-axa.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const demos = [
  { title: 'Table Axa', cmpt: templateAxa, height: '700' },
  { title: 'Table Default', cmpt: template, height: '400' },
  { title: 'Table Epargne', cmpt: templateEpargne, height: '400' },
  { title: 'Table Sante', cmpt: templateSante, height: '400' },
];

const Table = () => (
  <article className="component">
    <h2 className="component__title">Table</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
            <Tab>Dependencies</Tab>
          </TabList>
          <TabPanel>
            <Iframe height={demo.height} css={styles} template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <code>
              <ul>
                <li>af-toolkit-core/axa-components/icons/af-icons</li>
                <li>af-toolkit-core/axa-components/table/af-table</li>
                <li>af-toolkit-core/axa-components/table/af-button</li>
                <li>af-toolkit-core/axa-components/table/af-status</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Table;
