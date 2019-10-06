import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, withInput } from '@axa-fr/react-toolkit-form-core';
import { InputManager } from '@axa-fr/react-toolkit-core';

import SelectBase from './SelectBase';
import SelectModes from './SelectModes';

class SelectDefault extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      hasHandleChangeOnce: false,
    };
  }

  onChange(e) {
    const { onChange, forceDisplayPlaceholder } = this.props;
    onChange(e);
    this.setState({ hasHandleChangeOnce: !forceDisplayPlaceholder });
  }

  getOptions() {
    const { value, placeholder, options } = this.props;
    const { hasHandleChangeOnce } = this.state;
    if (!hasHandleChangeOnce && !value) {
      return [{ value: '', label: placeholder }, ...options];
    }
    return options;
  }

  render() {
    const {
      className,
      classModifier,
      onChange,
      options,
      value,
      onBlur,
      onFocus,
      readOnly,
      disabled,
      id,
      name,
      componentClassName,
      placeholder,
      ...otherProps
    } = this.props;
    const newOptions = this.getOptions();
    const inputId = InputManager.getInputId(id);
    return (
      <SelectBase
        name={name}
        id={inputId}
        options={newOptions}
        value={value}
        onChange={this.onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={componentClassName}
        readOnly={readOnly}
        disabled={disabled}
        {...otherProps}
      />
    );
  }
}

const propTypes = {
  value: PropTypes.string,
  values: PropTypes.array,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  mode: PropTypes.oneOf([SelectModes.default, SelectModes.base]),
  forceDisplayPlaceholder: PropTypes.bool,
};

const defaultClassName = 'af-form__select-container';
const defaultProps = {
  values: null,
  value: '',
  className: defaultClassName,
  placeholder: '- Select -',
  mode: SelectModes.default,
  forceDisplayPlaceholder: Boolean(false),
};

const Select = props => {
  const { mode, children } = props;
  const DynamicComponent =
    mode === SelectModes.default ? SelectDefault : SelectBase;
  return <DynamicComponent {...props}>{children}</DynamicComponent>;
};

const handlers = {
  onChange: ({ name, id, onChange }) => e => {
    onChange({
      value: e.value,
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
)(Select);

EnhancedComponent.Clone = Input.Clone;
EnhancedComponent.displayName = Select.name;

export default EnhancedComponent;
