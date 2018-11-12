import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import templateicon from '@axa-fr/react-toolkit-core/dist/assets/templates/template.pug';
import axaComponents from './axa-components.scss';
import templateDecli from './icons-decli.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const demos = [
  { title: 'Icons list', cmpt: templateicon, height: '500' },
  { title: 'Icons list declinaison', cmpt: templateDecli, height: '500' },
];

const styles = [axaComponents];

const Icons = () => (
  <article className="component">
    <h2 className="component__title">Icons</h2>

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
                <li>bootstrap/scss/_type</li>
                <li>af-toolkit-core/axa-components/icons/af-icons</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Icons;
