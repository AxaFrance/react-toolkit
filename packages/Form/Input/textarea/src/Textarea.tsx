import React, { RefObject, TextareaHTMLAttributes } from 'react';
import {
  CustomFormEvent,
  defaultOnChange,
  ClassManager,
} from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__input-textarea';
type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  onChange?: (event: CustomFormEvent) => void;
  inputRef?: RefObject<HTMLTextAreaElement>;
  classModifier?: string;
};

const Textarea = (props: Props) => {
  const {
    className,
    classModifier,
    onFocus,
    onBlur,
    inputRef,
    onChange,
    ...otherProps
  } = props;

  return (
    <textarea
      className={ClassManager.getComponentClassName(
        className,
        classModifier,
        defaultClassName
      )}
      onChange={defaultOnChange(onChange)}
      ref={inputRef}
      {...otherProps}
    />
  );
};

export default Textarea;
