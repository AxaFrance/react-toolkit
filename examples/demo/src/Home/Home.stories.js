import React from 'react';
import { action } from '@storybook/addon-actions';
import Home from './Home';
import { LoaderModes } from "@axa-fr/react-toolkit-loader";
import { BrowserRouter as Router } from 'react-router-dom';

const data = require('../../api/devis');

export default { title: 'Home' };

export const withDefault = () => <Router><Home loaderMode={LoaderModes.none} items={data.devis} onClick={action('onClick')} /></Router>;

export const withLoader = () => <Router><Home loaderMode={LoaderModes.get} items={[]} onClick={action('onClick')} /></Router>;

