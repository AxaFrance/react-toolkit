import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  WithOnChangeEvent,
  OnChangeCustomEvent,
  compose,
} from '@axa-fr/react-toolkit-core';
import Pager, { PagerComponentProps } from '../Pager/Pager';
import Items, { ItemsComponentProps } from '../Items/Items';

const DEFAULT_CLASSNAME = 'af-paging';

export interface PagingEvent {
  numberItems: number;
  page: number;
}

export type PagingComponentProps = React.HTMLProps<HTMLTableElement> &
  WithOnChangeEvent<PagingEvent> &
  PagerComponentProps &
  ItemsComponentProps;

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
    const {
      className,
      currentPage,
      displayLabel,
      elementsLabel,
      id,
      mode,
      nextLabel,
      numberItems,
      numberPages,
      ofLabel,
      previousLabel,
    } = this.props;

    return (
      <div className={className}>
        <div className="af-paging__limit">
          <Items
            onChange={this.onChangeItems}
            numberItems={numberItems}
            id={id}
            displayLabel={displayLabel}
            elementsLabel={elementsLabel}
          />
        </div>
        <div className="af-paging__pager">
          <Pager
            onChange={this.onChangePage}
            currentPage={currentPage}
            numberPages={numberPages}
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            ofLabel={ofLabel}
            mode={mode}
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
