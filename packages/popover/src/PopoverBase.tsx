import * as React from 'react';
import { usePopper } from 'react-popper';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import { Placement } from '@popperjs/core';

const defaultClassName = 'af-popover__container';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  placement: 'top' as Placement,
};

type Props = Partial<typeof defaultProps> & {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
};

const Pop = (props: React.PropsWithChildren<{}>) => (<>{props.children}</>);
const Over = (props: React.PropsWithChildren<{}>) => (<>{props.children}</>);

const PopoverBase = ({
  children,
  isOpen,
  placement,
  className,
  classModifier,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const childs = React.Children.toArray(children);
  const targetElement = childs.filter(c => c === Over);
  const contentElement = childs.filter(c => c === Pop);
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

PopoverBase.defaultProps = defaultProps;

type PropsAnimatedPopover = Props & {
  target: React.ReactNode;
};
export const AnimatedPopover = ({
  placement,
  children,
  isOpen,
  target,
  className,
  classModifier,
  onMouseEnter,
  onMouseLeave,
}: PropsAnimatedPopover) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
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
          <div>{children}</div>
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
