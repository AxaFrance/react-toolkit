import * as React from 'react';
import { create } from 'react-test-renderer';
import Help from './Help';

/* Render Component with enhanced ************************************ */
describe('<Help> Render', () => {
  it('Should render Help component', () => {
    const component = create(<Help isOpen={Boolean(true)}>Hello</Help>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
