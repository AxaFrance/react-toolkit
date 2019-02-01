import React from 'react';
import PropTypes from 'prop-types';
import { InputConstants as Constants } from '@axa-fr/react-toolkit-form-core';
import { RadioItem } from '@axa-fr/react-toolkit-form-input-radio';
import { CheckboxItem } from '@axa-fr/react-toolkit-form-input-checkbox';
import utils from './utils';

const propTypes = {
  ...Constants.propTypes,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  classModifier: PropTypes.string,
  readOnly: PropTypes.bool,
  isVisible: PropTypes.bool,
  value: PropTypes.string,
};
const defaultClassName = 'af-form__checkbox';
const defaultProps = {
  ...Constants.defaultProps,
  type: 'checkbox',
  name: 'noname',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
  className: defaultClassName,
  classModifier: '',
  isChecked: false,
  readOnly: false,
  isVisible: true,
  value: '',
  tabIndex: null,
  autoFocus: null,
};

const checkMeta = children =>
  utils
    .castToArray(children)
    .find(
      child =>
        typeof child === 'object' &&
        child.props.className === 'af-rccard-header__meta'
    );

const CardHeader = ({
  className,
  classModifier,
  id,
  type,
  onChange,
  name,
  value,
  isChecked,
  children,
  nbCards,
  disabled,
}) => {
  const childrenHasMeta = checkMeta(children);

  if (childrenHasMeta && nbCards > 1) {
    throw new Error(
      'If the card group component contains more than one card, the meta element inside the CardHeader component is forbidden'
    );
  }

  return (
    <header className="af-rccard-header">
      {type === 'radio' && (
        <RadioItem
          id={id}
          isChecked={isChecked}
          name={name}
          onChange={onChange}
          disabled={disabled}
          className="af-form__radio"
          classModifier={classModifier}
          value={value}>
          {children}
        </RadioItem>
      )}

      {type === 'checkbox' && (
        <CheckboxItem
          id={id}
          isChecked={isChecked}
          name={name}
          onChange={onChange}
          disabled={disabled}
          className="af-form__checkbox"
          classModifier={classModifier}
          value={value}>
          {children}
        </CheckboxItem>
      )}
    </header>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
CardHeader.displayName = 'CardHeader';
export default CardHeader;
