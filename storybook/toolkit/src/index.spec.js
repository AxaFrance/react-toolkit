const { sortDirectories } = require('./listDirectories');

describe('toolkit.index', () => {
  it('should return filtered directories name', () => {
    const directories = [
      { source: 'public\\1.0.5', name: '1.0.5' },
      { source: 'public\\2.0.1', name: '2.0.1' },
      { source: 'public\\3.0.0-canary.1', name: '3.0.0-canary.1' },
      { source: 'public\\1.0.1', name: '1.0.1' },
      { source: 'public\\1.0.0-alpha.8', name: ' 1.0.0-alpha.8' },
    ];

    const directoriesFiltered = sortDirectories(directories);

    expect(directoriesFiltered[0].name).toBe('3.0.0-canary.1');
  });
});
