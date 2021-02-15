import React, { InputHTMLAttributes } from 'react';
import { InputManager, ClassManager } from '@axa-fr/react-toolkit-core';
import {
  CustomFormEvent,
  defaultOnChange,
} from '@axa-fr/react-toolkit-form-core';

export interface RadioItemProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  optionClassName?: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label: string;
  onChange?: (event: CustomFormEvent) => void;
  classModifier?: string;
}

const RadioItem: React.FC<RadioItemProps> = ({
  className = defaultClassName,
  disabled,
  value = '',
  id,
  inputRef,
  readOnly,
  onChange,
  children,
  label,
  classModifier = '',
  optionClassName,
  ...otherProps
}) => {
  const newLabel = children || label;
  const newId = InputManager.getInputId(id); // id is required on this component
  const classModifierWithDisabled = `${classModifier}${
    disabled ? ' disabled' : ''
  }`;
  const divOptionClassName = ClassManager.getComponentClassName(
    className,
    classModifierWithDisabled,
    defaultClassName
  );
  return (
    <div className={`${divOptionClassName} ${classModifier}`}>
      <input
        className="af-form__input-radio"
        value={value}
        id={newId}
        type="radio"
        onChange={defaultOnChange(onChange)}
        ref={inputRef}
        disabled={disabled}
        {...otherProps}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{newLabel}</span>
      </label>
    </div>
  );
};

export const defaultClassName = 'af-form__radio';

export default RadioItem;
