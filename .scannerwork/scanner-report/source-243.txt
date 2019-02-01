import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import LineFile from './FileLine';

const propTypes = {
  values: PropTypes.array,
  errors: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};
const defaultClassName = 'custom-table-file af-file-table';
const defaultProps = {
  values: null,
  errors: null,
  disabled: false,
  className: defaultClassName,
  classModifier: null,
};

const style = {
  color: 'red',
};

const Errors = errors => {
  if (!errors || errors.length <= 0) {
    return null;
  }

  const errorList = errors.map(
    err =>
      err ? (
        <li key={err}>
          {' '}
          {err.file.name} ({err.file.size}){' '}
        </li>
      ) : (
        ''
      )
  );
  return (
    <div style={style}>
      <span>Le chargement de certains fichiers à échoué: </span>
      <ul>{errorList}</ul>
    </div>
  );
};

const FileTable = ({
  errors,
  values,
  className,
  classModifier,
  disabled,
  onClick,
}) => {
  if (!values || values.length <= 0) {
    return null;
  }
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName}>
      {Errors(errors)}
      <table className="table table-striped table-bordered">
        <tbody>
          {values.map(
            value =>
              value ? (
                <LineFile
                  disabled={disabled}
                  file={value.file}
                  onClick={onClick}
                  id={value.id}
                  key={value.id}
                />
              ) : (
                ''
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

FileTable.propTypes = propTypes;
FileTable.defaultProps = defaultProps;

export default FileTable;
