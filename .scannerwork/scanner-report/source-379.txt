import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  name: PropTypes.string,
  profile: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultClassName = 'af-info-user';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  name: '',
  profile: '',
  title: 'Voir mon profil',
  onClick: null,
  href: null,
};

const InnerUser = ({ name, profile }) => [
  <span key="1" className="af-info-user__name">
    {name}
  </span>,
  profile ? (
    <span key="2" className="af-info-user__profile">
      [{profile}]
    </span>
  ) : null,
];

class User extends React.Component {
  onClick = event => {
    const { path, onClick } = this.props;
    if (onClick) {
      onClick({ path, event });
    }
  };

  render() {
    const {
      name,
      profile,
      href,
      title,
      children,
      className,
      classModifier,
    } = this.props;
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    if (href) {
      return (
        <div className={componentClassName}>
          <a
            className="af-info-user__link"
            href={href}
            title={title}
            onClick={this.onClick}>
            <InnerUser name={name} profile={profile} />
          </a>
          {children}
        </div>
      );
    }
    return (
      <div className={componentClassName}>
        <InnerUser name={name} profile={profile} />
        {children}
      </div>
    );
  }
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
