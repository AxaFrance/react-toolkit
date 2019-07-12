import  * as React from 'react';
import classNames from 'classnames';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution__header';

type HeaderRestitutionBaseProps = {
  className?: string;
  children?: React.ReactNode;
} 

const defaultProps: Partial<HeaderRestitutionBaseProps> = {
  children: null,
  className:DEFAULT_CLASSNAME
};

interface HeaderRestitutionProps extends WithClassModifierOptions, HeaderRestitutionBaseProps {}

const HeaderRestitution: React.SFC<HeaderRestitutionProps> = ({ children, title, subtitle, titleLeft, className }: { children:React.ReactNode, title:React.ReactNode, subtitle:React.ReactNode, titleLeft:React.ReactNode, className:string }) => {
  return (
    <header className={className}>
      <div className="af-restitution__header-left">
        <div className="af-restitution__title">
          {title && <span className="af-restitution__title-title">{title}</span>}
          <div className="af-restitution__title-subtitle">{subtitle}</div>
        </div>
      </div>
      {titleLeft && (<div className="af-restitution__header-right">
        <span className="af-restitution__title">
          {titleLeft}
        </span>
      </div>)}
    </header>
  );
};

/*


      {titleLeft ?? (<div className="af-restitution__header-right">
        <span className="af-restitution__title">
          {titleLeft}
        </span>
      </div>
      */

HeaderRestitution.defaultProps = defaultProps;

interface HeaderRestitutionProps extends WithClassModifierOptions, HeaderRestitutionBaseProps {}

const enhance = compose<HeaderRestitutionBaseProps, HeaderRestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(HeaderRestitution);
Enhanced.displayName = 'HeaderRestitution';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
