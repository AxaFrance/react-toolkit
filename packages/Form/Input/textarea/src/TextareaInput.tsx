import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import Textarea from './Textarea';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Textarea> & {
    helpMessage?: ReactNode;
  };

const TextareaInput = ({
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
  forceDisplayMessage,
  className,
  rows = 5,
  cols = 50,
  disabled,
  ...textareaProps
}: Props) => {
  const rowModifier = `${classModifier} label-top`;
  const inputId = useId(id);
  const { inputClassModifier, inputFieldClassModifier } = useInputClassModifier(
    classModifier,
    disabled,
    !!children
  );

  return (
    <Field
      label={label}
      id={inputId}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <FieldInput
        className="af-form__textarea"
        classModifier={inputFieldClassModifier}>
        <Textarea
          {...textareaProps}
          id={inputId}
          rows={rows}
          cols={cols}
          classModifier={inputClassModifier}
          disabled={disabled}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default TextareaInput;
