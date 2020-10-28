import React from 'react';

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

const Div = (props: DivProps) => <div {...props} />;

export default Div;
