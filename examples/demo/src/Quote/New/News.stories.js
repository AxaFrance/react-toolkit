import React from 'react';
import { action } from '@storybook/addon-actions';
import New from './New';
import { initState } from './New.container';
import { BrowserRouter as Router } from 'react-router-dom';

export default { title: 'New' };

export const withDefault = () => <Router><New {...initState} onChange={action('onChange')} onSubmit={action('onSubmit')} onClick={action('onClick')} /></Router>;

