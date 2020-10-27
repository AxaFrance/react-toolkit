import React from 'react';
import { mount } from 'enzyme';
import Action from './Action';

const actionLink = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien',
  target: '_blank',
};

describe('<Action>', () => {
  it('when click should invoke onClick', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Action
        id="id2"
        icon={actionLink.icon}
        title={actionLink.title}
        onClick={callback}
      />
    );
    wrapper.simulate('click', { preventDefault() {} });
    expect(callback).toHaveBeenCalledWith({ id: 'id2' });
  });
  it('Should have icon', () => {
    const wrapper = mount(
      <Action
        icon={actionLink.icon}
        title={actionLink.title}
        onClick={jest.fn()}
      />
    );
    const icon = wrapper.find('i.glyphicon');
    expect(icon.hasClass('glyphicon-link'));
  });

  it('Should have href', () => {
    const wrapper = mount(
      <Action href="/toto" icon={actionLink.icon} title={actionLink.title} />
    );
    expect(wrapper.props()).toMatchObject({ href: '/toto' });
  });
});
