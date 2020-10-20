import * as React from 'react';
import {create} from 'react-test-renderer';
import Badge from './Badge';

describe('<Badge>', () => {
    it('should render component', () => {
        const component = create(<Badge>50</Badge>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
