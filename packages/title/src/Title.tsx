import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type Headings = 'h2' | 'h3' | 'h4';

type TitleProps = ComponentPropsWithoutRef<'h2'> & {
  classModifier?: string;
  heading?: Headings;
};

const Title = ({
  className,
  classModifier,
  children,
  heading: Heading = 'h2',
  ...otherProps
}: TitleProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-title'
  );

  return (
    <Heading className={componentClassName} {...otherProps}>
      {children}
    </Heading>
  );
};

export default Title;
