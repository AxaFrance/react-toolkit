import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { Input, withInput } from '@axa-fr/react-toolkit-form-core';

const CustomDate = (props) => {
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
    ...otherProps
  } = props;

  let currentViewValue = '';
  if (value) {
    currentViewValue = value.format('L');
  } else if (viewValue != null && viewValue != undefined) {
    currentViewValue = viewValue;
  }

  return (
    <DatePicker
      id={id}
      selected={value}
      name={name}
      onChange={onChange}
      onChangeRaw={onChangeRaw}
      value={currentViewValue}
      locale={locale}
      className={componentClassName}
      readOnly={readOnly}
      disabled={disabled}
      {...otherProps}
    />
  );
};

const propTypes = {
  value: PropTypes.object,
  viewValue: PropTypes.string,
  locale: PropTypes.string,
};
const defaultClassName = 'af-datepicker';
const defaultProps = {
  value: null,
  viewValue: null,
  locale: 'fr-fr',
  className: defaultClassName,
  fixedHeight: true,
  showMonthDropdown: true,
  showYearDropdown: true,
  autoFocus: false,
  todayButton: "Aujourd'hui",
  popperPlacement: 'right-start',
  yearDropdownItemNumber: 6,
};

const localizeMoment = ({ locale }) => (date) =>
  date.clone().locale(locale || moment.locale());

const handlers = {
  onChange: ({ id, name, onChange }) => (date) => {
    const viewValue = date ? date.format('L') : '';
    onChange({
      value: date,
      viewValue,
      name,
      id,
    });
  },
  onChangeRaw: ({ locale, id, name, onChange }) => (event) => {
    const momentLocal = moment();
    const localLocale = momentLocal.locale(locale);
    const localData = localLocale.localeData();
    const localFormat = localData.longDateFormat('L');

    const dateString = event.target.value;
    const momentObj = localizeMoment(locale)(
      moment(dateString, localFormat, true)
    );
    const date = momentObj.isValid() ? momentObj : null;
    onChange({
      value: date,
      viewValue: dateString,
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
)(CustomDate);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = CustomDate.name;

export default EnhancedComponent;
