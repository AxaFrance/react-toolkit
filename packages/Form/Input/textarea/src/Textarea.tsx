import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = ComponentPropsWithoutRef<'textarea'> & {
  classModifier?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      'af-form__input-textarea'
    );
    return (
      <textarea
        {...otherProps}
        className={componentClassName}
        ref={inputRef}
        required={classModifier?.includes('required')}
      />
    );
  }
);

export default withInput()(Textarea);
