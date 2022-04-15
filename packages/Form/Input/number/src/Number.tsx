import React, { ChangeEvent, ComponentPropsWithRef, forwardRef } from 'react';
import { useId, useComponentClassName } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';

type Props = Omit<ComponentPropsWithRef<'input'>, 'onChange'> & {
  classModifier?: string;
  onChange?: (e: any) => void;
};
const CustomNumber = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, ...otherProps }, inputRef) => {
    const inputId = useId(id);
    const componentClassName = useComponentClassName(
      className,
      classModifier,
      'af-form__input-number'
    );
    return (
      <input
        className={componentClassName}
        id={inputId}
        type="number"
        ref={inputRef}
        {...otherProps}
      />
    );
  }
);

const handlers = {
  onChange:
    ({ onChange, name, id }: Props) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange({
        value: e.target.valueAsNumber,
        name,
        id,
      });
    },
};

export default withInput<Props>(handlers)(CustomNumber);
