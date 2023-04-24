import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

type Props = ComponentPropsWithRef<'input'> & {
  classModifier?: string;
};

const Text = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
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

export default withIsVisible(Text);
