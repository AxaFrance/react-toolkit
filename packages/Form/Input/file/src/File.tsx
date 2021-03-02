import React, { InputHTMLAttributes } from 'react';
import { useDropzone } from 'react-dropzone';
import { ClassManager } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';

type OnChangeFile = (event: {
  name: string;
  values: any[];
  errors?: any[];
  id?: string;
}) => void;
type OnDropOptions = {
  name: string;
  onChange: OnChangeFile;
  id?: string;
};
const onDrop = ({ onChange, name, id }: OnDropOptions) => (
  acceptedFiles: any[],
  rejectedFiles: any[]
) => {
  const values = acceptedFiles.map((file) => ({
    id: InputManager.createId(),
    file: {
      ...file,
      preview: URL.createObjectURL(file),
    },
  }));
  const errors = rejectedFiles.map((error) => ({
    id: InputManager.createId(),
    file: error,
  }));
  onChange({
    values,
    errors,
    name,
    id,
  });
};

const defaultClassName = 'af-form__file-input';
type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  classModifier?: string;
  maxSize?: number;
  minSize?: number;
  accept?: string | string[];
  readOnly?: boolean;
  label?: string;
  icon?: string;
  onChange: OnChangeFile;
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
    onDrop: onDrop({ onChange, name, id }),
    minSize,
    maxSize,
    multiple,
    accept,
    disabled,
  });

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
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
        classModifier="file hasiconLeft"
        onClick={open}
        disabled={disabled}>
        <i className={`glyphicon glyphicon-${icon}`} /> {label}
      </Button>
    </div>
  );
};

export default File;
