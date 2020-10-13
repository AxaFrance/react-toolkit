import React from 'react';

export type Option = {
  value: boolean;
  label: string;
  disabled?: boolean;
};

const eventWrapper = (wrapper, props) => ({
  onChange: (ev) => {
    wrapper.onChange(ev);
    if (props.onChange) {
      props.onChange(ev);
    }
  },
  onBlur: (ev) => {
    wrapper.onBlur(ev);
    if (props.onBlur) {
      props.onBlur(ev);
    }
  },
  onFocus: (ev) => {
    wrapper.onFocus(ev);
    if (props.onFocus) {
      props.onFocus(ev);
    }
  },
});

const Clone = (data) => {
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
