import React, { ComponentProps } from 'react';
import { getClickId } from '@axa-fr/react-toolkit-core';
import ButtonCore from './ButtonCore';

const Button = (props: ComponentProps<typeof ButtonCore>) => {
  const propsWithClickId = getClickId<ComponentProps<typeof ButtonCore>>({
    option: {
      event: ['onClick'],
    },
    props,
  });

  return <ButtonCore {...propsWithClickId} />;
};

export default Button;
