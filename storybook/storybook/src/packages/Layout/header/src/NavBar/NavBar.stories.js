/* eslint-disable react/no-array-index-key */
import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import addToStorie from '@axa-fr/storybook-addons';
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-layout-header';

const stories = [];


stories.push({
  desc:'NavBarBase',
  component: () => (
    <NavBar
      isVisible={boolean('isVisible', true)}
      onClick={action('onClick Action')}>
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" to="/home">
            Home
          </LinkItem>
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
  ),
});

stories.push({
  desc: 'NavBarBase with null',
  component: () => (
    <NavBar
    isVisible={boolean('isVisible', true)}
    onClick={action('onClick Action')}>
    <NavBarItem
      actionElt={
        <LinkItem className="af-nav__link" to="/home">
          Home
        </LinkItem>
      }
    />
    {null}
    <NavBarItem
      label="Fileupload"
      actionElt={
        <a className="af-nav__link" href="/fileupload">
          Fileupload
        </a>
      }
    />
     </NavBar>
  ),
});

stories.push({
  desc: 'NavBar with init position',
  component: () => (
    <NavBar
      positionInit={number('positionInit', 3)}
      isVisible={boolean('isVisible', true)}
      onClick={action('onClick Action')}>
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
  ),
});


class LinkItem extends React.Component {
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


stories.push({
  desc:  'NavBar with custom Link item',
  component: () => (
    <NavBar
      isVisible={boolean('isVisible', true)}
      onClick={action('onClick Action')}>
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" to="/home">
            LinkItem
          </LinkItem>
        }
      />
      <NavBarItem
        label="Forms"
        actionElt={
          <LinkItem className="af-nav__link" to="/forms">
            Forms
          </LinkItem>
        }
      />
      <NavBarItem
        label="Fileupload"
        actionElt={
          <LinkItem className="af-nav__link" to="/fileupload">
            Fileupload
          </LinkItem>
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
        <NavBarItem
          key="table-3"
          actionElt={
            <LinkItem className="af-nav__link" to="/table/sous-lien3">
              Sous lien3
            </LinkItem>
          }
        />
        <NavBarItem
          key="table-4"
          label="Sous lien4"
          actionElt={
            <LinkItem className="af-nav__link" to="/table/sous-lien4">
              Sous lien4
            </LinkItem>
          }
        />
      </NavBarItem>
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" to="/collapse">
            Accordions
          </LinkItem>
        }
      />
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" to="/alert">
            Alerts
          </LinkItem>
        }
      />
      <NavBarItem
        actionElt={
          <LinkItem className="af-nav__link" to="/validation">
            Validation
          </LinkItem>
        }
      />
      <NavBarItem
        label="Doc"
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
        <NavBarItem
          key="doc-3"
          actionElt={
            <LinkItem className="af-nav__link" to="/doc/sous-lien3">
              Sous lien3
            </LinkItem>
          }
        />
        <NavBarItem
          key="doc-4"
          actionElt={
            <LinkItem className="af-nav__link" to="/doc/sous-lien4">
              Sous lien4
            </LinkItem>
          }
        />
      </NavBarItem>
    </NavBar>
  ),
});

const storyData = {
  name: 'Layout.Header.NavBar',
  docs: require('./NavBar.md'),
  stories: stories,
};

addToStorie(storyData, module);