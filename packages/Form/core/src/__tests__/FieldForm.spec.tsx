import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MessageTypes from '../MessageTypes';
import FieldForm, {
  renderedChildren,
  getMessageInfo,
  addPropsClone,
  eventWrapper,
  setStateMemory,
  setStateHasChange,
  setStateOnBlur,
  setStateOnFocus,
  onChangeByState,
} from '../FieldForm';

import FieldError from '../FieldError';
import FieldInput from '../FieldInput';
import HelpMessage from '../HelpMessage';

/** ****************************************************
 * Utils
 ***************************************************** */

const expectBySelector = (
  container: HTMLElement,
  selector: string,
  not = false
) => {
  const element = container.querySelector(selector);
  not
    ? expect(element).not.toBeInTheDocument()
    : expect(element).toBeInTheDocument();
  return element;
};

const expectText = (getByText: Function, text: string) =>
  expect(getByText(RegExp(text))).toBeInTheDocument();

const wrapperMock = {
  onChange: () => ({}),
  onBlur: () => ({}),
  onFocus: () => ({}),
};
/** ****************************************************
 * FieldForm
 ***************************************************** */
const setStateMemoryFn = jest.fn();

const defaultProps = {
  message: 'message erreur',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  children: <></>,
  setStateMemoryFn,
};

type FieldFormProps = ComponentPropsWithoutRef<typeof FieldForm>;
type RenderFieldForm = {
  children?: ReactNode;
  props?: FieldFormProps;
  customProps?: Omit<FieldFormProps, 'children'> & {
    children?: ReactNode;
    setStateMemoryFn?: Function;
  };
};

const renderFieldForm = ({
  children = null,
  props = defaultProps,
  customProps,
}: RenderFieldForm) =>
  render(
    <FieldForm {...props} {...customProps}>
      {children}
      <FieldError
        message={props.message}
        messageType={{ ...props, ...customProps }.messageType}
      />
    </FieldForm>
  );

