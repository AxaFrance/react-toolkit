import React from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';
import Tr from './Tr';
import Td from './Td';
import Th from './Th';
import Header from './Header';
import Body from './Body';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any.isRequired,
};

const defaultClassName = 'af-table';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

const Table = props => {
  const { className, classModifier, children } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return <table className={componentClassName}>{children}</table>;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

Table.Header = Header;
Table.Body = Body;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export default Table;
