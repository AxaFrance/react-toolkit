import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@axa-fr/react-toolkit-modal-default';
import Button from '@axa-fr/react-toolkit-button';

import { ClassManager, Constants } from '@axa-fr/react-toolkit-core';

const rules = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.element.isRequired,
  PropTypes.node.isRequired,
  PropTypes.array.isRequired,
]);

const propTypes = {
  ...Constants.propTypes,
  isOpen: PropTypes.bool.isRequired,
  title: rules,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
  submitTitle: rules,
  cancelTitle: rules,
  id: PropTypes.string,
};
const defaultClassName = 'af-modal';
const defaultProps = {
  ...Constants.defaultProps,
  submitTitle: 'Valider',
  cancelTitle: 'Annuler',
  className: defaultClassName,
  id: PropTypes.string,
};
class ModalBoolean extends React.Component {
  onCancel = () => {
    const { onCancel, id } = this.props;
    if (onCancel) {
      onCancel({ id });
    }
  };

  onSubmit = () => {
    const { onSubmit, id } = this.props;
    if (onSubmit) {
      onSubmit({ id });
    }
  };

  render() {
    const {
      isOpen,
      children,
      title,
      submitTitle,
      cancelTitle,
      className,
      classModifier,
    } = this.props;
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    return (
      <Modal
        isOpen={isOpen}
        className={componentClassName}
        onOutsideTap={this.onCancel}>
        <Modal.Header title={title} onCancel={this.onCancel} />
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button classModifier="reverse" onClick={this.onCancel}>
            {cancelTitle}
          </Button>
          <Button onClick={this.onSubmit}>{submitTitle}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalBoolean.propTypes = propTypes;
ModalBoolean.defaultProps = defaultProps;

export default ModalBoolean;
