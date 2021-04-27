/* eslint-disable react/no-find-dom-node */
import React, {
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';
import { ClassManager } from '@axa-fr/react-toolkit-core';

/**
 * Cette fonction sert à attribuer le focus ou le blur sur l'élément DOM de l'item de menu
 * Il est possible que l'élément envoyé ne soit pas un élément du DOM (Ex : Link), dans ce cas,
 * on va aller chercher le premier noeud DOM de l'élément
 *
 * @param {node} refToFocusOn : C'est la référence envoyée lors du clone élément
 * @param {boolean} hasFocus : Si l'élément a le focus
 * @param {boolean} isMenuOpen : Si le menu est ouvert
 */
export const handleLinkFocus = (
  refToFocusOn: HTMLElement,
  hasFocus: boolean,
  isMenuOpen: boolean
) => {
  /* If refToFocusOn exist */
  if (!refToFocusOn) {
    return;
  }

  /* if not DOM element */
  const linkToFocusOn = refToFocusOn.focus
    ? refToFocusOn
    : (ReactDOM.findDOMNode(refToFocusOn) as HTMLElement);

  if (hasFocus && !isMenuOpen) {
    linkToFocusOn.focus();
  } else if (!hasFocus && !isMenuOpen) {
    linkToFocusOn.blur();
  }
};

const defaultClassName = 'af-nav__item';

type Props = HTMLAttributes<HTMLLIElement> & {
  actionElt: ReactElement;
  handleKeys: (event: KeyboardEvent<HTMLLIElement>) => void;
  hasFocus?: boolean;
  isMenuOpen?: boolean;
  classModifier?: string;
};
export const NavBarItemBase = ({
  tabIndex = -1,
  role = 'menuitem',
  children,
  hasFocus,
  handleKeys,
  isMenuOpen,
  className,
  classModifier,
  actionElt,
  ...otherProps
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  const ref = useRef(null);

  useEffect(() => {
    handleLinkFocus(ref?.current, hasFocus, isMenuOpen);
  });

  /* On ajoute la classe permettant définir l'état ouvert sur l'élément
   * si celui a le focus, si le menu est ouvert et s'il possède des éléments enfants
   */
  const openClass =
    hasFocus && isMenuOpen && children ? 'af-nav__item--open' : '';

  return (
    <li
      className={`${componentClassName} ${openClass}`}
      role="none"
      onKeyDown={(e) => {
        e.preventDefault();
        handleKeys(e);
      }}>
      <actionElt.type
        {...actionElt.key}
        {...actionElt.props}
        {...otherProps}
        role={role}
        tabIndex={tabIndex}
        aria-expanded={isMenuOpen}
        ref={ref}
      />
      {children}
    </li>
  );
};
