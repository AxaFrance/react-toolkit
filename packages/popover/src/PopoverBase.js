import React, { PureComponent } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
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

const CustomTarget = (ref, props, target) => (
  <div
    ref={ref}
    className="af-popover__container-over"
    {...props}
    role="presentation">
    {target}
  </div>
);

export class AnimatedPopover extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      placement,
      children,
      isOpen,
      target,
      className,
      classModifier,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    return (
      <Manager>
        <div className={componentClassName}>
          <Reference>
            {({ ref, ...props }) => CustomTarget(ref, props, target)}
          </Reference>
          {isOpen && (
            <Popper key="popper" placement={placement}>
              {({ ref, style, placement: chidrenPlacement, arrowProps }) => (
                <div
                  ref={ref}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="af-popover__container-pop"
                  style={style}
                  data-placement={chidrenPlacement}>
                  <div
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                    className="af-popover__arrow"
                  />
                  {children}
                </div>
              )}
            </Popper>
          )}
        </div>
      </Manager>
    );
  }
}

export default PopoverBase;
