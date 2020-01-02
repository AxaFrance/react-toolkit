import { onChangeEvent, TabsContainerState } from './TabsCore';

describe('TabsCore tests suite', () => {
  it('should return correct onChange function', () => {
    const onChangeMock =  jest.fn(x => {});
    const setStateMock = jest.fn(x => {});
    const fakeState: TabsContainerState = {
      activeIndex: '0',
    };
    onChangeEvent(onChangeMock)(setStateMock )(fakeState)(
      { id: '3' }
    );
    expect(setStateMock).toBeCalledWith({activeIndex: '3'});
    expect(onChangeMock).toBeCalledWith('3');
  });
});
