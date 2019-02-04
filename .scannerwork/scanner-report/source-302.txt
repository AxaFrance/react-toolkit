import {
  compose,
  withProps,
  defaultProps,
  setPropTypes,
  branch,
  renderComponent,
  renderNothing,
  withHandlers,
} from 'recompose';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import Constants from './InputConstants';

export const omit = keys => props => {
  if (!keys) {
    return props;
  }
  const clonedProps = { ...props };
  keys.forEach(element => {
    if (element in clonedProps) {
      delete clonedProps[element];
    }
  });
  return clonedProps;
};

const defaultOnChange = ({ name, onChange }) => e =>
  onChange({ value: e.target.value, name, id: e.target.id });

export const withInput = (
  defaultClassName,
  addPropTypes = {},
  addDefaultProps = {},
  withHandlersOverride = {},
  withPropsOverride = null
) => Component => {
  let defaultWithProps = ({ className, classModifier }) => ({
    componentClassName: ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    ),
  });
  if (withPropsOverride) {
    defaultWithProps = withPropsOverride;
  }

  const enhance = compose(
    withProps(defaultWithProps),
    withHandlers({
      onChange: defaultOnChange,
      ...withHandlersOverride,
    })
  );

  const enhancedComponent = enhance(Component);

  const enhanceVisibility = compose(
    setPropTypes({
      ...Constants.propTypes,
      ...addPropTypes,
    }),
    defaultProps({
      ...Constants.defaultProps,
      ...addDefaultProps,
    }),
    branch(
      ({ isVisible }) => isVisible === true,
      renderComponent(enhancedComponent),
      renderNothing
    )
  );

  return enhanceVisibility(enhancedComponent);
};
