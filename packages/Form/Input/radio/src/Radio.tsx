import React, { ComponentPropsWithoutRef } from 'react';
import { Option, withInput } from '@axa-fr/react-toolkit-form-core';
import RadioItem from './RadioItem';

type RadioProps = Omit<
  ComponentPropsWithoutRef<typeof RadioItem>,
  'id' | 'label' | 'className'
> & {
  options: Option[];
  mode?: 'classic' | 'default' | 'inline';
};

const Radio = ({
  classModifier,
  options,
  value = '',
  mode = 'default',
  children,
  disabled,
  ...otherProps
}: RadioProps) => {
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

const getClassNameMode = (mode: RadioProps['mode']) => {
  switch (mode) {
    case 'classic':
      return 'af-form__radio';
    case 'inline':
      return 'af-form__radio-inline';
    default:
      return 'af-form__radio-custom';
  }
};

export default withInput<RadioProps>()(Radio);
