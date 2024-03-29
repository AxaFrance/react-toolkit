import React, {
  Children,
  ComponentProps,
  isValidElement,
  ReactNode,
} from 'react';
import { RadioItem } from '@axa-fr/react-toolkit-form-input-radio';
import { CheckboxItem } from '@axa-fr/react-toolkit-form-input-checkbox';

type Props = Omit<
  ComponentProps<typeof RadioItem | typeof CheckboxItem>,
  'children'
> & {
  nbCards?: number;
  type?: 'radio' | 'checkbox';
  classModifier?: string;
  children?: ReactNode;
};
const CardHeader = ({
  type = 'checkbox',
  children,
  nbCards,
  ...otherProps
}: Props) => {
  const childrenHasMeta = Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      child.props.className === 'af-rccard-header__meta'
  );

  if (childrenHasMeta && nbCards > 1) {
    throw new Error(
      'If the card group component contains more than one card, the meta element inside the CardHeader component is forbidden'
    );
  }

  return (
    <header className="af-rccard-header">
      {type === 'radio' && (
        <RadioItem className="af-form__radio" {...otherProps}>
          {children}
        </RadioItem>
      )}

      {type === 'checkbox' && (
        <CheckboxItem className="af-form__checkbox" {...otherProps}>
          {children}
        </CheckboxItem>
      )}
    </header>
  );
};
export default CardHeader;
