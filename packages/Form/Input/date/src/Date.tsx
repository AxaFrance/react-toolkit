import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = Omit<ComponentPropsWithRef<'input'>, 'value' | 'onChange'> & {
  /** A modifier for specified className */
  classModifier?: string;
  onChange?: (date: Date) => void;
  /** A native JavaScript Date object set as initiale value */
  value?: Date;
};

const Date = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, value, onChange, ...otherProps }, ref) => {
    const componentClassName = useComponentClassName(
      className,
      classModifier,
      'af-form__input-date'
    );

    let currentValue;
    if (value) {
      const monthFormatted = `0${value.getMonth() + 1}`.slice(-2);
      const dayFormatted = `0${value.getDate()}`.slice(-2);
      currentValue = `${value.getFullYear()}-${monthFormatted}-${dayFormatted}`;
    }

    return (
      <input
        className={componentClassName}
        type="date"
        defaultValue={currentValue}
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
