import React, { ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-footer-client';

type Props = {
  bottomComponent?: ReactNode;
  children: ReactNode;
  className?: string;
  classModifier?: string;
  copyright?: ReactNode;
};
const FooterClient = ({
  bottomComponent,
  children,
  className,
  classModifier,
  copyright = 'Policy Privacy © 2018 AXA All Rights Reserved',
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <footer className={componentClassName}>
      <div className="af-footer-client__top">
        <div className="container">
          <div className="af-footer-client__top-container">{children}</div>
          {!bottomComponent && (
            <div className="af-footer-client__policy">{copyright}</div>
          )}
        </div>
      </div>
      {bottomComponent && (
        <div className="af-footer-client__bottom">
          <div className="container">
            {bottomComponent}
            <div className="af-footer-client__policy">{copyright}</div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterClient;
