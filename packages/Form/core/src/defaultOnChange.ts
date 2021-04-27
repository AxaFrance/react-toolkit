import { ChangeEvent } from 'react';

type BaseCustomFormEvent = {
  name: string;
  id: string;
};

export type CustomFormEventValues = BaseCustomFormEvent & {
  values: string[];
};

export type CustomFormEvent = BaseCustomFormEvent & {
  value: string;
};

export const defaultOnChange = (onChange: (event: CustomFormEvent) => void) => (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  onChange &&
    onChange({
      value: e.currentTarget.value,
      name: e.currentTarget.name,
      id: e.currentTarget.id,
    });
};
