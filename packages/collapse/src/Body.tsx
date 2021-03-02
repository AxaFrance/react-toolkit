import React from 'react';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__collapse';

const defaultProps = {
  ...Constants.defaultProps,
  isOpen: false,
  className: defaultClassName,
};

export type BodyProps = Partial<typeof defaultProps> & {
  children: React.ReactNode;
  id?: string;
  ariaLabelledby?: string;
};

const collapseAnimation = (
  isOpen: boolean,
  panel: React.MutableRefObject<HTMLDivElement>
) => {
  const currentPanel = panel.current;
  currentPanel.style.maxHeight = isOpen
    ? `${currentPanel.scrollHeight}px`
    : '0px';
};

const Body = ({
  children,
  isOpen,
  className,
  classModifier,
  ariaLabelledby,
  id,
}: BodyProps) => {
  const panel = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    collapseAnimation(isOpen, panel);
  }, [isOpen]);

  let newClassModifier = isOpen ? 'open' : 'close';
  if (classModifier) {
    newClassModifier = `${newClassModifier} ${classModifier}`;
  }

  const componentClassName = ClassManager.getComponentClassName(
    className,
    newClassModifier,
    defaultClassName
  );

  return (
    <div
      className={componentClassName}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
      id={id}
      ref={panel}>
      <div className="af-accordion__block">{children}</div>
    </div>
  );
};

Body.defaultProps = defaultProps;

export default Body;
