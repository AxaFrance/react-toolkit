/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import {
  WithClassModifierOptions,
  InputManager,
  withClassDefault,
  withClassModifier,
  WithOnChangeEvent,
  OnChangeCustomEvent,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

export type ItemsComponentProps = Pick<
  React.HTMLProps<HTMLAnchorElement>,
  'className'
> &
  WithOnChangeEvent<OnChangeCustomEvent> & {
    id: string;
    numberItems?: number;
    items?: number[];
  };
const DEFAULT_CLASSNAME = 'af-paging__form';

const defaultProps: Partial<ItemsComponentProps> = {
  numberItems: 10,
  items: [5, 10, 25, 50, 100],
  id: null,
};

class Items extends React.PureComponent<ItemsComponentProps> {
  constructor(props: ItemsComponentProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const { onChange } = this.props;
    onChange({
      value: Number(event.target.value),
    });
  }

  render() {
    const { numberItems, className, items, id } = this.props;
    const content = items.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    const defaultIdName = InputManager.getInputId(id);
    return (
      <div className="af-paging__limit">
        <form className={className}>
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
export type ItemsProps = ItemsComponentProps & WithClassModifierOptions;

const enhance = compose<ItemsComponentProps, ItemsProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);
const Enhance = enhance(Items);
Enhance.defaultProps = defaultProps;
export default Enhance;
