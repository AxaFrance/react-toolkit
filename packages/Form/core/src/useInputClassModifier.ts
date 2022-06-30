export function useInputClassModifier(
  classModifier: string,
  disabled: boolean,
  hasChildren: boolean
) {
  return {
    inputClassModifier: [
      classModifier ?? '',
      hasChildren ? 'hasinfobulle' : '',
    ].join(' '),
    inputFieldClassModifier: [
      classModifier ?? '',
      disabled ? 'disabled' : '',
    ].join(' '),
  };
}
