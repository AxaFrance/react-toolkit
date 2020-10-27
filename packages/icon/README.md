## Icon

### Get started

```sh
npm i "@axa-fr/react-toolkit-icon"
```

### Props

- icon: string - Name of the icon contained in the icons.svg file.
- basePath?: string - Default is root ("/"), used to indicate the path where your icons.svg file is.

### Example

This one will display the icon named "plus" inside of the _/icons.svg_ file

```javascript
import React from 'react';
import Icon from '@axa-fr/react-toolkit-icon';

const PlusIcon => () => (
    <Icon icon="plus"/>
)
```
