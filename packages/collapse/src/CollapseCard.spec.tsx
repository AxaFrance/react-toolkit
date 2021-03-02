import React from 'react';
import { shallow } from 'enzyme';
import CollapseCard, { CollapseProps } from './CollapseCard';
import Header from './Header';

describe('CollapseCard', () => {
  const createWrapper = (props: Omit<CollapseProps, 'children'>) => {
    return shallow(
      <CollapseCard {...props}>
        <CollapseCard.Header>Collapsible Group Item #1</CollapseCard.Header>
        <CollapseCard.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven&apos;t heard of them accusamus labore sustainable
          VHS.
        </CollapseCard.Body>
      </CollapseCard>
    );
  };

  it('renders CollapseCard correctly', () => {
    const wrapper = createWrapper({ id: 'collapse1' });
    expect(wrapper).toMatchSnapshot();
  });

  it('onToggle call onToggle', () => {
    const onToggle = jest.fn();
    const wrapper = createWrapper({
      onToggle,
      id: 'collapse1',
      classModifier: 'classModifier',
      className: '',
      isOpen: false,
    });
    wrapper
      .find(Header)
      .props()
      .onToggle({ isOpen: true, id: 'collapse1', index: 0 });
    const onToggleResult = onToggle.mock.calls[0][0];
    expect(onToggleResult.id).toBe('collapse1');
    expect(onToggleResult.isOpen).toBe(true);
    expect(onToggle).toHaveBeenCalled();
  });

  it('should render any child', () => {
    const s = shallow(
      <CollapseCard>
        <h1>h1Text</h1>
        <p>pText</p>
      </CollapseCard>
    );
    expect(s.find('h1').text()).toBe('h1Text');
    expect(s.find('p').text()).toBe('pText');
  });
});
