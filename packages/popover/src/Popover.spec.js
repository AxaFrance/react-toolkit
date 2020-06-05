import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import Popover from './Popover';

describe('<Popover />', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  describe('mode "click"', () => {
    it('Should contain PopoverClick element when mode "click"', () => {
      // Arrange
      const Element = (
        <Popover mode="click">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      const wrapper = shallow(Element);

      // Assert
      expect(wrapper.find('PopoverClick').length).toBe(1);
    });

    it('Should display content when element clicked', () => {
      // Arrange
      const Element = (
        <Popover mode="click">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      act(() => {
        ReactDOM.render(Element, container);
        ReactTestUtils.Simulate.mouseEnter(container.querySelector('.af-popover__container').parentElement);
      });

      act(() => {
        ReactTestUtils.Simulate.click(container.querySelector('.af-popover__container'));
      })

      expect(
        container.querySelector('.af-popover__container-pop')
      ).not.toBeNull();
    });
  });

  describe('mode "hover"', () => {
    it('Should contain PopoverOver element when mode "hover"', () => {
      // Arrange
      const Element = (
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      const wrapper = shallow(Element);

      // Assert
      expect(wrapper.find('PopoverOver').length).toBe(1);
    });

    it('Should display content when element hovered', () => {
      // Arrange
      const Element = (
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      act(() => {
        ReactDOM.render(Element, container);
        ReactTestUtils.Simulate.mouseEnter(container.querySelector('.af-popover__container').parentElement);
      });

      // Assert
      expect(
        container.querySelector('.af-popover__container-pop')
      ).not.toBeNull();
    });

    it('Should hide content when element not hovered', () => {
      // Arrange
      const Element = (
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      act(() => {
        ReactDOM.render(Element, container);

        const parentContainer = container.querySelector('.af-popover__container').parentElement;
        ReactTestUtils.Simulate.mouseEnter(parentContainer);
        ReactTestUtils.Simulate.mouseLeave(parentContainer);
      });

      // Assert
      expect(
        container.querySelector('.af-popover__container-pop')
      ).toBeNull();
    });
  });
});
