import React from 'react';
import renderer from 'react-test-renderer';
import Loader, { LoaderModes } from './index';

describe('<Loader>', () => {
  it('renders Loader correctly', () => {
    const tree = renderer
      .create(
        <Loader mode={LoaderModes.get} text="">
          <div>
            <h1>Title Child</h1>
            <span>Here your child component</span>
          </div>
        </Loader>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
