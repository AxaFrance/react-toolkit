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
  const { options, value, name, onChange, onBlur, onFocus, disabled, ...otherProps } = props;
  return options.map(option => {
    const isChecked = option.value === value;
    return (<SwitchItem
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
    />)
  })
};

export const getSliderPosition = (value, options, ref) => {
  const option = options.find(v => v.value === value);
  const emptyResult = { left: 0, width: 0 };
  if (!option || !ref.current) {
    return emptyResult;
  }
  const currentElementResult = ref.current.querySelectorAll(`input[value="${value}"]`);
  if (!currentElementResult || currentElementResult.length !== 1) {
    return emptyResult;
  }
  const currentElement = currentElementResult[0].parentNode;
  const left = currentElement.offsetLeft;
  const width = currentElement.clientWidth;
  return {
    left,
    width
  };
};

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { value, options } = this.props;
    const sliderPosition = getSliderPosition(value, options, this.ref);
    const sliderStyle = {
      width: `${sliderPosition.width}px`,
      left: `${sliderPosition.left}px`,
    };
    return (
      <div className="af-form-switch" ref={this.ref}>
        <SwitchItems {...this.props} />
        <span className="af-btn-switch-slider" style={sliderStyle} />
      </div>
    );
  }
};


const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps
)(Switch);

EnhancedComponent.displayName = 'SwitchInput';

EnhancedComponent.Clone = Input.Clone;

export default EnhancedComponent;
