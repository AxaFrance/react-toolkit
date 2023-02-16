import React from 'react';
import { render } from '@testing-library/react';
import Select from '../Select';
import SelectBase from '../SelectBase';
import SelectInput from '../SelectInput';

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

test('renders Select correctly', () => {
  const { asFragment } = render(
    <Select
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders SelectBase correctly', () => {
  const { asFragment } = render(
    <SelectBase
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders SelectInput correctly', () => {
  const { asFragment } = render(
    <SelectInput
      label="label"
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
      helpMessage="Enter the place type"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Select correctly with classModier', () => {
  const { asFragment } = render(
    <Select
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
      classModifier="custom"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders SelectBase correctly with classModier', () => {
  const { asFragment } = render(
    <SelectBase
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
      classModifier="custom"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders SelectInput correctly with classModier', () => {
  const { asFragment } = render(
    <SelectInput
      label="label"
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
      helpMessage="Enter the place type"
      classModifier="custom"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
