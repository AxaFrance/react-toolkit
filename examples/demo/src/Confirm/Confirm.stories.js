import React from 'react';
import { action } from '@storybook/addon-actions';
import { Confirm } from './Confirm';

export default { title: 'Confirm' };

export const withDefault = () => <Confirm onClick={action('onClick')} />;
