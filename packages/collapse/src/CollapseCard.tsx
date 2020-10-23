import React from 'react';

import { Constants } from '@axa-fr/react-toolkit-core';
import CollapseCardBase from './CollapseCardBase';
import Body from './Body';
import Header from './Header';

const defaultProps = {
  ...Constants.defaultProps,
  defaultCollapse: true,
  index: 0,
};

type Props = Partial<typeof defaultProps> & {
  children?: React.ReactNode[];
  title?: string;
  id?: string;
};

const CollapseCard = ({
  title,
  className,
  id,
  classModifier,
  defaultCollapse,
  children,
  index,
}: Props) => {
  const [collapse, setCollapse] = React.useState(defaultCollapse);

  return (
    <CollapseCardBase
      collapse={collapse}
      onToggle={() => setCollapse(!collapse)}
      title={title}
      className={className}
      id={id}
      classModifier={classModifier}
      index={index}>
      {children}
    </CollapseCardBase>
  );
};

CollapseCard.defaultProps = defaultProps;

CollapseCard.Body = Body;
CollapseCard.Header = Header;

export default CollapseCard;
