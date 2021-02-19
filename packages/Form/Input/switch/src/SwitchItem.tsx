import React, { InputHTMLAttributes, ReactNode } from 'react';
import { InputManager } from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__radio-custom';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value?: string;
  label: ReactNode;
}

const SwitchItem = ({ label, ...radioProps }: Props) => {
  const newId = InputManager.getInputId(radioProps.id);
  const classNameDisabled = radioProps.disabled
    ? `${defaultClassName}--disabled`
    : undefined;
  const classNameChecked = radioProps.checked
    ? `${defaultClassName}--checked`
    : undefined;
  return (
    <div
      className={[defaultClassName, classNameDisabled, classNameChecked]
        .filter((e) => !!e)
        .join(' ')}>
      <input
        {...radioProps}
        className="af-form__input-radio"
        id={newId}
        type="radio"
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{label}</span>
      </label>
    </div>
  );
};

export default SwitchItem;
