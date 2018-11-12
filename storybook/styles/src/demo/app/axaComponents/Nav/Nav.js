import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './nav.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const styles = [axaComponents];

const Nav = () => (
  <article className="component">
    <h2 className="component__title">Navigation</h2>
    <Tabs>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
        <Tab>Dependencies</Tab>
        <Tab>Accessibility</Tab>
      </TabList>
      <TabPanel>
        <Iframe height={300} css={styles} template={template} />
      </TabPanel>
      <TabPanel>
        <Code template={template} />
      </TabPanel>
      <TabPanel>
        <h3>Dépendances</h3>
        <code>
          <ul>
            <li>af-toolkit-core/bootstrap/reboot.css</li>
            <li>af-toolkit-core/bootstrap/grid.css</li>
            <li>af-toolkit-core/bootstrap/type.css</li>
            <li>af-toolkit-core/bootstrap/dropdown.css</li>
            <li>af-toolkit-core/bootstrap/nav.css</li>
            <li>af-toolkit-core/axa-components/drawer/af-drawer.css</li>
            <li>af-toolkit-core/axa-components/nav/af-nav.css</li>
          </ul>
          <p>Bloquer le scroll sur le body</p>
          <p>
            En ajoutant la classe <b>af-menu-open</b>
          </p>
        </code>
      </TabPanel>
      <TabPanel>
        <a href="https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html#">
          Element concernant le bouton d'ouverture du menu
        </a>
        <br />
        <a href="https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html">
          Modèle de menu accessible
        </a>
        <p>Remarque : la navigation au clavier sera traitée via ReactJS.</p>
      </TabPanel>
    </Tabs>
  </article>
);

export default Nav;
