import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ClassManager,
  Constants,
  InputManager,
} from '@axa-fr/react-toolkit-core';
import Body from './Body';
import Header from './Header';

const defaultClassName = 'af-accordion__item';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.any,
  collapse: PropTypes.bool,
  onToggle: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
};

const defaultProps = {
  ...Constants.defaultProps,
  onToggle: null,
  collapse: true,
  className: defaultClassName,
  id: null,
  index: 0,
};

const getIds = id => {
  const newId = InputManager.getInputId(id);
  return {
    id: newId,
  };
};

class CollapseCardBase extends Component {
  constructor(props) {
    super(props);
    this.state = getIds(props.id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (id !== prevProps.id) {
      // eslint-disable-next-line
      this.setState(getIds(id));
    }
  }

  onToggle = () => {
    const { id, index, onToggle, collapse } = this.props;
    if (onToggle) {
      onToggle({
        collapse: !collapse,
        id,
        index,
      });
    }
  };

  renderChild(child) {
    const { collapse, onToggle, classModifier, index } = this.props;
    const { id: headerId } = this.state;
    const bodyId = `${headerId}body`;
    if (child) {
      switch (child.type) {
        case Header:
          return React.cloneElement(child, {
            collapse,
            onToggle,
            classModifier,
            id: headerId,
            index,
            href: `#${bodyId}`,
            ariaControls: bodyId,
          });
        case Body:
          return React.cloneElement(child, {
            collapse,
            classModifier,
            ariaLabelledby: headerId,
            id: bodyId,
          });
        default:
          return child;
      }
    }
    return null;
  }

  renderChildren() {
    const { children } = this.props;
    return React.Children.map(children, child => this.renderChild(child));
  }

  render() {
    const { className, classModifier, collapse } = this.props;

    let newClassModifier = collapse ? 'open' : '';
    newClassModifier = classModifier
      ? `${newClassModifier} ${classModifier}`
      : `${newClassModifier}`;

    const componentClassName = ClassManager.getComponentClassName(
      className,
      newClassModifier,
      defaultClassName
    );

    return <div className={componentClassName}>{this.renderChildren()}</div>;
  }
}

CollapseCardBase.propTypes = propTypes;
CollapseCardBase.defaultProps = defaultProps;
CollapseCardBase.Body = Body;
CollapseCardBase.Header = Header;

export default CollapseCardBase;
