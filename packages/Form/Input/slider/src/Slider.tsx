import React, { ComponentProps, ReactNode } from 'react';
import RcSlider from 'rc-slider';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import 'rc-slider/assets/index.css';

type RcSliderProps = ComponentProps<typeof RcSlider>;
type Marks = RcSliderProps['marks'];

type Props = Omit<RcSliderProps, 'marks'> & {
  classModifier?: string;
  options: { value: number; label?: string | ReactNode }[];
  id: string;
  name: string;
};

const Slider = ({
  options,
  value,
  defaultValue,
  className,
  classModifier,
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

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-form__slider'
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
      aria-required={classModifier?.includes('required')}
    />
  );
};

const handlers = {
  onChange:
    ({
      name,
      id,
      onChange,
      options,
    }: Omit<Props, 'onChange'> & {
      onChange: (data: { id: string; name: string; value: number }) => void;
    }) =>
    (e: any) => {
      onChange &&
        onChange({
          value: options[e].value,
          name,
          id,
        });
    },
};

export default withInput(handlers)(Slider);
