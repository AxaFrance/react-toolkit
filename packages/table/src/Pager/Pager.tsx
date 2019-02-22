import * as React from 'react';

import { WithClassModifierOptions, withClassModifier } from '@axa-fr/react-toolkit-core';
import { compose, setDisplayName, withProps } from 'recompose';
import Modes from './Modes';
import { withClassDefault } from '@axa-fr/react-toolkit-core/src';
import Previous from './Previous';
import LiPoint from './LiPoint';
import Next from './Next';
import Li from './Li';

export interface WithVisibilityOption {
  isVisible?: boolean;
}

export interface WithActiveOption {
  active?: boolean;
}

export interface OnChangeCustomEvent {
  value: number;
}

export interface WithOnChangeEvent<T> {
  onChange: (event: T) => void;
}

const DEFAULT_CLASSNAME = 'af-pager';

export type PagerComponentProps = {
  numberItems?: number;
  numberPages?: number;
  currentPage: number;
  mode?: Modes;
} & Pick<React.HTMLProps<HTMLAnchorElement>, "className">
 &  WithOnChangeEvent<OnChangeCustomEvent>;


const defaultProps: Partial<PagerComponentProps> = {
  numberItems: 10,
  numberPages: 1,
  currentPage: 1,
};

const Pager: React.SFC<PagerComponentProps> = props => {
  const { numberPages, currentPage, onChange, mode, className } = props;

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
            {currentPage} sur {numberPages}
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
          « Précédent
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
          Suivant »
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
const Enhance = enhance(Pager);
Enhance.defaultProps = defaultProps;

export default Enhance;

Pager.defaultProps = defaultProps;
// Pager.Modes = Modes;
