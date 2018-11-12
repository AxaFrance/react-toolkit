import React from 'react';
import { shallow } from 'enzyme';
import Infos from './Infos';

describe('<Infos>', () => {
  it('renders Infos correctly', () => {
    const wrapper = shallow(
      <Infos infos={[{ word: 'word', definition: 'definition', id: '1' }]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
