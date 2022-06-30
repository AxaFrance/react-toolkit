import { ClassManager } from '@axa-fr/react-toolkit-core';

export function useOptionClassName(
  className: string,
  classModifier: string,
  disabled: boolean,
  defaultClassName: string
) {
  const classModifierWithDisabled = [
    classModifier,
    disabled ? 'disabled' : undefined,
  ]
    .filter((c) => !!c)
    .join(' ');

  return ClassManager.getComponentClassName(
    className,
    classModifierWithDisabled,
    defaultClassName
  );
}
