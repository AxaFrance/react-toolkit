import React, { ComponentProps } from 'react';
import { getClickId } from '@axa-fr/react-toolkit-core';
import ActionCore from './ActionCore';

const Action = (props: ComponentProps<typeof ActionCore>) => {
  const propsWithClickId = getClickId<ComponentProps<typeof ActionCore>>({
    option: {
      event: ['onClick'],
    },
    props,
  });

  return <ActionCore {...propsWithClickId} />;
};

export default Action;
