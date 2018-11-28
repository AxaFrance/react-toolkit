## Alert

### Get started

```sh
  npm i "@axa-fr/react-toolkit-alert"
```

### Components

#### Alert

To use this component, you need to provide a classModifier to define the alert type, which will also pick a default icon.
A default icon will be displayed if none is provided in props and the **first** class modifier is :

- error -> glyphicon-exclamation-sign <span class="glyphicon glyphicon-exclamation-sign"/>
- danger -> glyphicon-alert <span class="glyphicon glyphicon-alert"/>
- info -> glyphicon-info-sign <span class="glyphicon glyphicon-info-sign"/>
- success -> glyphicon-ok <span class="glyphicon glyphicon-ok"/>

This example will display an orange alert with the "alert" glyphicon.

```javascript
import React from 'react';
import Alert from '@axa-fr/react-toolkit-alert';
const MyDangerAlert => () => (
  <Alert classModifier="danger" title="Caution !!!">
    Please make sure you've backed up your application before going further.
  </Alert>
)
```

#### AlertCore

This core component does not assign an icon depending on the classModifier.

You have to explicitly define it in the "icon" prop :

```javascript
import React from 'react';
import { AlertCore } from '@axa-fr/react-toolkit-alert';
const MyErrorAlert => () =>
  <AlertCore classModifier="error" iconClassName="glyphicon glyphicon-exclamation-sign" title="Error !"/>
```

#### AlertWithType

This component has its own prop to declare the Alert type, rather than relying on classModifier.

The prop type has **only** 4 possible values : _error_, _danger_, _info_ and _success_

This example will display a blue alert with an info-sign glyphicon :

```javascript
import React from 'react';
import { AlertWithType } from '@axa-fr/react-toolkit-alert';
const MyInfoAlert => () =>
  <AlertWithType type="info" title="An apple a day keeps the doctor away."/>
```
