import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Constants } from '@axa-fr/react-toolkit-core';
import CollapseCardBase from './CollapseCardBase';
import Body from './Body';
import Header from './Header';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any,
  defaultCollapse: PropTypes.bool,
  id: PropTypes.string,
  index: PropTypes.number,
};

const defaultProps = {
  ...Constants.defaultProps,
  defaultCollapse: true,
  id: null,
  index: 0,
};

class CollapseCard extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    const { defaultCollapse } = this.props;
    this.state = { collapse: defaultCollapse };
  }

  handleToggle() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  render() {
    const { title, className, id, classModifier, children, index } = this.props;
    const { collapse } = this.state;
    return (
      <CollapseCardBase
        collapse={collapse}
        onToggle={this.handleToggle}
        title={title}
        className={className}
        id={id}
        classModifier={classModifier}
        index={index}>
        {children}
      </CollapseCardBase>
    );
  }
}

CollapseCard.propTypes = propTypes;
CollapseCard.defaultProps = defaultProps;

CollapseCard.Body = Body;
CollapseCard.Header = Header;

export default CollapseCard;
