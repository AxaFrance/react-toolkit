import React, { ComponentPropsWithRef, useState } from 'react';
import { useComponentClassName, useId } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import SelectBase from './SelectBase';

type Props = ComponentPropsWithRef<typeof SelectBase> & {
  classModifier?: string;
  forceDisplayPlaceholder?: boolean;
  placeholder?: string;
};

const SelectDefault = ({
  onChange,
  forceDisplayPlaceholder = false,
  value,
  placeholder = '- Select -',
  options,
  id,
  className,
  classModifier,
  ...otherProps
}: Props) => {
  const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);

  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-form__select-container'
  );

  const newOptions =
    !hasHandleChangeOnce && !value
      ? [{ value: '', label: placeholder }, ...options]
      : options;
  const inputId = useId(id);
  return (
    <SelectBase
      {...otherProps}
      id={inputId}
      value={value}
      options={newOptions}
      onChange={(e) => {
        onChange(e);
        setHasHandleChangeOnce(!forceDisplayPlaceholder);
      }}
      className={componentClassName}
    />
  );
};

type SelectProps = Props & { mode?: 'default' | 'base' };
const Select = ({ mode = 'default', children, ...props }: SelectProps) => {
  const DynamicComponent = mode === 'default' ? SelectDefault : SelectBase;
  return <DynamicComponent {...props}>{children}</DynamicComponent>;
};

const handlers = {
  onChange:
    ({ name, id, onChange }: any) =>
    (e: any) => {
      onChange({
        value: e.value,
        name,
        id,
      });
    },
};

export default withInput<SelectProps>(handlers)(Select);
