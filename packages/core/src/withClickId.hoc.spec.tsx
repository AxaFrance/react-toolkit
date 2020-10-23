import React from 'react';
import { shallow } from 'enzyme';
import withClickId from './withClickId.hoc';

describe('withClickId', () => {
  interface ComponentWrapperProps
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      > {}
  const ComponentWrapper: React.SFC<ComponentWrapperProps> = props => <a {...props} />;

  it('onClick should return id', () => {
    const ComponentWithClickId = withClickId<ComponentWrapperProps>({
      event: ['onClick'],
    })(ComponentWrapper);
    const onClick = jest.fn();
    const preventDefault = jest.fn();
    const id = 'id';
    const Wrap = shallow(<ComponentWithClickId id={id} onClick={onClick} />);
    Wrap.find('ComponentWrapper').simulate('click', {
      preventDefault,
      currentTarget: { id },
    });
    expect(onClick).toBeCalledWith({ id });
  });
  it('onClick should call preventDefault', () => {
    const ComponentWithClickId = withClickId<ComponentWrapperProps>({
      event: ['onClick'],
    })(ComponentWrapper);
    const onClick = jest.fn();
    const preventDefault = jest.fn();
    const id = 'id';
    const Wrap = shallow(<ComponentWithClickId id={id} onClick={onClick} />);
    Wrap.find('ComponentWrapper').simulate('click', {
      preventDefault,
      currentTarget: { id },
    });
    expect(preventDefault).toBeCalled();
  });
  it('onClick should NOT call preventDefault', () => {
    const ComponentWithClickId = withClickId<ComponentWrapperProps>({
      event: ['onClick'],
    })(ComponentWrapper);
    const preventDefault = jest.fn();
    const id = 'id';
    const WrapLink = shallow(<ComponentWithClickId id={id} />);
    WrapLink.find('ComponentWrapper').simulate('click', {
      preventDefault,
      currentTarget: { id },
    });
    expect(preventDefault).not.toBeCalled();
  });
});
