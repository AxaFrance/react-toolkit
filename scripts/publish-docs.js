
const fs = require('fs-extra');
const args = process.argv;
const package = require('../storybook/storybook/package.json');
const VERSION = package.version;
const GITHUB_TOKEN = args[2];

try {

    const dir = './tmp';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    const execSync = require('child_process').execSync;
    let child = execSync(`git clone https://toto:${GITHUB_TOKEN}@github.com/AxaGuilDEv/AxaGuilDEv.github.io ./tmp/AxaGuilDEv.github.io/`);
    console.log('error', child.error);
    console.log('stdout ', child.stdout);
    console.log('stderr ', child.stderr);

    fs.copySync(`./storybook/styles/distDemo`, `./tmp/AxaGuilDEv.github.io/react-toolkit/design/v${VERSION}`);
    fs.copySync(`./storybook/storybook/storybook-static`, `./tmp/AxaGuilDEv.github.io/react-toolkit/storybook/v${VERSION}`);
    fs.copySync(`./examples/demo/build`, `./tmp/AxaGuilDEv.github.io/react-toolkit/demo/v${VERSION}`);

    child = execSync(`cd ./tmp/AxaGuilDEv.github.io/ && git add . && git commit -m "doc(toolkit) publish website ${VERSION}" && git push`);
    console.log('error', child.error);
    console.log('stdout ', child.stdout);
    console.log('stderr ', child.stderr);

    console.log('success!')
  } catch (err) {
    console.error(err)
  }
