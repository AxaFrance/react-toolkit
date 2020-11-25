import { ChangeEvent } from 'react';

export type CustomFormEvent = {
  value: string;
  name: string;
  id: string;
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
