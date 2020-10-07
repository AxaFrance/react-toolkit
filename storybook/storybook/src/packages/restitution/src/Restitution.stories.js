import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  Restitution,
} from '@axa-fr/react-toolkit-restitution';
import readme from '@axa-fr/react-toolkit-restitution/dist/README.md';
import withPreventDefaultClick from '../../../preventClick';

const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={withPreventDefaultClick(action('onClick Action'))}>
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>
);

const ArticleRestitutionStory = () => (
  <ArticleRestitution>
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
          <Restitution label="TT" value={null} />
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
          <Restitution label="EURO" value="EURO" />
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

const stories = storiesOf('Restitution', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('ArticleRestitution', ArticleRestitutionStory);
