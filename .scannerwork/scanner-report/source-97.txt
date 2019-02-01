import React from 'react';
import PropTypes from 'prop-types';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__collapse';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.node.isRequired,
  collapse: PropTypes.bool,
  onToggle: PropTypes.func,
  ariaLabelledby: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  onToggle: null,
  collapse: true,
  className: defaultClassName,
  ariaLabelledby: null,
};

const collapseAnimation = (collapse, panel) => {
  if (panel) {
    const currentPanel = panel.current;
    currentPanel.style.maxHeight = collapse
      ? `${currentPanel.scrollHeight}px`
      : '0px';
  }
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
  }

  componentDidUpdate() {
    const { collapse } = this.props;
    collapseAnimation(collapse, this.panel);
  }

  render() {
    const {
      children,
      collapse,
      className,
      classModifier,
      ariaLabelledby,
      id,
    } = this.props;

    let newClassModifier = collapse ? 'open' : 'close';
    if (classModifier) {
      newClassModifier = `${newClassModifier} ${classModifier}`;
    }

    const componentClassName = ClassManager.getComponentClassName(
      className,
      newClassModifier,
      defaultClassName
    );

    return (
      <div
        className={componentClassName}
        role="tabpanel"
        aria-labelledby={ariaLabelledby}
        id={id}
        ref={this.panel}>
        <div className="af-accordion__block">{children}</div>
      </div>
    );
  }
}

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