describe('Render <FieldForm/>', () => {
  it('Should render empty children', () => {
    const { rerender } = render(
      <FieldForm>
        <p>test</p>
      </FieldForm>
    );
    rerender(
      <FieldForm forceDisplayMessage setStateMemoryFn={setStateMemoryFn}>
        <p>test</p>
      </FieldForm>
    );
    expect(setStateMemoryFn).toBeCalled();
  });

  it('Should render empty children', () => {
    const { asFragment, container } = renderFieldForm({});
    expectBySelector(container, '.md-10');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render string children', () => {
    const { asFragment, container, getByText } = renderFieldForm({
      children: 'testtest',
    });
    expectBySelector(container, '.md-10');
    expectText(getByText, 'testtest');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render simple JSX children w', () => {
    const Custom = () => <p>Simple JSX</p>;
    const { asFragment, container, getByText } = renderFieldForm({
      children: <Custom />,
    });
    expectBySelector(container, '.md-10');
    expectText(getByText, 'Simple JSX');
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Render <FieldForm/> with <FieldInput />', () => {
  const Custom = (props: any) => <p>{JSON.stringify(props)}</p>;

  it('Should render with message displayed when forceDisplayMessage true', () => {
    const { asFragment, container, getByText } = renderFieldForm({
      customProps: {
        forceDisplayMessage: true,
        messageType: MessageTypes.success,
        message: 'bravo',
      },
      children: (
        <FieldInput className="af-form__field">
          <Custom />
        </FieldInput>
      ),
    });

    expectBySelector(container, '.af-form__message--success');
    expectBySelector(container, '.af-form__field.af-form__field--success');
    expectText(getByText, 'bravo');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render with display error message when forceDisplayMessage true', () => {
    const { asFragment, container, getByText } = renderFieldForm({
      customProps: {
        forceDisplayMessage: true,
        message: 'message erreur',
      },
      children: (
        <FieldInput className="af-form__field">
          <Custom />
        </FieldInput>
      ),
    });
    expectBySelector(container, '.af-form__message--error');
    expectBySelector(container, '.af-form__field.af-form__field--error');
    expectText(getByText, 'message erreur');
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Render <FieldForm/> with <MyField />', () => {
  const MyField = (props: any) => (
    <input
      type="text"
      id="name"
      name="name"
      aria-label="input-name"
      {...props}
    />
  );

  const renderCompleteFieldForm = (
    customProps?: Omit<FieldFormProps, 'children'> & {
      children?: ReactNode;
    }
  ) =>
    renderFieldForm({
      customProps,
      children: (
        <>
          <FieldInput className="sam">
            <MyField />
          </FieldInput>
          <HelpMessage message="un peu d'aide ?" />
        </>
      ),
    });

  it('Should render with FieldInput and FieldError displayed and HelpMessage hidden when forceDisplayMessage true ', () => {
    const { asFragment, container, getByLabelText, getByText } =
      renderCompleteFieldForm({
        forceDisplayMessage: true,
      });

    expect(getByLabelText('input-name')).toBeInTheDocument();
    expectBySelector(container, '.af-form__message--error');
    expectBySelector(container, '.sam.sam--error');
    expectText(getByText, 'message erreur');
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render with FieldInput and HelpMessage displayed and FieldError hidden when message is null', () => {
    const { asFragment, getByText, container, getByLabelText } =
      renderCompleteFieldForm({ message: null });
    expectBySelector(container, '.af-form__message--error', true);
    expect(getByLabelText('input-name')).toBeInTheDocument();
    expectText(getByText, "un peu d'aide ?");
    expect(asFragment()).toMatchSnapshot();
  });
});

/** ****************************************************
 * setState methods
 ***************************************************** */

const prevState = {
  hasLostFocusOnce: false,
  hasFocus: false,
  hasChange: false,
  memory: { message: '', messageType: MessageTypes.error },
};

describe('setStateMemory', () => {
  it('Should update memory state when setStateMemory have been called with default params and prevstate', () => {
    const result = setStateMemory({})(prevState);
    expect(result).toEqual({
      ...prevState,
      memory: { message: null, messageType: MessageTypes.error },
    });
  });
  it('Should update memory state when setStateMemory have been called with message, messageType and prevstate', () => {
    const result = setStateMemory({
      message: 'memory message',
      messageType: MessageTypes.success,
    })(prevState);
    expect(result).toEqual({
      ...prevState,
      memory: { message: 'memory message', messageType: MessageTypes.success },
    });
  });
});

describe('setStateHasChange', () => {
  it('Should update hasChange to true state when setStateHasChange have been called with prevstate', () => {
    const result = setStateHasChange()(prevState);
    expect(result).toEqual({ ...prevState, hasChange: true });
  });
});

describe('setStateOnBlur', () => {
  it('Should update hasLostFocusOnce to true and  hasFocus to false when setStateOnBlur have been called with prevstate', () => {
    const result = setStateOnBlur()(prevState);
    expect(result).toEqual({
      ...prevState,
      hasLostFocusOnce: true,
      hasFocus: false,
    });
  });
});

describe('setStateOnFocus', () => {
  it('Should update hasFocus to true and memory when setStateOnFocus have been called with default params and prevstate', () => {
    const result = setStateOnFocus({})(prevState);
    expect(result).toEqual({
      ...prevState,
      memory: { message: null, messageType: MessageTypes.error },
      hasFocus: true,
    });
  });
  it('Should update hasFocus to true and memory when setStateOnFocus have been called with message, messageType and prevstate', () => {
    const result = setStateOnFocus({
      message: 'memory message',
      messageType: MessageTypes.success,
    })(prevState);
    expect(result).toEqual({
      ...prevState,
      memory: { message: 'memory message', messageType: MessageTypes.success },
      hasFocus: true,
    });
  });
});

describe('onChangeByState', () => {
  const setStateMock = jest.fn();

  it('Should setState not to be called when stateHasChange is true', () => {
    onChangeByState(setStateMock, true);
    expect(setStateMock).not.toBeCalled();
  });
  it('Should setState to be called when stateHasChange is false', () => {
    onChangeByState(setStateMock, false);
    expect(setStateMock).toBeCalled();
  });
});

/** ****************************************************
 * renderedChildren
 ***************************************************** */

const defaultParams = {
  children: '',
  wrapper: wrapperMock,
  message: '',
  messageType: MessageTypes.error,
};

describe('renderedChildren', () => {
  it('Should return empty string child when children is empty string', () => {
    const result = renderedChildren(defaultParams);
    expect(result).toEqual(['']);
  });
  it('Should return array children with string child when children is a string', () => {
    const result = renderedChildren({ ...defaultParams, children: 'hello' });
    expect(result).toEqual(['hello']);
  });

  it('Should return array children with type string child when children type is a string', () => {
    const { getByText, asFragment } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          children: <p>test</p>,
        })}
      </>
    );

    expect(getByText('test')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should return only valid children unchanged childs when renderedChildren has been called with differents children', () => {
    const ChildWithProps = ({ className, id }: any) => (
      <p className={className} id={id}>
        child
      </p>
    );
    const { asFragment, container } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          children: [
            null,
            undefined,
            <p>test</p>,
            <ChildWithProps className="hello" id="world" />,
            'str',
            true,
            false,
            <hr />,
            <p>{undefined}</p>,
            <p>{null}</p>,
          ],
        })}
      </>
    );

    expect(container.childNodes.length).toEqual(6);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render HelpMessage with message when renderedChildren has been called with HelpMessage children and parent message is empty', () => {
    const { asFragment } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          children: [<HelpMessage message="my help message" />],
        })}
      </>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should return not render HelpMessage with message when renderedChildren has been called with HelpMessage children and parent message is not empty', () => {
    const { asFragment } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          message: 'parent',
          children: [<HelpMessage message="my help message" />],
        })}
      </>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should return render FieldError with parent message when renderedChildren has been called with FieldError children and parent message is not empty', () => {
    const { asFragment } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          message: 'message parent',
          children: [<FieldError />],
        })}
      </>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should return render FieldInput with classModifier error when renderedChildren has been called with FieldInput children and messageType eqaul "error"', () => {
    const { asFragment } = render(
      <>
        {renderedChildren({
          ...defaultParams,
          message: 'parent message',
          children: [<FieldInput className="fieldinput" />],
        })}
      </>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // TODO add test for EnhancedInput case
});

