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
