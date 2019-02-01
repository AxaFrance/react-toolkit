import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FieldInput,
  FieldConstants as Constants,
  HelpMessage,
  Field,
  FormClassManager,
} from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import FileTable from './FileTable';
import File from './File';

const propTypes = {
  ...Constants.propTypes,
  values: PropTypes.array,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
};

const defaultProps = {
  ...Constants.defaultProps,
  values: null,
  accept: '',
  multiple: null,
  maxSize: 20000000, // 20 mo
  minSize: 0,
};

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick.bind(this);
  }

  onDeleteClick(id, inputId) {
    const { values, name, onChange } = this.props;
    const newValues = values.filter(element => element.id !== id);
    onChange({
      values: newValues,
      name,
      id: inputId,
    });
  }

  render() {
    const {
      classModifier,
      message,
      children,
      helpMessage,
      id,
      disabled,
      forceDisplayMessage,
      messageType,
      classNameContainerLabel,
      classNameContainerInput,
      label,
      name,
      isVisible,
      className,
      minSize,
      maxSize,
      multiple,
      accept,
      values,
      onChange,
      readOnly,
      placeholder,
      errors,
      ...otherProps
    } = this.props;
    const inputClassModifier = FormClassManager.getInputClassModifier(
      classModifier,
      children
    );
    const inputFieldClassModifier = FormClassManager.getFieldInputClassModifier(
      classModifier,
      disabled
    );
    const rowModifier = `${classModifier} label-top`;
    const inputId = InputManager.getInputId(id);
    return (
      <Field
        label={label}
        name={name}
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
          helpMessage={helpMessage}
          message={message}
          messageType={messageType}
          forceDisplayMessage={forceDisplayMessage}
          className="af-form__file"
          classModifier={inputFieldClassModifier}>
          <File
            id={inputId}
            minSize={minSize}
            maxSize={maxSize}
            multiple={multiple}
            name={name}
            accept={accept}
            values={values}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            classModifier={inputClassModifier}
            {...otherProps}
          />
          {children}
        </FieldInput>
        <HelpMessage message={helpMessage} isVisible={!message} />
        <FileTable
          errors={errors}
          values={values}
          onClick={selectedId => this.onDeleteClick(selectedId, inputId)}
          classModifier={classModifier}
        />
      </Field>
    );
  }
}

FileInput.propTypes = propTypes;
FileInput.defaultProps = defaultProps;

export default FileInput;
