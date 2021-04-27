import React, { ComponentProps, useState } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  InputManager,
  withInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';

import Pass from './Pass';
import { StrengthEnum } from './Constant';

type Strength = 'bad' | 'okay' | 'good' | 'verygood' | 'excellent';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Pass> & {
    helpMessage?: string;
    inputClassModifier: string;
    inputFieldClassModifier: string;
  };

const PassInput = ({
  message,
  children,
  helpMessage,
  id,
  disabled,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  classModifier,
  classNameContainerLabel,
  classNameContainerInput,
  inputFieldClassModifier,
  inputClassModifier,
  ...passProps
}: Props) => {
  const inputId = InputManager.getInputId(id);
  return (
    <Field
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      id={inputId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__pass-container"
        classModifier={inputFieldClassModifier}>
        <Pass
          {...passProps}
          id={inputId}
          disabled={disabled}
          classModifier={inputClassModifier}
        />
        {children}
        <HelpMessage message={helpMessage} isVisible={!message} />
      </FieldInput>
    </Field>
  );
};

const EnhancedComponent = ({
  onChange,
  onToggleType,
  score,
  ...props
}: Props & { score?: number }) => {
  const [type, setType] = useState<'text' | 'password'>('password');
  const [strength, setStrength] = useState<Strength>();

  const toggleType = () => {
    const newType = type === 'password' ? 'text' : 'password';
    setType(newType);
    onToggleType();
  };

  return (
    <PassInput
      {...props}
      type={type}
      inputClassModifier={strength}
      onChange={(e) => {
        onChange && onChange(e);
        setStrength(StrengthEnum[score] as Strength);
      }}
      onToggleType={toggleType}
    />
  );
};

export default withInputClassModifier(EnhancedComponent);
