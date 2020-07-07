import React from 'react';

const eventWrapper = (wrapper, props) => ({
  onChange: ev => {
    wrapper.onChange(ev);
    if (props.onChange) {
      props.onChange(ev);
    }
  },
  onBlur: ev => {
    wrapper.onBlur(ev);
    if (props.onBlur) {
      props.onBlur(ev);
    }
  },
  onFocus: ev => {
    wrapper.onFocus(ev);
    if (props.onFocus) {
      props.onFocus(ev);
    }
  },
  onKeyUp: ev => {
    wrapper.onKeyUp(ev);
    if (props.onKeyUp) {
      props.onKeyUp(ev);
    }
  },
});

const Clone = data => {
  const { props, child, wrapper } = data;
  return React.cloneElement(child, {
    ...props,
    ...eventWrapper(wrapper, child.props),
  });
};

export default {
  Clone,
  eventWrapper,
};
