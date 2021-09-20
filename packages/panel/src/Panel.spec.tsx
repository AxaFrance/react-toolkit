import React from 'react';
import { shallow, mount } from 'enzyme';

import Panel from '.';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('Should render with Badge', () => {
    const wrapper = mount(
      <Panel title="Title" badgeContent="2" badgeClass="danger">
        <Panel.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            similique, quis aliquam temporibus velit ullam, quos quasi? Quod
            modi asperiores incidunt, velit repellendus, totam saepe quaerat
            voluptates cum quo facere.
          </p>
        </Panel.Content>
      </Panel>
    );

    expect(wrapper.exists('.af-panel .af-badge.af-badge--danger')).toBeTruthy();
  });

  it('Should render with Footer', () => {
    const wrapper = mount(
      <Panel title="Title">
        <Panel.Footer>
          <span>Footer</span>
        </Panel.Footer>
      </Panel>
    );

    expect(wrapper.exists('.af-panel .af-panel__footer')).toBeTruthy();
  });
});
