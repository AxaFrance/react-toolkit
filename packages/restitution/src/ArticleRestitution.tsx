import React, { ComponentPropsWithoutRef } from 'react';
import {
  withClassDefault,
  withClassModifier,
  compose,
  identity,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-restitution';

type ArticleRestitutionProps = ComponentPropsWithoutRef<'article'> & {
  classModifier?: string;
};

const ArticleRestitution = ({
  children,
  className,
  classModifier: _classModifier,
  ...otherProps
}: ArticleRestitutionProps) => (
  <article className={className} {...otherProps}>
    {children}
  </article>
);

const defaultProps: Partial<ArticleRestitutionProps> = {
  children: null,
  className: DEFAULT_CLASSNAME,
};

const enhance = compose(
  identity<ArticleRestitutionProps>(),
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier()
);

const Enhanced = enhance(ArticleRestitution);
Enhanced.displayName = 'ArticleRestitution';
Enhanced.defaultProps = defaultProps;
export default Enhanced;
