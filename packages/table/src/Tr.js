import React from 'react';
import PropTypes from 'prop-types';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any,
  id: PropTypes.string,
};

const defaultClassName = 'af-table__tr';
const defaultProps = {
  ...Constants.defaultProps,
  children: null,
  className: defaultClassName,
  id: null,
};

const Tr = props => {
  const { children, id, className, classModifier, ...otherProps } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <tr className={componentClassName} key={id} {...otherProps}>
      {children}
    </tr>
  );
};

Tr.propTypes = propTypes;
Tr.defaultProps = defaultProps;

export default Tr;
