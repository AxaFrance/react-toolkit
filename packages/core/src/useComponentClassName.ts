import ClassManager from './ClassManager';

export function useComponentClassName(
  className: string,
  classModifier: string,
  defaultClassName: string
) {
  return ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
}
