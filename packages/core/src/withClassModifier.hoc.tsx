import * as classManager from './ClassManager';
import { withProps, compose, setDisplayName } from 'recompose';

export interface WithClassModifierOptions {
  className?: string | null;
  classModifier?: string | null;
  defaultClassName?: string | null;
}

export default compose(
  setDisplayName('withClassModifier'),
  withProps(({ className, classModifier, defaultClassName }: WithClassModifierOptions) => ({
    className: classManager.default.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    ),
  }))
);
