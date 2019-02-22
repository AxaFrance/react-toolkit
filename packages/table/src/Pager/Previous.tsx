import * as React from 'react';
import {
  WithActiveOption,
  WithVisibilityOption,
  WithOnChangeEvent,
  OnChangeCustomEvent,
} from './Pager';

export type PreviousProps = WithActiveOption &
  WithVisibilityOption &
  WithOnChangeEvent<OnChangeCustomEvent> &
  Pick<React.HTMLProps<HTMLAnchorElement>, 'value'>;

export default class Previous extends React.PureComponent<PreviousProps> {
  constructor(props: PreviousProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.FormEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const { onChange, value } = this.props;
    onChange({
      value: Number(value),
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
