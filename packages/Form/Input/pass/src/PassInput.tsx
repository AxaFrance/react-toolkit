import React, { ComponentProps, useState, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';
import Pass from './Pass';

const strengthList: Record<number, string> = {
  0: 'bad',
  1: 'okay',
  2: 'good',
  3: 'verygood',
  4: 'excellent',
};

const calculateStrenght = (score: string) => {
  if (score === null) {
    return null;
  }
  let strength = Number(score) ?? 0;
  if (strength > 4) {
    strength = 4;
  }
  if (strength < 0) {
    strength = 0;
  }
  return strengthList[strength];
};

type PassProps = ComponentProps<typeof Pass>;
type Props = ComponentProps<typeof Field> &
  Omit<PassProps, 'onToggleType' | 'type'> & {
    helpMessage?: ReactNode;
    score?: string;
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
  score,
  ...passProps
}: Props) => {
  const strength = calculateStrenght(score);
  const classModifierStrength =
    strength !== null ? `${classModifier} ${strength}` : classModifier;

  const [type, setType] = useState<PassProps['type']>('password');
  const inputId = useId(id);
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifierStrength,
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
      id={inputId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__pass-container"
        classModifier={inputFieldClassModifier}>
        <Pass
          {...passProps}
          type={type}
          id={inputId}
          disabled={disabled}
          classModifier={inputClassModifier}
          onToggleType={() =>
            setType(type === 'password' ? 'text' : 'password')
          }
        />
        {children}
        <HelpMessage message={helpMessage} isVisible={!message} />
      </FieldInput>
    </Field>
  );
};

export default PassInput;
