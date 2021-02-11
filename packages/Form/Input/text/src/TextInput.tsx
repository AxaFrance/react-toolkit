import React, { ComponentProps } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  withInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import { ComponentType } from 'enzyme';
import Text from './Text';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Text> & {
    inputFieldClassModifier: string;
    inputClassModifier: string;
    helpMessage?: string;
    children?: ReactNode;
  };

const TextInput = ({
  classModifier,
  message,
  children,
  helpMessage,
  id,
  classNameContainerLabel,
  classNameContainerInput,
  onChange,
  label,
  messageType,
  isVisible,
  className,
  forceDisplayMessage,
  inputFieldClassModifier,
  inputClassModifier,
  ...inputTextProps
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
        className="af-form__text"
        classModifier={inputFieldClassModifier}>
        <Text
          id={inputId}
          onChange={onChange}
          classModifier={inputClassModifier}
          {...inputTextProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

const enhanced = withInputClassModifier(TextInput);
export default enhanced;
