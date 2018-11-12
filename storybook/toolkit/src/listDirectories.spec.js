const { sortDirectories, filterDirectories } = require('./listDirectories');

describe('toolkit.index', () => {
  it('should return filtered directories name', () => {
    const directories = [
      { source: 'public\\1.0.8', name: '1.0.8' },
      { source: 'public\\1.0.7', name: '1.0.7' },
      { source: 'public\\3.0.0-canary.1', name: '3.0.0-canary.1' },
      { source: 'public\\1.0.0-alpha.8', name: '1.0.0-alpha.8' },
      { source: 'public\\0.8.91', name: '0.8.91' },
      { source: 'public\\1.0.9', name: '1.0.9' },
      { source: 'public\\1.0.0-alpha.13', name: '1.0.0-alpha.13' },
      { source: 'public\\1.0.0-nigthly', name: '1.0.0-nigthly' },
      { source: 'public\\1.1.0-unstable.127', name: '1.1.0-unstable.127' },
      { source: 'public\\1.0.0-alpha.7', name: '1.0.0-alpha.7' },
      { source: 'public\\1.0.0-alpha.6', name: '1.0.0-alpha.6' },
      { source: 'public\\1.0.6', name: '1.0.6' },
      { source: 'public\\3.1.2', name: '3.1.2' },
      { source: 'public\\1.0.2', name: '1.0.2' },
      { source: 'public\\1.0.1', name: '1.0.1' },
      { source: 'public\\1.0.0', name: '1.0.0' },
      { source: 'public\\2.0.0', name: '2.0.0' },
      { source: 'public\\2.0.2', name: '2.0.2' },
      { source: 'public\\1.0.5', name: '1.0.5' },
      { source: 'public\\1.0.4', name: '1.0.4' },
      { source: 'public\\1.0.3', name: '1.0.3' },
    ];

    const directoriesFiltered = sortDirectories(filterDirectories(directories));

    expect(directoriesFiltered[0].name).toBe('3.1.2');
    expect(directoriesFiltered[1].name).toBe('2.0.2');
    expect(directoriesFiltered[2].name).toBe('2.0.0');
  });
});
