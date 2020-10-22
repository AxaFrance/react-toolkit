import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { parse, format as dateFormat } from 'date-fns';
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
    format,
    readOnly,
    disabled,
    onChangeRaw,
    onChange,
    ...otherProps
  } = props;

  const [dateFnsLocale, setDateFnsLocale] = useState(null);

  useEffect(() => {
    if (locale) {
      import(`date-fns/locale/${locale}/index.js`).then((loc) => {
        setDateFnsLocale(loc);
      });
    }
  }, [locale]);

  let currentViewValue = '';
  if (value) {
    currentViewValue = dateFormat(value, format);
  } else if (viewValue != null && viewValue != undefined) {
    currentViewValue = viewValue;
  }

  return (
    dateFnsLocale && (
      <DatePicker
        id={id}
        selected={value}
        name={name}
        onChange={onChange}
        onChangeRaw={onChangeRaw}
        value={currentViewValue}
        locale={dateFnsLocale}
        className={componentClassName}
        readOnly={readOnly}
        disabled={disabled}
        {...otherProps}
      />
    )
  );
};

const propTypes = {
  value: PropTypes.object,
  viewValue: PropTypes.string,
  locale: PropTypes.string,
  format: PropTypes.string,
};
const defaultClassName = 'af-datepicker';
const defaultProps = {
  value: null,
  viewValue: null,
  locale: 'fr',
  format: 'dd/MM/yyyy',
  className: defaultClassName,
  fixedHeight: true,
  showMonthDropdown: true,
  showYearDropdown: true,
  autoFocus: false,
  todayButton: "Aujourd'hui",
  popperPlacement: 'right-start',
  yearDropdownItemNumber: 6,
};

const handlers = {
  onChange: ({ id, name, onChange, format }) => (date) => {
    const viewValue = date ? dateFormat(date, format) : '';
    onChange({
      value: date,
      viewValue,
      name,
      id,
    });
  },
  onChangeRaw: ({ format, id, name, onChange }) => (event) => {
    const dateString = event.target.value;
    if (dateString) {
      const date = parse(dateString, format, new Date());
      onChange({
        value: date,
        viewValue: dateString,
        name,
        id,
      });
    }
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
