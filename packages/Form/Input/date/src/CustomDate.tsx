import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-form-core';

type Props = Omit<ComponentPropsWithRef<'input'>, 'value' | 'onChange'> & {
  classModifier?: string;
  onChange?: (date: Date) => void;
  locale?: string | string[];
  value: Date;
};

const Date = forwardRef<HTMLInputElement, Props>(
  (
    { className, classModifier, value, locale, onChange, ...otherProps },
    ref
  ) => {
    const monthFormatted = `0${value.getMonth() + 1}`.slice(-2);
    const dayFormatted = `0${value.getDate()}`.slice(-2);
    const currentValue = `${value.getFullYear()}-${monthFormatted}-${dayFormatted}`;

    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      'af-form__input-date'
    );

    return (
      <input
        className={componentClassName}
        type="date"
        value={currentValue}
        onChange={(e) => {
          const newValue = e.currentTarget.valueAsDate;
          onChange && newValue && onChange(newValue);
        }}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Date;
