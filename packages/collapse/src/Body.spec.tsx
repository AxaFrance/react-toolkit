import * as React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Accordion.Body', () => {
  it('renders Accordion.Body correctly', () => {
    const wrapper = shallow(
      <Body>
        <b>Content</b>
      </Body>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
