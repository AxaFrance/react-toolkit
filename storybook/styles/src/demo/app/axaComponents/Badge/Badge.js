import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template7Success from './badge7Success.pug';
import template42Info from './badge42Info.pug';
import templateLoremIpsumDanger from './badgeLoremIpsumDanger.pug';
import templateAxaError from './badgeAxaError.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: white;}'];

const demos = [
  { title: 'Badge success', cmpt: template7Success, height: '70' },
  { title: 'Badge info', cmpt: template42Info, height: '70' },
  { title: 'Badge danger', cmpt: templateLoremIpsumDanger, height: '70' },
  { title: 'Badge error', cmpt: templateAxaError, height: '70' },
];

const Badges = () => (
  <article className="component">
    <h2 className="component__title">Badges</h2>
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
                <li>@axa-fr/react-toolkit-badge/dist/badge.scss</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Badges;
