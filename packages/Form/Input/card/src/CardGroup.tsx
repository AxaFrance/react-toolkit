import React, { ComponentProps } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import CardGroupStateless from './CardGroupStateless';

const defaultClassName = 'af-rccard-group';

type CustomFormEvent = import('@axa-fr/react-toolkit-form-core').CustomFormEvent;
type CheckboxOnChange = Pick<
  ComponentProps<
    typeof import('@axa-fr/react-toolkit-form-input-checkbox').Checkbox
  >,
  'onChange'
>;
const customOnChange = ({ onChange, type, values }: Partial<Props>) => (
  e: CustomFormEvent
) => {
  if (type === 'checkbox') {
    const newValues = values?.slice() || [];

    const index = newValues.indexOf(e.value);
    const checked = index <= -1;
    if (checked) {
      newValues.push(e.value);
    } else {
      newValues.splice(index, 1);
    }
    onChange({
      values: newValues,
      target: {
        value: e.value,
        checked,
      },
      name: e.name,
      id: e.id,
    });
  } else {
    onChange(e);
  }
};

type Props = ComponentProps<typeof CardGroupStateless> &
  Partial<CheckboxOnChange>;
const CardGroup = ({
  type,
  title,
  children,
  onChange,
  className,
  classModifier,
  name = 'defaultName',
  values,
  value,
  ...otherProps
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  let isActive = false;

  if (type === 'checkbox') {
    isActive = values ? values.length > 0 : false;
  } else {
    isActive = value !== 'undefined' && value !== null;
  }

  return (
    <CardGroupStateless
      type={type}
      title={title}
      name={name}
      onChange={customOnChange({ onChange, type, values })}
      values={values}
      value={value}
      className={`${componentClassName} ${
        isActive ? 'af-rccard-group--active' : ''
      }`}
      {...otherProps}>
      {children}
    </CardGroupStateless>
  );
};

export default CardGroup;
