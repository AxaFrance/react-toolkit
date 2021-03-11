import React, {
  Children,
  cloneElement,
  ComponentProps,
  ComponentType,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import CardHeader from './CardHeader';
/**
 * Get a duplicate component from a children. If not, return null
 * @param {*} children
 */
const getDuplicateComponent = (children: ReactNode[]) => {
  const array: string[] = [];
  let duplicateComponent: string | null = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const typeName = child.type as string;

      if (array.includes(typeName)) {
        duplicateComponent = typeName;
        return;
      }
      array.push(typeName);
    }
  });
  return duplicateComponent;
};

/**
 * Return a new array with removed index
 * @param {*} arr to evaluate
 * @param {*} index to remove
 */
function getArrayWithRemovedIndex(arr: ReactNode[], index: number) {
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
}

/**
 *
 * @param {*} children
 * Return an object with sorted children (header and other children)
 */
const getSortedChildren = (children: ReactNode[]) => {
  const childrenArray = React.Children.toArray(children);
  const headerIndex = childrenArray.findIndex(
    (child) => isValidElement(child) && child.type === CardHeader
  );

  const headerCard = childrenArray[headerIndex] as ReactElement<
    CardHeaderProps
  >;
  const other = getArrayWithRemovedIndex(childrenArray, headerIndex);

  return {
    headerCard,
    other,
  };
};

type CardHeaderProps = ComponentProps<typeof CardHeader>;
type Props = Omit<CardHeaderProps, 'children'> & {
  children: ReactNode[];
  cardClassModifier?: string;
};
const Card = ({
  id,
  type,
  checked,
  children,
  disabled = false,
  cardClassModifier,
  ...otherProps
}: Props) => {
  // ERRORS
  const duplicateComponent = getDuplicateComponent(children);

  if (duplicateComponent !== null) {
    throw new Error(
      `You can't duplicate the component ${duplicateComponent}. Only one of type is allowed.`
    );
  }

  const { headerCard, other } = getSortedChildren(children);
  const headerWithProps = React.cloneElement<ComponentProps<typeof CardHeader>>(
    headerCard,
    {
      id,
      type,
      checked,
      disabled,
      ...otherProps,
    }
  );

  const otherWithProps = Children.map(
    other,
    (child) =>
      isValidElement(child) &&
      cloneElement(child, {
        id,
        type,
      })
  );
  const className = ClassManager.getComponentClassName(
    null,
    `${cardClassModifier || ''}${checked ? ' active' : ''}${
      disabled ? ' disabled' : ''
    }`,
    'af-rccard'
  );
  return (
    <div className={className}>
      {headerWithProps}
      {otherWithProps}
    </div>
  );
};
export default Card;
