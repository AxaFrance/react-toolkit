import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import {
  Input,
  InputConstants as Constants,
  withInput,
  omit,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';

const omitProperties = omit([
  'classModifier',
  'className',
  'onChange',
  'isVisible',
  'inputRef',
]);

const File = ({
  componentClassName,
  id,
  name,
  disabled,
  onDrop,
  multiple,
  maxSize,
  minSize,
  accept,
  readOnly,
  placeholder,
  label,
  icon,
  ...otherProps
}) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    minSize,
    maxSize,
    multiple,
    accept,
    disabled,
  });

  return (
    <div className={componentClassName}>
      <div {...getRootProps({ id, className: 'drop-box hidden-mobile' })}>
        <input
          {...getInputProps({ name, readOnly, ...omitProperties(otherProps) })}
        />
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

const propTypes = {
  ...Constants.propTypes,
  values: PropTypes.array,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  className: PropTypes.string,
  classModifier: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
};
const defaultClassName = 'af-form__file-input';
const defaultProps = {
  ...Constants.defaultProps,
  values: null,
  placeholder: 'Glissez/déposez vos fichiers',
  accept: '',
  multiple: true,
  maxSize: 20000000, // 20 mo
  minSize: 0,
  className: defaultClassName,
  classModifier: null,
  label: 'Parcourir',
  icon: 'open',
};

const handlers = {
  onDrop: ({ onChange, name, id }) => (acceptedFiles, rejectedFiles) => {
    const values = acceptedFiles.map((file) => {
      file.preview = URL.createObjectURL(file);
      return {
        id: InputManager.createId(),
        file,
      };
    });
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
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(File);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = File.name;

export default EnhancedComponent;
