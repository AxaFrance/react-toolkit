import React from 'react';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__collapse';

const defaultProps = {
  ...Constants.defaultProps,
  collapse: true,
  className: defaultClassName,
};

export type BodyProps = Partial<typeof defaultProps> & {
  children: React.ReactNode;
  id?: string;
  ariaLabelledby?: string;
};

const Body = ({
  children,
  collapse,
  className,
  classModifier,
  ariaLabelledby,
  id,
}: BodyProps) => {
  const panel = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (panel) {
      panel.current.style.maxHeight = collapse ? '100vh' : '0';
    }
  }, [collapse]);

  let newClassModifier = collapse ? 'open' : 'close';
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
