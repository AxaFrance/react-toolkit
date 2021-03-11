import React, { AllHTMLAttributes, Component, ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import NavBar from './NavBar';
import NavBarItem from './NavBarItem';
import readme from './NavBar.md';

export default {
  title: 'Layout/Header/NavBar',
  component: NavBar,
  args: {
    isVisible: true,
  },
  argTypes: {
    onClick: { action: 'onClick Action' },
  },
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

const withPreventDefaultClick = (next) => (e) => {
  e.preventDefault();
  next(e);
};

/** ******************************************************************** */
// LinkItem component is just an example for the demo
/** ******************************************************************** */
// eslint-disable-next-line react/prefer-stateless-function
class LinkItem extends Component<AllHTMLAttributes<HTMLAnchorElement>> {
  render() {
    const { children } = this.props;
    return (
      <a
        href="#"
        {...this.props}
        onClick={withPreventDefaultClick(action('onClick Action'))}>
        {children}
      </a>
    );
  }
}
/** ******************************************************************** */
// LinkItem component is just an example for the demo
/** ******************************************************************** */
type NavBarProps = ComponentProps<typeof NavBar>;
const Template: Story<NavBarProps> = ({ children, ...args }) => (
  <NavBar {...args}>
    <NavBarItem
      actionElt={
        <LinkItem className="af-nav__link" href="/home">
          Home
        </LinkItem>
      }
    />
    {children}
    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={<span className="af-nav__link">Table</span>}>
      <NavBarItem
        key="table-1"
        actionElt={
          <LinkItem className="af-nav__link" to="/table/sous-lien">
            Sous lien
          </LinkItem>
        }
      />
      <NavBarItem
        key="table-2"
        actionElt={
          <LinkItem className="af-nav__link" to="/table/sous-lien2">
            Sous lien2
          </LinkItem>
        }
      />
    </NavBarItem>
    <NavBarItem
      actionElt={
        <LinkItem className="af-nav__link" href="/collapse">
          Accordions
        </LinkItem>
      }
    />
    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={
        <LinkItem className="af-nav__link" to="/doc">
          Doc
        </LinkItem>
      }>
      <NavBarItem
        key="doc-1"
        actionElt={
          <LinkItem className="af-nav__link" to="/doc/sous-lien">
            Sous lien
          </LinkItem>
        }
      />
      <NavBarItem
        key="doc-2"
        actionElt={
          <LinkItem className="af-nav__link" to="/doc/sous-lien2">
            Sous lien2
          </LinkItem>
        }
      />
    </NavBarItem>
  </NavBar>
);

export const NavBarBaseStory: Story<NavBarProps> = Template.bind({});
NavBarBaseStory.storyName = 'NavBarBase';
NavBarBaseStory.args = {
  positionInit: 2,
};

export const NavBarBaseWithNullStory: Story<NavBarProps> = Template.bind({});
NavBarBaseWithNullStory.storyName = 'NavBarBase with null';
NavBarBaseWithNullStory.args = {
  positionInit: 2,
  children: [
    <NavBarItem
      actionElt={
        <LinkItem className="af-nav__link" href="/forms">
          Forms
        </LinkItem>
      }
    />,
    null,
  ],
};
