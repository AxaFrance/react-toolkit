import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import RadioInput from './RadioInput';

describe('<RadioInput />', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders RadioInput correctly', () => {
    const tree = renderer
      .create(
        <RadioInput
          label="Label"
          id="id"
          name="name"
          options={[
            { label: 'Option 1', value: '1', id: 'option1_id' },
            { label: 'Option 2', value: '2', id: 'option2_id' },
          ]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should send the id, name and value on change', () => {
    const onChange = jest.fn();
    const Element = (
      <RadioInput
        label="Label"
        id="id"
        name="name"
        options={[
          { label: 'Option 1', value: '1', id: 'option1_id' },
          { label: 'Option 2', value: '2', id: 'option2_id' },
        ]}
        onChange={onChange}
      />
    );

    act(() => {
      ReactDOM.render(Element, container);
      ReactTestUtils.Simulate.change(container.querySelector('#option1_id'));
    });

    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toEqual({
      id: 'option1_id',
      name: 'name',
      value: '1',
    });
  });
});
