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
  "validateExtensions": true,
  "validateAttributeQuoteMarks": "\"",
  "validateIndentation": 2,
  "validateAttributeSeparator": {
    "separator": " ",
    "multiLineSeparator": "\n  ",
  },
  "excludeFiles": [
    "node_modules/**",
    "src/demo/app/axaComponents/Icons/template.pug",
  ],
}
