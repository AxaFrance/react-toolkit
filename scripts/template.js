function compile(template, model) {
  if (!model) {
    return template;
  }

  let updatedTemplate = template;

  Object.keys(model).forEach((key) => {
    const re = new RegExp(`{${key}}`, 'g');
    updatedTemplate = updatedTemplate.replace(re, model[key]);
  });

  return updatedTemplate;
}

exports.compile = compile;
