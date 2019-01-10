import {
  FIRSTNAME,
  AGENT,
  CONTRACT,
  LASTNAME,
  BIRTHDATE,
  BEGIN,
  MSG_REQUIRED
} from './constants';

const rulesRequired = {
  required: {
    message: MSG_REQUIRED
  }
};

const rulesMaxLength = max => ({
  maxLength: {
    maxLength: max,
    message: 'Le champ contient trop de caractères'
  }
});

const ruleNumber = {
  pattern: {
    regex: /^[0-9]*$/,
    message: 'Veuillez saisir un nombre'
  }
};
const ruleDate = {
  date: { message: 'La date est invalide' }
};

export const rules = {
  [FIRSTNAME]: [rulesRequired],
  [AGENT]: [rulesRequired],
  [CONTRACT]: [rulesRequired, rulesMaxLength(8), ruleNumber],
  [LASTNAME]: [rulesRequired],
  [BIRTHDATE]: [rulesRequired, ruleDate],
  [BEGIN]: [rulesRequired, ruleDate]
};
