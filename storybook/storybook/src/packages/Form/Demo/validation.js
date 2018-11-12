import Validate from 'mw.validation';

const validateDate = value => {
  const ruleRequired = { required: { message: 'Field Date name is required' } };
  const ruleDate = { date: { message: 'Field Date name is not valid' } };

  const rules = [ruleRequired, ruleDate];
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
};

const validatePlaceName = value => {
  const ruleMinLength = {
    minLength: {
      minLength: 3,
    },
  };
  const ruleMaxLength = {
    maxLength: {
      maxLength: 100,
      message: 'Field Place name must be less than 100 characters',
    },
  };
  const rulePattern = {
    pattern: {
      regex: /^[a-zA-Z -]*$/,
      message: 'Field Place contain invalid characters',
    },
  };
  const rulesRequired = {
    required: { message: 'Field Place name is required' },
  };

  const rules = [rulesRequired, ruleMinLength, ruleMaxLength, rulePattern];
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
};

const validateAuthor = value => {
  const ruleMinLength = {
    minLength: {
      minLength: 3,
      message: 'Field Author must be more than 3 characters',
    },
  };
  const ruleMaxLength = {
    maxLength: {
      maxLength: 100,
      message: 'Field Author must be less than 100 characters',
    },
  };
  const rulePattern = {
    pattern: {
      regex: /^[a-zA-Z -]*$/,
      message: 'Field Author contain invalid characters',
    },
  };
  const rulesRequired = { required: { message: 'Field Author is required' } };
  const rules = [rulesRequired, ruleMinLength, ruleMaxLength, rulePattern];

  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
};

const validateImageTitle = (value, files) => {
  const onlyIf = files && files.length > 0;
  const ruleMinLength = {
    minLength: {
      minLength: 3,
      message: 'Field Image title must be more than 3 characters',
      onlyIf,
    },
  };
  const ruleMaxLength = {
    maxLength: {
      maxLength: 100,
      message: 'Field Image title must be less than 100 characters',
      onlyIf,
    },
  };
  const rulePattern = {
    pattern: {
      regex: /^[a-zA-Z -]*$/,
      message: 'Field Image title  contain invalid characters',
    },
  };
  const rulesRequired = {
    required: { onlyIf, message: 'Field Image title is required' },
  };
  const rules = [rulesRequired, ruleMinLength, ruleMaxLength, rulePattern];
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
};

export default {
  validateDate,
  validatePlaceName,
  validateAuthor,
  validateImageTitle,
};
