const secretApp = '?client_id=1aa2d218b6767c22cd2a&client_secret=9762db2dfc39e0b0e8d9988b89ebe8ad0221488e';
export const apiRepos = `https://api.github.com/users/axaguildev/repos${secretApp}`;
export const apiByType = repo => type => `https://api.github.com/repos/AxaGuilDEv/${repo}/${type}${secretApp}`;
