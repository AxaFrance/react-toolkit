import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

type Props = Omit<ComponentPropsWithRef<'input'>, 'type' | 'role'> & {
  type?: 'text' | 'password';
  classModifier?: string;
  onToggleType: React.MouseEventHandler;
};

const PassInternal = forwardRef<HTMLInputElement, Props>(
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
    const componentClassName = getComponentClassName(
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
          required={classModifier?.includes('required')}
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

export default withIsVisible(PassInternal);
