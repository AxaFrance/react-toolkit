import React, { ComponentPropsWithoutRef, useCallback } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Pager from '../Pager/Pager';
import Items from '../Items/Items';

type PagingComponentProps = ComponentPropsWithoutRef<typeof Pager> &
  ComponentPropsWithoutRef<typeof Items>;

export type Props = Omit<PagingComponentProps, 'onChange'> & {
  onChange: (e: { numberItems: number; page: number }) => void;
};

const Paging = ({
  className,
  classModifier,
  currentPage,
  displayLabel,
  elementsLabel,
  id,
  mode,
  nextLabel,
  numberItems,
  numberPages,
  ofLabel,
  previousLabel,
  items,
  onChange,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-paging'
  );

  const handleChangeItems = useCallback(
    (e) =>
      onChange({
        numberItems: e.value,
        page: currentPage,
      }),
    []
  );

  const handleChangePager = useCallback(
    (e) =>
      onChange({
        numberItems,
        page: e.value,
      }),
    []
  );

  return (
    <div className={componentClassName}>
      <div className="af-paging__limit">
        <Items
          onChange={handleChangeItems}
          numberItems={numberItems}
          id={id}
          displayLabel={displayLabel}
          elementsLabel={elementsLabel}
          items={items}
        />
      </div>
      <div className="af-paging__pager">
        <Pager
          onChange={handleChangePager}
          currentPage={currentPage}
          numberPages={numberPages}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          ofLabel={ofLabel}
          mode={mode}
        />
      </div>
    </div>
  );
};

export default Paging;
