import React from 'react';
import {
  DropzoneInputProps,
  DropzoneOptions,
  FileRejection,
  useDropzone,
} from 'react-dropzone';
import { createId, getComponentClassName } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';
import { withInput } from '@axa-fr/react-toolkit-form-core';

type Dropzone = DropzoneInputProps & DropzoneOptions;
type Props = Omit<Dropzone, 'onDrop' | 'onChange'> & {
  classModifier?: string;
  label?: string;
  icon?: string;
  onChange: DropzoneOptions['onDrop'];
};

const File = ({
  className,
  classModifier,
  id,
  name,
  disabled,
  onChange,
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
    onDrop: onChange,
    minSize,
    maxSize,
    multiple,
    accept,
    disabled,
  });

  const componentClassName = getComponentClassName(
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
        onClick={open}
        disabled={disabled}>
        <i className={`glyphicon glyphicon-${icon}`} /> {label}
      </Button>
    </div>
  );
};

export type CustomFile<T = File & { preview: string }> = {
  id: string;
  file: T;
};
type OnChange = {
  onChange: (data: {
    id: string;
    name: string;
    values: CustomFile[];
    errors?: CustomFile<FileRejection>[];
  }) => void;
};

const handlers = {
  onChange:
    ({ onChange, name, id }: Omit<Props, 'onChange'> & OnChange) =>
    <T extends File & {}>(
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
      onChange &&
        onChange({
          values,
          errors,
          name,
          id,
        });
    },
};

export default withInput(handlers)(File);
