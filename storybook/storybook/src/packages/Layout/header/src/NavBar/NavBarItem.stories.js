import React, { Component } from 'react';
import addToStorie from '@axa-fr/storybook-addons';
import { NavBarItem } from '@axa-fr/react-toolkit-layout-header';

import readme from './NavBarItem.md');

const stories = [];

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { to, children, ...otherProps } = this.props;
    return (
      <a href={to} {...otherProps}>
        {children}
      </a>
    );
  }
}

const styleNavBarItem = {
  width: '100px',
};

stories.push({
  component: () => (
    <ul style={{ listStyle: 'none' }}>
      <NavBarItem
        style={styleNavBarItem}
        actionElt={
          <LinkItem className="af-nav__link" to="/home">
            HomeLINK
          </LinkItem>
        }
      />
    </ul>
  ),
});

stories.push({
  desc: 'actif',
  component: () => (
    <ul style={{ listStyle: 'none' }}>
      <NavBarItem
        style={styleNavBarItem}
        classModifier="active"
        actionElt={
          <a className="af-nav__link" href="/home">
            Home
          </a>
        }
      />
    </ul>
  ),
});

const styleWithChildren = {
  height: '300px',
};

stories.push({
  desc: 'Active with children',
  component: () => (
    <div style={styleWithChildren}>
      <NavBarItem
        style={styleNavBarItem}
        label="Doc"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        className="af-nav__item--haschild af-nav__item af-nav__item--open"
        classModifier="active"
        actionElt={
          <a className="af-nav__link" href="/doc">
            Doc
          </a>
        }>
        <NavBarItem
          key="doc-1"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien">
              Sous lien
            </a>
          }
        />
        <NavBarItem
          key="doc-2"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien2">
              Sous lien2
            </a>
          }
        />
        <NavBarItem
          key="doc-3"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien3">
              Sous lien3
            </a>
          }
        />
        <NavBarItem
          key="doc-4"
          actionElt={
            <a className="af-nav__link" href="/doc/sous-lien4">
              Sous lien4
            </a>
          }
        />
      </NavBarItem>
    </div>
  ),
});

const storyData = {
  name: 'Layout.Header.NavBarItem',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
