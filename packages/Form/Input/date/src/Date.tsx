import React, { ChangeEvent, ComponentPropsWithRef, forwardRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';

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

type OnChange = {
  onChange: (data: { value: Date; name: string; id: string }) => void;
};

const handlers = {
  onChange:
    ({ onChange, name, id }: Omit<Props, 'onChange'> & OnChange) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.valueAsDate;
      onChange &&
        newValue &&
        onChange({
          value: newValue,
          name,
          id,
        });
    },
};

export default withInput(handlers)(Date);
