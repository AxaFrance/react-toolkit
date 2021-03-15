import React, {
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
} from 'react';
import {
  ClassManager,
  CustomFormEvent,
  defaultOnChange,
  InputManager,
} from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__input-number';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  classModifier?: string;
  onChange: (e: CustomFormEvent) => void;
};
const CustomNumber = forwardRef(
  (
    { id, className, classModifier, onChange, ...otherProps }: Props,
    inputRef: MutableRefObject<HTMLInputElement>
  ) => {
    const inputId = InputManager.getInputId(id);
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    return (
      <input
        className={componentClassName}
        id={inputId}
        type="number"
        onChange={defaultOnChange(onChange)}
        ref={inputRef}
        {...otherProps}
      />
    );
  }
);

export default CustomNumber;
