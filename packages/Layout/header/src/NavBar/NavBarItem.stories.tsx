import React, { AllHTMLAttributes, Component } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBarItem from './NavBarItem';
import readme from './NavBarItem.md';

export default {
  title: 'Layout/Header/NavBarItem',
  component: NavBarItem,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

// eslint-disable-next-line react/prefer-stateless-function
class LinkItem extends Component<AllHTMLAttributes<HTMLAnchorElement>> {
  render() {
    const { children } = this.props;
    return (
      <a href="#" {...this.props} onClick={action('onClick Action')}>
        {children}
      </a>
    );
  }
}

const styleNavBarItem = {
  width: '100px',
};

export const Default = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBarItem
      style={styleNavBarItem}
      actionElt={
        <LinkItem className="af-nav__link" href="/home">
          HomeLINK
        </LinkItem>
      }
    />
  </ul>
);

export const ActifStory = () => (
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
ActifStory.storyName = 'Active';

const styleWithChildren = {
  height: '300px',
};

export const ActiveWithChildren = () => (
  <div style={styleWithChildren}>
    <NavBarItem
      style={styleNavBarItem}
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
ActiveWithChildren.storyName = 'Active with children';
