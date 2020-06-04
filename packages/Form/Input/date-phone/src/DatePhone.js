import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {Input, omit, withInput} from '@axa-fr/react-toolkit-form-core';

const omitProperties = omit(['classModifier', 'className', 'isVisible']);

const DatePhone = props => {
  const {
    className,
    classModifier,
    componentClassName,
    id,
    name,
    viewValue,
    value,
    locale,
    readOnly,
    disabled,
    onChangeRaw,
    onChange,
    inputRef,
    ...otherProps
  } = props;

  let currentViewValue = '';
  if (value) {
    currentViewValue = value.format('YYYY-MM-DD');
  } else if (viewValue != null && viewValue != undefined) {
    currentViewValue = viewValue.replace(". ", "-").replace("/", "-").replace(".", "-");
  }

  return (
    <input
      className={componentClassName}
      name={name}
      id={id}
      type="date"
      value={currentViewValue}
      onChange={onChange}
      readOnly={readOnly}
      disabled={disabled}
      ref={inputRef}
      {...omitProperties(otherProps)}
    />
  );
};

const propTypes = {
  value: PropTypes.object,
  viewValue: PropTypes.string,
  locale: PropTypes.string,
};
const defaultClassName = 'af-form__input-date';
const defaultProps = {
  value: null,
  viewValue: null,
  locale: 'fr-fr',
  className: defaultClassName,
};

const handlers = {
  onChange: ({ id, name, onChange }) => e => {
    const viewValue = e.target.value;
    const value = moment(viewValue);

    onChange({
      value,
      viewValue: value.format("L"),
      name,
      id,
    });
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(DatePhone);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = DatePhone.name;

export default EnhancedComponent;
