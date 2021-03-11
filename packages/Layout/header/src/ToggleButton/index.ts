import { cloneElement, isValidElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  idControl: string;
};
const ToggleButton = ({ children, idControl }: Props) => {
  return (
    isValidElement(children) &&
    cloneElement(children, {
      'aria-controls': idControl,
      'aria-haspopup': true,
    })
  );
};

export default ToggleButton;
