import React, { PureComponent } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import outy from 'outy';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import PopoverPlacements from './PopoverPlacements';

const propTypes = {
  ...Constants.propTypes,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
  onToggle: PropTypes.func,
  onOutsideTap: PropTypes.func,
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
  onToggle: () => '',
  onOutsideTap: null,
};

const Pop = props => [props.children];
const Over = props => [props.children];

const PopoverBase = props => {
  const {
    children,
    isOpen,
    placement,
    onToggle,
    className,
    classModifier,
    onOutsideTap,
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
      onToggle={onToggle}
      onOutsideTap={onOutsideTap}>
      {contentElement}
    </AnimatedPopover>
  );
};

PopoverBase.Over = Over;
PopoverBase.Pop = Pop;

PopoverBase.propTypes = propTypes;
PopoverBase.defaultProps = defaultProps;

const CustomTarget = (ref, onToggle, props, target) => (
  <div
    ref={ref}
    className="af-popover__container-over"
    onClick={onToggle}
    {...props}
    role="presentation">
    {target}
  </div>
);

export class AnimatedPopover extends PureComponent {
  constructor(props) {
    super(props);
    this.setOusideTap = this.setOusideTap.bind(this);
  }

  componentDidMount() {
    const { onOutsideTap } = this.props;
    if (onOutsideTap) {
      this.setOusideTap();
    }
  }

  componentDidUpdate(lastProps) {
    const { onOutsideTap, isOpen } = this.props;
    if (onOutsideTap && lastProps.isOpen !== isOpen) {
      setTimeout(() => this.setOusideTap());
    }
  }

  componentWillUnmount() {
    const { onOutsideTap } = this.props;
    if (onOutsideTap && this.outsideTap) {
      this.outsideTap.remove();
    }
  }

  setOusideTap() {
    const elements = [this.target];
    if (this.popper) {
      elements.push(this.popper);
    }
    if (this.outsideTap) {
      this.outsideTap.remove();
    }
    const { onOutsideTap } = this.props;
    this.outsideTap = outy(elements, ['click', 'touchstart'], onOutsideTap);
  }

  render() {
    const {
      placement,
      children,
      isOpen,
      onToggle,
      target,
      className,
      classModifier,
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
            {({ ref, ...props }) => CustomTarget(ref, onToggle, props, target)}
          </Reference>
          {isOpen && (
            <Popper key="popper" placement={placement}>
              {({ ref, style, placement: chidrenPlacement, arrowProps }) => (
                <div
                  ref={ref}
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
