export function useInputClassModifier(
  classModifier: string,
  disabled: boolean,
  hasChildren: boolean
) {
  return {
    inputClassModifier: `${classModifier} ${hasChildren ? 'hasinfobulle' : ''}`,
    inputFieldClassModifier: `${classModifier} ${disabled ? 'disabled' : ''}`,
  };
}
