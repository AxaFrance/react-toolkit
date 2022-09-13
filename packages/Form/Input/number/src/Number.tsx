import React, { ChangeEvent, ComponentPropsWithRef, forwardRef } from 'react';
import { useId, useComponentClassName } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';

type Props = ComponentPropsWithRef<'input'> & {
  classModifier?: string;
};
const CustomNumber = forwardRef<HTMLInputElement, Props>(
  ({ id, className, classModifier, ...otherProps }, inputRef) => {
    const inputId = useId(id);
    const componentClassName = useComponentClassName(
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
        {...otherProps}
      />
    );
  }
);

type CustomOnChange = {
  onChange: (data: { value: number; name: string; id: string }) => void;
};

const handlers = {
  onChange:
    ({ onChange, name, id }: Omit<Props, 'onChange'> & CustomOnChange) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange &&
        onChange({
          value: e.target.valueAsNumber,
          name,
          id,
        });
    },
};

export default withInput(handlers)(CustomNumber);
