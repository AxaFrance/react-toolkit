import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-accordion__item-header';

const propTypes = {
  ...Constants.propTypes,
  children: PropTypes.node.isRequired,
  collapse: PropTypes.bool,
  onToggle: PropTypes.func,
  id: PropTypes.string,
  ariaControls: PropTypes.string,
  href: PropTypes.string,
};

const defaultProps = {
  ...Constants.defaultProps,
  onToggle: null,
  collapse: true,
  className: defaultClassName,
  id: null,
  href: '#collapseOne',
  ariaControls: null,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    const { id, collapse, index, onToggle } = this.props;
    if (onToggle) {
      onToggle({
        collapse: !collapse,
        id,
        index,
      });
    }
  }

  onKeyToggle(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const { id, collapse, index, onToggle } = this.props;
      if (onToggle) {
        onToggle({
          collapse: !collapse,
          id,
          index,
        });
      }
    }
  }

  render() {
    const {
      children,
      collapse,
      className,
      classModifier,
      id,
      href,
      ariaControls,
    } = this.props;

    const chevronClassName = classNames('glyphicon', {
      'glyphicon-menu-down': !collapse,
      'glyphicon-menu-up': collapse,
    });
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    return (
      <div className={componentClassName} role="tab" id={id}>
        <h3 className="af-accordion__item-title" role="intera">
          <span className={chevronClassName} />
          <a
            className="af-accordion__item-toggle"
            data-toggle="collapse"
            href={href}
            aria-expanded="true"
            aria-controls={ariaControls}
            onClick={this.onToggle}
            onKeyDown={e => this.onKeyToggle(e)}>
            {children}
          </a>
        </h3>
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
