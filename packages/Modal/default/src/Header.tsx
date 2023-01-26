import { withClickId } from '@axa-fr/react-toolkit-core';
import React from 'react';
import HeaderCore, { HeaderCoreProps } from './HeaderCore';

export type HeaderProps = HeaderCoreProps;

const setWithProps = (props: HeaderProps) => ({
  ...props,
  children: props.title,
});

const HeaderWithProps = (props: HeaderProps) => {
  const customProps = setWithProps(props);
  return <HeaderCore {...customProps} />;
};

const Header = withClickId<HeaderCoreProps>({ event: ['onCancel'] })(
  HeaderWithProps
);
Header.displayName = 'Header';

export default Header;
