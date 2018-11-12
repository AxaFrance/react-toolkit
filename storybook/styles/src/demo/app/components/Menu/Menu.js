/* eslint arrow-parens: 0 */
/* eslint object-curly-newline: 0 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from 'react-burger-menu';
import './Menu.scss';
import { main, layouts, style, components, form, structure } from './menus';

const getMenu = (menu, hideMenu, isChild = false) => (
  <ul className={`nav-list${isChild ? ' nav-list--child' : ''}`} role="menu">
    {menu.map(({ exact, to, label, childsmenu }) => (
      <li key={label} className="nav-item">
        {to ? (
          <NavLink exact={exact} className="nav-link" to={to}>
            {label}
          </NavLink>
        ) : (
          <span className="nav-text">{label}</span>
        )}
        {childsmenu && childsmenu.length && getMenu(childsmenu, hideMenu, true)}
      </li>
    ))}
  </ul>
);

const Menu = props => {
  const openType = 'push';
  const MenuBurger = BurgerMenu[openType];
  return (
    <MenuBurger
      id={openType}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      isOpen={props.isOpen}
    >
      {getMenu(main, props.hideMenu)}
      {getMenu(layouts, props.hideMenu)}
      {getMenu(style, props.hideMenu)}
      {getMenu(structure, props.hideMenu)}
      {getMenu(form, props.hideMenu)}
      {getMenu(components, props.hideMenu)}
    </MenuBurger>
  );
};

export default Menu;
