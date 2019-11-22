import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Constants } from '@axa-fr/react-toolkit-core';
import StepBase from './StepBase';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
const defaultClassName = 'past af-steps-list-step';
const defaultProps = {
  ...Constants.defaultProps,
  className: defaultClassName,
};

class StepLink extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { id, href, number, title, onClick } = this.props;
    onClick({
      href,
      number,
      id,
      title,
    });
  }

  render() {
    const { id, href, number, title, className, modifier, icon } = this.props;

    return (
      <StepBase id={id} className={className} title={title} modifier={modifier}>
        <a
          className="af-steps-list-stepLabel"
          href={href}
          onClick={this.onClick}>
          <div className="af-steps-list-stepNumber">{number}</div>
          <div className="af-steps-list-stepTitle">{title}</div>
          {icon && <i className={`icons-list__item-icon glyphicon ${icon}`} />}
        </a>
      </StepBase>
    );
  }
}
StepLink.propTypes = propTypes;
StepLink.defaultProps = defaultProps;

export default StepLink;
