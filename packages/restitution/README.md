## Restitution

### Get started

```sh
npm i "@axa-fr/react-toolkit-restitution"
```

For more information about style component, you can see the [Restitution Style on Toolkit-core ](https://axaguildev.github.io/react-toolkit/latest/design/index.html#/restitution)

### Import

```javascript
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  Restitution,
} from '@axa-fr/react-toolkit-restitution';

import '@axa-fr/react-toolkit-restitution/dist/restitution.scss';
/* or */
import '@axa-fr/react-toolkit-restitution/dist/af-restitution.css';
```

### Sample

```javascript
import React from 'react';
import { ArticleRestitution, HeaderRestitution, SectionRestitution, SectionRestitutionColumn, SectionRestitutionRow, Restitution } from '@axa-fr/react-toolkit-restitution';

const MyBadgeComponent => () => (
<ArticleRestitution>
    <HeaderRestitution  title="Tarifs" subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)" titleLeft="Edit"}>
    </HeaderRestitution>
      <SectionRestitution >
        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="TT" value={null} />
          <Restitution label="Garanties complémentaires" classModifier="marge" values={['Vol au domicile',
'Vol étendu aux appareils nomades',
'Bris des glaces',
'Plomberie et électricité',
'Jardin']} />
          </SectionRestitutionColumn>
           <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="TT" value="" />
          <Restitution label="Garanties complémentaires" classModifier="marge" values={['Vol au domicile',
'Vol étendu aux appareils nomades',
'Bris des glaces',
'Plomberie et électricité',
'Jardin']} />
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

        <SectionRestitutionRow title="Base de calcul des prestations">
          <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="Garanties complémentaires" values={['Vol au domicile',
'Vol étendu aux appareils nomades',
'Bris des glaces',
'Plomberie et électricité',
'Jardin']} />
          </SectionRestitutionColumn>
           <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="Garanties complémentaires" classModifier="marge" values={['Vol au domicile',
'Vol étendu aux appareils nomades',
'Bris des glaces',
'Plomberie et électricité',
'Jardin']} />
          </SectionRestitutionColumn>
        </SectionRestitutionRow>

      </SectionRestitution>
    </ArticleRestitution>
)
```
