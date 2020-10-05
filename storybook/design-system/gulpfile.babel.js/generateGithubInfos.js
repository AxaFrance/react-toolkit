/* eslint-disable arrow-parens */
import fs from 'fs';
import config from './config';

const { pathSrc } = config;

const files = ['CHANGELOG', 'CONTRIBUTING', 'CODE_OF_CONDUCT'];
const components = ['changelog', 'how-to-contribute', 'code-of-conduct'];

const generateGithubInfos = async () => {
  files.forEach((file, index) => {
    const content = fs.readFileSync(`../../${file}.md`, 'utf8');
    fs.writeFileSync(
      `${pathSrc}/pages/get-started/${components[index]}/markdown/content.md`,
      content,
    );
  });
};

export default generateGithubInfos;
