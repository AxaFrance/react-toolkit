import React from 'react';
import { render } from '@testing-library/react';
import { omit, defaultOnChange, withInput } from '../withInput';

describe('omit', () => {
  it('Should return only wanted props when omit have been called', () => {
    const newProps = omit(['classModifier', 'isVisible'])({
      classModifier: 'modifier',
      className: 'classname',
      isVisible: true,
    });
    expect(newProps).toEqual({ className: 'classname' });
  });

  it('Should return the same props when omit have been called with no key', () => {
    const newProps = omit()({
      classModifier: 'modifier',
      className: 'classname',
    });
    expect(newProps).toEqual({
      classModifier: 'modifier',
      className: 'classname',
    });
  });
});

describe('defaultOnChange', () => {
  const onChangeMock = jest.fn();
  it('Should onChange to be called with name, target.id and target.value when defaultOnChange have been called with name and event', () => {
    defaultOnChange({ name: 'myFieldName', onChange: onChangeMock })({
      target: {
        id: 'id',
        value: 'value',
      },
    } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>);
    expect(onChangeMock).toHaveBeenCalledWith({
      name: 'myFieldName',
      id: 'id',
      value: 'value',
    });
  });
});

describe('withInput', () => {
  const onChangeMock = (e: any) => console.log(e);
  const Input = (props: any) => (
    <>
      <p>{props.componentClassName}</p>
      <p>{props.classModifier}</p>
      <input type="text" name={props.name} id="name" />
    </>
  );
  const defaultProps = {
    name: 'name',
    onChange: onChangeMock,
  };
  it('Should return Enhanced Input when withInput have been called with default className and input component', () => {
    const NewInput = withInput('default')(Input);
    const { asFragment, getByText } = render(<NewInput {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText('default')).toBeInTheDocument();
  });

  it('Should return Enhanced Input when withInput have been called with default className and input component and modifier', () => {
    const NewInput = withInput('default')(Input);
    const { asFragment, getByText } = render(
      <NewInput {...defaultProps} classModifier="custom" />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText('default default--custom')).toBeInTheDocument();
    expect(getByText('custom')).toBeInTheDocument();
  });

  it('Should not return Enhanced Input when isVisible is false', () => {
    const NewInput = withInput('default')(Input);
    const { asFragment, queryByText } = render(
      <NewInput {...defaultProps} isVisible={false} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('default default--custom')).not.toBeInTheDocument();
    expect(queryByText('custom')).not.toBeInTheDocument();
  });
});
