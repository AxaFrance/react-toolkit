import React from 'react';
import renderer from 'react-test-renderer';
import { Summary } from './index';

const messages = ['Field Author is required', 'Field PlaceName is required'];

describe('<Summary>', () => {
  it('renders Summary correctly', () => {
    const tree = renderer
      .create(
        <Summary messages={messages} title="Le formulaire n'est pas valide" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
