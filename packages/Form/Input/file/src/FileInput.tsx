import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';
import {
  FieldInput,
  HelpMessage,
  Field,
  withInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import FileTable from './FileTable';
import File from './File';

type Props = ComponentProps<typeof Field> &
  Pick<ComponentPropsWithoutRef<typeof FileTable>, 'values' | 'errors'> &
  ComponentProps<typeof File> & {
    inputFieldClassModifier: string;
    inputClassModifier: string;
    helpMessage?: string;
  };
const FileInput = ({
  values,
  name,
  onChange,
  classModifier,
  message,
  children,
  helpMessage,
  id,
  forceDisplayMessage,
  messageType,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  isVisible,
  className,
  errors,
  inputFieldClassModifier,
  inputClassModifier,
  ...otherFileProps
}: Props) => {
  const onDeleteClick = (selectedId: string, selectInputId: string) => {
    const newValues = values.filter((element) => element.id !== selectedId);
    onChange({
      values: newValues,
      name,
      id: selectInputId,
    });
  };
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
        className="af-form__file"
        classModifier={inputFieldClassModifier}>
        <File
          id={inputId}
          name={name}
          onChange={onChange}
          classModifier={inputClassModifier}
          {...otherFileProps}
        />
        {children}
      </FieldInput>
      <HelpMessage message={helpMessage} isVisible={!message} />
      <FileTable
        errors={errors}
        values={values}
        onClick={(selectedId) => onDeleteClick(selectedId, inputId)}
        classModifier={classModifier}
      />
    </Field>
  );
};

export default withInputClassModifier(FileInput);
