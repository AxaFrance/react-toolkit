import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/dist/rc-slider.css';

import {
  InputConstants as Constants,
  Input,
  omit,
  withInput,
} from '@axa-fr/react-toolkit-form-core';

const omitProperties = omit([
  'classModifier',
  'className',
  'isVisible',
  'options',
]);

const mapOptions = options => options.map((o, index) => ({ index, ...o }));

const CustomSlider = props => {
  const {
    componentClassName,
    isVisible,
    onBlur,
    onFocus,
    disabled,
    readOnly,
    options,
    value,
    onChange,
    ...otherProps
  } = props;

  const newOptions = mapOptions(options);
  const indexes = newOptions.map(o => o.index);

  const min = Math.min(...indexes);
  const max = Math.max(...indexes);

  const marks = {
    /* 0: 'VERY BAD',
      1: 'BAD',
      2: 'NICE',
      3: 'VERY NICE', */
  };
  newOptions.forEach(element => {
    marks[element.index] = element.label;
  });

  let newValue = null;
  newOptions.forEach(element => {
    if (element.value === value) {
      newValue = element.index;
    }
  });

  return (
    <Slider
      min={min}
      max={max}
      marks={marks}
      className={componentClassName}
      step={null}
      onChange={onChange}
      onAfterChange={onBlur}
      onBeforeChange={onFocus}
      value={newValue}
      disabled={disabled}
      readOnly={readOnly}
      {...omitProperties(otherProps)}
    />
  );
};

const handlers = {
  onChange: ({ name, id, onChange, options }) => e => {
    const newOptions = mapOptions(options);

    let option = null;
    newOptions.forEach(o => {
      if (o.index === e) {
        option = o;
      }
    });

    onChange({
      value: option.value,
      name,
      id,
    });
  },
};

const propTypes = {
  ...Constants.propTypes,
  options: PropTypes.array.isRequired,
};

const defaultClassName = 'af-form__slider';
const defaultProps = {
  ...Constants.defaultProps,
};
const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(CustomSlider);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = Slider.name;

export default EnhancedComponent;
