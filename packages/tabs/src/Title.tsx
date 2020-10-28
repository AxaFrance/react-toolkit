import React from 'react';
import {
  withClassDefault,
  withClickId,
  WithClassModifierOptions,
  withClassModifier,
  compose,
  withProps,
  identity,
} from '@axa-fr/react-toolkit-core';

const onChangeEvent = 'onChange';

export interface TitleComponentProps {
  enable?: boolean | null;
  active: boolean;
  className?: string;
  classModifier?: string;
  id?: string;
  children?: React.ReactNode;
}

export interface TitleHandlerProps {
  onChange: React.MouseEventHandler<HTMLButtonElement>;
}

const Title = ({ className, onChange, children, id }: TitleProps) => (
  <li className={className}>
    {/* eslint-disable-next-line react/button-has-type */}
    <button id={id} className="af-tabs__link" onClick={onChange}>
      {children}
    </button>
  </li>
);

const DEFAULT_CLASSNAME = 'af-tabs__item';

export type TitleProps = TitleComponentProps &
  TitleHandlerProps &
  WithClassModifierOptions;

const setWithProps = (props: TitleProps) => ({
  ...props,
  classModifier: (props.classModifier || '').concat(
    (props.enable === false ? ' disabled' : '').concat(
      props.active ? ' active' : ''
    )
  ),
});

const enchance = compose(
  identity<TitleProps>(),
  withProps(setWithProps),
  withClickId({ event: [onChangeEvent] }),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
)(Title);

enchance.displayName = 'Title';

export default enchance;
