import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  Field,
  FieldInput,
  HelpMessage,
  useOptionsWithId,
} from '@axa-fr/react-toolkit-form-core';

import Switch from './Switch';

type Props = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithoutRef<typeof Switch> & {
    helpMessage?: ReactNode;
    disabled?: Boolean;
  };

const SwitchInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  className,
  forceDisplayMessage,
  options,
  ...switchProps
}: Props) => {
  const newOptions = useOptionsWithId(options);
  const firstId = (newOptions[0] || {}).id;

  return (
    <Field
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      id={firstId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput className="af-form__text">
        <Switch {...switchProps} options={newOptions} />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default SwitchInput;
