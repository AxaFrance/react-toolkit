import React, { ComponentPropsWithRef, useState } from 'react';
import { useId } from '@axa-fr/react-toolkit-core';
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
  ...otherProps
}: Props) => {
  const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);

  const newOptions = !hasHandleChangeOnce
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
    ({
      name,
      id,
      onChange,
    }: Omit<Props, 'onChange'> & {
      onChange: (data: { id: string; name: string; value: string }) => void;
    }) =>
    (e: any) => {
      onChange &&
        onChange({
          value: e.value,
          name,
          id,
        });
    },
};

export default withInput(handlers)(Select);
