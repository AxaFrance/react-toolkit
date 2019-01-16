import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import NotFound from './NotFound.component';

it('1. Renders NotFound page component without crashing', () => {
  configure({ adapter: new Adapter() });
  shallow(<NotFound />);
});
