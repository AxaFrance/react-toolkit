import React from 'react';
import ReactModal from 'react-modal';

import ModalCore, { ModalCoreProps } from './ModalCore';
import Header from './Header';
import HeaderBase from './HeaderBase';
import Body from './Body';
import Footer from './Footer';

ReactModal.setAppElement('body');

class Modal extends React.PureComponent<ModalCoreProps> {
  public static readonly Body = Body;

  public static readonly Footer = Footer;

  public static readonly Header = Header;

  public static readonly HeaderBase = HeaderBase;

  public render() {
    return <ModalCore {...this.props} />;
  }
}

export default Modal;
