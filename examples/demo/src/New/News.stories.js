import React from 'react';
import { action } from '@storybook/addon-actions';
import New from './New';
import { initState } from './New.container';

export default { title: 'New' };

export const withDefault = () => <New {...initState} onChange={action('onChange')} onSubmit={action('onSubmit')} onClick={action('onClick')} />;

