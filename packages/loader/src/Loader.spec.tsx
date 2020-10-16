import * as React from 'react';
import Loader from './Loader';
import LoaderModes from './LoaderModes';
import { render } from 'enzyme';

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
