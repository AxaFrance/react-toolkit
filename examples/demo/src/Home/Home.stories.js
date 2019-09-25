import React from 'react';
import { action } from '@storybook/addon-actions';
import Home from './Home';
import {LoaderModes} from "@axa-fr/react-toolkit-loader";

const data = require('../../api/devis');

export default { title: 'Home' };

export const withDefault = () => <Home loaderMode={LoaderModes.none} items={data.devis} onClick={action('onClick')} />;

export const withLoader = () => <Home loaderMode={LoaderModes.get} items={[]} onClick={action('onClick')} />;

