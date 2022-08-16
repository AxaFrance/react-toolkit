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

test('renders Select with categories correctly', () => {
  const groupedOptions = [
    {
      label: 'Color',
      subOptions: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      label: 'Size',
      subOptions: [
        { value: 'small', label: 'Small size' },
        { value: 'medium', label: 'Medium size' },
        { value: 'large', label: 'Large size' },
      ],
    },
  ];

  const { asFragment } = render(
    <Select
      name="placeName"
      id="muid"
      onChange={() => null}
      options={groupedOptions}
      value="myvalue"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders SelectBase correctly', () => {
  const { asFragment } = render(
    <SelectBase name="placeName" id="muid" options={options} value="myvalue" />
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
