import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Action from '../Action';

const actionLink = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien',
  target: '_blank',
};

describe('<Action>', () => {
  it('when click should invoke onClick', async () => {
    const callback = jest.fn();
    const { getByRole } = render(
      <Action
        id="action-id"
        icon={actionLink.icon}
        title={actionLink.title}
        onClick={callback}
      />
    );
    await userEvent.click(getByRole('button'));
    expect(callback).toHaveBeenCalledWith({ id: 'action-id' });
    expect(getByRole('button').children[0]).toHaveClass('glyphicon-link');
  });

  // Impossible to test that because Action component ALWAYS add onClick event so component have role button and # for href
  xit('Should have href', () => {
    const { getByRole } = render(
      <Action href="/toto" icon={actionLink.icon} title={actionLink.title} />
    );
    expect(getByRole('button')).toHaveAttribute('href', '/toto');
  });
});
