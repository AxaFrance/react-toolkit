import { ValidationMap, string, func, bool } from 'prop-types';

export type InputDefaultPropTypes = {
  className?: string | null;
  classModifier: string | null;
  id: string | undefined;
  onFocus: Function | null;
  onBlur: Function | null;
  inputRef: Function | null;
  readOnly: boolean;
  disabled: boolean;
  isVisible: boolean;
};

export type InputPropTypes = InputDefaultPropTypes & {
  name: string;
  onChange: Function;
};

const propTypes: ValidationMap<InputPropTypes> = {
  name: string.isRequired,
  onChange: func.isRequired,
  onFocus: func,
  onBlur: func,
  className: string,
  classModifier: string,
  readOnly: bool,
  disabled: bool,
  isVisible: bool,
  id: string,
  inputRef: func,
};

const defaultProps: InputDefaultPropTypes = {
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

const InputConstants = {
  propTypes,
  defaultProps,
};

export default InputConstants;
