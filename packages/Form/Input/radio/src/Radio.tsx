import React, { ComponentProps } from 'react';
import type { Option } from '@axa-fr/react-toolkit-core';
import RadioItem from './RadioItem';
import RadioModes from './RadioModes';

interface RadioProps
  extends Omit<ComponentProps<typeof RadioItem>, 'id' | 'label'> {
  className?: string;
  classModifier?: string;
  options: Option[];
  mode?: string;
}

const Radio: React.FC<RadioProps> = ({
  className,
  classModifier,
  options,
  value = '',
  name,
  mode = RadioModes.default,
  children,
  disabled,
  ...otherProps
}) => {
  const classNameWithMode = getClassName(mode);
  const optionItems = options.map((option: Option) => {
    const isChecked = option.value === value;
    return (
      <RadioItem
        {...otherProps}
        key={option.value}
        id={option.id}
        value={option.value}
        label={option.label}
        checked={isChecked}
        disabled={option.disabled || disabled}
        className={classNameWithMode}
        classModifier={classModifier}
        optionClassName={className}>
        {children}
      </RadioItem>
    );
  });
  return <>{optionItems}</>;
};

const getClassName = (mode: string): string => {
  switch (mode) {
    case RadioModes.classic:
      return 'af-form__radio';
    case RadioModes.inline:
      return 'af-form__radio-inline';
    default:
      return 'af-form__radio-custom';
  }
};

export default Radio;
