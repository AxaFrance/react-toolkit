import React, {
  ComponentPropsWithoutRef,
  MutableRefObject,
  ReactNode,
} from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
import { getOptionClassName } from '@axa-fr/react-toolkit-form-core';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'label'> & {
  classModifier?: string;
  optionClassName?: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
  children?: ReactNode;
  label?: ReactNode;
  isChecked?: boolean;
};

const CheckboxItem = ({
  disabled,
  value = '',
  id,
  children,
  label,
  isChecked,
  inputRef,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const newLabel = children || label;
  const newId = useId(id); // id is require on this component

  const optionClassName = getOptionClassName(
    className,
    classModifier,
    'af-form__checkbox',
    disabled
  );

  return (
    <div className={optionClassName}>
      <input
        {...otherProps}
        className="af-form__input-checkbox"
        value={value}
        id={newId}
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        ref={inputRef}
      />
      <label className="af-form__label" htmlFor={newId}>
        <span className="af-form__indicator">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-form__description">{newLabel}</span>
      </label>
    </div>
  );
};

export default CheckboxItem;
