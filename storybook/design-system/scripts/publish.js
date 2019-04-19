const fs = require('fs-extra');
const args = process.argv;
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

    fs.copySync(`./dist`, `./tmp/AxaGuilDEv.github.io/`);

    child = execSync(`cd ./tmp/AxaGuilDEv.github.io/ && git add . && git commit -m "static Website AxaGuildev publish" && git push`);
    console.log('error', child.error);
    console.log('stdout ', child.stdout);
    console.log('stderr ', child.stderr);

    console.log('success!');
  } catch (err) {
    console.error(err);
  }
