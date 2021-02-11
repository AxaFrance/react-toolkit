import React, { ComponentProps, useState } from 'react';
import {
  CustomFormEvent,
  withComponentClassName,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import SelectBase from './SelectBase';

type Props = ComponentProps<typeof SelectBase> & {
  classModifier?: string;
  componentClassName?: string;
  forceDisplayPlaceholder?: boolean;
  placeholder?: string;
};

const Select = ({
  componentClassName,
  onChange,
  forceDisplayPlaceholder = false,
  value,
  placeholder = '- Select -',
  options,
  id,
  ...otherProps
}: Props) => {
  const [hasHandleChangeOnce, setHasHandleChangeOnce] = useState(false);

  const onChangeSelect = (e: CustomFormEvent) => {
    onChange(e);
    setHasHandleChangeOnce(!forceDisplayPlaceholder);
  };

  const newOptions =
    !hasHandleChangeOnce && !value
      ? [{ value: '', label: placeholder }, ...options]
      : options;
  const inputId = InputManager.getInputId(id);
  return (
    <SelectBase
      id={inputId}
      value={value}
      options={newOptions}
      onChange={onChangeSelect}
      className={componentClassName}
      {...otherProps}
    />
  );
};

const enhance = withComponentClassName<Props>('af-form__select-container')(
  Select
);
export default enhance;
