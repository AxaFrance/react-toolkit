import React from 'react';
import PropTypes from 'prop-types';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  bottomComponent: PropTypes.element,
  children: PropTypes.array,
  copyright: PropTypes.string,
};

const defaultProps = {
  bottomComponent: null,
  children: null,
  copyright: 'Policy Privacy © 2018 AXA All Rights Reserved',
};

const defaultClassName = 'af-footer-client';

const FooterClient = ({
  bottomComponent,
  children,
  className,
  classModifier,
  copyright,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <footer className={componentClassName}>
      <div className="af-footer-client__top">
        <div className="container">
          <div className="af-footer-client__top-container">{children}</div>
          {!bottomComponent && (
            <div className="af-footer-client__policy">{copyright}</div>
          )}
        </div>
      </div>
      {bottomComponent && (
        <div className="af-footer-client__bottom">
          <div className="container">
            {bottomComponent}
            <div className="af-footer-client__policy">{copyright}</div>
          </div>
        </div>
      )}
    </footer>
  );
};

FooterClient.propTypes = propTypes;
FooterClient.defaultProps = defaultProps;

export default FooterClient;
