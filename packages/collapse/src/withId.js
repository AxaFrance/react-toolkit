import React, { useState } from 'react';
import { InputManager } from '@axa-fr/react-toolkit-core';

const withId = Component => props => {
  const [stateId] = useState(InputManager.getInputId());
  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ? props.id : stateId;
  return <Component {...props} id={id} />;
};

export default withId;
