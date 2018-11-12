const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, defaultConfig) => {
  const extensions = defaultConfig.resolve.extensions;
  const rules = defaultConfig.module.rules;
  rules.push({
    test: /\.(scss)$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  extensions.push('.scss', '.sass');
  rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader'),
  });
  extensions.push('.ts', '.tsx');
  rules.push({
    test: /\.md$/,
    loader: 'highlight-loader!markdown-loader',
  });
  return defaultConfig;
};
