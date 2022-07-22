import React from 'react';
import { useId, useComponentClassName } from '@axa-fr/react-toolkit-core';

export type Props = {
  id?: string;
  className?: string;
  classModifier?: string;
  displayLabel?: string;
  elementsLabel?: string;
  items?: number[];
  numberItems?: number;
  onChange: (e: { value: number }) => void;
};

const Items = ({
  className,
  classModifier,
  onChange,
  displayLabel = 'Afficher',
  elementsLabel = 'éléments',
  id,
  items = [5, 10, 25, 50, 100],
  numberItems = 10,
}: Props) => {
  const defaultIdName = useId(id);
  const componentClassName = useComponentClassName(
    className,
    classModifier,
    'af-paging__form'
  );
  return (
    <div className="af-paging__limit">
      <form className={componentClassName}>
        <div className="af-form__group">
          <div className="col col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label className="af-form__group-label" htmlFor={defaultIdName}>
              {displayLabel}
            </label>
          </div>
          <div className="col col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <div className="af-form__select">
              <div className="af-form__select-container">
                <select
                  id={defaultIdName}
                  className="af-form__input-select"
                  value={numberItems}
                  onChange={(e) => {
                    e.preventDefault();
                    onChange({ value: Number(e.target.value) });
                  }}>
                  {items.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span className="glyphicon glyphicon-menu-down" />
              </div>
              <span className="af-form__input-cmplt">{elementsLabel}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Items;
