import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import templateModal from './modal.pug';
import templateModalLarge from './modal-lg.pug';
import templateModalSmall from './modal-sm.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const demos = [
  { title: 'Modal classic', cmpt: templateModal, height: '500' },
  { title: 'Modal large', cmpt: templateModalLarge, height: '500' },
  { title: 'Modal small', cmpt: templateModalSmall, height: '600' },
];
const styles = [axaComponents, 'body{background: white;}'];

const Modal = () => (
  <article className="component">
    <h2 className="component__title">Modale</h2>
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

export default Modal;
