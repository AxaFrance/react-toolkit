import React, {
  ComponentProps,
  CSSProperties,
  useEffect,
  useState,
} from 'react';
import { CustomFormEvent } from '@axa-fr/react-toolkit-form-core';
import SwitchItem from './SwitchItem';

export const getSliderPosition = (ref: HTMLDivElement) => {
  const currentElementResult =
    ref && ref.querySelector(`input[type="radio"]:checked`);
  if (!currentElementResult) {
    return { left: 0, width: 0 };
  }
  const currentElement = currentElementResult.parentElement;
  const left = currentElement.offsetLeft;
  const width = currentElement.clientWidth;
  return {
    left,
    width,
  };
};

const getSliderStyle = (ref: HTMLDivElement): CSSProperties => {
  const sliderPosition = getSliderPosition(ref);
  return {
    width: `${sliderPosition.width}px`,
    left: `${sliderPosition.left}px`,
  };
};

interface Props {
  value: string;
  options: Omit<ComponentProps<typeof SwitchItem>, 'onChange'>[];
  name: string;
  disabled: boolean;
  onChange: (event: CustomFormEvent) => void;
}

const Switch = ({ value, options, onChange }: Props) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [sliderStyle, setSliderStyle] = useState<CSSProperties>({
    display: 'none',
  });
  let container: HTMLDivElement;

  useEffect(() => {
    if (container) {
      setSliderStyle(getSliderStyle(container));
    }
  }, [container]);

  useEffect(() => {
    setSliderStyle(getSliderStyle(container));
  }, [selectedValue, container]);

  return (
    <div
      className="af-form-switch"
      ref={(el) => {
        container = el;
      }}>
      {options.map((switchItemProps) => {
        return (
          <SwitchItem
            key={switchItemProps.value.toString()}
            {...switchItemProps}
            onChange={(e) => {
              setSelectedValue(e.currentTarget.value);
              onChange({
                value: e.currentTarget.value,
                name: e.currentTarget.name,
                id: e.currentTarget.id,
              });
            }}
            checked={switchItemProps.value === selectedValue}
          />
        );
      })}
      <span className="af-btn-switch-slider" style={sliderStyle} />
    </div>
  );
};

export default Switch;
