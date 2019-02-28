export interface WithVisibilityOption {
  isVisible?: boolean;
}
export interface WithActiveOption {
  active?: boolean;
}
export interface OnChangeCustomEvent {
  value: number;
}
export interface WithOnChangeEvent<T> {
  onChange: (event: T) => void;
}
