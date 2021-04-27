import React, { InputHTMLAttributes, RefObject } from 'react';

import {
  ClassManager,
  CustomFormEvent,
  defaultOnChange,
} from '@axa-fr/react-toolkit-form-core';

// const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const defaultClassName = 'af-form__input-text';
type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  classModifier?: string;
  onChange?: (event: CustomFormEvent) => void;
  inputRef?: RefObject<HTMLInputElement>;
};
const Text = ({
  className,
  classModifier,
  inputRef,
  onChange,
  ...otherProps
}: Props) => (
  <input
    className={ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    )}
    type="text"
    onChange={defaultOnChange(onChange)}
    ref={inputRef}
    {...otherProps}
  />
);

export default Text;
