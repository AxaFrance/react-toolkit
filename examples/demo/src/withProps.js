import React from "react";

const withProps = (callback) => (Component) => (props) => {
  const newProps =  callback(props);
  return (<Component {...props} {...newProps}  />);
};

export default withProps;
