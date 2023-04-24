import React, { ComponentPropsWithRef, useState } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
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
  ...otherProps
}: Props) => {
  const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);

  const newOptions = hasHandleChangeOnce
    ? options
    : [{ value: '', label: placeholder }, ...options];

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
    />
  );
};

type SelectProps = Props & { mode?: 'default' | 'base' };
const Select = ({ mode = 'default', children, ...props }: SelectProps) => {
  const DynamicComponent = mode === 'default' ? SelectDefault : SelectBase;
  return <DynamicComponent {...props}>{children}</DynamicComponent>;
};

export default Select;
