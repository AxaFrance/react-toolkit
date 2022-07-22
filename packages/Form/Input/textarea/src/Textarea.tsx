import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithRef<'textarea'> & {
  classModifier?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = useComponentClassName(
      className,
      classModifier,
      'af-form__input-textarea'
    );
    return (
      <textarea {...otherProps} className={componentClassName} ref={inputRef} />
    );
  }
);

export default withInput<Props>()(Textarea);
