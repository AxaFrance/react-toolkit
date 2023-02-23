import React, { ComponentPropsWithRef } from 'react';
import { Option, withIsVisible } from '@axa-fr/react-toolkit-form-core';
import RadioItem from './RadioItem';

export enum RadioModes {
  classic = 'classic',
  default = 'default',
  inline = 'inline',
}

type Props = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  'id' | 'label' | 'className'
> & {
  options: Option[];
  mode?: keyof typeof RadioModes;
};

const Radio = ({
  classModifier,
  options,
  value = '',
  mode = RadioModes.default,
  children,
  disabled,
  ...otherProps
}: Props) => {
  const classNameMode = getClassNameMode(mode);
  const optionItems = options.map((option: Option) => {
    const isChecked = option.value === value;

    return (
      <RadioItem
        {...otherProps}
        key={option.value}
        id={option.id}
        value={option.value}
        label={option.label}
        isChecked={isChecked}
        disabled={option.disabled || disabled}
        className={classNameMode}
        classModifier={classModifier}>
        {children}
      </RadioItem>
    );
  });
  return <>{optionItems}</>;
};

const getClassNameMode = (mode: Props['mode']) => {
  switch (mode) {
    case RadioModes.classic:
      return 'af-form__radio';
    case RadioModes.inline:
      return 'af-form__radio-inline';
    default:
      return 'af-form__radio-custom';
  }
};

Radio.displayName = 'EnhancedInputRadio';
export default withIsVisible(Radio);
