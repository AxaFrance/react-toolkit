import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

const FooterClientList = ({ title, children }) => (
  <div className="af-footer-client__column">
    <h3 className="af-footer-client__column-title">{title}</h3>
    <ul className="af-footer-client__column-items">{children}</ul>
  </div>
);

FooterClientList.propTypes = propTypes;
FooterClientList.defaultProps = {};

export default FooterClientList;
