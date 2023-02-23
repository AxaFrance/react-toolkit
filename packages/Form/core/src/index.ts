import { ReactNode } from 'react';

export { default as Field } from './Field';
export { default as FieldError } from './FieldError';
export { default as FieldForm } from './FieldForm';
export { default as FieldInput } from './FieldInput';
export { default as FormClassManager } from './FormClassManager';
export { default as HelpMessage } from './HelpMessage';
export { default as InputList } from './InputList';
export { default as MessageTypes } from './MessageTypes';
export { withIsVisible } from './withIsVisible';

export { default as getFirstId } from './getFirstId';
export { getOptionClassName } from './getOptionClassName';
export { useInputClassModifier } from './useInputClassModifier';
export { useOptionsWithId } from './useOptionsWithId';

export type Option = {
  id?: string;
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

type BaseFormEvent = {
  id: string;
  name: string;
};
export type FormEvent =
  | (BaseFormEvent & {
      value: string;
    })
  | (BaseFormEvent & {
      values: string[];
    });