/** ****************************************************
 * getMessageInfo
 ***************************************************** */

describe('getMessageInfo', () => {
  const memoryMessage = 'memory message';
  const memoryMessageType = MessageTypes.error;
  const memory = {
    message: memoryMessage,
    messageType: memoryMessageType,
  };

  const message = 'message erreur';
  const messageType = MessageTypes.error;
  it.each`
    forceDisplayMessage | hasLostFocusOnce | hasFocus | hasChange | expectedMessage  | expectedMessageType
    ${false}            | ${false}         | ${false} | ${false}  | ${''}            | ${''}
    ${false}            | ${false}         | ${false} | ${true}   | ${message}       | ${messageType}
    ${false}            | ${false}         | ${true}  | ${false}  | ${''}            | ${''}
    ${false}            | ${false}         | ${true}  | ${true}   | ${''}            | ${''}
    ${false}            | ${true}          | ${false} | ${false}  | ${message}       | ${messageType}
    ${false}            | ${true}          | ${false} | ${true}   | ${message}       | ${messageType}
    ${false}            | ${true}          | ${true}  | ${false}  | ${memoryMessage} | ${memoryMessageType}
    ${false}            | ${true}          | ${true}  | ${true}   | ${memoryMessage} | ${memoryMessageType}
    ${true}             | ${false}         | ${false} | ${false}  | ${message}       | ${messageType}
    ${true}             | ${false}         | ${false} | ${true}   | ${message}       | ${messageType}
    ${true}             | ${false}         | ${true}  | ${false}  | ${memoryMessage} | ${memoryMessageType}
    ${true}             | ${false}         | ${true}  | ${true}   | ${memoryMessage} | ${memoryMessageType}
    ${true}             | ${true}          | ${false} | ${false}  | ${message}       | ${messageType}
    ${true}             | ${true}          | ${false} | ${true}   | ${message}       | ${messageType}
    ${true}             | ${true}          | ${true}  | ${false}  | ${memoryMessage} | ${memoryMessageType}
    ${true}             | ${true}          | ${true}  | ${true}   | ${memoryMessage} | ${memoryMessageType}
  `(
    "Should return expectedMessage : '$expectedMessage' and expectedMessageType : '$expectedMessageType' when forceDisplayMessage: $forceDisplayMessage, hasLostFocusOnce: $hasLostFocusOnce, hasFocus: $hasFocus , hasChange: $hasChange",
    ({
      forceDisplayMessage,
      hasLostFocusOnce,
      hasFocus,
      hasChange,
      expectedMessage,
      expectedMessageType,
    }) => {
      expect(
        getMessageInfo({
          forceDisplayMessage,
          hasLostFocusOnce,
          hasFocus,
          hasChange,
          memory,
          message,
          messageType,
        })
      ).toEqual({ message: expectedMessage, messageType: expectedMessageType });
    }
  );
});

/** ****************************************************
 * addPropsClone
 ***************************************************** */

