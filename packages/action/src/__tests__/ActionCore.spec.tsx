import React from 'react';
import { render } from '@testing-library/react';
import ActionCore from '../ActionCore';

const actionLink = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien',
  target: '_blank',
};

describe('<ActionCore>', () => {
  it('Should have href', () => {
    const { getByRole } = render(
      <ActionCore
        href="/toto"
        icon={actionLink.icon}
        title={actionLink.title}
      />
    );
    expect(getByRole('link')).toHaveAttribute('href', '/toto');
  });
  it('when onClick is define should have href', () => {
    const { getByRole } = render(
      <ActionCore
        icon={actionLink.icon}
        title={actionLink.title}
        onClick={jest.fn()}
      />
    );
    const actionButton = getByRole('button');
    expect(actionButton).toBeInTheDocument();
    expect(actionButton).toHaveAttribute('href', '#');
  });
});
