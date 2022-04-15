import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
import { useOptionClassName, withInput } from '@axa-fr/react-toolkit-form-core';

type RadioItemProps = Omit<
  ComponentPropsWithRef<'input'>,
  'checked' | 'type'
> & {
  classModifier?: string;
  label?: string;
  isChecked?: boolean;
};

const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  (
    {
      className,
      disabled,
      value = '',
      id,
      isChecked,
      children,
      label,
      classModifier = '',
      ...otherProps
    },
    inputRef
  ) => {
    const newLabel = children || label;
    const newId = useId(id); // id is required on this component
    const optionClassName = useOptionClassName(
      className,
      classModifier,
      disabled,
      'af-form__radio'
    );

    return (
      <div className={optionClassName} key={value as string}>
        <input
          {...otherProps}
          className="af-form__input-radio"
          id={newId}
          type="radio"
          value={value}
          checked={isChecked}
          ref={inputRef}
        />
        <label className="af-form__label" htmlFor={newId}>
          <span className="af-form__description">{newLabel}</span>
        </label>
      </div>
    );
  }
);

export default withInput<RadioItemProps>()(RadioItem);
