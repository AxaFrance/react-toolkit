import React from 'react';
import {
  withClassDefault,
  withClassModifier,
  WithClassModifierOptions,
  compose,
} from '@axa-fr/react-toolkit-core';

const DEFAULT_CLASSNAME = 'af-icons';

interface IconBaseProps {
  icon: string;
  basePath?: string;
}

const defaultProps: Partial<IconBaseProps> = {
  basePath: '/',
};

const IconRaw: React.SFC<IconBaseProps> = ({ icon, basePath }) => (
  <svg viewBox="0 0 16 16">
    {icon && <use xlinkHref={`${basePath}icons.svg#${icon}`} />}
  </svg>
);

IconRaw.defaultProps = defaultProps;

export type IconProps = IconBaseProps & WithClassModifierOptions;

const enhance = compose<IconBaseProps, IconProps>(
  withClassDefault(DEFAULT_CLASSNAME),
  withClassModifier
);

const Enhanced = enhance(IconRaw);
Enhanced.displayName = 'Icon';
export default Enhanced;
