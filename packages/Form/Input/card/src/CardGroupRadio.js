import React from 'react';
import CardGroup from './CardGroup';
import cardType from './Constants';

const CardGroupRadio = props => {
  const { children } = props;
  return (
    <CardGroup {...props} type={cardType.RADIO}>
      {children}
    </CardGroup>
  );
};

const propTypes = {
  ...CardGroup.PropTypes,
};
delete propTypes.values;

const defaultProps = {
  ...CardGroup.DefaultProps,
};
delete defaultProps.value;

export default CardGroupRadio;
