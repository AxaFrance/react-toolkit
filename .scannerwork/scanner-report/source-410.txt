import * as React from 'react';
import { create } from 'react-test-renderer';
import FooterCore from './FooterCore';

describe('<FooterCore>', () => {
  it('should render a footer with children as content', () => {
    const component = create(
      <FooterCore>
        <strong>Test</strong>
      </FooterCore>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
