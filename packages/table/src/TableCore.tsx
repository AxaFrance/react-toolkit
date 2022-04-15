import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';

type TableCoreComponentProps = ComponentPropsWithoutRef<'table'> & {
  classModifier?: string;
};

const TableCore = ({
  className,
  classModifier,
  children,
  ...othersProps
}: TableCoreComponentProps) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-table'
  );
  return (
    <table className={componentClassName} {...othersProps}>
      {children}
    </table>
  );
};

export default TableCore;
