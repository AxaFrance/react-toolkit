import PropTypes from 'prop-types';
import MessageTypes from './MessageTypes';

const propTypes = {
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helpMessage: PropTypes.string,
  message: PropTypes.string,
  forceDisplayMessage: PropTypes.bool,
  messageType: PropTypes.oneOf([
    MessageTypes.error,
    MessageTypes.warning,
    MessageTypes.success,
  ]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  classModifier: PropTypes.string,
  id: PropTypes.string,
  tabIndex: PropTypes.string,
  autoFocus: PropTypes.bool,
  classNameContainerLabel: PropTypes.string,
  classNameContainerInput: PropTypes.string,
};

const defaultProps = {
  label: null,
  helpMessage: null,
  message: null,
  onFocus: null,
  onBlur: null,
  forceDisplayMessage: false,
  messageType: MessageTypes.error,
  readOnly: false,
  disabled: false,
  isVisible: true,
  children: null,
  className: null,
  classModifier: null,
  id: null,
  autoFocus: null,
  tabIndex: null,
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};

export default {
  propTypes,
  defaultProps,
};
