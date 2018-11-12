import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import templateComplexe from './alertComplexe.pug';
import templateSimpleDanger from './alertSimpleDanger.pug';
import templateComplexError from './alertComplexError.pug';
import templateSimpleInfo from './alertSimpleInfo.pug';
import templateSimpleSuccess from './alertSimpleSuccess.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const demos = [
  { title: 'Alert danger', cmpt: templateSimpleDanger, height: '150' },
  { title: 'Alert info', cmpt: templateSimpleInfo, height: '150' },
  { title: 'Alert success', cmpt: templateSimpleSuccess, height: '150' },
  { title: 'Alert complex', cmpt: templateComplexe, height: '300' },
  { title: 'Alert complex error', cmpt: templateComplexError, height: '300' },
];
const styles = [axaComponents, 'body{background: white;}'];

const Alert = () => (
  <article className="component">
    <h2 className="component__title">Card</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
            <Tab>Dépendances</Tab>
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
                <li>@axa-fr/react-toolkit-alert/dist/alert.scss</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Alert;
