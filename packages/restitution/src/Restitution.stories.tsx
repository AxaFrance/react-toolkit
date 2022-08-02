import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleRestitution from './ArticleRestitution';
import HeaderRestitution from './HeaderRestitution';
import Restitution from './Restitution';
import SectionRestitution from './SectionRestitution';
import SectionRestitutionColumn from './SectionRestitutionColumn';
import SectionRestitutionRow from './SectionRestitutionRow';
import Readme from '../README.md';
import RestitutionList from './RestitutionList';

const withPreventDefaultClick = (next: any) => (e: any) => {
  e.preventDefault();
  next(e);
};

export default {
  title: 'Components/Restitution',
  component: Restitution,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  args: {
    classModifier: '',
  },
} as Meta;

const RightTitle = () => (
  <a
    className="af-link af-link--hasIconLeft"
    href="/#"
    onClick={withPreventDefaultClick(action('onClick Action'))}>
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>
);

export const Default = (args) => (
  <ArticleRestitution {...args}>
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle />}
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                'Vol au domicile',
                'Vol étendu aux appareils nomades',
                'Bris des glaces',
                'Plomberie et électricité',
                'Jardin',
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn classModifier="test">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                'Vol au domicile',
                'Vol étendu aux appareils nomades',
                'Bris des glaces',
                'Plomberie et électricité',
                'Jardin',
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                'Vol au domicile',
                'Vol étendu aux appareils nomades',
                'Bris des glaces',
                'Plomberie et électricité',
                'Jardin',
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">
            <span style={{ textDecoration: 'underline' }}>EURO</span>
          </Restitution>
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                'Vol au domicile',
                'Vol étendu aux appareils nomades',
                'Bris des glaces',
                'Plomberie et électricité',
                'Jardin',
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>

      <SectionRestitutionRow>
        <SectionRestitutionColumn title="Base de calcul des prestations">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn title="Base de calcul des prestations">
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">
            <span style={{ textDecoration: 'underline' }}>EURO</span>
          </Restitution>
        </SectionRestitutionColumn>
      </SectionRestitutionRow>
    </SectionRestitution>
  </ArticleRestitution>
);
