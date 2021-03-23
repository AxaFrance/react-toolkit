import React from 'react';
import classNames from 'classnames';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__item-header';

export type HeaderToggleElement = {
  isOpen: boolean;
  index: number;
  id: string;
};

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  isOpen: false,
  href: '#collapseOne',
};

export type HeaderProps = Partial<typeof defaultProps> & {
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  classModifier?: string;
  id?: string;
  href?: string;
  ariaControls?: string;
  index?: number;
  onToggle?: (element: HeaderToggleElement) => void;
};

const Header = ({
  children,
  isOpen,
  className,
  classModifier,
  id,
  href,
  ariaControls,
  index,
  onToggle,
}: HeaderProps) => {
  const onToggleEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle &&
      onToggle({
        isOpen: !isOpen,
        id,
        index,
      });
  };

  const onKeyToggle = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      onToggle &&
        onToggle({
          isOpen: !isOpen,
          id,
          index,
        });
    }
  };

  const chevronClassName = classNames('glyphicon', {
    'glyphicon-menu-down': !isOpen,
    'glyphicon-menu-up': isOpen,
  });

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName} role="tab" id={id}>
      <a
        className="af-accordion__item-toggle"
        data-toggle="isOpen"
        href={href}
        aria-expanded={isOpen}
        aria-controls={ariaControls}
        onClick={onToggleEvent}
        onKeyDown={onKeyToggle}>
        <h3 className="af-accordion__item-title">
          <span className={chevronClassName} />
          {children}
        </h3>
      </a>
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
