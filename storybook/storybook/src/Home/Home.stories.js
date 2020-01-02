/* eslint-disable react/no-danger, jsx-a11y/href-no-hash  */
import React from 'react';
import addToStorie from '@axa-fr/storybook-addons';
import ReadMe from './Home.md';
import './Home.scss';

const storyData = {
  name: 'Get Started',
  stories: [
    {
      desc: 'Introduction',
      withInfo: false,
      docs: ReadMe,
      component: () => (
        <div className="af-home-logos">
          <img
            className="af-home-react"
            src="images/react.svg"
            alt="React logo"
          />
          <img
            className="af-home-storybook"
            src="images/storybook.svg"
            alt="Storybook logo"
          />
        </div>
      ),
    },
  ],
};

addToStorie(storyData, module);
