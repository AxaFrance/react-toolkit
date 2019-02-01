import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  list: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: null,
};

const icon = {
  facebook: 'facebook',
  linkedin: 'linkedin-logo',
  youtube: 'youtube-symbol',
  instagram: 'instagram',
  twitter: 'twitter-logo-silhouette',
};

class SocialNetwork extends React.Component {
  onClick = path => event => {
    const { onClick } = this.props;
    if (onClick) {
      onClick({ path, event });
    }
  };

  render() {
    const { list } = this.props;
    return (
      <ul className="social-network__list">
        {Object.keys(list).map(
          key =>
            key && (
              <li className="social-network__item">
                <a
                  href={list[key]}
                  onClick={this.onClick(key)}
                  className="social-network__link"
                  target="_blank">
                  <i
                    className={classnames(
                      'social-network__icon',
                      'glyphicon',
                      `glyphicon-${icon[key]}`
                    )}
                  />
                </a>
              </li>
            )
        )}
      </ul>
    );
  }
}

SocialNetwork.propTypes = propTypes;
SocialNetwork.defaultProps = defaultProps;

export default SocialNetwork;
