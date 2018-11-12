import React, { Component } from 'react';
import Slider from 'rc-slider';

import {
  InputConstants as Constants,
  Input,
} from '@axa-fr/react-toolkit-form-core';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
};

const defaultProps = {
  ...Constants.defaultProps,
};

const style = { width: '100%', margin: 0 };
const marks = {
  0: 'VERY BAD',
  1: 'BAD',
  2: 'NICE',
  3: 'VERY NICE',
};

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { name, id, onChange } = this.props;
    onChange({
      value: e,
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
    } = this.props;
    if (!isVisible) {
      return null;
    }

    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier
    );
    return (
      <div style={style}>
        <Slider
          min={0}
          max={3}
          marks={marks}
          className={componentClassName}
          step={null}
          onChange={this.onChange}
          onAfterChange={onBlur}
          onBeforeChange={onFocus}
          defaultValue={1}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
    );
  }
}

CustomSlider.propTypes = propTypes;
CustomSlider.defaultProps = defaultProps;

CustomSlider.Clone = Input.Clone;

export default CustomSlider;
