import React, { ComponentProps, ReactNode } from 'react';
import RcSlider from 'rc-slider';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import 'rc-slider/assets/index.css';
import { withIsVisible } from '@axa-fr/react-toolkit-form-core';

type RcSliderProps = ComponentProps<typeof RcSlider>;
type Marks = RcSliderProps['marks'];

type Props = Omit<RcSliderProps, 'marks' | 'onChange'> & {
  classModifier?: string;
  options: { value: number; label?: string | ReactNode }[];
  id: string;
  name: string;
  onChange: (data: { id: string; name: string; value: number }) => void;
};

const Slider = ({
  options,
  value,
  defaultValue,
  className,
  classModifier,
  onChange,
  name,
  id,
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

  const handleOnChange = (newValue: number) => {
    onChange &&
      onChange({
        value: newValue,
        name,
        id,
      });
  };
  return (
    <RcSlider
      {...otherProps}
      min={0}
      max={optionSorted.length - 1}
      marks={marks}
      step={null}
      className={componentClassName}
      defaultValue={defaultValue || value}
      onChange={handleOnChange}
    />
  );
};

export default withIsVisible(Slider);
