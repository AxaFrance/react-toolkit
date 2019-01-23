import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  classModifier: PropTypes.string,
};

const defaultClassName = 'af-tabs__item';

const defaultProps = {
  ...Constants.defaultProps,
  children: null,
  active: false,
  className: defaultClassName,
};

const Title = props => {
  const { active, className, classModifier } = props;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <li
      className={classNames(componentClassName, {
        'af-tabs__item--active': active,
      })}>
      <button type="button" className="af-tabs__link">
        TEST
      </button>
    </li>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
Title.displayName = 'Tabs.Title';

export default Title;
