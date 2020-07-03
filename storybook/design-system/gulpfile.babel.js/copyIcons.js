/* eslint-disable arrow-parens */
import { src, dest } from 'gulp';
import html2pug from 'html2pug';
import fs from 'fs';
import config from './config';

const { pathSrc, pathDest, pathFontToolkit } = config;

const copyIcons = () => src(`${pathFontToolkit}/*.svg`).pipe(dest(`${pathDest}/iconsToolkit`));

export const generatePugIcons = async () => {
  const iconsSvgFiles = fs.readdirSync(`${pathDest}/iconsToolkit`);
  let contentFile = `
h3 // Page générée par la tâche Gulp generatePugIcons
h2.af-title Liste des icons
ul.icons-list\n`;
  iconsSvgFiles.forEach(svgFile => {
    const name = svgFile.replace('.svg', '');
    const pugSvg = html2pug(fs.readFileSync(`${pathDest}/iconsToolkit/${svgFile}`, 'utf8'), {
      fragment: true,
      commas: false,
      doubleQuotes: true,
    })
      .replace('fill="#000000"', '')
      .replace('svg', `svg.glyphicon.glyphicon-${name}`)
      .replace('d="', 'd=`')
      .replace('z"', 'z`');

    fs.writeFileSync(`${pathSrc}/pages/style/icons/templates/${name}.pug`, pugSvg);

    contentFile += '  li.icons-list__item\n';
    contentFile += `    img.icons-list__item-icon(src="../.././iconsToolkit/${svgFile}")\n`;
    contentFile += `    span.icons-list__item-name ${svgFile} \n`;
  });

  fs.writeFileSync(`${pathSrc}/pages/style/icons/templates/icons-page.pug`, contentFile);
};

export default copyIcons;
