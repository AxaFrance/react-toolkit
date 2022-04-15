import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';

type Props = ComponentPropsWithRef<'input'> & {
  classModifier?: string;
};
const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = useComponentClassName(
      className,
      classModifier,
      'af-form__input-text'
    );
    return (
      <input
        {...otherProps}
        className={componentClassName}
        type="text"
        ref={inputRef}
      />
    );
  }
);

export default withInput<Props>()(Text);
