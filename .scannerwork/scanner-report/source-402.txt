import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class FooterClientItem extends React.Component {
  onClick = e => {
    const { path, onClick } = this.props;
    if (onClick) {
      onClick({ path, event: e });
    }
  };

  render() {
    const { children, path } = this.props;
    return (
      <li className="af-footer-client__column-item">
        <a
          href={path}
          onClick={this.onClick}
          className="af-footer-client__column-link">
          {children}
        </a>
      </li>
    );
  }
}

FooterClientItem.propTypes = propTypes;
FooterClientItem.defaultProps = {};

export default FooterClientItem;
