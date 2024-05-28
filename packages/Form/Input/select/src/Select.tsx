import { useId } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import React, { ComponentPropsWithRef, useMemo, useState } from 'react';
import SelectBase from './SelectBase';

type Props = ComponentPropsWithRef<typeof SelectBase> & {
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

  const newOptions = useMemo(
    () =>
      hasHandleChangeOnce || otherProps.defaultValue !== undefined
        ? options
        : [{ value: '', label: placeholder }, ...options],
    [hasHandleChangeOnce, options, otherProps.defaultValue, placeholder]
  );

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
