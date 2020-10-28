import React from 'react';
import ReactModal from 'react-modal';

import ModalCore, { ModalCoreProps } from './ModalCore';
import Header from './Header';
import HeaderBase from './HeaderBase';
import Body from './Body';
import Footer from './Footer';

ReactModal.setAppElement('body');

const Modal = (props: ModalCoreProps) => <ModalCore {...props} />;

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.HeaderBase = HeaderBase;

export default Modal;
