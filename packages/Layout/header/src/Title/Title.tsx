import React, { ReactNode } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Action from '@axa-fr/react-toolkit-action';
import ToggleButton from '../ToggleButton';

const defaultClassName = 'af-title-bar';

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  toggleMenu?: () => void;
  className?: string;
  classModifier?: string;
};
const Title = ({
  title,
  subtitle,
  children,
  toggleMenu,
  className,
  classModifier,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName}>
      <div className={`container ${defaultClassName}__wrapper`}>
        {!!toggleMenu && (
          <div className="burger-container">
            <ToggleButton idControl="mainmenu">
              <Action
                className="btn af-title-bar__mobile-menu af-btn--circle"
                id="togglemenu"
                icon="menu-hamburger"
                title="Toggle menu"
                onClick={toggleMenu}
              />
            </ToggleButton>
          </div>
        )}
        <h1 className={`${defaultClassName}__title`}>
          {title}
          {subtitle && (
            <span className={`${defaultClassName}__subtitle`}>{subtitle}</span>
          )}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Title;
