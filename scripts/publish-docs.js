
const fs = require('fs-extra');
const args = process.argv;
const VERSION = require('../storybook/storybook/package.json').version;
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

    const PREVIOUS_VERSION = require('../tmp/AxaGuilDEv.github.io/react-toolkit/latest/version.json').version;
    fs.moveSync('./tmp/AxaGuilDEv.github.io/react-toolkit/latest', `./tmp/AxaGuilDEv.github.io/react-toolkit/v${PREVIOUS_VERSION}`);

    fs.copySync(`./storybook/styles/distDemo`, `./tmp/AxaGuilDEv.github.io/react-toolkit/latest/design`);
    fs.copySync(`./storybook/storybook/storybook-static`, `./tmp/AxaGuilDEv.github.io/react-toolkit/latest/storybook`);
    fs.copySync(`./examples/demo/build`, `./tmp/AxaGuilDEv.github.io/react-toolkit/latest/demo`);
    const versionToSave = { version: VERSION };
    fs.writeJSONSync('./tmp/AxaGuilDEv.github.io/react-toolkit/latest/version.json', versionToSave);

    child = execSync(`cd ./tmp/AxaGuilDEv.github.io/ && git add . && git commit -m "doc(toolkit) publish website ${VERSION}" && git push`);
    console.log('error', child.error);
    console.log('stdout ', child.stdout);
    console.log('stderr ', child.stderr);

    console.log('success!')
  } catch (err) {
    console.error(err)
  }
