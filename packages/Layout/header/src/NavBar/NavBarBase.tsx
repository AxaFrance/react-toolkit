import React, { FocusEvent, MouseEvent, ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-nav-container';
type Props = {
  isVisible: boolean;
  id?: string;
  toggleMenuId?: string;
  isMenuFocused?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  classModifier?: string;
  handleKeys: (key: string) => void;
  onFocus: (action: { e: FocusEvent<HTMLUListElement> }) => void;
  onBlur: (action: { e: FocusEvent<HTMLUListElement> }) => void;
  children?: ReactNode;
};
const NavBarBase = ({
  isVisible = true,
  onClick,
  id = 'mainmenu',
  toggleMenuId = 'togglemenu',
  isMenuFocused,
  className,
  classModifier,
  handleKeys,
  onFocus,
  onBlur,
  children,
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <button
        aria-controls={id}
        aria-haspopup="true"
        type="button"
        onClick={onClick}
        className={`mask fade ${isVisible ? 'show' : ''}`}
        id={toggleMenuId}
      />
      <nav
        className={`af-nav af-drawer left ${isVisible ?? 'show'}`}
        role="navigation"
        aria-label="Menu principal">
        <div className="container af-nav__wrapper">
          <div className="af-nav__aside-header">
            <h4 className="af-nav__aside-title">Menu</h4>
            <button
              aria-controls={id}
              aria-haspopup="true"
              onClick={onClick}
              type="button"
              className="af-nav__aside-close"
              id={toggleMenuId}>
              ×
            </button>
          </div>
          <ul
            onKeyDown={(e) => {
              e.preventDefault();
              handleKeys(e.key);
            }}
            onFocus={(e) => {
              onFocus({ e });
            }}
            onBlur={(e) => {
              onBlur({ e });
            }}
            className={`af-nav__list ${
              isMenuFocused ? 'af-nav__list--focused' : ''
            }`}
            role="menubar"
            aria-labelledby={toggleMenuId}
            id={id}>
            {children}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBarBase;
