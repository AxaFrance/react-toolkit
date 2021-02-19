import React, { ComponentProps, ReactNode } from 'react';
import {
  Field,
  HelpMessage,
  FieldInput,
  withInputClassModifier,
  InputManager,
} from '@axa-fr/react-toolkit-form-core';

import Textarea from './Textarea';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Textarea> & {
    inputFieldClassModifier: string;
    inputClassModifier: string;
    helpMessage?: string;
    children?: ReactNode;
  };

const TextareaInput = (props: Props) => {
  const {
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
    inputFieldClassModifier,
    inputClassModifier,
    ...textareaProps
  } = props;

  const rowModifier = `${classModifier} label-top`;
  const inputId = InputManager.getInputId(id);
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
          id={inputId}
          rows={rows}
          cols={cols}
          classModifier={inputClassModifier}
          {...textareaProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

const enhance = withInputClassModifier(TextareaInput);
export default enhance;
