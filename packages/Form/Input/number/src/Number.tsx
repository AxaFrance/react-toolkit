import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useId, getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

type Props = ComponentPropsWithRef<'input'> & {
  classModifier?: string;
};
const CustomNumber = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, ...otherProps }, inputRef) => {
    const inputId = useId(id);
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      'af-form__input-text'
    );
    return (
      <input
        className={componentClassName}
        id={inputId}
        type="number"
        ref={inputRef}
        required={classModifier?.includes('required')}
        {...otherProps}
      />
    );
  }
);

export default withIsVisible(CustomNumber);
