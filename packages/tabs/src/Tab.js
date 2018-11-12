import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  classModifier: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  setActiveIndex: PropTypes.func,
  index: PropTypes.number,
  disabled: PropTypes.bool,
};

const defaultClassName = 'af-tabs__item';

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  title: null,
  active: false,
  role: 'TITLE',
  onChange: () => {},
  index: 0,
  disabled: false,
};

class Tab extends React.Component {
  /* eslint-disable no-unused-expressions */
  onChange = () => {
    const { disabled, index, onChange } = this.props;
    disabled
      ? e => {
          e.preventDefault();
        }
      : onChange(index);
  };

  render() {
    const {
      role,
      active,
      disabled,
      children,
      title,
      className,
      classModifier,
    } = this.props;
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    switch (role) {
      case 'TITLE':
        return (
          <li
            className={classNames(componentClassName, {
              'af-tabs__item--active': active,
              'af-tabs__item--disabled': disabled,
            })}>
            <button
              type="button"
              className="af-tabs__link"
              onClick={this.onChange}>
              {title}
            </button>
          </li>
        );
      case 'PANE':
        return active ? <div className="af-tabs__pane">{children}</div> : null;
      default:
        return null;
    }
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
