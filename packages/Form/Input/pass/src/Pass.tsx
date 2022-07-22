import React, { ComponentPropsWithRef, forwardRef, MouseEvent } from 'react';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type Props = Omit<ComponentPropsWithRef<'input'>, 'type' | 'role'> & {
  type?: 'text' | 'password';
  classModifier?: string;
  onToggleType: () => void;
};

const Pass = forwardRef<HTMLInputElement, Props>(
  (
    {
      onToggleType,
      type = 'password',
      className,
      classModifier,
      ...inputProps
    },
    inputRef
  ) => {
    const componentClassName = useComponentClassName(
      className,
      classModifier,
      'af-form__pass'
    );

    return (
      <div className={componentClassName}>
        <div className="af-form__pass-strength" />
        <input
          {...inputProps}
          role={type === 'password' ? 'password' : 'textbox'}
          className="af-form__input-text"
          type={type}
          ref={inputRef}
        />
        <button
          className="af-form__pass-btn"
          type="button"
          aria-label="show password"
          onClick={onToggleType}>
          <i
            className={`glyphicon glyphicon-eye${
              type === 'text' ? '-close' : '-open'
            }`}
          />
        </button>
      </div>
    );
  }
);

const handlers = {
  onToggleType:
    ({ onToggleType }: Props) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onToggleType();
    },
};

export default withInput<Props>(handlers)(Pass);
