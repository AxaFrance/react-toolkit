/* eslint-disable no-console */
const fs = require('fs');
const packages = require('../package.json');
const template = require('./template.js');

const filePath = './storybook-static/index.html';
const html = fs.readFileSync(filePath, 'utf8');

console.log('Html templating input');
console.log(html);

const versionToInject = `
<style>
header {
  background: #004893;
  color: #fff;
  padding: 1em;
  text-align: center;
}
</style>
<header>@axa-fr/react-toolkit (version: {version})</header>
<div id="root"></div>
`;

const newHtml = html
  .replace(
    '<div id="root"></div>',
    template.compile(versionToInject, { version: packages.version })
  )
  .replace('<title>Storybook</title>', '<title>Storybook @axa-fr/react-toolkit</title>');
console.log('Html templating output');
console.log(newHtml);

fs.writeFileSync(filePath, newHtml);
