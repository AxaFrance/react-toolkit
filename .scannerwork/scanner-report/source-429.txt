/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Constants, ClassManager, InputManager } from '@axa-fr/react-toolkit-core';

const propTypes = {
  ...Constants.propTypes,
  numberItems: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};
const defaultClassName = 'af-paging__form';
const defaultProps = {
  ...Constants.defaultProps,
  numberItems: 10,
  items: [5, 10, 25, 50, 100],
  id: null,
};

class Items extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { onChange } = this.props;
    onChange({
      value: Number(e.target.value),
    });
  }

  render() {
    const { numberItems, className, classModifier, items, id } = this.props;
    const content = items.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    const defaultIdName = InputManager.getInputId(id);
    return (
      <div className="af-paging__limit">
        <form className={componentClassName}>
          <div className="af-form__group">
            <div className="col col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <label className="af-form__group-label" htmlFor={defaultIdName}>
                Afficher
              </label>
            </div>
            <div className="col col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <div className="af-form__select">
                <div className="af-form__select-container">
                  <select
                    id={defaultIdName}
                    className="af-form__input-select"
                    value={numberItems}
                    onChange={this.onChange}>
                    {content}
                  </select>
                  <span className="glyphicon glyphicon-menu-down" />
                </div>
                <span className="af-form__input-cmplt">éléments</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Items.propTypes = propTypes;
Items.defaultProps = defaultProps;

export default Items;
