import React, { ComponentProps } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';
import CardGroupStateless from './CardGroupStateless';

type Props = ComponentProps<typeof CardGroupStateless> &
  OnChange & { id: string };
const CardGroup = ({
  type,
  title,
  children,
  className,
  classModifier,
  name = 'defaultName',
  values,
  value,
  id,
  onChange,
  ...otherProps
}: Props) => {
  const componentClassName = getComponentClassName(
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

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (type === 'checkbox') {
      let newValues = [] as string[];
      if (values) {
        newValues = [...values];
      }

      const index = newValues.indexOf(e.target.value);
      const checked = index <= -1;
      if (checked) {
        newValues.push(e.target.value);
      } else {
        newValues.splice(index, 1);
      }
      onChange &&
        onChange({
          values: newValues,
          target: {
            value: e.target.value,
            checked,
          },
          name,
          id,
        });
    } else {
      onChange && onChange({ value: e.target.value, name, id });
    }
  };

  return (
    <CardGroupStateless
      type={type}
      title={title}
      name={name}
      values={values}
      value={value}
      className={cardGroupClassName}
      {...otherProps}
      onChange={handleOnChange}>
      {children}
    </CardGroupStateless>
  );
};

type OnChange = {
  onChange: (data: {
    id: string;
    name: string;
    value?: string;
    values?: string[];
    target?: { value: string; checked: boolean };
  }) => void;
};

const EnhancedComponent = withIsVisible(CardGroup);

export default EnhancedComponent;
