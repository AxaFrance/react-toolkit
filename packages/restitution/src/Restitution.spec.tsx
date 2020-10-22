import * as React from 'react';

import {create} from 'react-test-renderer';
import { ArticleRestitution, HeaderRestitution, SectionRestitution, SectionRestitutionColumn, SectionRestitutionRow, Restitution } from '.';

const RightTitle = () => {
  return (<a className="af-link af-link--hasIconLeft" href="#">
    <i className="glyphicon glyphicon-pencil" />
    <span className="af-link__text">Modifier</span>
  </a>);
};

const Component = (<ArticleRestitution>
  <HeaderRestitution  title="Tarifs" subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)" rightTitle={<RightTitle/>} />
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
</ArticleRestitution>);


describe('<ArticleRestitution />', () => {
  it('should render component', () => {
    const component = create(Component);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
