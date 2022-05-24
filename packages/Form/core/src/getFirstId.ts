import type { Option } from '.';

const getFirstId = (options: Option[]) =>
  !options || options.length === 0 ? '' : options[0].id;

export default getFirstId;
