import * as React from 'react';
import { create } from 'react-test-renderer';
import Footer, { FooterProps, toCoreProps } from './Footer';
import { FooterCoreProps } from './FooterCore';

describe('<Footer>', () => {
  it('should render a footer with copyright prop as content', () => {
    const component = create(<Footer copyright="Test" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
  describe('toCoreProps', () => {
    it('should map copyright to children', () => {
      const actual: FooterProps = { copyright: 'test' };
      const result: FooterCoreProps = toCoreProps(actual);
      expect(result.children).toBe(actual.copyright);
    });
  });
});
