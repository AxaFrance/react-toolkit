interface IObject {
  [key: string]: any;
}

const omit = (keys: string[]) => (props: Object) => {
  if (!keys) {
    return props;
  }
  const clonedProps: IObject = { ...props };
  keys.forEach((element: string) => {
    if (element in clonedProps) {
      delete clonedProps[element];
    }
  });
  return clonedProps;
};

export default {
  omit,
};
