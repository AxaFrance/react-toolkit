import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  FieldInput,
  HelpMessage,
  InputManager,
} from '@axa-fr/react-toolkit-form-core';

import Switch from './Switch';

interface Props
  extends ComponentProps<typeof Field>,
    ComponentProps<typeof Switch> {
  helpMessage?: string;
  children?: ReactNode;
}

const SwitchInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
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
  const newOptions = InputManager.getOptionsWithId(options);
  const firstId = InputManager.getFirstId(newOptions);
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
