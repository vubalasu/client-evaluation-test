const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {

  const browserifyOptions = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript')
  };
  const brow = browserify(browserifyOptions);
  const cuc = cucumber(browserifyOptions);

  require('@cypress/code-coverage/task')(on, config);

  on('file:preprocessor', file => {
    if (file.filePath.includes('.feature')) {
      return cuc(file);
    }
    return brow(file);
  });

  return config;
};
