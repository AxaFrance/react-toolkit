import * as React from 'react';
import {
  WithActiveOption,
  WithVisibilityOption,
  WithOnChangeEvent,
  OnChangeCustomEvent,
} from '@axa-fr/react-toolkit-core';

export type NextProps = WithActiveOption &
  WithVisibilityOption &
  WithOnChangeEvent<OnChangeCustomEvent> &
  Pick<React.HTMLProps<HTMLAnchorElement>, 'value'>;

export default class Next extends React.PureComponent<NextProps> {
  constructor(props: NextProps) {
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
