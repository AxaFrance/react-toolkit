
const fs = require('fs-extra');

try {


    child = execSync(`npm run changelog && git add . && git commit -m "doc(toolkit) publish website ${VERSION}" && git push`);
    console.log('error', child.error);
    console.log('stdout ', child.stdout);
    console.log('stderr ', child.stderr);

    console.log('success!')
  } catch (err) {
    console.error(err)
  }
