import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  classModifier: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  inputRef: PropTypes.func,
};

const defaultProps = {
  onFocus: null,
  onBlur: null,
  readOnly: false,
  disabled: false,
  isVisible: true,
  className: null,
  classModifier: null,
  id: undefined,
  inputRef: null,
};

export default {
  propTypes,
  defaultProps,
};
