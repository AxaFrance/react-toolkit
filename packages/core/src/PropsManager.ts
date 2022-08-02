const omit = (keys: string[]) => (props: { [key: string]: any }) => {
  if (!keys) {
    return props;
  }

  const clonedProps: { [key: string]: any } = { ...props };
  keys.forEach((key: string) => {
    if (key in clonedProps) {
      delete clonedProps[key];
    }
  });
  return clonedProps;
};

const PropsManager = {
  omit,
};

export default PropsManager;
