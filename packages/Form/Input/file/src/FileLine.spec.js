import React from 'react';
import { shallow } from 'enzyme';

import Button from '@axa-fr/react-toolkit-button';
import Popover from '@axa-fr/react-toolkit-popover';
import FileLine, { Preview } from './FileLine';

describe('<File.FileInput>', () => {
  it('renders File.FileInput correctly', () => {
    const wrapper = shallow(
      <FileLine file={{ name: 'name', size: 1, preview: '#' }} id="id" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('Should called onClick function when button have been clicked', () => {
    const onClickMock = jest.fn();

    const wrapper = shallow(
      <FileLine
        file={{ name: 'name', size: 1, preview: '#' }}
        id="id"
        onClick={onClickMock}
      />
    );
    wrapper.find(Button).simulate('click');
    expect(onClickMock).toBeCalled();
  });

  it('renders Preview correctly for type image', () => {
    const file = { type: 'image' };
    const wrapper = shallow(<Preview file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Preview correctly for other type', () => {
    const file = { type: 'pdf' };
    const wrapper = shallow(<Preview file={file} />);
    expect(wrapper).toMatchSnapshot();
  });
});
