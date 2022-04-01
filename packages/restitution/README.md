# `@axa-fr/react-toolkit-restitution`

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-restitution
```

## Import

```javascript
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
} from '@axa-fr/react-toolkit-restitution';
import '@axa-fr/react-toolkit-restitution/dist/af-restitution.css';
```

### Use

```javascript
const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={(e) => {
      console.log(e);
    }}>
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>
);

const RestititutionDefault = () => (
  <ArticleRestitution classModifier="lg">
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle />}
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="TT" value="" />
          <Restitution
            label="Garanties complémentaires"
            classModifier="marge"
            values={[
              'Vol au domicile',
              'Vol étendu aux appareils nomades',
              'Bris des glaces',
              'Plomberie et électricité',
              'Jardin',
            ]}
          />
        </SectionRestitutionColumn>
        <SectionRestitutionColumn classModifier="test">
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution label="TT" value="" />
          <Restitution
            label="Garanties complémentaires"
            classModifier="marge"
            values={[
              'Vol au domicile',
              'Vol étendu aux appareils nomades',
              'Bris des glaces',
              'Plomberie et électricité',
              'Jardin',
            ]}
          />
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution label="EURO" value="EURO" />
          <Restitution
            label="Garanties complémentaires"
            values={[
              'Vol au domicile',
              'Vol étendu aux appareils nomades',
              'Bris des glaces',
              'Plomberie et électricité',
              'Jardin',
            ]}
          />
        </SectionRestitutionColumn>
        <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %" />
          <Restitution
            label="EURO"
            value={<span style={{ textDecoration: 'underline' }}>EURO</span>}
          />
          <Restitution
            label="Garanties complémentaires"
            classModifier="marge"
            values={[
              'Vol au domicile',
              'Vol étendu aux appareils nomades',
              'Bris des glaces',
              'Plomberie et électricité',
              'Jardin',
            ]}
          />
        </SectionRestitutionColumn>
      </SectionRestitutionRow>
    </SectionRestitution>
  </ArticleRestitution>
);
export default RestititutionDefault;
```
