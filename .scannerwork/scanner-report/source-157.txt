import * as cuid from 'cuid';

// create id compatible for every browsers
const createId = () => cuid();

const getInputId = (id: string) => {
  if (id) {
    return id;
  }
  return createId();
};

interface Option {
  id?: string | null;
}

const getFirstId = (options: Option[]) => (!options && options.length > 0 ? options[0].id : '');

const getOptionsWithId = (options: Option[]) => {
  return options.map(option => ({ ...option, id: getInputId(option.id) }));
};

export default {
  getInputId,
  getFirstId,
  createId,
  getOptionsWithId,
};
