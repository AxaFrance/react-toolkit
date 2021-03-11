import { withClickId } from '@axa-fr/react-toolkit-core';
import { ComponentProps } from 'react';
import ActionCore from './ActionCore';

export type ActionProps = ComponentProps<typeof Action>;

const Action = withClickId<ComponentProps<typeof ActionCore>>({
  event: ['onClick'],
})(ActionCore);

export default Action;
