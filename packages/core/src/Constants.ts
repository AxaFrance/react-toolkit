export interface ComponentPropTypes {
  className: string | null;
  classModifier: string | null;
}

export const defaultProps: ComponentPropTypes = {
  className: null,
  classModifier: null,
};

const Constants = {
  defaultProps,
};

export default Constants;
