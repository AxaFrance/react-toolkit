import React from 'react';
import { action } from '@storybook/addon-actions';
import { ArticleRestitution, HeaderRestitution, Restitution, SectionRestitution, SectionRestitutionColumn, SectionRestitutionRow } from '@axa-fr/react-toolkit-restitution';
import Readme from '@axa-fr/react-toolkit-restitution/README.md';
import withPreventDefaultClick from '../../../preventClick';

export default {
  title: 'Restitution',
  component: Restitution,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
};

const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={withPreventDefaultClick(action('onClick Action'))}>
    <i className="glyphicon glyphicon-pencil"/>
    <span className="af-link__text">Modifier</span>
  </a>
);

export const Default = () => (
  <ArticleRestitution>
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle/>}
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA" value="99,99 %"/>
          <Restitution label="EURO" value="EURO"/>
          <Restitution label="TT" value={null}/>
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
          <Restitution label="TA" value="99,99 %"/>
          <Restitution label="EURO" value="EURO"/>
          <Restitution label="TT" value=""/>
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
          <Restitution label="TA" value="99,99 %"/>
          <Restitution label="EURO" value="EURO"/>
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
          <Restitution label="TA" value="99,99 %"/>
          <Restitution label="EURO" value="EURO"/>
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
