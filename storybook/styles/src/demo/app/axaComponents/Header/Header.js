import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axaComponents from './axa-components.scss';
import template from './header.pug';
import templateNav from './header-nav.pug';
import templateNavTitleBar from './header-navtitlebar.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';

const demos = [
  { title: 'Header simple', cmpt: template, height: '200' },
  { title: 'Header with navigation', cmpt: templateNav, height: '400' },
  { title: 'Header with navigation and title bar', cmpt: templateNavTitleBar, height: '400' },
];

const styles = [axaComponents];

const Header = () => (
  <article className="component">
    <h2 className="component__title">Header</h2>
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
                <li>af-toolkit-core/axa-components/logo/af-logo.css</li>
                <li>af-toolkit-core/bootstrap/reboot.css</li>
                <li>af-toolkit-core/bootstrap/grid.css</li>
                <li>af-toolkit-core/bootstrap/type.css</li>
              </ul>
            </code>
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Header;
