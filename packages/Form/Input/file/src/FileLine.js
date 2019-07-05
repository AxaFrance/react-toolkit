import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';
import Popover from '@axa-fr/react-toolkit-popover';

const propTypes = {
  file: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};
const defaultClassName = 'af-form__file-line';
const defaultProps = {
  disabled: false,
  className: defaultClassName,
  classModifier: null,
};

const style = {
  maxWidth: '200px',
  maxHeight: '200px',
};

export const Preview = ({ file }) => {
  if (file && file.type && file.type.startsWith('image')) {
    return (
      <Popover mode="hover">
        <Popover.Pop>
          <img
            src={file.preview}
            style={style}
            className="af-form__file-thumbnail"
            alt="File Preview"
          />
        </Popover.Pop>
        <Popover.Over>
          <i className="glyphicon glyphicon-picture" />
        </Popover.Over>
      </Popover>
    );
  }
  return <i className="glyphicon glyphicon-file" />;
};

const FileLine = ({
  className,
  classModifier,
  file,
  disabled,
  id,
  onClick,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <li className={componentClassName}>
      <Preview file={file} />
      <span>{file.name}</span>
      <span>{file.size}</span>

      <Button
        disabled={disabled}
        type="button"
        className="af-link"
        classModifier="delete-file"
        onClick={() => onClick(id)}>
        <span className="af-link__text">Supprimer</span>
      </Button>
    </li>
  );
};

FileLine.propTypes = propTypes;
FileLine.defaultProps = defaultProps;

export default FileLine;
