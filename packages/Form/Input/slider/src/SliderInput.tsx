import React, { ComponentProps, ReactNode } from 'react';
import { Field, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import { useId } from '@axa-fr/react-toolkit-core';

import Slider from './Slider';

type Props = ComponentProps<typeof Field> &
  ComponentProps<typeof Slider> & {
    helpMessage?: ReactNode;
  };

const SliderInput = ({
  id,
  children,
  helpMessage,
  message,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  messageType,
  isVisible,
  forceDisplayMessage,
  className,
  classModifier,
  ...sliderProps
}: Props) => {
  const inputId = useId(id);
  return (
    <Field
      id={inputId}
      label={label}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={classModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}>
      <Slider {...sliderProps} id={id} />
      {children}
      <HelpMessage message={helpMessage} isVisible={!message} />
    </Field>
  );
};

export default SliderInput;
