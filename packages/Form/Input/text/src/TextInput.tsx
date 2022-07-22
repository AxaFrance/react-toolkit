import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import Text from './Text';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Text> & {
    helpMessage?: ReactNode;
  };

const TextInput = ({
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
  disabled,
  ...inputTextProps
}: Props) => {
  const inputId = useId(id);
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
      id={inputId}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Text
          id={inputId}
          classModifier={inputClassModifier}
          disabled={disabled}
          {...inputTextProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default TextInput;
