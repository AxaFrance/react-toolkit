import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import PopoverPlacements from './PopoverPlacements';

const propTypes = {
  ...Constants.propTypes,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
  placement: PropTypes.oneOf([
    PopoverPlacements.top,
    PopoverPlacements.bottom,
    PopoverPlacements.left,
    PopoverPlacements.right,
  ]),
};
const defaultClassName = 'af-popover__container';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  placement: PopoverPlacements.top,
};

const Pop = props => [props.children];
const Over = props => [props.children];

const PopoverBase = props => {
  const {
    children,
    isOpen,
    placement,
    className,
    classModifier,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const childs = React.Children.toArray(children);
  const targetElement = childs.filter(c => c.type === Over);
  const contentElement = childs.filter(c => c.type === Pop);
  return (
    <AnimatedPopover
      target={targetElement}
      placement={placement}
      isOpen={isOpen}
      className={className}
      classModifier={classModifier}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {contentElement}
    </AnimatedPopover>
  );
};

PopoverBase.Over = Over;
PopoverBase.Pop = Pop;

PopoverBase.propTypes = propTypes;
PopoverBase.defaultProps = defaultProps;

export const AnimatedPopover = props => {
  const {
    placement,
    children,
    isOpen,
    target,
    className,
    classModifier,
    onMouseEnter,
    onMouseLeave,
  } = props;

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement,
  });

  return (
    <div className={componentClassName}>
      <div
        ref={setReferenceElement}
        className="af-popover__container-over"
        role="presentation">
        {target}
      </div>

      {isOpen && (
        <div
          ref={setPopperElement}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styles.popper}
          data-popper-placement={placement}
          className="af-popover__container-pop"
          {...attributes.popper}>
          <div>
            {children}
          </div>
          <div
            ref={setArrowElement}
            style={styles.arrow}
            className="af-popover__arrow"
          />
        </div>
      )}
    </div>
  );
};

export default PopoverBase;
