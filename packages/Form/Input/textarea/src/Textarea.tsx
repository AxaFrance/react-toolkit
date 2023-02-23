import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

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

export default withIsVisible(Textarea);
