import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Constants } from '@axa-fr/react-toolkit-core';
import StepBase from './StepBase';

const propTypes = {
  ...Constants.propTypes,
  id: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  number: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.string.isRequired,
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
    const { id, href, number, title, className, modifier } = this.props;

    return (
      <StepBase
        id={id}
        className={`${className} ${number ? 'number' : ''}`}
        title={title}
        modifier={modifier}>
        <a
          className="af-steps-list-stepLabel"
          href={href}
          onClick={this.onClick}>
          {!!number && <div className="af-steps-list-stepNumber">{number}</div>}
          <div className="af-steps-list-stepTitle">{title}</div>
        </a>
      </StepBase>
    );
  }
}
StepLink.propTypes = propTypes;
StepLink.defaultProps = defaultProps;

export default StepLink;
