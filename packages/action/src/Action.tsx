import React, { ComponentProps, EventHandler, SyntheticEvent } from 'react';

import ActionCore from './ActionCore';

interface MyEvent extends React.SyntheticEvent {
  id: string;
}

export type ActionProps = Omit<ComponentProps<typeof ActionCore>, 'onClick'> & {
  onClick: React.EventHandler<MyEvent>;
};

function useWithEventId<T extends SyntheticEvent>(fn: EventHandler<MyEvent>) {
  return (event: T) => {
    fn({ ...event, id: event.currentTarget.id });
  };
}

const Action = ({ onClick, ...rest }: ActionProps) => {
  const onClickCustom = useWithEventId(onClick);

  return <ActionCore {...rest} onClick={onClickCustom} />;
};

export default Action;
