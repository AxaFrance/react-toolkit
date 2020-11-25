import { withProps } from '@axa-fr/react-toolkit-core';
import { ReactNode } from 'react';

export const withInputClassModifier = withProps(
  <
    P extends {
      classModifier?: string;
      children?: ReactNode;
      disabled?: boolean;
    }
  >(
    props: P
  ) => ({
    ...props,
    inputClassModifier: `${props.classModifier} ${
      props.children ? 'hasinfobulle' : ''
    }`,
    inputFieldClassModifier: `${props.classModifier} ${
      props.disabled ? 'disabled' : ''
    }`,
  })
);
