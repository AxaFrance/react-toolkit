import { ClassManager } from '@axa-fr/react-toolkit-core';
import { getFieldInputClassModifier } from './FormClassManager';

export const getOptionClassName = (
  className: string,
  classModifier: string,
  defaultClassName: string,
  disabled: boolean,
  getFieldInputClassModifierFn: Function = getFieldInputClassModifier,
  getComponentClassNameFn: Function = ClassManager.getComponentClassName
) => {
  const fieldinputClassModifier = getFieldInputClassModifierFn(
    classModifier,
    disabled
  );
  return getComponentClassNameFn(
    className,
    fieldinputClassModifier,
    defaultClassName
  );
};

export const isDisabled = (option: { disabled?: boolean }, disabled: boolean) =>
  option.disabled !== undefined ? option.disabled : disabled;

const InputList = {
  getOptionClassName,
  isDisabled,
};

export default InputList;
