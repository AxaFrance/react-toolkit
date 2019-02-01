import * as React from 'react';
import { create } from 'react-test-renderer';
import Alert from './Alert';

describe('<Alert />', () => {
  it('renders an error alert with exclamation icon and title', () => {
    const component = create(
      <Alert
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office"
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  it('renders an info alert with info-sign icon, a title and a body containing an unordered list', () => {
    const component = create(
      <Alert
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office">
        <ul>
          <li>Test1</li>
          <li>Test2</li>
        </ul>
      </Alert>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
