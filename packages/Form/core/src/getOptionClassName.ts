import { getComponentClassName } from '@axa-fr/react-toolkit-core';

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

  return getComponentClassName(
    className,
    classModifierWithDisabled,
    defaultClassName
  );
}
