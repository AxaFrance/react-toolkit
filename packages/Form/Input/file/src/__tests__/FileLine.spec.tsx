import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FileLine, { Preview } from '../FileLine';

describe('<File.FileInput>', () => {
  it('renders File.FileInput correctly', () => {
    const { asFragment } = render(
      <FileLine file={{ name: 'name', size: 1, preview: '#' }} id="id" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should called onClick function when button have been clicked', () => {
    const onClickMock = jest.fn();

    const { getByRole } = render(
      <FileLine
        file={{ name: 'name', size: 1, preview: '#' }}
        id="id"
        onClick={onClickMock}
      />
    );
    fireEvent.click(getByRole('button'));
    expect(onClickMock).toBeCalled();
  });

  it('renders Preview correctly for type image', () => {
    const file = { type: 'image', preview: '', name: 'test', size: 2 };
    const { asFragment } = render(<Preview file={file} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders Preview correctly for other type', () => {
    const file = { type: 'pdf', preview: '', name: 'test', size: 2 };
    const { asFragment } = render(<Preview file={file} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
