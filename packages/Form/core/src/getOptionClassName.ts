import { ClassManager } from '@axa-fr/react-toolkit-core';

export function getOptionClassName(
  className: string,
  classModifier: string,
  defaultClassName: string,
  disabled: boolean
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
