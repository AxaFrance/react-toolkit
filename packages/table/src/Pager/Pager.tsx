import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import Previous from './Previous';
import LiPoint from './LiPoint';
import Next from './Next';
import Li from './Li';

export type PagerComponentProps = Pick<
  ComponentPropsWithoutRef<typeof Previous>,
  'onChange'
> & {
  className?: string;
  classModifier?: string;
  numberPages?: number;
  currentPage?: number;
  mode?: 'default' | 'light';
  previousLabel?: string;
  nextLabel?: string;
  ofLabel?: string;
};

const Pager = ({
  className,
  classModifier,
  numberPages = 1,
  currentPage = 1,
  onChange,
  mode = 'default',
  previousLabel = '« Précédent',
  nextLabel = 'Suivant »',
  ofLabel = 'sur',
}: PagerComponentProps) => {
  const hasNext = currentPage < numberPages;
  const hasPrevious = currentPage > 1;

  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'af-pager'
  );

  if (mode === 'light') {
    return (
      <nav className={componentClassName}>
        <ul className="af-pager__pagination">
          <Previous
            onChange={onChange}
            value={currentPage - 1}
            active={hasPrevious}
            isVisible>
            <i
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />
          </Previous>
          <LiPoint isVisible>
            {currentPage} {ofLabel} {numberPages}
          </LiPoint>
          <Next
            onChange={onChange}
            value={currentPage + 1}
            active={hasNext}
            isVisible>
            <i
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />
          </Next>
        </ul>
      </nav>
    );
  }

  return (
    <nav className={componentClassName}>
      <ul className="af-pager__pagination">
        <Previous
          onChange={onChange}
          value={currentPage - 1}
          active={hasPrevious}
          isVisible>
          {previousLabel}
        </Previous>

        <Li
          onChange={onChange}
          value={1}
          isVisible={numberPages > 1 && currentPage > 1}
        />
        <LiPoint isVisible={currentPage > 3}>...</LiPoint>
        <Li
          onChange={onChange}
          value={currentPage - 1}
          isVisible={numberPages > 2 && currentPage > 2}
        />
        <Li
          onChange={onChange}
          value={currentPage}
          active
          isVisible={numberPages > 0}
        />
        <Li
          onChange={onChange}
          value={currentPage + 1}
          isVisible={currentPage < numberPages - 1}
        />
        <LiPoint isVisible={currentPage < numberPages - 2}>...</LiPoint>
        <Li
          onChange={onChange}
          value={numberPages}
          isVisible={currentPage < numberPages}
        />

        <Next
          onChange={onChange}
          value={currentPage + 1}
          active={hasNext}
          isVisible>
          {nextLabel}
        </Next>
      </ul>
    </nav>
  );
};

export default Pager;
