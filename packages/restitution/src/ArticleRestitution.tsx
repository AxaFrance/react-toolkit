import * as React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution';

type ArticleRestitutionBaseProps = {
  className?: string;
  children : React.ReactNode;
}

type ArticleRestitutionProps = WithClassModifierOptions & ArticleRestitutionBaseProps;

const ArticleRestitution= ({ children, className }:ArticleRestitutionBaseProps) => (
    <article className={className}>
    {children}
    </article>
  );

const defaultProps: Partial<ArticleRestitutionProps> = {
  children: null,
  className:DEFAULT_CLASSNAME
};

const enhance = compose<ArticleRestitutionBaseProps, ArticleRestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(ArticleRestitution);
Enhanced.displayName = 'ArticleRestitution';
Enhanced.defaultProps = defaultProps;
export default Enhanced;

