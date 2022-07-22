import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';
import {
  FieldInput,
  HelpMessage,
  Field,
  useInputClassModifier,
} from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import FileTable from './FileTable';
import File from './File';

type Props = ComponentProps<typeof Field> &
  Pick<ComponentPropsWithoutRef<typeof FileTable>, 'values' | 'errors'> &
  ComponentProps<typeof File> & {
    fileLabel?: string;
    helpMessage?: ReactNode;
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
  fileLabel,
  disabled,
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
        className="af-form__file"
        classModifier={inputFieldClassModifier}>
        <File
          id={inputId}
          name={name}
          onChange={onChange}
          disabled={disabled}
          classModifier={inputClassModifier}
          label={fileLabel}
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

export default FileInput;
