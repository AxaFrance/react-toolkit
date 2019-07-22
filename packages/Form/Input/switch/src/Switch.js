import React from 'react';
import PropTypes from 'prop-types';

import { withInput, omit, Input } from '@axa-fr/react-toolkit-form-core';

import SwitchItem from './SwitchItem';

const omitProperties = omit(['classModifier', 'className', 'isVisible', 'id']);

const propTypes = {
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
};

const defaultClassName = null;
const defaultProps = {
  value: null,
  name: 'af-form__radio-name',
  className: defaultClassName,
};

const SwitchItems = props => {
  const {
    options,
    value,
    name,
    onChange,
    onBlur,
    onFocus,
    disabled,
    ...otherProps
  } = props;
  return options.map(option => {
    const isChecked = option.value === value;
    return (
      <SwitchItem
        key={option.value}
        id={option.id}
        value={option.value}
        label={option.label}
        isChecked={isChecked}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        {...omitProperties(otherProps)}
      />
    );
  });
};

export const getSliderPosition = (radioName, ref) => {
  const currentElementResult =
    ref.current &&
    ref.current.querySelectorAll(`input[name="${radioName}"]:checked`);
  if (!currentElementResult || currentElementResult.length !== 1) {
    return { left: 0, width: 0 };
  }
  const currentElement = currentElementResult[0].parentNode;
  const left = currentElement.offsetLeft;
  const width = currentElement.clientWidth;
  return {
    left,
    width,
  };
};

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      selectedValue: props.value,
      sliderStyle: {
        display: 'none',
      },
    };
  }

  componentDidMount() {
    this.setState({
      sliderStyle: this.getSliderStyle(),
    });
  }

  getSliderStyle() {
    const { name } = this.props;
    const sliderPosition = getSliderPosition(name, this.ref);
    return {
      width: `${sliderPosition.width}px`,
      left: `${sliderPosition.left}px`,
    };
  }

  handleChange(e, onChange) {
    this.setState({
      selectedValue: e.currentTarget.value,
      sliderStyle: this.getSliderStyle(),
    });
    onChange(e);
  }

  render() {
    const { onChange, ...props } = this.props;
    const { selectedValue: value, sliderStyle } = this.state;
    return (
      <div className="af-form-switch" ref={this.ref}>
        <SwitchItems
          {...props}
          onChange={e => this.handleChange(e, onChange)}
          value={value}
        />
        <span className="af-btn-switch-slider" style={sliderStyle} />
      </div>
    );
  }
}

const EnhancedComponent = withInput(defaultClassName, propTypes, defaultProps)(
  Switch
);

EnhancedComponent.displayName = 'SwitchInput';

EnhancedComponent.Clone = Input.Clone;

export default EnhancedComponent;
