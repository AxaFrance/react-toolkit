/* eslint-disable react/no-find-dom-node */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

/**
 * Cette fonction sert à attribuer le focus ou le blur sur l'élément DOM de l'item de menu
 * Il est possible que l'élément envoyé ne soit pas un élément du DOM (Ex : Link), dans ce cas,
 * on va aller chercher le premier noeud DOM de l'élément
 *
 * @param {node} refToFocusOn : C'est la référence envoyée lors du clone élément
 * @param {boolean} hasFocus : Si l'élément a le focus
 * @param {boolean} isMenuOpen : Si le menu est ouvert
 */
export const handleLinkFocus = (refToFocusOn, hasFocus, isMenuOpen) => {
  /* If refToFocusOn exist */
  if (!refToFocusOn) {
    return;
  }

  /* if not DOM element */
  const linkToFocusOn = refToFocusOn.focus
    ? refToFocusOn
    : ReactDOM.findDOMNode(refToFocusOn);

  if (hasFocus && !isMenuOpen) {
    linkToFocusOn.focus();
  } else if (!hasFocus && !isMenuOpen) {
    linkToFocusOn.blur();
  }
};

const propTypes = {
  ...Constants.propTypes,
  href: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node,
  hasFocus: PropTypes.bool,
  handleKeys: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool,
  actionElt: PropTypes.element.isRequired,
};

const defaultClassName = 'af-nav__item';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  href: '#',
  tabIndex: '-1',
  role: 'menuitem',
  children: null,
  hasFocus: false,
  isMenuOpen: false,
};

export const NavBarItemBase = ({
  href,
  tabIndex,
  role,
  children,
  hasFocus,
  handleKeys,
  isMenuOpen,
  className,
  classModifier,
  actionElt,
  ariaLabel,
  ...otherProps
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  /* On ajoute la classe permettant définir l'état ouvert sur l'élément
   * si celui a le focus, si le menu est ouvert et s'il possède des éléments enfants
   */
  const openClass =
    hasFocus && isMenuOpen && children ? 'af-nav__item--open' : '';

  /**
   * Utilisée lors du cloneElement sur la ref de l'élément cloné
   * On reçoit en paramètre la ref et renvoie la fonction permettant la gestion du focus/blur de l'élément
   *
   * @param {node} ref
   */
  const refCallBackFocus = ref => handleLinkFocus(ref, hasFocus, isMenuOpen);

  /**
   * On utilise le cloneElement afin d'ajouter les props sur l'élément enfant de l'item de menu (actionElt)
   * Cet enfant peut être un lien, un span ou un Link
   */
  const enhancedActionElt = React.cloneElement(actionElt, {
    ...otherProps,
    ref: refCallBackFocus,
    role,
    tabIndex,
    'aria-expanded': isMenuOpen,
  });

  return (
    <li
      className={`${componentClassName} ${openClass}`}
      role="none"
      onKeyDown={e => {
        e.preventDefault();
        handleKeys(e);
      }}>
      {enhancedActionElt}
      {children}
    </li>
  );
};

NavBarItemBase.propTypes = propTypes;
NavBarItemBase.defaultProps = defaultProps;
