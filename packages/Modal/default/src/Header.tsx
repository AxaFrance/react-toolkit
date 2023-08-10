import React, { MouseEventHandler } from 'react';
import { getComponentClassName, getClickId } from '@axa-fr/react-toolkit-core';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  classModifier?: string;
  closeButtonAriaLabel?: string;
};

const Header = ({
  className,
  classModifier,
  title,
  closeButtonAriaLabel = 'Fermer la boite de dialogue',
  ...props
}: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-modal__header'
  );

  const propsWithClickId = getClickId<HeaderProps>({
    option: {
      event: ['onCancel'],
    },
    props,
  });

  return (
    <header className={componentClassName} {...props}>
      <h4 className="af-modal__header-title">{title}</h4>
      <button
        className="af-modal__header-close-btn"
        type="button"
        aria-label={closeButtonAriaLabel}
        onClick={propsWithClickId.onCancel}>
        <span className="glyphicon glyphicon-close" aria-hidden="true" />
      </button>
    </header>
  );
};

export default Header;
