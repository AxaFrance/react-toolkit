import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ClassManager } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';

const propTypes = {
  children: PropTypes.node.isRequired,
  forceDisplayMessage: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};
const defaultClassName = 'md-10';
const defaultProps = {
  forceDisplayMessage: false,
  message: null,
  messageType: MessageTypes.error,
  className: defaultClassName,
  classModifier: null,
};

function renderedChildren(children, wrapper, message, messageType) {
  if (!children) {
    return null;
  }

  return React.Children.map(children, child => {
    // create a copy that includes addtional property values
    // as needed

    if (!child || !child.props) {
      return child;
    }

    const props = {
      ...child.props,
    };

    if (child && child.props && child.props.children) {
      const subChildren = renderedChildren(
        child.props.children,
        wrapper,
        message,
        messageType,
      );
      if (subChildren != null) {
        props.children = subChildren;
      }
    }

    if (child && child.type && child.type.Clone) {
      const data = {
        props,
        messageType,
        message,
        child,
        wrapper,
      };
      return child.type.Clone(data);
    }
    if (child && child.type) {
      return React.cloneElement(child, props);
    }
    return child;
  });
}

class FieldForm extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.state = {
      hasLostFocusOnce: false,
      hasFocus: false,
      hasChange: false,
      memory: { message: '', messageType: '' },
    };
  }

  onChange() {
    const { hasChange } = this.state;
    if (!hasChange) {
      // for particular case on particular browers which does not throw onFocus or onBlur event
      this.setState({
        hasChange: true,
      });
    }
  }

  onBlur() {
    this.setState({
      hasLostFocusOnce: true,
      hasFocus: false,
    });
  }

  onFocus() {
    const { message, messageType } = this.props;
    this.setState({
      hasFocus: true,
      memory: {
        message,
        messageType,
      },
    });
  }

  getInfo() {
    const { hasChange, hasLostFocusOnce, hasFocus, memory } = this.state;
    const { forceDisplayMessage, message, messageType } = this.props;
    const isDisplayMessage =
      hasLostFocusOnce || forceDisplayMessage || (hasChange && !hasFocus);
    if (!isDisplayMessage) {
      return {
        message: '',
        messageType: '',
      };
    }
    if (hasFocus) {
      return {
        ...memory,
      };
    }
    return {
      message,
      messageType,
    };
  }

  render() {
    const { children } = this.props;
    const { message, messageType } = this.getInfo();
    const childrenCloned = renderedChildren(
      children,
      this,
      message,
      messageType,
    );
    const { className, classModifier } = this.props;
    const subComponentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName,
    );
    return <div className={subComponentClassName}>{childrenCloned}</div>;
  }
}

FieldForm.propTypes = propTypes;
FieldForm.defaultProps = defaultProps;

export default FieldForm;
