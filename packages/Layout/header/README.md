# `@axa-fr/react-toolkit-header`

1. [Header](#header)
   1. [WithName](#withname)
   2. [WithName&Infos](#withnameinfos)
2. [Infos](#infos)
   1. [Default](#default)
3. [MenuTitleWrapper](#menutitlewrapper)
   1. [Default](#default-1)
4. [NavBar](#navbar)
   1. [NavBarBase with null](#navbarbase-with-null)
   2. [NavBarBase with init](#navbarbase-with-init)
5. [NavBarItem](#navbaritem)
   1. [Actif](#actif)
   2. [Actif with Children](#actif-with-children)
6. [Title](#title)
   1. [Default](#default-2)
   2. [Complex](#complex)
7. [ToggleButton](#togglebutton)
   1. [Default](#default-3)
8. [User](#user)
   1. [Default](#default-4)
   2. [No Link](#no-link)

# Header

## WithName

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { Header, Name } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/Header/af-header.css';
import '@axa-fr/react-toolkit-layout-header/dist/Name/af-name.css';
import '@axa-fr/react-toolkit-layout-header/dist/Logo/af-logo.css';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
```

### Use

```javascript
const withName = () => (
  <Header>
    <Name
      title="My new application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={(e) => {
        console.log(e);
      }}
    />
  </Header>
);
export default withName;
```

## WithName&Infos

### Import

```javascript
import { Header, Infos, Name } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/Header/af-header.css';
import '@axa-fr/react-toolkit-layout-header/dist/Name/af-name.css';
import '@axa-fr/react-toolkit-layout-header/dist/Infos/af-infos.css';
import '@axa-fr/react-toolkit-layout-header/dist/Logo/af-logo.css';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
```

### Use

```javascript
const withNameInfos = () => (
  <Header>
    <Name
      title="My new application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={(e) => {
        console.log(e);
      }}
    />
    <Infos
      infos={[
        { word: 'Customer :', definition: '0123456789 - NOM' },
        { word: 'Wallet:', definition: '000123456789' },
        { word: 'Status :', definition: 'New business' },
      ]}
    />
  </Header>
);
export default withNameInfos;
```

# Infos

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { Header, Infos } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/Header/af-header.css';
import '@axa-fr/react-toolkit-layout-header/dist/Infos/af-infos.css';
```

### Use

```javascript
const infosLayout = () => (
  <Header>
    <Infos
      infos={[
        { word: 'Client :', definition: '0123456789 - NOM' },
        { word: 'Portefeuille :', definition: '000123456789' },
        { word: 'Status :', definition: 'Affaire nouvelle' },
      ]}
    />
  </Header>
);
export default infosLayout;
```

# MenuTitleWrapper

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBar, NavBarItem, Title } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
```

### Use

```javascript
const menuTitleWrapper = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBar isVisible={true} onClick={() => console.log('your function')}>
      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Home
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Form
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Fielupload
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
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Accordions
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Alert
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Validation
          </a>
        }
      />

      <NavBarItem
        className="af-nav__item--haschild af-nav__item"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={<span className="af-nav__link">Doc</span>}>
        <NavBarItem
          key="table-1"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>
    </NavBar>
    <Title
      title="Toolkit Axa"
      subtitle="Info complémentaire"
      toggleMenu={() => {
        console.log('your function');
      }}
    />
  </ul>
);
export default menuTitleWrapper;
```

# NavBar

##NavBarBase

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
```

### Use

```javascript
const NavBarBase = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBar isVisible={true} onClick={() => console.log('your function')}>
      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Home
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Form
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Fielupload
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
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Accordions
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Alert
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Validation
          </a>
        }
      />

      <NavBarItem
        className="af-nav__item--haschild af-nav__item"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={<span className="af-nav__link">Doc</span>}>
        <NavBarItem
          key="table-1"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>
    </NavBar>
  </ul>
);
export default NavBarBase;
```

## NavBarBase with null

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
```

### Use

```javascript
const NavBarWithNoValue = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBar isVisible={true} onClick={() => console.log('your function')}>
      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Home
          </a>
        }
      />
      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Fielupload
          </a>
        }
      />
    </NavBar>
  </ul>
);
export default NavBarWithNoValue;
```

## NavBarBase with init

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBar, NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
```

### Use

```javascript
const NavBarWithInitPosition = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBar
      isVisible={true}
      positionInit={3}
      onClick={() => console.log('your function')}>
      <NavBarItem
        aria-expanded="false"
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Home
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Form
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Fielupload
          </a>
        }
      />

      <NavBarItem
        className="af-nav__item--haschild af-nav__item"
        aria-haspopup="true"
        classModifier="active"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={<span className="af-nav__link">Table</span>}>
        <NavBarItem
          key="table-1"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Accordions
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Alert
          </a>
        }
      />

      <NavBarItem
        actionElt={
          <a
            className="af-nav__link"
            href="https://axa.fr"
            onClick={(e) => console.log(e)}>
            Validation
          </a>
        }
      />

      <NavBarItem
        className="af-nav__item--haschild af-nav__item"
        aria-haspopup="true"
        aria-expanded="false"
        ariaLabel="Table"
        actionElt={<span className="af-nav__link">Doc</span>}>
        <NavBarItem
          key="table-1"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 1
            </a>
          }
        />
        <NavBarItem
          key="table-2"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 2
            </a>
          }
        />

        <NavBarItem
          key="table-3"
          actionElt={
            <a
              className="af-nav__link"
              href="https://axa.fr"
              onClick={(e) => console.log(e)}>
              Sous lien 3
            </a>
          }
        />
      </NavBarItem>
    </NavBar>
  </ul>
);
export default NavBarWithInitPosition;
```

# NavBarItem

##Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
```

### Use

```javascript
const styleNavBarItem = {
  width: '100px',
};

const NavBarItemDefault = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBarItem
      style={styleNavBarItem}
      actionElt={
        <a
          className="af-nav__link"
          href="https://axa.fr"
          onClick={(e) => console.log(e)}>
          HomeLINK
        </a>
      }
    />
  </ul>
);
export default NavBarItemDefault;
```

## Actif

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
```

### Use

```javascript
const styleNavBarItem = {
  width: '100px',
};

const NavBarItemActif = () => (
  <ul style={{ listStyle: 'none' }}>
    <NavBarItem
      classModifier="active"
      style={styleNavBarItem}
      actionElt={
        <a
          className="af-nav__link"
          href="https://axa.fr"
          onClick={(e) => console.log(e)}>
          Home
        </a>
      }
    />
  </ul>
);
export default NavBarItemActif;
```

## Actif with Children

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { NavBarItem } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/NavBar/af-nav.css';
```

### Use

```javascript
const styleNavBarItem = {
  width: '100px',
};

const styleWithChildren = {
  height: '300px',
};

const NavBarItemActifWithChildren = () => (
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
export default NavBarItemActifWithChildren;
```

# Title

## Default

By default, the title bar is sticky on the top when you scroll down the page. If you want to disable that behavior you can set to false the `isSticky` property of the component.

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { Title } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
```

### Use

```javascript
const TitleDefault = () => (
  <Title
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {
      console.log('your function');
    }}
  />
);
export default TitleDefault;
```

## Complex

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
npm i @axa-fr/react-toolkit-action
```

### Import

```javascript
import { Title } from '@axa-fr/react-toolkit-layout-header';
import Action from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const actions = [
  {
    id: '001',
    href: '#enregistrer',
    icon: 'floppy-disk',
    title: 'Enregistrer',
  },
  {
    id: '002',
    href: '#imprimer',
    icon: 'print',
    title: 'Imprimer',
  },
];

const TitleComplex = () => (
  <Title
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {
      console.log('your function');
    }}>
    <div className="af-title-bar__actions">
      <a className="af-title-bar__link" href="#lien" title="lien titlebar">
        lien titlebar
      </a>
      {actions.map(({ icon, href, title, id }) => (
        <Action
          key={id}
          icon={icon}
          href={href}
          title={title}
          onClick={(e) => {
            console.log(e);
          }}
        />
      ))}
    </div>
  </Title>
);
export default TitleComplex;
```

# ToggleButton

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
npm i @axa-fr/react-toolkit-action
```

### Import

```javascript
import { ToggleButton } from '@axa-fr/react-toolkit-layout-header';
import Action from '@axa-fr/react-toolkit-action';
import '@axa-fr/react-toolkit-action/dist/af-button.css';
```

### Use

```javascript
const actionToggle = {
  icon: 'menu-hamburger',
  title: 'Toggle',
};

const ToggleButtonLayout = () => (
  <ToggleButton idControl="mainmenu">
    <Action
      id="togglemenu"
      icon={actionToggle.icon}
      title={actionToggle.title}
    />
  </ToggleButton>
);
export default ToggleButtonLayout;
```

# User

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { User } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/User/af-user.css';
```

### Use

```javascript
const UserDefault = () => (
  <User name="Pierre Martin" profile="profile" href="/profile" />
);
export default UserDefault;
```

## No Link

### Installation

```shell script
npm i @axa-fr/react-toolkit-layout-header
```

### Import

```javascript
import { User } from '@axa-fr/react-toolkit-layout-header';
import '@axa-fr/react-toolkit-layout-header/dist/User/af-user.css';
```

### Use

```javascript
const NoLink = () => <User name="Pierre Martin" profile="profile" />;
export default NoLink;
```
