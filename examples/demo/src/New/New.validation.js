import Validate from 'mw.validation';
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

const validationField = rules => (value = '') => {
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );
  const errorMessage =
    validationResult !== null ? validationResult.message : null;
  return errorMessage;
};

export const validationForm = {
  [FIRSTNAME]: validationField([rulesRequired]),
  [AGENT]: validationField([rulesRequired]),
  [CONTRACT]: validationField([rulesRequired, rulesMaxLength(8), ruleNumber]),
  [LASTNAME]: validationField([rulesRequired]),
  [BIRTHDATE]: validationField([rulesRequired, ruleDate]),
  [BEGIN]: validationField([rulesRequired, ruleDate])
};
