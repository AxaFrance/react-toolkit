import classManager from './ClassManager';
import withProps from './withProps.hoc';

export interface WithClassModifierOptions {
  className?: string | null;
  classModifier?: string | null;
  defaultClassName?: string | null;
}

export type ExtendedProps = {
  className: string;
};
const withClassModifier = <T extends {}>() =>
  withProps<T, ExtendedProps>(
    ({
      className,
      classModifier,
      defaultClassName,
    }: WithClassModifierOptions) => ({
      className: classManager.getComponentClassName(
        className,
        classModifier,
        defaultClassName
      ),
    })
  );

export default withClassModifier;
