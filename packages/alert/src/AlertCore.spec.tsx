import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import AlertCore from './AlertCore';

const createWrapper = (customProps: Object) => {
  const defaultProps = {
    className: '',
    iconClassName: '',
    title: '',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<AlertCore {...actualProps} />);
};

describe('<AlertCore />', () => {
  it('renders an error alert with exclamation icon and title', () => {
    const component = create(
      <AlertCore
        iconClassName="glyphicon glyphicon-exclamation-sign"
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis"
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Shoud contain close element when onClose props exists', () => {
    const onCloseMock = jest.fn();
    const wrapper = createWrapper({ onClose: onCloseMock });
    expect(wrapper.find('.af-alert__icon-close')).toHaveLength(1);
  });
});
