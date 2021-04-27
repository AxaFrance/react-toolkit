import React, { MouseEvent } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-header__name';

type Props = {
  title: string;
  subtitle?: string;
  img?: string;
  alt?: string;
  className?: string;
  classModifier?: string;
  onClick?: (action: { event: MouseEvent<HTMLAnchorElement> }) => void;
};
const Name = ({
  title,
  subtitle,
  img,
  alt = 'logo',
  className,
  classModifier,
  onClick,
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      <a
        className="af-logo"
        href="/"
        onClick={(event) => onClick && onClick({ event })}>
        <img className="af-logo__brand" src={img} alt={alt} />
      </a>
      <h2 className="af-header__title">
        {title}
        <span className="af-header__subtitle">{subtitle}</span>
      </h2>
    </div>
  );
};

export default Name;
