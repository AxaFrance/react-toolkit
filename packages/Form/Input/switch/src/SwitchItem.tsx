import React, { ComponentPropsWithoutRef } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
import { Option, getOptionClassName } from '@axa-fr/react-toolkit-form-core';

const defaultClassName = 'af-form__radio-custom';

type Props = Omit<
  ComponentPropsWithoutRef<'input'>,
  'value' | 'checked' | 'disabled'
> &
  Option & {
    classModifier?: string;
    isChecked?: boolean;
  };

const SwitchItem = ({
  id,
  label,
  className,
  classModifier,
  disabled,
  isChecked,
  ...radioProps
}: Props) => {
  const newId = useId(id);
  const classNameDisabled = getOptionClassName(
    className,
    classModifier,
    defaultClassName,
    disabled
  );
  const classNameChecked = isChecked
    ? `${defaultClassName}--checked`
    : undefined;
  return (
    <div
      className={[classNameDisabled, classNameChecked]
        .filter((e) => !!e)
        .join(' ')}>
      <input
        {...radioProps}
        checked={isChecked}
        disabled={disabled}
        className="af-form__input-radio"
        id={newId}
        type="radio"
        required={classModifier?.includes('required')}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__description">{label}</span>
      </label>
    </div>
  );
};

export default SwitchItem;
