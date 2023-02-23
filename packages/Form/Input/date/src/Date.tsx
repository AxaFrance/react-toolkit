import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import React, { ComponentPropsWithRef, forwardRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'input'>, 'value'> & {
  /** A modifier for specified className */
  classModifier?: string;
  /** A native JavaScript Date object set as initiale value */
  value?: Date;
};

const Date = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, value, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
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
        ref={ref}
        required={classModifier?.includes('required')}
        {...otherProps}
      />
    );
  }
);

export default Date;
