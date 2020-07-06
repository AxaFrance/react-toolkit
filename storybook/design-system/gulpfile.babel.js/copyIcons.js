/* eslint-disable arrow-parens */
import { src, dest } from 'gulp';
import html2pug from 'html2pug';
import path from 'path';
import fs from 'fs';
import config from './config';

const { pathSrc, pathDest, pathFontToolkit } = config;

const pathIconPugTemplate = path.join(`${pathSrc}/pages/style/icons/`, 'templates');

const copyIcons = () => src(`${pathFontToolkit}/*.svg`).pipe(dest(`${pathDest}/iconsToolkit`));

export const generatePugIcons = async () => {
  const iconsSvgFiles = fs.readdirSync(`${pathDest}/iconsToolkit`);
  let contentFile = `
h3 // Page générée par la tâche Gulp generatePugIcons
h2.af-title Liste des icons
ul.icons-list\n`;
  iconsSvgFiles.forEach(svgFile => {
    const name = svgFile.replace('.svg', '');
    const svgContentFile = fs.readFileSync(`${pathDest}/iconsToolkit/${svgFile}`, 'utf8');
    const pugSvg = html2pug(svgContentFile, {
      fragment: true,
      commas: false,
      doubleQuotes: true,
    })
      .replace('fill="#000000"', '')
      .replace('svg', `svg.glyphicon.glyphicon-${name}`)
      .replace('d="', 'd=`')
      .replace('z"', 'z`');

    if (!fs.existsSync(pathIconPugTemplate)) {
      fs.mkdirSync(pathIconPugTemplate, { recursive: true });
    }
    fs.writeFileSync(`${pathIconPugTemplate}/${name}.pug`, pugSvg);

    contentFile += '  li.icons-list__item\n';
    contentFile += `    img.icons-list__item-icon(src="../.././iconsToolkit/${svgFile}")\n`;
    contentFile += `    span.icons-list__item-name ${svgFile} \n`;
  });

  fs.writeFileSync(`${pathSrc}/pages/style/icons/templates/icons-page.pug`, contentFile);
};

export default copyIcons;
