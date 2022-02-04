import React from 'react';
import { render } from '@testing-library/react';
import type { Option } from '@axa-fr/react-toolkit-core';
import Radio from '../Radio';

const options = [
  { label: 'For fun', value: '1', id: 'for-fun' },
  { label: 'For work', value: '2', id: 'for-work' },
  { label: 'For drink', value: '3', id: 'for-drink' },
  { label: 'For the life', value: '4', disabled: true, id: 'for-life' },
] as Option[];

describe('Radio', () => {
  it('should have correct html rendered', () => {
    const { asFragment } = render(<Radio options={options} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('isSelected', () => {
    it.each`
      value        | expected
      ${'1'}       | ${true}
      ${'2'}       | ${false}
      ${null}      | ${false}
      ${undefined} | ${false}
    `(
      'should set checked to $expected when selectedValue is $value',
      ({ value, expected }) => {
        const { getAllByRole } = render(
          <Radio options={options} value={value} />
        );
        const radioItem = getAllByRole('radio').find(
          (element) => element.getAttribute('value') === '1'
        );

        expect(radioItem).toBeInTheDocument();
        if (expected) {
          expect(radioItem).toBeChecked();
        } else {
          expect(radioItem).not.toBeChecked();
        }
      }
    );
  });
});
