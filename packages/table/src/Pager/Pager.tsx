import React from 'react';
import {
  compose,
  OnChangeCustomEvent,
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  WithOnChangeEvent,
} from '@axa-fr/react-toolkit-core';
import Modes from './Modes';
import Previous from './Previous';
import LiPoint from './LiPoint';
import Next from './Next';
import Li from './Li';

const DEFAULT_CLASSNAME = 'af-pager';

export type PagerComponentProps = {
  numberPages?: number;
  currentPage?: number;
  mode?: Modes;
  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  ofLabel?: React.ReactNode;
} & Pick<React.HTMLProps<HTMLAnchorElement>, 'className'> &
  WithOnChangeEvent<OnChangeCustomEvent>;

const defaultProps: Partial<PagerComponentProps> = {
  numberPages: 1,
  currentPage: 1,
  mode: Modes.default,
  previousLabel: '« Précédent',
  nextLabel: 'Suivant »',
  ofLabel: 'sur',
};

const Pager = (props: PagerComponentProps) => {
  const {
    numberPages,
    currentPage,
    onChange,
    mode,
    className,
    previousLabel,
    nextLabel,
    ofLabel,
  } = props;

  const hasNext = currentPage < numberPages;
  const hasPrevious = currentPage > 1;

  if (mode === Modes.light) {
    return (
      <nav className={className}>
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
    <nav className={className}>
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
          label="1"
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

export type PagerProps = PagerComponentProps & WithClassModifierOptions;

const enhance = compose<PagerComponentProps, PagerProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);
Pager.defaultProps = defaultProps;
const Enhance = enhance(Pager);
export default Enhance;
