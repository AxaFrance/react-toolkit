import * as classManager from './ClassManager';
import withProps  from './withProps.hoc';
import compose from './compose';

export interface WithClassModifierOptions {
  className?: string | null;
  classModifier?: string | null;
  defaultClassName?: string | null;
}

const withClassModifier = compose(
    withProps(({ className, classModifier, defaultClassName }: WithClassModifierOptions) => ({
      className: classManager.default.getComponentClassName(
        className,
        classModifier,
        defaultClassName
      ),
    }))
);

export default withClassModifier;
