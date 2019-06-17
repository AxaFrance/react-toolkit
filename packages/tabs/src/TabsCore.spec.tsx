import { stateUpdaters, TabsContainerState } from './TabsCore';

describe('TabsCore tests suite', () => {
  it('should return correct onChange function', () => {
    const { onChange } = stateUpdaters;
    const fakeState: TabsContainerState = {
      activeIndex: '0',
    };
    const onChangeMock = jest.fn();
    const res = onChange(fakeState, { onChange: onChangeMock, children: null })(
      { id: '3' }
    );
    expect(res).toEqual({ activeIndex: '3' });
    expect(onChangeMock).toBeCalledWith('3');
  });
});
