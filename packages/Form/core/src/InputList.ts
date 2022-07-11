export const isDisabled = (option: { disabled?: boolean }, disabled: boolean) =>
  option.disabled !== undefined ? option.disabled : disabled;

const InputList = {
  isDisabled,
};

export default InputList;
