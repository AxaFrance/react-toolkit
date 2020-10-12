/* eslint-disable react/no-array-index-key */
import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import readme from './NavBar.md';
import withPreventDefaultClick from '../../../../../preventClick';

const NavBarBaseStory = () => (
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
);

const NavBarBaseWithNullStory = () => (
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
        <LinkItem className="af-nav__link" to="/fileupload">
          Fileupload
        </LinkItem>
      }
    />
  </NavBar>
);

const NavBarWithInitPosition = () => (
  <NavBar
    positionInit={number('positionInit', 3)}
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
);

/** ******************************************************************** */
// LinkItem component is just an example for the demo
/** ******************************************************************** */
class LinkItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { to, children, ...otherProps } = this.props;
    return (
      <a
        href={to}
        {...otherProps}
        onClick={withPreventDefaultClick(action('onClick Action'))}>
        {children}
      </a>
    );
  }
}
/** ******************************************************************** */
// LinkItem component is just an example for the demo
/** ******************************************************************** */

const NavBarWithCustomLinkItemStory = () => (
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
);

const stories = storiesOf('Layout/Header/NavBar', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('NavBarBase', NavBarBaseStory);
stories.add('NavBarBase with null', NavBarBaseWithNullStory);
stories.add('NavBarBase with init position', NavBarWithInitPosition);
stories.add('NavBarBase with custom Link item', NavBarWithCustomLinkItemStory);
