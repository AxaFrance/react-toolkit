import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import sliderInput from './input-slider.pug';
import axaComponents from './axa-components.scss';

const demos = [{ title: 'Slider input', cmpt: sliderInput }];
const styles = [axaComponents];

const Slider = () => (
  <article className="component">
    <h2 className="component__title">Slider input</h2>
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

export default Slider;
