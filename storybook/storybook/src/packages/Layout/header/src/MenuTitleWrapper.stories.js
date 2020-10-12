import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavBar, NavBarItem, Title } from '@axa-fr/react-toolkit-layout-header';

class MenuTitleWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { body } = document;
    body.classList.toggle('af-menu-open');
    const { isMenuVisible } = this.state;
    this.setState({
      isMenuVisible: !isMenuVisible,
    });
  }

  render() {
    const { isMenuVisible } = this.state;
    return (
      <div>
        <NavBar isVisible={isMenuVisible} onClick={this.handleClick}>
          <NavBarItem
            actionElt={
              <a className="af-nav__link" href="/home">
                Home
              </a>
            }
          />
          <NavBarItem
            label="Forms"
            actionElt={
              <a className="af-nav__link" href="/forms">
                Forms
              </a>
            }
          />
          <NavBarItem
            label="Fileupload"
            actionElt={
              <a className="af-nav__link" href="/fileupload">
                Fileupload
              </a>
            }
          />
          <NavBarItem
            className="af-nav__item--haschild af-nav__item"
            aria-haspopup="true"
            aria-expanded="false"
            ariaLabel="Table"
            actionElt={<span className="af-nav__link">Table</span>}>
            <NavBarItem
              key="table-1"
              actionElt={
                <a className="af-nav__link" href="/table/sous-lien">
                  Sous lien
                </a>
              }
            />
            <NavBarItem
              key="table-2"
              actionElt={
                <a className="af-nav__link" href="/table/sous-lien2">
                  Sous lien2
                </a>
              }
            />
            <NavBarItem
              key="table-3"
              actionElt={
                <a className="af-nav__link" href="/table/sous-lien3">
                  Sous lien3
                </a>
              }
            />
            <NavBarItem
              key="table-4"
              label="Sous lien4"
              actionElt={
                <a className="af-nav__link" href="/table/sous-lien4">
                  Sous lien4
                </a>
              }
            />
          </NavBarItem>
          <NavBarItem
            actionElt={
              <a className="af-nav__link" href="/collapse">
                Accordions
              </a>
            }
          />
          <NavBarItem
            actionElt={
              <a className="af-nav__link" href="/alert">
                Alerts
              </a>
            }
          />
          <NavBarItem
            actionElt={
              <a className="af-nav__link" href="/validation">
                Validation
              </a>
            }
          />
          <NavBarItem
            label="Doc"
            className="af-nav__item--haschild af-nav__item"
            aria-haspopup="true"
            aria-expanded="false"
            ariaLabel="Table"
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
        </NavBar>
        <Title
          title="Toolkit Axa"
          subtitle="Sous titre"
          toggleMenu={this.handleClick}
        />
      </div>
    );
  }
}

const MenuTitleWrapperStory = () => <MenuTitleWrapper />;

const stories = storiesOf('Layout/Header/MenuTitleWrapper', module);

stories.addParameters({
  viewport: {
    defaultViewport: 'iphone6',
  },
});

stories.add('Default', MenuTitleWrapperStory);
