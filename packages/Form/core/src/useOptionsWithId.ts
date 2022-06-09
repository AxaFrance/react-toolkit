import { createId } from '@axa-fr/react-toolkit-core';
import type { Option } from '.';

export function useOptionsWithId(options?: Option[], id?: string) {
  if (!options) {
    return [];
  }
  return options.map((option, index) => {
    const newOptionId = id ? `${id}_${index}` : createId();
    return { ...option, id: option.id ?? newOptionId };
  });
}
