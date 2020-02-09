import { LOGIN, PASSWORD, MSG_REQUIRED } from './constants';

const rulesRequired = {
  required: {
    message: MSG_REQUIRED,
  },
};

const rulesMaxLength = max => ({
  maxLength: {
    maxLength: max,
    message: 'Le champ contient trop de caractères',
  },
});

const ruleNumber = {
  pattern: {
    regex: /^[0-9]*$/,
    message: 'Veuillez saisir un nombre',
  },
};

export const rules = {
  [LOGIN]: [rulesRequired],
  [PASSWORD]: [rulesRequired, rulesMaxLength(8), ruleNumber],
};
