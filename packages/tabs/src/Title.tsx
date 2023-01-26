import React from 'react';
import { withClickId, getComponentClassName } from '@axa-fr/react-toolkit-core';

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

export type TitleProps = TitleComponentProps & TitleHandlerProps;

const setWithProps = (props: TitleProps) => ({
  ...props,
  classModifier: (props.classModifier || '').concat(
    (props.enable === false ? ' disabled' : '').concat(
      props.active ? ' active' : ''
    )
  ),
});

const TitleWithClickId = withClickId<TitleProps>({ event: ['onChange'] })(
  Title
);

const TitleWithProps = (props: TitleProps) => {
  const customProps = setWithProps(props);
  return <TitleWithClickId {...customProps} />;
};

TitleWithProps.displayName = 'Title';

export default TitleWithProps;
