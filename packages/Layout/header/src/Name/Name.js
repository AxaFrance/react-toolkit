import React from 'react';
import PropTypes from 'prop-types';
import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultClassName = 'af-header__name';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
  children: null,
  subtitle: '',
  img: '',
  alt: '',
  onClick: null,
};

class Name extends React.Component {
  onClick = e => {
    const { onClick } = this.props;
    if (onClick) {
      onClick({ event: e });
    }
  };

  render() {
    const { title, subtitle, img, alt, className, classModifier } = this.props;
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    return (
      <div className={componentClassName}>
        <a className="af-logo" href="/" onClick={this.onClick}>
          <img className="af-logo__brand" src={img} alt={alt} />
        </a>
        <h2 className="af-header__title">
          {title}
          <small className="af-header__subtitle">{subtitle}</small>
        </h2>
      </div>
    );
  }
}

Name.propTypes = propTypes;
Name.defaultProps = defaultProps;
Name.displayName = "Name";

export default Name;
