import React from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

import Tr from './Tr';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any.isRequired,
};

const defaultClassName = 'af-table__thead';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const Header = props => {
  const { children, headers, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  if (headers) {
    return (
      <thead className={componentClassName}>
        <Tr>{children}</Tr>
      </thead>
    );
  }
  return <thead className="af-table-thead">{children}</thead>;
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = 'Table.Header';

export default Header;
