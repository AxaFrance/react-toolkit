import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants, ClassManager } from '@axa-fr/react-toolkit-core';
import Pager from '../Pager/Pager';
import Items from '../Items/Items';

const propTypes = {
  ...Constants.propTypes,
  numberItems: PropTypes.number.isRequired,
  numberPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};
const defaultClassName = 'af-paging';
const defaultProps = {
  ...Constants.defaultProps,
  numberItems: 10,
  numberPages: 1,
  currentPage: 1,
  id: null,
};

class Paging extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
  }

  onChangePage(data) {
    const { onChange, numberItems } = this.props;
    onChange({
      numberItems,
      page: data.value,
    });
  }

  onChangeItems(data) {
    const { onChange, currentPage } = this.props;
    onChange({
      numberItems: data.value,
      page: currentPage,
    });
  }

  render() {
    const {
      numberItems,
      currentPage,
      numberPages,
      className,
      classModifier,
      id,
    } = this.props;
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );
    return (
      <div className={componentClassName}>
        <div className="af-paging__limit">
          <Items
            onChange={this.onChangeItems}
            numberItems={numberItems}
            id={id}
          />
        </div>
        <div className="af-paging__pager">
          <Pager
            onChange={this.onChangePage}
            currentPage={currentPage}
            numberPages={numberPages}
          />
        </div>
      </div>
    );
  }
}

Paging.propTypes = propTypes;
Paging.defaultProps = defaultProps;

export default Paging;
