import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type ArticleRestitutionProps = ComponentPropsWithoutRef<'article'> & {
  classModifier?: string;
};

const ArticleRestitution = ({
  children = null,
  className,
  classModifier,
  ...otherProps
}: ArticleRestitutionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-restitution'
  );
  return (
    <article className={componentClassName} {...otherProps}>
      {children}
    </article>
  );
};

export default ArticleRestitution;
