import { withInput } from '@axa-fr/react-toolkit-form-core';
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
} from 'react';

type Props = ComponentPropsWithoutRef<'select'> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[] | SelectOptGroupProps[];
};

const SelectBase = forwardRef<HTMLSelectElement, Props>(
  ({ options, id, ...otherProps }, inputRef) => (
    <div className="af-form__select-container">
      <select
        {...otherProps}
        id={id}
        className="af-form__input-select"
        ref={inputRef}>
        <OptionOrOptGroup>{options}</OptionOrOptGroup>
      </select>
      <span aria-controls={id} className="glyphicon glyphicon-menu-down" />
    </div>
  )
);

type OptionOrOptGroupProps = {
  children: OptionHTMLAttributes<HTMLOptionElement>[] | SelectOptGroupProps[];
};

const OptionOrOptGroup = ({ children }: OptionOrOptGroupProps) => (
  <>
    {children.map((item) => {
      if ((item as SelectOptGroupProps).subOptions) {
        const { subOptions } = item as SelectOptGroupProps;
        return <SelectOptGroup label={item.label} subOptions={subOptions} />;
      }

      return <SelectOption label={item.label} {...item} />;
    })}
  </>
);

type SelectOptGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement> & {
  subOptions: OptionHTMLAttributes<HTMLOptionElement>[];
};

const SelectOptGroup = forwardRef<HTMLOptGroupElement, SelectOptGroupProps>(
  ({ label, subOptions, ...optgroup }) => (
    <optgroup label={label} {...optgroup}>
      {subOptions.map((item: React.OptionHTMLAttributes<HTMLOptionElement>) => (
        <SelectOption label={item.label} {...item} />
      ))}
    </optgroup>
  )
);

type SelectOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ label, ...option }) => (
    <option key={option.value?.toString()} {...option}>
      {label}
    </option>
  )
);

export default withInput<Props>()(SelectBase);
