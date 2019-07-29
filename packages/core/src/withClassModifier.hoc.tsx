import * as classManager from './ClassManager';
import { withProps, compose, setDisplayName } from 'recompose';

export interface WithClassModifierOptions {
  className?: string | null;
  classModifier?: string | null;
  defaultClassName?: string | null;
}

export const withClassModifierFunc = (defaultClassModifier?: string) => compose(
  setDisplayName('withClassModifier'),
  withProps(({ className, classModifier, defaultClassName }: WithClassModifierOptions) => ({
    className: classManager.default.getComponentClassName(
      className,
      classModifier != null ? classModifier : defaultClassModifier,
      defaultClassName
    ),
  }))
);

export default withClassModifierFunc();
