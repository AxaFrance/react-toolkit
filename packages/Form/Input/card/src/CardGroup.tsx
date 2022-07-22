import React, { ComponentProps } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import CardGroupStateless from './CardGroupStateless';

type Props = ComponentProps<typeof CardGroupStateless>;
const CardGroup = ({
  type,
  title,
  children,
  className,
  classModifier,
  name = 'defaultName',
  values,
  value,
  ...otherProps
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-rccard-group'
  );

  let isActive = false;
  if (type === 'checkbox') {
    isActive = values ? values.length > 0 : false;
  } else {
    isActive = value !== 'undefined' && value !== null;
  }
  const cardGroupClassName = `${componentClassName} ${
    isActive ? 'af-rccard-group--active' : ''
  }`;

  return (
    <CardGroupStateless
      type={type}
      title={title}
      name={name}
      values={values}
      value={value}
      className={cardGroupClassName}
      {...otherProps}>
      {children}
    </CardGroupStateless>
  );
};

const handlers = {
  onChange:
    ({ type, values, name, id, onChange }: any) =>
    (e: any) => {
      if (type === 'checkbox') {
        let newValues = [] as any;
        if (values) {
          newValues = [...values];
        }

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
          name,
          id,
        });
      } else {
        onChange({ value: e.value, name, id });
      }
    },
};

const EnhancedComponent = withInput<Props>(handlers)(CardGroup);

export default EnhancedComponent;
