import * as React from 'react';
import classNames from 'classnames';
import {
  PropsManager,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';
import { compose } from 'recompose';

const DEFAULT_CLASSNAME = 'af-restitution';

type ArticleRestitutionBaseProps = {
  className?: string;
  children?: React.ReactNode;
} 

const defaultProps: Partial<ArticleRestitutionBaseProps> = {
  children: null,
  className:DEFAULT_CLASSNAME
};

interface ArticleRestitutionProps extends WithClassModifierOptions, ArticleRestitutionBaseProps {}

const ArticleRestitution= ({ children, className }:{ children: React.ReactNode, className: string }) => {
  return (
    <article className={className}>
    {children}
    </article>
  );
};

ArticleRestitution.defaultProps = defaultProps;

const enhance = compose<ArticleRestitutionBaseProps, ArticleRestitutionProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(ArticleRestitution);
Enhanced.displayName = 'ArticleRestitution';
export default Enhanced;

