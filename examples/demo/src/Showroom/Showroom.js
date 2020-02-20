import React from 'react';
import sprite from '@axa-fr/react-toolkit-core/dist/assets/icons-sprite.svg';

export default () => (
  <div
    style={{ margin: '2em', display: 'flex', justifyContent: 'space-around' }}>
    <Icon iconName="ok" />
    <Icon iconName="arrow-collapse-up" />
    <Icon iconName="arrow-down" />
    <Icon iconName="xls" />
    <Icon iconName="play-circle" />
    <Icon iconName="eye-close" />
    <Icon iconName="eye-open" />
  </div>
);

const Icon = props => (
  <svg
    viewBox="0 0 16 16"
    style={{ fill: 'green', height: '1.2em', width: '1.2em' }}>
    <use xlinkHref={`${sprite}#${props.iconName}`} />
  </svg>
);
