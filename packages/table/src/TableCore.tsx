import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';

type TableCoreComponentProps = ComponentPropsWithoutRef<'table'> & {
  classModifier?: string;
};

const TableCore = ({
  className,
  classModifier,
  children,
  ...othersProps
}: TableCoreComponentProps) => {
  const componentClassName = getComponentClassName(
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
