import React, { ComponentPropsWithoutRef, PureComponent } from 'react';
import Content from './Content';
import Footer from './Footer';
import PanelCore from './PanelCore';

class Panel extends PureComponent<ComponentPropsWithoutRef<typeof PanelCore>> {
  public static readonly Content = Content;

  public static readonly Footer = Footer;

  public render() {
    return <PanelCore {...this.props} />;
  }
}
export default Panel;
