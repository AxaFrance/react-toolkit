import * as React from 'react';
import classNames from 'classnames';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__item-header';

const defaultProps = {
  ...Constants.defaultProps,
  collapse: true,
  className: defaultClassName,
  href: '#collapseOne',
};

export type HeaderToggleElement = {
  collapse: boolean;
  index: number;
  id: string;
};

export type HeaderProps = Partial<typeof defaultProps & { index: number }> & {
  children: React.ReactNode;
  onToggle?: (element: HeaderToggleElement) => void;
  ariaControls?: string;
  id?: string;
};

const Header = ({
  children,
  collapse,
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
    if (onToggle) {
      onToggle({
        collapse: !collapse,
        id,
        index,
      });
    }
  };

  const onKeyToggle = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (onToggle) {
        onToggle({
          collapse: !collapse,
          id,
          index,
        });
      }
    }
  };

  const chevronClassName = classNames('glyphicon', {
    'glyphicon-menu-down': !collapse,
    'glyphicon-menu-up': collapse,
  });

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName} role="tab" id={id}>
      <h3 className="af-accordion__item-title" role="intera">
        <span className={chevronClassName} />
        <a
          className="af-accordion__item-toggle"
          data-toggle="collapse"
          href={href}
          aria-expanded={collapse}
          aria-controls={ariaControls}
          onClick={onToggleEvent}
          onKeyDown={onKeyToggle}>
          {children}
        </a>
      </h3>
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
