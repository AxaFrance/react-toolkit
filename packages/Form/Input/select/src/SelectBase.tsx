import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  OptionHTMLAttributes,
} from 'react';

type Props = ComponentPropsWithoutRef<'select'> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  classModifier?: string;
};

const SelectBase = forwardRef<HTMLSelectElement, Props>(
  ({ options, id, className, classModifier, ...otherProps }, inputRef) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      'af-form__input-select'
    );
    return (
      <div className="af-form__select-container">
        <select
          {...otherProps}
          id={id}
          className={componentClassName}
          ref={inputRef}
          required={classModifier?.includes('required')}>
          {options.map(({ label, ...opt }) => (
            <option key={opt.value.toString()} {...opt}>
              {label}
            </option>
          ))}
        </select>
        <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
      </div>
    );
  }
);

export default withIsVisible(SelectBase);
