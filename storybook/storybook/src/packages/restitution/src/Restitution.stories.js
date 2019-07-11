import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { ArticleRestitution, HeaderRestitution, SectionRestitution, SectionRestitutionColumn, SectionRestitutionRow, Restitution } from '@axa-fr/react-toolkit-restitution';

import readme from '@axa-fr/react-toolkit-restitution/dist/README.md';

const stories = [];

const TitleLeft = () => {
  return (<a class="af-link af-link--hasIconLeft" href="#"><i class="glyphicon glyphicon-pencil"></i><span class="af-link__text">Modifier</span></a>)
  };

stories.push({
  desc: 'ArticleRestitution',
  component: () => (
    <ArticleRestitution>
    <HeaderRestitution  title="Tarifs" subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)" titleLeft={<TitleLeft/>}>
    </HeaderRestitution>
      <SectionRestitution >
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12" >
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
        </div>
        
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
  ),
});

const storyData = {
  name: 'Restitution',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
