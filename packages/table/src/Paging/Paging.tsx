import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  WithOnChangeEvent,
  OnChangeCustomEvent,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';
import Pager from '../Pager/Pager';
import Items from '../Items/Items';

const DEFAULT_CLASSNAME = 'af-paging';

export interface PagingEvent {
  numberItems: number;
  page: number;
}

export type PagingComponentProps = React.HTMLProps<HTMLTableElement> &
  WithOnChangeEvent<PagingEvent> & {
    numberItems?: number;
    numberPages?: number;
    currentPage: number;
  };

const defaultProps: Partial<PagingComponentProps> = {
  numberItems: 10,
  numberPages: 1,
  currentPage: 1,
  id: null,
};

class Paging extends React.PureComponent<PagingComponentProps> {
  constructor(props: PagingComponentProps) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
  }

  onChangePage(data: OnChangeCustomEvent) {
    const { onChange, numberItems } = this.props;
    onChange({
      numberItems,
      page: data.value,
    });
  }

  onChangeItems(data: OnChangeCustomEvent) {
    const { onChange, currentPage } = this.props;
    onChange({
      numberItems: data.value,
      page: currentPage,
    });
  }

  render() {
    const { numberItems, currentPage, numberPages, className, id } = this.props;

    return (
      <div className={className}>
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

export type PagingProps = PagingComponentProps & WithClassModifierOptions;

const enhance = compose<PagingComponentProps, PagingProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);
const Enhance = enhance(Paging);
Enhance.defaultProps = defaultProps;

export default Enhance;
