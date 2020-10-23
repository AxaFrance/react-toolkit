import React from 'react';
import { render } from 'enzyme';
import Loader from './Loader';
import LoaderModes from './LoaderModes';

describe('<Loader>', () => {
  it('renders Loader correctly', () => {
    const wrapper = render(
      <Loader mode={LoaderModes.get} text="">
        <div>
          <h1>Title Child</h1>
          <span>Here your child component</span>
        </div>
      </Loader>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