describe('addPropsClone', () => {
  const defaultParamsAddPropsClone = {
    child: {
      type: 'h2',
      props: {},
      key: '1',
    },
    name: '',
    wrapper: wrapperMock,
    message: '',
    messageType: MessageTypes.error,
    classModifier: '',
  };

  it('Should return empty object when name is empty string', () => {
    const result = addPropsClone(defaultParamsAddPropsClone);
    expect(result).toEqual({});
  });

  it('Should return isVisible true when name is HelpMessage and message empty', () => {
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      name: 'HelpMessage',
    });
    expect(result).toEqual({ isVisible: true });
  });

  it('Should return isVisible false when name is HelpMessage and message not empty', () => {
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      name: 'HelpMessage',
      message: 'error message',
    });
    expect(result).toEqual({ isVisible: false });
  });

  it('Should return message when name is FieldError and message not empty', () => {
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      name: 'FieldError',
      message: 'error message',
    });
    expect(result).toEqual({ message: 'error message' });
  });

  it('Should return message when name is FieldInput and classModifier defined', () => {
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      name: 'FieldInput',
      message: 'error message',
      classModifier: 'modifier',
    });
    expect(result).toEqual({ classModifier: 'modifier error' });
  });

  it('Should return messageClassModifier and event wrapper handlers when displayName is EnhancedInputList and classModifier defined', () => {
    const eventWrapperFnMock = jest
      .fn()
      .mockReturnValue({ onChange: 'onchange' });
    const type = {
      displayName: 'EnhancedInputRadio',
    };
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      message: 'error message',
      classModifier: 'modifier',
      eventWrapperFn: eventWrapperFnMock,
      ...type,
    });
    expect(result).toEqual({
      onChange: 'onchange',
      classModifier: 'modifier error',
    });
    expect(eventWrapperFnMock).toBeCalledWith({
      wrapper: wrapperMock,
      props: {},
    });
  });

  it('Should return event wrapper handlers when displayName is EnhancedInput and classModifier defined', () => {
    const eventWrapperFnMock = jest
      .fn()
      .mockReturnValue({ onChange: 'onchange' });
    const type = {
      displayName: 'EnhancedInput',
    };
    const result = addPropsClone({
      ...defaultParamsAddPropsClone,
      message: 'error message',
      classModifier: 'modifier',
      eventWrapperFn: eventWrapperFnMock,
      ...type,
    });
    expect(result).toEqual({
      onChange: 'onchange',
    });
    expect(eventWrapperFnMock).toBeCalledWith({
      wrapper: wrapperMock,
      props: {},
    });
  });
});

/** ****************************************************
 * eventWrapper
 ***************************************************** */

const wrapperOnChangeMock = jest.fn();
const wrapperOnBlurMock = jest.fn();
const wrapperOnFocusMock = jest.fn();
const defaultParamsEventWrapper = {
  wrapper: {
    onChange: wrapperOnChangeMock,
    onBlur: wrapperOnBlurMock,
    onFocus: wrapperOnFocusMock,
  },
  props: {},
};

describe('eventWrapper', () => {
  const changeEvent = {} as React.ChangeEvent<HTMLInputElement>;
  const focusEvent = {} as React.FocusEvent<HTMLInputElement>;

  it('Should return object with wrapper methods events and call wrapper methods when eventWrapper have been called', () => {
    const result = eventWrapper(defaultParamsEventWrapper);
    expect(result).toEqual({
      onChange: result.onChange,
      onBlur: result.onBlur,
      onFocus: result.onFocus,
    });
    act(() => result.onChange(changeEvent));
    act(() => result.onBlur(focusEvent));
    act(() => result.onFocus(focusEvent));
    expect(wrapperOnChangeMock).toBeCalled();
    expect(wrapperOnBlurMock).toBeCalled();
    expect(wrapperOnFocusMock).toBeCalled();
  });

  it('Should return object with wrapper methods events and call props methods when eventWrapper have been called', () => {
    const propsOnChangeMock = jest.fn();
    const propsOnBlurMock = jest.fn();
    const propsOnFocusMock = jest.fn();
    const result = eventWrapper({
      ...defaultParamsEventWrapper,
      props: {
        onChange: propsOnChangeMock,
        onBlur: propsOnBlurMock,
        onFocus: propsOnFocusMock,
      },
    });
    act(() => result.onChange(changeEvent));
    act(() => result.onBlur(focusEvent));
    act(() => result.onFocus(focusEvent));
    expect(propsOnChangeMock).toBeCalled();
    expect(propsOnBlurMock).toBeCalled();
    expect(propsOnFocusMock).toBeCalled();
  });
});
