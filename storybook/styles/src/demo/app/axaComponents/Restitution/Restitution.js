import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './restit-simple.pug';
import templateDbl from './restit-double.pug';
import templateMore from './restit-more.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents, 'body{background: #f5f5f5; padding:2rem;}'];

const demos = [
  { title: 'Restitution simple', cmpt: template, height: '600' },
  { title: 'Restitution double', cmpt: templateDbl, height: '600' },
  { title: 'Restitution more', cmpt: templateMore, height: '600' },
];

const Restitution = () => (
  <article className="component">
    <h2 className="component__title">Data restitution</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="component__title">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Demo</Tab>
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
                <li>af-toolkit-core/axa-components/restitution/restitution</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Restitution;
