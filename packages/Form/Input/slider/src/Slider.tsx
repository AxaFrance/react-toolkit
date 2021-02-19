import React, { ComponentProps, ReactNode } from 'react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  withComponentClassName,
  CustomFormEvent,
} from '@axa-fr/react-toolkit-form-core';

type Marks = Record<
  number,
  | React.ReactNode
  | {
      style?: React.CSSProperties;
      label?: string;
    }
>;

type Props = Omit<ComponentProps<typeof RcSlider>, 'marks' | 'onChange'> & {
  options: { value: number; label?: string | ReactNode }[];
  componentClassName?: string;
  onChange: (event: CustomFormEvent) => void;
  id: string;
  name: string;
};

const Slider = ({
  id,
  name,
  componentClassName,
  options,
  onChange,
  value,
  defaultValue,
  ...otherProps
}: Props) => {
  const optionSorted = [...options].sort(
    (optA, optB) => optA.value - optB.value
  );
  const marks = optionSorted.reduce(
    (prevMarks, { value: optValue, label: optLabel }, index) => {
      const newMarks = { ...prevMarks };
      newMarks[index] = optLabel || optValue;
      return newMarks;
    },
    {} as Marks
  );

  return (
    <RcSlider
      {...otherProps}
      min={0}
      max={optionSorted.length - 1}
      marks={marks}
      step={null}
      className={componentClassName}
      defaultValue={defaultValue || value}
      onChange={(e) => {
        onChange({
          value: optionSorted[e].value.toString(),
          name,
          id,
        });
      }}
    />
  );
};

export default withComponentClassName<Props>('af-form__slider')(Slider);
