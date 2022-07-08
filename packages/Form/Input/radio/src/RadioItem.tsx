import React, { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
import { getOptionClassName, withInput } from '@axa-fr/react-toolkit-form-core';

type RadioItemProps = Omit<
  ComponentPropsWithRef<'input'>,
  'checked' | 'type'
> & {
  optionClassName?: string;
  classModifier?: string;
  label?: ReactNode;
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
      optionClassName = '',
      classModifier = '',
      ...otherProps
    },
    inputRef
  ) => {
    const newLabel = children || label;
    const newId = useId(id); // id is required on this component

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
          disabled={disabled}
        />
        <label className="af-form__label" htmlFor={newId}>
          <span className="af-form__description">{newLabel}</span>
        </label>
      </div>
    );
  }
);

const propsOverride = ({ className, classModifier, disabled }: any) => ({
  optionClassName: getOptionClassName(
    className,
    classModifier,
    disabled,
    'af-form__radio'
  ),
});

export default withInput<RadioItemProps>(null, propsOverride)(RadioItem);
