import React from 'react';
import PropTypes from 'prop-types';
import { InputConstants as Constants } from '@axa-fr/react-toolkit-form-core';
import { ClassManager } from '@axa-fr/react-toolkit-core';

import CardHeader from './CardHeader';

const propTypes = {
  ...Constants.propTypes,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  value: PropTypes.string,
  cardClassModifier: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  name: '',
  disabled: false,
  isChecked: false,
  onChange: () => {},
};

/**
 * Get a duplicate component from a children. If not, return null
 * @param {*} children
 */
function getDuplicateComponent(children) {
  const array = [];
  let duplicateComponent = null;

  children.forEach((child) => {
    const typeName = child.type.displayName;

    if (array.includes(typeName)) {
      duplicateComponent = typeName;
      return;
    }
    array.push(typeName);
  });
  return duplicateComponent;
}

/**
 * Return a new array with removed index
 * @param {*} arr to evaluate
 * @param {*} index to remove
 */
function getArrayWithRemovedIndex(arr, index) {
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
}

/**
 *
 * @param {*} children
 * Return an object with sorted children (header and other children)
 */
const getSortedChildren = (children) => {
  const childrenArray = React.Children.toArray(children);
  const headerIndex = childrenArray.findIndex(
    (child) => child.type === CardHeader
  );

  const header = childrenArray[headerIndex];
  const other = getArrayWithRemovedIndex(childrenArray, headerIndex);

  return {
    header,
    other,
  };
};

const Card = ({
  id,
  type,
  name,
  isChecked,
  onChange,
  value,
  children,
  activeCard,
  disabled,
  cardClassModifier,
  ...otherProps
}) => {
  // ERRORS
  const duplicateComponent = getDuplicateComponent(children);

  if (duplicateComponent !== null) {
    throw new Error(
      `You can't duplicate the component ${duplicateComponent}. Only one of type is allowed.`
    );
  }

  const { header, other } = getSortedChildren(children);
  const headerWithProps = React.cloneElement(header, {
    id,
    type,
    isChecked,
    onChange,
    name,
    value,
    disabled,
    ...otherProps,
  });

  const otherWithProps = React.Children.map(other, (child) =>
    React.cloneElement(child, {
      id,
      type,
    })
  );
  const className = ClassManager.getComponentClassName(
    null,
    `${cardClassModifier || ''}${isChecked ? ' active' : ''}${
      disabled ? ' disabled' : ''
    }`,
    'af-rccard'
  );
  return (
    <div className={className}>
      {headerWithProps}
      {otherWithProps}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
