import React from 'react';
import { render } from '@testing-library/react';
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionColumn,
  SectionRestitutionRow,
  Restitution,
  RestitutionList,
} from '..';

const RightTitle = () => {
  return (
    <a className="af-link af-link--hasIconLeft" href="#anchor">
      <i className="glyphicon glyphicon-pencil" />
      <span className="af-link__text">Modifier</span>
    </a>
  );
};

const Component = (
  <ArticleRestitution classModifier="lg">
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={<RightTitle />}
      classModifier="myModifier"
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

describe('<ArticleRestitution />', () => {
  it('should render component', () => {
    const { asFragment } = render(Component);

    expect(asFragment()).toMatchSnapshot();
  });
});
