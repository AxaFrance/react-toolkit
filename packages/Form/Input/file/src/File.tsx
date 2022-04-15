import React from 'react';
import {
  DropzoneInputProps,
  DropzoneOptions,
  FileRejection,
  useDropzone,
} from 'react-dropzone';
import { createId, useComponentClassName } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';
import { withInput } from '@axa-fr/react-toolkit-form-core';

type Props = DropzoneOptions &
  Omit<DropzoneInputProps, 'onChange'> & {
    classModifier?: string;
    label?: string;
    icon?: string;
    onChange: (e: any) => void;
  };

const File = ({
  className,
  classModifier,
  id,
  name,
  disabled,
  onDrop,
  multiple = true,
  maxSize = 20000000,
  minSize = 0,
  accept,
  readOnly,
  placeholder = 'Glissez/déposez vos fichiers',
  label = 'Parcourir',
  icon = 'open',
  ...otherProps
}: Props) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    minSize,
    maxSize,
    multiple,
    accept,
    disabled,
  });

  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-form__file-input'
  );

  return (
    <div className={componentClassName}>
      <div {...getRootProps({ id, className: 'drop-box hidden-mobile' })}>
        <input {...getInputProps({ name, readOnly, ...otherProps })} />
        <div>{placeholder}</div>
      </div>
      <Button
        type="button"
        className="af-btn"
        classModifier="file hasIconLeft"
        onClick={() => open}
        disabled={disabled}>
        <i className={`glyphicon glyphicon-${icon}`} /> {label}
      </Button>
    </div>
  );
};

const handlers = {
  onDrop:
    ({ onChange, name, id }: Props) =>
    <T extends File & { preview: string }>(
      acceptedFiles: T[],
      rejectedFiles: FileRejection[]
    ) => {
      const values = acceptedFiles.map((file) => ({
        id: createId(),
        file: { ...file, preview: URL.createObjectURL(file) },
      }));
      const errors = rejectedFiles.map((error) => ({
        id: createId(),
        file: error,
      }));
      onChange({
        values,
        errors,
        name,
        id,
      });
    },
};

const EnhancedComponent = withInput<Props>(handlers)(File);

export default EnhancedComponent;
