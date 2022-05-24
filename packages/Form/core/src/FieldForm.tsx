import React, {
  cloneElement,
  Children,
  useState,
  useRef,
  useEffect,
  BaseSyntheticEvent,
  ReactElement,
  isValidElement,
  ReactNode,
} from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';
import MessageTypes from './MessageTypes';
import { getMessageClassModifier } from './FormClassManager';

const defaultClassName = 'md-10';

const INITIAL_STATE = {
  hasLostFocusOnce: false,
  hasFocus: false,
  hasChange: false,
  memory: { message: '', messageType: MessageTypes.error },
};

type EventFunction = {
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
};

export type FieldFormProps = {
  className?: string;
  classModifier?: string;
  forceDisplayMessage?: boolean;
  children: ReactNode;
  message?: string | null;
  messageType?: MessageTypes;
  setStateMemoryFn?: typeof setStateMemory;
  onChangeByStateFn?: typeof onChangeByState;
  setStateOnBlurFn?: typeof setStateOnBlur;
  setStateOnFocusFn?: typeof setStateOnFocus;
  initialState?: typeof INITIAL_STATE;
};

type SetState = (prevState: typeof INITIAL_STATE) => typeof INITIAL_STATE;

export const setStateMemory =
  ({ message = null, messageType = MessageTypes.error }): SetState =>
  (prevState) => ({
    ...prevState,
    memory: {
      message,
      messageType,
    },
  });

export const setStateHasChange = (): SetState => (prevState) => ({
  ...prevState,
  hasChange: true,
});

export const onChangeByState = (
  setState: Function,
  stateHasChange: boolean,
  setStateHasChangeFn = setStateHasChange
) => !stateHasChange && setState(setStateHasChangeFn());

export const setStateOnBlur = (): SetState => (prevState) => ({
  ...prevState,
  hasLostFocusOnce: true,
  hasFocus: false,
});

export const setStateOnFocus =
  ({ message = null, messageType = MessageTypes.error }): SetState =>
  (prevState) => ({
    ...prevState,
    hasFocus: true,
    memory: { message, messageType },
  });

const FieldForm = ({
  children,
  message = null,
  messageType = MessageTypes.error,
  className = defaultClassName,
  classModifier = '',
  forceDisplayMessage = false,
  setStateMemoryFn = setStateMemory,
  onChangeByStateFn = onChangeByState,
  setStateOnBlurFn = setStateOnBlur,
  setStateOnFocusFn = setStateOnFocus,
  initialState = INITIAL_STATE,
}: FieldFormProps) => {
  const [state, setState] = useState(initialState);

  const previousForceDisplayMessage = useRef(forceDisplayMessage);

  useEffect(() => {
    if (previousForceDisplayMessage.current !== forceDisplayMessage) {
      setState(setStateMemoryFn({ message, messageType }));
    }
  }, [
    forceDisplayMessage,
    message,
    messageType,
    previousForceDisplayMessage,
    setState,
    setStateMemoryFn,
  ]);

  // for particular case on particular browers which does not throw onFocus or onBlur event
  const onChange = () => onChangeByStateFn(setState, state?.hasChange);

  const onBlur = () => setState(setStateOnBlurFn());

  const onFocus = () => setState(setStateOnFocusFn({ message, messageType }));

  const childrenCloned = renderedChildren({
    children,
    wrapper: { onFocus, onChange, onBlur },
    ...getMessageInfo({ ...state, forceDisplayMessage, message, messageType }),
  });

  const subComponentClassName = useComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return <div className={subComponentClassName}>{childrenCloned}</div>;
};

type GetMessageInfoProps = typeof INITIAL_STATE &
  Required<
    Pick<FieldFormProps, 'message' | 'messageType' | 'forceDisplayMessage'>
  >;

export const getMessageInfo = ({
  forceDisplayMessage,
  hasLostFocusOnce,
  hasFocus,
  memory,
  hasChange,
  message,
  messageType,
}: GetMessageInfoProps) => {
  const isDisplayMessage =
    hasLostFocusOnce || forceDisplayMessage || (hasChange && !hasFocus);

  if (!isDisplayMessage) {
    return {
      message: '',
      messageType: '',
    };
  }
  return hasFocus
    ? memory
    : {
        message,
        messageType,
      };
};

type RenderChildrenProps = {
  wrapper: EventFunction;
} & Partial<Pick<FieldFormProps, 'children'>> &
  ReturnType<typeof getMessageInfo>;

export const renderedChildren = ({
  children,
  wrapper,
  message,
  messageType,
}: RenderChildrenProps): ReactNode[] =>
  Children.map(children, (child) => {
    if (!isValidElement(child) || typeof child.type === 'string') {
      return child;
    }

    const props = {
      ...child.props,
    };

    if (child.props.children) {
      const subChildren = renderedChildren({
        children: child.props.children,
        wrapper,
        message,
        messageType,
      });

      if (subChildren !== null) {
        props.children = subChildren;
      }
    }

    return cloneElement(child, {
      ...props,
      ...addPropsClone({
        ...child.type,
        name: child.type.name,
        message,
        messageType,
        classModifier: props.classModifier,
        wrapper,
        child,
      }),
    });
  });

type AddPropsClone = Omit<RenderChildrenProps, 'children'> & {
  child: ReactElement<EventFunction>;
  classModifier: string;
  name: string;
  getMessageClassModifierFn?: Function;
  eventWrapperFn?: Function;
};

export const addPropsClone = ({
  message,
  messageType,
  classModifier,
  wrapper,
  child,
  name,
  getMessageClassModifierFn = getMessageClassModifier,
  eventWrapperFn = eventWrapper,
  ...rest
}: AddPropsClone) => {
  const messageClassModifier = getMessageClassModifierFn({
    messageType,
    message,
    modifier: classModifier,
  });

  const type: any = { ...rest };
  const displayName = type?.displayName ?? name;

  switch (displayName) {
    case 'HelpMessage':
      return { isVisible: !message };
    case 'FieldError':
      return { message };
    case 'FieldInput':
      return { classModifier: messageClassModifier };
    case 'EnhancedInputList':
      return {
        ...eventWrapperFn({ wrapper, props: child.props }),
        classModifier: messageClassModifier,
      };
    case 'EnhancedInput':
      return {
        ...eventWrapperFn({ wrapper, props: child.props }),
      };
    default:
      return {};
  }
};

type EventWrapperProps = {
  props: EventFunction;
} & Pick<AddPropsClone, 'wrapper'>;

export const eventWrapper = ({ wrapper, props }: EventWrapperProps) => ({
  onChange: (ev: BaseSyntheticEvent) => {
    wrapper.onChange(ev);
    if (props.onChange) {
      props.onChange(ev);
    }
  },
  onBlur: (ev: BaseSyntheticEvent) => {
    wrapper.onBlur(ev);
    if (props.onBlur) {
      props.onBlur(ev);
    }
  },
  onFocus: (ev: BaseSyntheticEvent) => {
    wrapper.onFocus(ev);
    if (props.onFocus) {
      props.onFocus(ev);
    }
  },
});

export default FieldForm;
