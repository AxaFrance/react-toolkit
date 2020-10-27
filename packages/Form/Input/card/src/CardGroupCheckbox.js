import React from 'react';
import CardGroup from './CardGroup';
import cardType from './Constants';

const CardGroupCheckBox = (props) => {
  const { children } = props;
  return (
    <CardGroup {...props} type={cardType.CHECKBOX}>
      {children}
    </CardGroup>
  );
};

const propTypes = {
  ...CardGroup.PropTypes,
};
delete propTypes.value;

const defaultProps = {
  ...CardGroup.DefaultProps,
};
delete defaultProps.value;

export default CardGroupCheckBox;
