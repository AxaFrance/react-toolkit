import React from 'react';
import { getComponentClassName, getClickId } from '@axa-fr/react-toolkit-core';

export type TitleComponentProps = {
  enable?: boolean | null;
  active: boolean;
  className?: string;
  classModifier?: string;
  id?: string;
  children?: React.ReactNode;
};

export type TitleHandlerProps = {
  onChange: React.MouseEventHandler<HTMLButtonElement>;
};

export type TitleProps = TitleComponentProps & TitleHandlerProps;

const setWithProps = (props: TitleProps) => ({
  ...props,
  classModifier: (props.classModifier || '').concat(
    (props.enable === false ? ' disabled' : '').concat(
      props.active ? ' active' : ''
    )
  ),
});

const Title = ({
  className,
  onChange,
  children,
  id,
  classModifier,
}: TitleProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-tabs__item'
  );
  return (
    <li className={componentClassName}>
      <button
        type="button"
        id={id}
        className="af-tabs__link"
        onClick={onChange}>
        {children}
      </button>
    </li>
  );
};

const TitleWithProps = (props: TitleProps) => {
  const propsWithClickId = getClickId<TitleProps>({
    option: {
      event: ['onChange'],
    },
    props,
  });
  const customProps = setWithProps(propsWithClickId);

  return <Title {...customProps} />;
};

TitleWithProps.displayName = 'Title';

export default TitleWithProps;
