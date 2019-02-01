import { ValidationMap, string } from 'prop-types';

export interface ComponentPropTypes {
  className: string | null;
  classModifier: string | null;
}

const propTypes: ValidationMap<ComponentPropTypes> = {
  className: string,
  classModifier: string,
};

const defaultProps: ComponentPropTypes = {
  className: null,
  classModifier: null,
};

export default {
  propTypes,
  defaultProps,
};
