import React from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-tabs';

const noop = () => {};

const propTypes = {
  ...Constants.propTypes,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: [],
  activeIndex: 0,
  onChange: noop,
};

const TabsStateless = ({
  activeIndex,
  className,
  classModifier,
  children,
  onChange,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName}>
      <ul className="af-tabs__control">
        {React.Children.map(children, (tab, index) =>
          React.cloneElement(tab, {
            active: activeIndex === index,
            onChange,
            role: 'TITLE',
            // index as a key is ok here, no better candidate
            key: index, // eslint-disable-line
            index,
          })
        )}
      </ul>
      <div className="af-tabs__content">
        {React.Children.map(children, (tab, index) =>
          React.cloneElement(tab, {
            active: activeIndex === index,
            role: 'PANE',
            // index as a key is ok here, no better candidate
            key: index, // eslint-disable-line
          })
        )}
      </div>
    </div>
  );
};

TabsStateless.defaultProps = defaultProps;
TabsStateless.propTypes = propTypes;

export default TabsStateless;
