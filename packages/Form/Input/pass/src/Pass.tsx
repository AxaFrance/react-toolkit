import React, { InputHTMLAttributes, RefObject } from 'react';
import {
  withComponentClassName,
  defaultOnChange,
  CustomFormEvent,
} from '@axa-fr/react-toolkit-form-core';

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> & {
  type?: 'text' | 'password';
  inputRef?: RefObject<HTMLInputElement>;
  componentClassName?: string;
  classModifier?: string;
  onToggleType: () => void;
  onChange?: (event: CustomFormEvent) => void;
};

const Pass = ({
  componentClassName,
  onToggleType,
  onChange,
  type = 'password',
  inputRef,
  classModifier,
  ...inputProps
}: Props) => (
  <div className={componentClassName}>
    <div className="af-form__pass-strength" />
    <input
      {...inputProps}
      role={type === 'password' ? 'password' : 'textbox'}
      className="af-form__input-text"
      type={type}
      onChange={defaultOnChange(onChange)}
      ref={inputRef}
    />
    <button
      className="af-form__pass-btn"
      type="button"
      aria-label="show password"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleType();
      }}>
      <i
        className={`glyphicon glyphicon-eye${
          type === 'text' ? '-close' : '-open'
        }`}
      />
    </button>
  </div>
);

export default withComponentClassName<Props>('af-form__pass')(Pass);
