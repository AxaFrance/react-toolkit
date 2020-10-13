import * as React from 'react';

type HelpMessageProps = Partial<typeof defaultProps>;

const defaultProps = {
  message: null as string,
  isVisible: true,
};

const HelpMessage = (props: HelpMessageProps) => {
  const { message, isVisible } = props;
  if (isVisible) {
    return <small className="af-form__help">{message}</small>;
  }
  return null;
};

HelpMessage.defaultProps = defaultProps;

type HelpMessageCloneProps = {
  message: string;
  props: HelpMessageProps;
  child: React.ReactElement;
};

HelpMessage.Clone = (data: HelpMessageCloneProps) => {
  const { props, message, child } = data;
  return React.cloneElement(child, {
    ...props,
    isVisible: !message,
  });
};

export default HelpMessage;
