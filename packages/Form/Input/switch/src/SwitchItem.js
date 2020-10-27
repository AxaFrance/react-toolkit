import React from 'react';

import { InputManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-form__radio-custom';

const SwitchItem = (props) => {
  const {
    disabled,
    value,
    isChecked,
    id,
    name,
    onChange,
    onBlur,
    onFocus,
    label,
  } = props;
  const newId = InputManager.getInputId(id);
  const newClassName = disabled
    ? `${defaultClassName} af-form__radio-custom--disabled`
    : defaultClassName;
  return (
    <div className={newClassName} key={value}>
      <input
        className="af-form__input-radio"
        name={name}
        id={newId}
        type="radio"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        checked={isChecked}
        disabled={disabled}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{label}</span>
      </label>
    </div>
  );
};

export default SwitchItem;
