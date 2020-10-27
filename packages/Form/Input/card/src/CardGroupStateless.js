import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Constants } from '@axa-fr/react-toolkit-core';
import cardType from './Constants';
import CardMeta from './CardMeta';

const propTypes = {
  ...Constants.propTypes,
  title: PropTypes.node.isRequired,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  ...Constants.defaultProps,
  title: '',
  type: cardType.RADIO,
  children: null,
};

const CardGroupStateless = ({
  title,
  propClassName,
  type,
  children,
  className,
  classModifier,
  active,
  onChange,
  name,
  values,
  value,
  id,
}) => {
  const childrenArray = React.Children.map(children, (child) => child);
  const indexMeta = childrenArray.findIndex((child) => child.type === CardMeta);
  const childrenMeta = childrenArray[indexMeta];
  const childrenWithoutMeta = childrenArray.slice();
  if (indexMeta !== -1) childrenWithoutMeta.splice(indexMeta, 1);
  const nbCards = childrenWithoutMeta.length;

  const clonedValues = values;
  const childrenWithProps = React.Children.map(
    childrenWithoutMeta,
    (child, index) => {
      const isChecked = clonedValues
        ? clonedValues.includes(child.props.value)
        : value === child.props.value;

      return React.cloneElement(child, {
        ...child.props,
        type,
        name,
        isChecked,
        onChange,
      });
    }
  );

  /**
   *
   * @param {title} can be a string or a jsx Element
   * Return a jsx title
   */
  const formatTitle = (titleParam) => {
    if (React.isValidElement(titleParam)) {
      return React.cloneElement(titleParam, {
        className: classNames(title.props.className, 'af-rccard-group__title'),
      });
    }
    return React.createElement(
      'h3',
      { className: 'af-rccard-group__title' },
      titleParam
    );
  };

  return (
    <div className={classNames(`af-rccard__${nbCards}`, propClassName)}>
      {childrenMeta}

      {title && formatTitle(title)}
      <div className="af-rccard-group__content">{childrenWithProps}</div>
    </div>
  );
};

CardGroupStateless.propTypes = propTypes;
CardGroupStateless.defaultProps = defaultProps;
export default CardGroupStateless;
