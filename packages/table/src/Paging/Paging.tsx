import React, { ComponentPropsWithoutRef } from 'react';
import { useComponentClassName } from '@axa-fr/react-toolkit-core';
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
  onChange,
}: Props) => {
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-paging'
  );
  return (
    <div className={componentClassName}>
      <div className="af-paging__limit">
        <Items
          onChange={(e) =>
            onChange({
              numberItems: e.value,
              page: currentPage,
            })
          }
          numberItems={numberItems}
          id={id}
          displayLabel={displayLabel}
          elementsLabel={elementsLabel}
        />
      </div>
      <div className="af-paging__pager">
        <Pager
          onChange={(e) =>
            onChange({
              numberItems,
              page: e.value,
            })
          }
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
