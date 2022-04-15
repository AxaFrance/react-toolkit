import React, { AllHTMLAttributes, MutableRefObject, ReactNode } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
import { useOptionClassName, withInput } from '@axa-fr/react-toolkit-form-core';

type Props = Omit<AllHTMLAttributes<HTMLInputElement>, 'type'> & {
  inputRef?: MutableRefObject<HTMLInputElement>;
  children?: ReactNode;
  isChecked?: boolean;
  classModifier?: string;
};
const CheckboxItem = ({
  disabled = true,
  value = '',
  id,
  children,
  label,
  isChecked,
  className,
  classModifier,
  inputRef,
  ...otherProps
}: Props) => {
  const newLabel = children || label;
  const newId = useId(id); // id is require on this component
  const optionClassName = useOptionClassName(
    className,
    classModifier,
    disabled,
    'af-form__checkbox'
  );
  return (
    <div className={optionClassName}>
      <input
        {...otherProps}
        className="af-form__input-checkbox"
        value={value}
        id={newId}
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        ref={inputRef}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__indicator">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-form__description">{newLabel}</span>
      </label>
    </div>
  );
};

export default withInput<Props>()(CheckboxItem);
