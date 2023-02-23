import { ReactNode } from 'react';

export { default as Field } from './Field';
export { default as FieldInput } from './FieldInput';
export { default as MessageTypes } from './MessageTypes';
export { default as FieldError } from './FieldError';
export { default as FormClassManager } from './FormClassManager';
export { default as FieldForm } from './FieldForm';
export { default as HelpMessage } from './HelpMessage';
export { default as InputList } from './InputList';
export { withIsVisible } from './WithIsVisible';

export { useInputClassModifier } from './useInputClassModifier';
export { getOptionClassName } from './getOptionClassName';
export { useOptionsWithId } from './useOptionsWithId';
export { default as getFirstId } from './getFirstId';

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
