import { Option, withInput } from '@axa-fr/react-toolkit-form-core';
import React, {
  ComponentProps,
  createRef,
  CSSProperties,
  RefObject,
  useEffect,
  useState,
} from 'react';
import SwitchItem from './SwitchItem';

type SwitchItemProps = ComponentProps<typeof SwitchItem>;
type SwitchOptions = Pick<SwitchItemProps, keyof Option>;

type Props = Omit<SwitchItemProps, keyof Option> & {
  value: SwitchItemProps['value'];
  options: SwitchOptions[];
};

const Switch = ({ value, options, onChange, ...otherProps }: Props) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [sliderStyle, setSliderStyle] = useState<CSSProperties>({
    display: 'none',
  });
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    setSliderStyle(getSliderStyle(ref));
  }, [ref]);

  return (
    <div className="af-form-switch" ref={ref}>
      {options.map((option) => {
        return (
          <SwitchItem
            key={option.value}
            id={option.id}
            value={option.value}
            label={option.label}
            isChecked={option.value === selectedValue}
            onChange={(e) => {
              setSelectedValue(e.currentTarget.value);
              setSliderStyle(getSliderStyle(ref));
              onChange(e);
            }}
            {...otherProps}
          />
        );
      })}
      <span className="af-btn-switch-slider" style={sliderStyle} />
    </div>
  );
};

export const getSliderPosition = (ref: RefObject<HTMLDivElement>) => {
  const currentElementResult =
    ref && ref.current.querySelector(`input[type="radio"]:checked`);
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

const getSliderStyle = (ref: RefObject<HTMLDivElement>): CSSProperties => {
  const sliderPosition = getSliderPosition(ref);
  return {
    width: `${sliderPosition.width}px`,
    left: `${sliderPosition.left}px`,
  };
};

export default withInput<Props>()(Switch);
