import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';
import Action from '@axa-fr/react-toolkit-action';
import ToggleButton from '../ToggleButton';

const propTypes = {
  ...Constants.propTypes,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  toggleMenu: PropTypes.func,
};

const defaultClassName = 'af-title-bar';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  subtitle: '',
  toggleMenu: null,
};

const Title = props => {
  const {
    title,
    subtitle,
    children,
    toggleMenu,
    className,
    classModifier,
  } = props;
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
                classModifier={null}
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

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
