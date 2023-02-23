import {
  Field,
  FieldInput,
  HelpMessage,
  useInputClassModifier,
  useOptionsWithId,
} from '@axa-fr/react-toolkit-form-core';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import Switch from './Switch';

type Props = ComponentPropsWithoutRef<typeof Field> &
  ComponentPropsWithoutRef<typeof Switch> & {
    helpMessage?: ReactNode;
    disabled?: Boolean;
  };

/**
 * @deprecated This component is no longer maintained and shouldn't be used. It will be removed in the next version.
 */
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
  disabled,
  ...switchProps
}: Props) => {
  const newOptions = useOptionsWithId(options);
  const firstId = (newOptions[0] || {}).id;
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    !!children
  );

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
      classNameContainerInput={classNameContainerInput}
      roleContainer="radiogroup"
      ariaLabelContainer={label.toString()}
      isLabelContainerLinkedToInput={false}>
      <FieldInput
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Switch
          {...switchProps}
          options={newOptions}
          disabled={disabled}
          classModifier={inputClassModifier}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default SwitchInput;
