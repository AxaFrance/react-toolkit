import React from 'react';

type IsVisibleProps = {
  /**
   * @deprecated You should handle visibility in your own code. Will be removed in a future version
   */
  isVisible?: boolean;
};

export function withIsVisible<T>(
  Component: React.ComponentType<
    T | Omit<T & IsVisibleProps, keyof IsVisibleProps>
  >
) {
  const displayName = Component.displayName || Component.name || 'Component';
  const ComponentWithIsVisible = ({
    isVisible = true,
    ...props
  }: T & IsVisibleProps) => {
    return isVisible ? <Component {...props} /> : null;
  };

  ComponentWithIsVisible.displayName = `withIsVisible(${displayName})`;

  return ComponentWithIsVisible;
}
