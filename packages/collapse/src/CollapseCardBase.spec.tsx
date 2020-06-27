import * as React from 'react';
import { shallow, mount } from 'enzyme';
import CollapseCardBase, { CollapseProps } from './CollapseCardBase';
import Header from './Header';
import Body from './Body';

describe('CollapseCardBase', () => {
  const createWrapper = (props: Omit<CollapseProps, 'children'>) => {
    return shallow(
      <CollapseCardBase {...props}>
        <CollapseCardBase.Header>
          Collapsible Group Item #1
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
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
        </CollapseCardBase.Body>
      </CollapseCardBase>
    );
  };

  it('onToggle call onToggle', () => {
    const onToggle = jest.fn();
    const wrapper = createWrapper({
      onToggle,
      id: 'collapse1',
      classModifier: '',
      className: '',
      collapse: false,
    });
    wrapper
      .find(Header)
      .props()
      .onToggle({ collapse: true, id: 'collapse1', index: 0 });
    const onToggleResult = onToggle.mock.calls[0][0];
    expect(onToggleResult.id).toBe('collapse1');
    expect(onToggleResult.collapse).toBe(true);
    expect(onToggle).toHaveBeenCalled();
  });
});
