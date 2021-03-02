import React from 'react';

import {
  Constants,
  InputManager,
  ClassManager,
} from '@axa-fr/react-toolkit-core';
import Body, { BodyProps } from './Body';
import Header, { HeaderProps, HeaderToggleElement } from './Header';

const defaultClassName = 'af-accordion__item';

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  index: 0,
  isOpen: false,
};

export type CollapseProps = Partial<typeof defaultProps> & {
  id?: string;
  children?: React.ReactNode[];
  onToggle?: (element: HeaderToggleElement) => void;
};

const CollapseCard = ({
  id,
  className,
  classModifier,
  isOpen,
  children,
  index,
  onToggle,
}: CollapseProps) => {
  const [headerId, setHeaderId] = React.useState(InputManager.getInputId(id));
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setHeaderId(InputManager.getInputId(id));
  }, [id]);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleToggle = (e: HeaderToggleElement) => {
    onToggle && onToggle(e);
    setOpen(!open);
  };

  const renderChild = (child: React.ReactElement<HeaderProps | BodyProps>) => {
    const bodyId = `${headerId}body`;
    switch (child.type) {
      case Header:
        return React.cloneElement(child, {
          isOpen: open,
          onToggle: (e: HeaderToggleElement) => handleToggle(e),
          classModifier,
          id: headerId,
          index,
          href: `#${bodyId}`,
          ariaControls: bodyId,
          key: headerId,
        });
      case Body:
        return React.cloneElement(child, {
          isOpen: open,
          classModifier,
          ariaLabelledby: headerId,
          id: bodyId,
          key: bodyId,
        });
      default:
        return child;
    }
  };

  let newClassModifier = open ? 'open' : '';
  newClassModifier = classModifier
    ? `${newClassModifier} ${classModifier}`
    : `${newClassModifier}`;

  const componentClassName = ClassManager.getComponentClassName(
    className,
    newClassModifier,
    defaultClassName
  );

  return <div className={componentClassName}>{children.map(renderChild)}</div>;
};

CollapseCard.defaultProps = defaultProps;
CollapseCard.Body = Body;
CollapseCard.Header = Header;

export default CollapseCard;
