import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  file: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};
const defaultClassName = 'custom-line-file af-file-line';
const defaultProps = {
  disabled: false,
  className: defaultClassName,
  classModifier: null,
};

const style = {
  maxWidth: '200px',
  maxHeight: '200px',
};

const Preview = ({ file }) => {
  if (file && file.type && file.type.startsWith('image')) {
    return (
      <img
        src={file.preview}
        style={style}
        className="img-thumbnail"
        alt="File Preview"
      />
    );
  }
  return <span>TODO a définir le comportement avec les UX</span>;
};

const FileLine = props => {
  const { className, classModifier, file, disabled, id, onClick } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <tr className={componentClassName}>
      <td className="text-center">
        <Preview file={file} />
      </td>
      <td>{file.name}</td>
      <td className="text-center">{file.size}</td>
      <td className="text-center">
        <button
          disabled={disabled}
          type="button"
          className="btn btn-danger"
          onClick={() => onClick(id)}>
          X
        </button>
      </td>
    </tr>
  );
};

FileLine.propTypes = propTypes;
FileLine.defaultProps = defaultProps;

export default FileLine;
