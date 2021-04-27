import { shallow } from 'enzyme';
import React, { ComponentProps } from 'react';
import * as ToolkitCore from '@axa-fr/react-toolkit-core';
import RadioItem, { defaultClassName } from './RadioItem';

describe('RadioItem', () => {
  let radioItemProps: ComponentProps<typeof RadioItem>;
  beforeEach(() => {
    radioItemProps = { label: 'test' };
  });
  const Act = () =>
    shallow<typeof RadioItem>(<RadioItem {...radioItemProps} />);

  it('should have correct html rendered', () => {
    const result = Act();
    expect(result.html).toMatchSnapshot();
  });

  describe('input', () => {
    it('should call getInputId and set the input id', () => {
      jest
        .spyOn(ToolkitCore.InputManager, 'getInputId')
        .mockReturnValueOnce('id');
      const result = Act();
      expect(ToolkitCore.InputManager.getInputId).toHaveBeenCalledWith(
        radioItemProps.id
      );
      expect(result.find('input').props().id).toEqual('id');
    });
  });

  describe('div wrapper', () => {
    it('should set className to $expected when ', () => {
      radioItemProps.className = 'className';
      jest
        .spyOn(ToolkitCore.ClassManager, 'getComponentClassName')
        .mockReturnValueOnce('toto');
      const result = Act();
      expect(
        ToolkitCore.ClassManager.getComponentClassName
      ).toHaveBeenCalledWith(radioItemProps.className, '', defaultClassName);
      expect(result.find('div').props().className).toBe('toto ');
    });

    it('should call getComponentClassName with disabled modifier added to classModifier', () => {
      radioItemProps.className = 'className';
      radioItemProps.classModifier = 'classModifier';
      radioItemProps.disabled = true;
      jest
        .spyOn(ToolkitCore.ClassManager, 'getComponentClassName')
        .mockReturnValueOnce('toto');
      Act();
      expect(
        ToolkitCore.ClassManager.getComponentClassName
      ).toHaveBeenCalledWith(
        radioItemProps.className,
        'classModifier disabled',
        defaultClassName
      );
    });

    afterEach(() => {
      jest
        .spyOn(ToolkitCore.ClassManager, 'getComponentClassName')
        .mockRestore();
    });
  });
});
