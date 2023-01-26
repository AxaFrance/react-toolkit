import React from 'react';
import { getClickId } from '@axa-fr/react-toolkit-core';
import HeaderCore, { HeaderCoreProps } from './HeaderCore';

export type HeaderProps = HeaderCoreProps;

const setWithProps = (props: HeaderProps) => ({
  ...props,
  children: props.title,
});

const Header = (props: HeaderProps) => {
  const propsWithClickId = getClickId<HeaderCoreProps>({
    option: {
      event: ['onCancel'],
    },
    props,
  });
  const customProps = setWithProps(propsWithClickId);

  return <HeaderCore {...customProps} />;
};

export default Header;
