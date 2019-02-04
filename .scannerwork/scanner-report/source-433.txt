import React from 'react';
import PropTypes from 'prop-types';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any,
  id: PropTypes.string,
  rowSpan: PropTypes.string,
  colSpan: PropTypes.string,
};

const defaultClassName = 'af-table__cell';
const defaultProps = {
  ...Constants.defaultProps,
  children: null,
  className: defaultClassName,
  rowSpan: null,
  colSpan: null,
  id: null,
};

/* const Span = props => {
  const { children } = props;
  return <span className="af-table-body-content">{children}</span>;
}; */

const Td = props => {
  const { children, id, rowSpan, colSpan, className, classModifier } = props;

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  // A discuter mais je pense qu'il faut laisser les children gérer le contenu la cellule
  /* if (typeof children === 'string') {
    return (
      <td className={className} key={id} rowSpan={rowSpan} colSpan={colSpan}>
        <Span>{children}</Span>
      </td>
    );
  } */

  return (
    <td
      className={componentClassName}
      key={id}
      rowSpan={rowSpan}
      colSpan={colSpan}>
      {children}
    </td>
  );
};

Td.propTypes = propTypes;
Td.defaultProps = defaultProps;
Td.displayName = 'Table.Td';

export default Td;
