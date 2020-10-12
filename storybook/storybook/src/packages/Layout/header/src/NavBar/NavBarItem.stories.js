import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import readme from './NavBarItem.md';

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

const defaultStory = () => (
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
);

const ActifStory = () => (
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
);

const styleWithChildren = {
  height: '300px',
};

const ActiveWithChildren = () => (
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
);

const stories = storiesOf('Layout/Header/NavBarItem', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', defaultStory);
stories.add('Actif', ActifStory);
stories.add('Active with children', ActiveWithChildren);
