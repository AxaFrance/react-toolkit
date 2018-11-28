## Action Button

### Get started

```sh
npm i @axa-fr/react-toolkit-action
```

### Diffrence entre Action et ActionCore

Action :

```typescript
onClick : (e: {id?: string}) => void
```

ActionCore :

```typescript
onCick : React.MouseEventHandler<HTMLAnchorElement>;
```


### Exemple Action

```javascript
import React from 'react';
import Action from '@axa-fr/react-toolkit-action';

const MyAlertComponent => () => {
<Action
    classModifier="MyModifier"
    icon="ok"
    title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d′office"
  />
}
```

### Exemple ActionCore

```javascript
import React from 'react';
import {ActionCore} from '@axa-fr/react-toolkit-action';

const MyAlertComponent => () => {
<Action
    classModifier="MyModifier"
    icon="ok"
    title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d′office"
  />
}
```
