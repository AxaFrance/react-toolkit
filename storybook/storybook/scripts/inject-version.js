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
<header>AF-TOOLKIT-REACT (version: {version}) <select id="versions" onchange="document.location.href=this.value"></select></header>
<div id="root"></div>

<script>
  function initSelectBox() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var currentVersion = "{version}";
        var select = document.getElementById("versions");
        for(index in data.versions)
        {
          var element = data.versions[index];
          var opt = document.createElement("option");
          opt.value= '/' + element.name;
          opt.innerHTML = element.name;
          if(element.name == currentVersion) 
          {
            opt.setAttribute('selected', true);
          }
          select.appendChild(opt);
        }
      }
    };
    xhttp.open("GET", "../api/versions", true);
    xhttp.send();
  }
  initSelectBox();
</script>
`;

const newHtml = html
  .replace(
    '<div id="root"></div>',
    template.compile(versionToInject, { version: packages.version })
  )
  .replace('<title>Storybook</title>', '<title>AXA Storybook</title>');
console.log('Html templating output');
console.log(newHtml);

fs.writeFileSync(filePath, newHtml);
