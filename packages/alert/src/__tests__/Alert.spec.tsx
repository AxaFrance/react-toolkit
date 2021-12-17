import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../Alert';

describe('<Alert />', () => {
  it('renders an error alert with exclamation icon and title', () => {
    const { asFragment } = render(
      <Alert
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders an info alert with info-sign icon, a title and a body containing an unordered list', () => {
    const { asFragment } = render(
      <Alert
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office">
        <ul>
          <li>Test1</li>
          <li>Test2</li>
        </ul>
      </Alert>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
