import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './title-bar.pug';
import complexTemplate from './title-bar-complex.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const demos = [
  { title: 'TitleBar simple', cmpt: template, height: '200' },
  { title: 'TitleBar complex', cmpt: complexTemplate, height: '200' },
];

const TitleBar = () => (
  <article className="component">
    <h2 className="component__title">Title Bar</h2>
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
                <li>af-toolkit-core/axa-components/title-bar/af-title-bar</li>
                <li>af-toolkit-core/bootstrap/reboot.css</li>
                <li>af-toolkit-core/bootstrap/grid.css</li>
                <li>af-toolkit-core/bootstrap/type.css</li>
                <li>af-toolkit-core/bootstrap/utilities/align.css</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default TitleBar;
