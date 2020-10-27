import React from 'react';
import { create } from 'react-test-renderer';
import TabsCore, { onChangeEvent } from './TabsCore';
import Tab from './Tab';

describe('TabsCore tests suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should init activate index in state function', () => {
    // given
    const givenActivateIndex = '3';

    const setStateMock = jest.fn();
    const useStateMock: any = jest.fn().mockImplementation((initState: any) => {
      return [initState, setStateMock];
    });

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const onChangeMock = jest.fn((x) => {});

    create(
      <TabsCore onChange={onChangeMock} activeIndex={givenActivateIndex}>
        <Tab title="title tab1" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
        <Tab title="title tab2" classModifier="modifier">
          <span>Content</span>
        </Tab>
        <Tab title="title tab3" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
      </TabsCore>
    );

    expect(useStateMock).toHaveBeenNthCalledWith(1, givenActivateIndex);
  });

  it('should return correct onChange function', () => {
    const onChangeMock = jest.fn((x) => {});
    const setStateMock = jest.fn((x) => {});
    onChangeEvent(onChangeMock)(setStateMock)({ id: '3' });
    expect(setStateMock).toBeCalledWith('3');
    expect(onChangeMock).toBeCalledWith('3');
  });
});
