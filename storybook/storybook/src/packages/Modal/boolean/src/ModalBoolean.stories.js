import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BooleanModal from '@axa-fr/react-toolkit-modal-boolean';

import readme from '@axa-fr/react-toolkit-modal-boolean/dist/README.md';

const BooleanModalStory = () => (
  <div>
    <BooleanModal
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      isOpen={boolean('isOpen', true)}
      title={text('title', 'Titre de la modal')}
      id={text('id', 'modalId')}
      onCancel={action('onCancel')}
      onSubmit={action('onSubmit')}
      submitTitle={text('submitTitle', 'Valider')}
      cancelTitle={text('cancelTitle', 'Annuler')}>
      <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>
    </BooleanModal>
  </div>
);

const stories = storiesOf('Modal/Boolean', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', BooleanModalStory);
