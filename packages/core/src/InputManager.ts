import cuid from 'cuid';

const createId = () => cuid();

const getInputId = (id: string) => {
  if (id) {
    return id;
  }
  return createId();
};

export type Option = {
  id?: string | null;
} & { [key: string]: any };

const getFirstId = (options: Option[]) => {
  if (!options || options.length === 0) {
    return '';
  }

  return options[0].id;
};

const getOptionsWithId = <T extends { id?: string }>(options: T[]): T[] => {
  if (!options) {
    return [];
  }

  return options.map((option) => ({ ...option, id: getInputId(option.id) }));
};

export default {
  getInputId,
  getFirstId,
  createId,
  getOptionsWithId,
};
