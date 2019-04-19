module.exports = {
  "disallowAttributeConcatenation": true,
  "disallowDuplicateAttributes": true,
  "disallowHtmlText": true,
  "disallowMultipleLineBreaks": true,
  "disallowSpaceAfterCodeOperator": true,
  "requireClassLiteralsBeforeAttributes": true,
  "requireLineFeedAtFileEnd": true,
  "requireLowerCaseAttributes": true,
  "requireLowerCaseTags": true,
  "requireStrictEqualityOperators": true,
  "validateDivTags": true,
  "validateAttributeQuoteMarks": "\"",
  "validateIndentation": 1,
  "validateAttributeSeparator": {
    "separator": " ",
    "multiLineSeparator": "\n  ",
  },
  "excludeFiles": [
    "node_modules/**",
  ],
}
