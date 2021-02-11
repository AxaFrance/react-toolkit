import React, {
  InputHTMLAttributes,
  OptionHTMLAttributes,
  RefObject,
} from 'react';
import {
  CustomFormEvent,
  defaultOnChange,
} from '@axa-fr/react-toolkit-form-core';

type Props = Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  onChange?: (event: CustomFormEvent) => void;
  inputRef?: RefObject<HTMLSelectElement>;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
};

const SelectBase = ({ options, inputRef, onChange, ...otherProps }: Props) => (
  <div className="af-form__select-container">
    <select
      {...otherProps}
      className="af-form__input-select"
      ref={inputRef}
      onChange={defaultOnChange(onChange)}>
      {options.map(({ label, ...opt }) => (
        <option key={opt.value.toString()} {...opt}>
          {label}
        </option>
      ))}
    </select>
    <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
  </div>
);

export default SelectBase;
