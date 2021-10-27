import React from 'react';

export type DivProps = React.ComponentPropsWithoutRef<'div'>;

const Div = (props: DivProps) => <div {...props} />;

export default Div;
