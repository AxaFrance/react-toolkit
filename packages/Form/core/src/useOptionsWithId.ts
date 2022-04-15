import { createId } from '@axa-fr/react-toolkit-core';
import type { Option } from '.';

export function useOptionsWithId(options?: Option[]) {
  if (!options) {
    return [];
  }
  return options.map((option) => ({ ...option, id: option.id ?? createId() }));
}
