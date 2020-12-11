import React from 'react';
import { render } from '@testing-library/react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import FooterCore from '../FooterCore';

describe('<FooterCore>', () => {
  it('should render a footer with children as content', () => {
    const { asFragment } = render(
      <FooterCore>
        <strong>Test</strong>
      </FooterCore>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not render icon', () => {
    const { queryByRole } = render(
      <FooterCore>
        <strong>Test</strong>
      </FooterCore>
    );
    expect(queryByRole('img')).not.toBeInTheDocument();
  });
  it('should render icon into a link', () => {
    const { getByRole } = render(
      <FooterCore icon={logo} alt="alternative" href="http://test.com">
        <strong>Test</strong>
      </FooterCore>
    );
    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('title', 'Site Axa');
    expect(linkElement).toHaveClass('af-logo');

    const imgElement = getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', 'alternative');
    expect(imgElement).toHaveClass('af-logo__brand');
  });
});
