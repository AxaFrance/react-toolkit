import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/dist/rc-slider.css';

import {
  InputConstants as Constants,
  Input,
  omit,
} from '@axa-fr/react-toolkit-form-core';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  options: PropTypes.array.isRequired,
};

const defaultClassName = 'af-form__slider';
const defaultProps = {
  ...Constants.defaultProps,
};

const omitProperties = omit([
  'classModifier',
  'className',
  'isVisible',
  'onChange',
  'options',
]);

const mapOptions = options => options.map((o, index) => ({ index, ...o }));

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { name, id, onChange, options } = this.props;
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
  }

  render() {
    const {
      className,
      classModifier,
      isVisible,
      onBlur,
      onFocus,
      disabled,
      readOnly,
      options,
      value,
      ...otherProps
    } = this.props;

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
    console.log(marks);
    console.log(min);
    console.log(max);
    console.log(value);

    if (!isVisible) {
      return null;
    }

    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    return (
      <Slider
        min={min}
        max={max}
        marks={marks}
        className={componentClassName}
        step={null}
        onChange={this.onChange}
        onAfterChange={onBlur}
        onBeforeChange={onFocus}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        {...omitProperties(otherProps)}
      />
    );
  }
}

CustomSlider.propTypes = propTypes;
CustomSlider.defaultProps = defaultProps;

CustomSlider.Clone = Input.Clone;

export default CustomSlider;
