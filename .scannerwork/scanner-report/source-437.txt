import React from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any.isRequired,
};

const defaultClassName = 'af-table__body';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const Body = props => {
  const { children, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return <tbody className={componentClassName}>{children}</tbody>;
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;
Body.displayName = 'Table.Body';

export default Body;
