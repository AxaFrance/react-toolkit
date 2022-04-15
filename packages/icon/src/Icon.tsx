import React from 'react';

type IconBaseProps = {
  icon: string;
  basePath?: string;
};

const Icon = ({ icon, basePath = '/' }: IconBaseProps) => (
  <svg viewBox="0 0 16 16">
    {icon && <use xlinkHref={`${basePath}icons.svg#${icon}`} />}
  </svg>
);

export default Icon;
