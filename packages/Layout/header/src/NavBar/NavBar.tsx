import React, { ReactNode, useState, isValidElement, useMemo } from 'react';
import NavBarBase from './NavBarBase';
import { getPosition } from './NavBar.helpers';

type Props = {
  id?: string;
  toggleMenuId?: string;
  positionInit?: number;
  className?: string;
  isVisible: boolean;
  children: ReactNode;
  onClick: () => void;
};
const NavBar = ({ positionInit = 0, children, ...otherProps }: Props) => {
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const [position, setPosition] = useState(positionInit);
  const validChildren = React.Children.map(children, (child) => {
    return isValidElement(child) && child;
  }).filter((c) => !!c);

  const handleKeys = (key: string) => {
    if (key === 'Escape') {
      setIsMenuFocused(false);
    }
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      const newPosition = getPosition(validChildren.length, position, key);
      setPosition(newPosition);
    }
  };

  return (
    <NavBarBase
      {...otherProps}
      onFocus={() => setIsMenuFocused(true)}
      onBlur={() => setIsMenuFocused(false)}
      handleKeys={handleKeys}
      isMenuFocused={isMenuFocused}>
      {React.Children.map(validChildren, (child, index) => {
        const isCurrent = index === position;
        return React.cloneElement(child, {
          key: `NavBarItem`,
          classModifier: [
            child.props.classModifier,
            isCurrent ? 'active' : undefined,
          ]
            .filter((c) => !!c)
            .join(' '),
          tabIndex: isCurrent ? 0 : -1,
          index,
          hasFocus: isMenuFocused && isCurrent,
        });
      })}
    </NavBarBase>
  );
};

export default NavBar;
