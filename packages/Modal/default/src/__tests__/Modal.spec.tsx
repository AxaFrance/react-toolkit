import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Modal from '../Modal';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

const ModalCaller = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div id="root">
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open
        </button>
      </div>
      <Modal
        onOutsideTap={() => ref.current?.close()}
        title="modalTest"
        ref={ref}>
        Modal Content
      </Modal>
    </>
  );
};

const ModalWithHeader = () => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div id="root">
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open
        </button>
      </div>
      <Modal
        onOutsideTap={() => ref.current?.close()}
        title="modalTest"
        ref={ref}>
        <Header
          title="Titre de la modale"
          onCancel={() => ref.current?.close()}
        />
        <Body>
          <p>Contenu de la modale</p>
        </Body>
        <Footer>
          <button className="btn af-btn af-btn--reverse" type="button">
            Annuler
          </button>
          <button className="btn af-btn" type="button">
            Valider
          </button>
        </Footer>
      </Modal>
    </>
  );
};

describe('<Modal>', () => {
  const onClose = jest.fn();
  it('should render modal but not visible', () => {
    render(
      <Modal onOutsideTap={onClose}>
        <p>Content</p>
      </Modal>,
      {
        container: document.body,
      }
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render modal when open', () => {
    render(<ModalCaller />);
    UserEvent.click(screen.getByText(/Open/));
    const dialog = screen.getByRole('dialog') as HTMLDialogElement;
    expect(dialog.open).toBe(true);
  });

  it('should find element with af-modal--custom className when render Modal with classModifier "custom"', () => {
    const { baseElement } = render(
      <Modal
        classModifier="custom"
        onOutsideTap={onClose}
        title="aria-label of the modal">
        Content
      </Modal>
    );
    expect(baseElement.querySelector('.af-modal--custom')).toBeInTheDocument();
  });

  it('should invoke onOutsideTap when modal is close', () => {
    render(<ModalCaller />);
    UserEvent.click(screen.getByText(/Open/));
    const dialog = screen.getByRole('dialog') as HTMLDialogElement;
    expect(dialog.open).toBe(true);
    UserEvent.type(dialog, '{esc}');
    expect(dialog.open).toBe(false);
  });

  it('should render modal with header, body and footer', () => {
    render(<ModalWithHeader />);
    expect(screen.getByText('Titre de la modale')).toBeInTheDocument();
    expect(screen.getByText('Contenu de la modale')).toBeInTheDocument();
  });
});
