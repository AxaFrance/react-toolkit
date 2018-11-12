import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import demo01 from './demos/demo-01.pug';
import demo02 from './demos/demo-02.pug';
import demo03 from './demos/demo-03.pug';
import demo04 from './demos/demo-04.pug';
import demo05 from './demos/demo-05.pug';
import demo06 from './demos/demo-06.pug';
import demo07 from './demos/demo-07.pug';
import demo08 from './demos/demo-08.pug';
import axaComponents from './axa-components.scss';

const demos = [
  { title: 'Default Card', cmpt: demo01 },
  { title: 'Disabled Card', cmpt: demo02 },
  { title: 'Selected Card', cmpt: demo03 },
  { title: 'Default selected Card', cmpt: demo04 },
  { title: 'Group Card with selected', cmpt: demo05 },
  { title: 'Default Group 3 Cards', cmpt: demo06 },
  { title: ' Group 4 Cards  with selected', cmpt: demo07 },
  { title: ' Group 5 Cards  with selected', cmpt: demo08 },
];
const styles = [axaComponents];

const Card = () => (
  <article className="component">
    <h2 className="component__title">Card</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height="500" css={styles} template={demo.cmpt} />
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Card;
