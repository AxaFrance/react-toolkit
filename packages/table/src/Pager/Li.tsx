import React from 'react';
import {
  WithActiveOption,
  WithVisibilityOption,
  WithOnChangeEvent,
  OnChangeCustomEvent,
} from '@axa-fr/react-toolkit-core';

export type LiProps = WithActiveOption &
  WithVisibilityOption &
  WithOnChangeEvent<OnChangeCustomEvent> &
  Pick<React.HTMLProps<HTMLAnchorElement>, 'value' | 'label'>;

export default class Li extends React.PureComponent<LiProps> {
  constructor(props: LiProps) {
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
