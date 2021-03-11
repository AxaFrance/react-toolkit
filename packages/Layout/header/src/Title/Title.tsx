import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
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
  const componentClassName = ClassManager.getComponentClassName(
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
            <small className={`${defaultClassName}__subtitle`}>
              {subtitle}
            </small>
          )}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Title;
