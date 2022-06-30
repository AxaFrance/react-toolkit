import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  OptionHTMLAttributes,
} from 'react';

type Props = ComponentPropsWithoutRef<'select'> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
};

const SelectBase = forwardRef<HTMLSelectElement, Props>(
  ({ options, onChange, id, ...otherProps }, inputRef) => (
    <div className="af-form__select-container">
      <select
        {...otherProps}
        id={id}
        className="af-form__input-select"
        ref={inputRef}>
        {options.map(({ label, ...opt }) => (
          <option key={opt.value.toString()} {...opt}>
            {label}
          </option>
        ))}
      </select>
      <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
    </div>
  )
);

export default SelectBase;
