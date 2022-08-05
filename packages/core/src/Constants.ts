import { ValidationMap, string } from 'prop-types';

export interface ComponentPropTypes {
  className: string | null;
  classModifier: string | null;
}

export const propTypes: ValidationMap<ComponentPropTypes> = {
  className: string,
  classModifier: string,
};

export const defaultProps: ComponentPropTypes = {
  className: null,
  classModifier: null,
};

const Constants = {
  propTypes,
  defaultProps,
};

export default Constants;
