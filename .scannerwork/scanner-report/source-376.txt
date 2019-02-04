import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  idControl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

function ToggleButton({ children, idControl }) {
  return React.cloneElement(children, {
    'aria-controls': idControl,
    'aria-haspopup': true,
  });
}

ToggleButton.propTypes = propTypes;

export default ToggleButton;
