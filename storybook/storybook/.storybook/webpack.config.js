const path = require('path');

module.exports = ({ config }) => {
  const extensions = config.resolve.extensions;
  const rules = config.module.rules;

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

  rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};
