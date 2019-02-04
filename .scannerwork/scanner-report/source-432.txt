import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';
import Modes from './Modes';

class Next extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { onChange, value } = this.props;
    onChange({
      value,
    });
  }

  render() {
    const { isVisible, active, children } = this.props;
    if (!isVisible) {
      return null;
    }
    if (active) {
      return (
        <li className="af-pager__item">
          <a
            className="af-pager__item-link"
            href="#"
            role="button"
            onClick={this.onChange}>
            {children}
          </a>
        </li>
      );
    }
    return (
      <li className="af-pager__item af-pager__item--disabled">
        <span className="af-pager__item-nolink">{children}</span>
      </li>
    );
  }
}

class Li extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { onChange, value } = this.props;
    onChange({
      value,
    });
  }

  render() {
    const { isVisible, active, value } = this.props;
    if (!isVisible) {
      return null;
    }
    if (active) {
      return (
        <li className="af-pager__item af-pager__item--active">
          <a className="af-pager__item-link" href="#" onClick={this.onChange}>
            <span>{value}</span>
          </a>
        </li>
      );
    }
    return (
      <li className="af-pager__item">
        <a className="af-pager__item-link" href="#" onClick={this.onChange}>
          <span>{value}</span>
        </a>
      </li>
    );
  }
}

const LiPoint = props => {
  const { isVisible, children } = props;
  if (!isVisible) {
    return null;
  }
  return (
    <li className="af-pager__item af-pager__item--disabled">
      <span className="af-pager__item-link">{children}</span>
    </li>
  );
};

class Previous extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { onChange, value } = this.props;
    onChange({
      value,
    });
  }

  render() {
    const { isVisible, active, children } = this.props;
    if (!isVisible) {
      return null;
    }
    if (active) {
      return (
        <li className="af-pager__item">
          <a href="#" onClick={this.onChange} className="af-pager__item-link">
            {children}
          </a>
        </li>
      );
    }
    return (
      <li className="af-pager__item af-pager__item--disabled">
        <span className="af-pager__item-nolink">{children}</span>
      </li>
    );
  }
}

const propTypes = {
  ...Constants.propTypes,
  numberPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  modes: PropTypes.oneOf([Modes.default, Modes.light]),
};
const defaultClassName = 'af-pager';
const defaultProps = {
  ...Constants.defaultProps,
  numberItems: 10,
  numberPages: 1,
  currentPage: 1,
  className: defaultClassName,
};

const Pager = props => {
  const {
    numberPages,
    currentPage,
    onChange,
    mode,
    className,
    classModifier,
  } = props;

  const hasNext = currentPage < numberPages;
  const hasPrevious = currentPage > 1;
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  if (mode === Modes.light) {
    return (
      <nav className={componentClassName}>
        <ul className="af-pager__pagination">
          <Previous
            onChange={onChange}
            value={currentPage - 1}
            active={hasPrevious}
            isVisible>
            <i
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
          </Previous>
          <LiPoint isVisible>
            {currentPage} sur {numberPages}
          </LiPoint>
          <Next
            onChange={onChange}
            value={currentPage + 1}
            active={hasNext}
            isVisible>
            <i
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
          </Next>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={componentClassName}>
      <ul className="af-pager__pagination">
        <Previous
          onChange={onChange}
          value={currentPage - 1}
          active={hasPrevious}
          isVisible>
          « Précédent
        </Previous>

        <Li
          onChange={onChange}
          value={1}
          label="1"
          isVisible={numberPages > 1 && currentPage > 1}
        />
        <LiPoint isVisible={currentPage > 3}>...</LiPoint>
        <Li
          onChange={onChange}
          value={currentPage - 1}
          isVisible={numberPages > 2 && currentPage > 2}
        />
        <Li
          onChange={onChange}
          value={currentPage}
          active
          isVisible={numberPages > 0}
        />
        <Li
          onChange={onChange}
          value={currentPage + 1}
          isVisible={currentPage < numberPages - 1}
        />
        <LiPoint isVisible={currentPage < numberPages - 2}>...</LiPoint>
        <Li
          onChange={onChange}
          value={numberPages}
          isVisible={currentPage < numberPages}
        />

        <Next
          onChange={onChange}
          value={currentPage + 1}
          active={hasNext}
          isVisible>
          Suivant »
        </Next>
      </ul>
    </nav>
  );
};

Pager.propTypes = propTypes;
Pager.defaultProps = defaultProps;
Pager.Modes = Modes;

export default Pager;
