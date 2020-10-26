import React from 'react';

import {
  ClassManager,
  Constants,
  InputManager,
} from '@axa-fr/react-toolkit-core';
import Body, { BodyProps } from './Body';
import Header, { HeaderProps, HeaderToggleElement } from './Header';

const defaultClassName = 'af-accordion__item';

const defaultProps = {
  ...Constants.defaultProps,
  collapse: true,
  className: defaultClassName,
  id: null as string,
  index: 0,
};

export type CollapseProps = Partial<typeof defaultProps> & {
  children: React.ReactNode[];
  onToggle?: (element: HeaderToggleElement) => void;
  title?: string;
};

const CollapseCardBase = ({
  id,
  index,
  onToggle,
  collapse,
  classModifier,
  className,
  children,
  title,
}: CollapseProps) => {
  const [headerId, setHeaderId] = React.useState(InputManager.getInputId(id));

  React.useEffect(() => {
    setHeaderId(InputManager.getInputId(id));
  }, [id]);

  const renderChild = (child: React.ReactElement<HeaderProps | BodyProps>) => {
    const bodyId = `${headerId}body`;
    if (child) {
      switch (child.type) {
        case Header:
          return React.cloneElement(child, {
            collapse,
            onToggle,
            classModifier,
            id: headerId,
            index,
            href: `#${bodyId}`,
            ariaControls: bodyId,
          });
        case Body:
          return React.cloneElement(child, {
            collapse,
            classModifier,
            ariaLabelledby: headerId,
            id: bodyId,
          });
        default:
          return child;
      }
    }
    return null;
  };

  let newClassModifier = collapse ? 'open' : '';
  newClassModifier = classModifier
    ? `${newClassModifier} ${classModifier}`
    : `${newClassModifier}`;

  const componentClassName = ClassManager.getComponentClassName(
    className,
    newClassModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName} title={title}>
      {children.map(renderChild)}
    </div>
  );
};

CollapseCardBase.defaultProps = defaultProps;
CollapseCardBase.Body = Body;
CollapseCardBase.Header = Header;

export default CollapseCardBase;
