import React from 'react';
import { storiesOf } from '@storybook/react';
import ReadMe from './Home.md';
import './Home.scss';

const Default = () => (
  <div className="af-home-logos">
    <img className="af-home-react" src="images/react.svg" alt="React logo" />
    <img
      className="af-home-storybook"
      src="images/storybook.svg"
      alt="Storybook logo"
    />
  </div>
);

storiesOf('Get Started', module)
  .addParameters({
    readme: {
      sidebar: ReadMe,
    },
  })
  .add('Introduction', Default);
