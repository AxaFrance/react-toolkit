import React from 'react';
import { mount } from 'enzyme';
import ActionCore from './ActionCore';

const actionLink = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien',
  target: '_blank',
};

describe('<ActionCore>', () => {
  it('when click should invoke onClick', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <ActionCore
        icon={actionLink.icon}
        title={actionLink.title}
        onClick={callback}
      />
    );
    wrapper.simulate('click', { preventDefault() { } });
    expect(callback).toHaveBeenCalled();
  });
  it('Should have icon', () => {
    const wrapper = mount(
      <ActionCore
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
      <ActionCore href="/toto" icon={actionLink.icon} title={actionLink.title} />
    );
    expect(wrapper.props()).toMatchObject({ href: '/toto' });
  });
  it('when onClick is define should have href', () => {
    const wrapper = mount(
      <ActionCore icon={actionLink.icon} title={actionLink.title} onClick={jest.fn()} />
    );
    expect(wrapper.find('a').prop('href')).toBe('#');
    expect(wrapper.find('a').prop('role')).toBe('button');
  });
});
