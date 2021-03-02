import React, { AllHTMLAttributes, forwardRef, MutableRefObject } from 'react';
import {
  defaultOnChange,
  CustomFormEvent,
  InputManager,
  withOptionClassName,
} from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__checkbox';

type Props = Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (e: CustomFormEvent) => void;
  optionClassName: string;
};
const CheckboxItem = forwardRef(
  (
    {
      optionClassName,
      disabled = true,
      value,
      id,
      children,
      label,
      onChange,
      ...otherProps
    }: Props,
    inputRef: MutableRefObject<HTMLInputElement>
  ) => {
    const newLabel = children || label;
    const newId = InputManager.getInputId(id); // id is require on this component
    return (
      <div className={optionClassName}>
        <input
          {...otherProps}
          className="af-form__input-checkbox"
          value={value}
          onChange={defaultOnChange(onChange)}
          id={newId}
          disabled={disabled}
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
  }
);

export default withOptionClassName<Props>(defaultClassName)(CheckboxItem);
