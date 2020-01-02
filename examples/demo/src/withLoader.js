import {LoaderModes} from "@axa-fr/react-toolkit-loader";
import React from "react";

const withLoader =  (Component) => ({loading, ...otherProps}) => {
  const loaderMode= loading ? LoaderModes.get : LoaderModes.none;
  return (<Component loaderMode={loaderMode} {...otherProps} />);
};

export default withLoader;
