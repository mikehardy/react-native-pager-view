const path = require('path');

const project = (() => {
  try {
    const { configureProjects } = require('react-native-test-app');
    return configureProjects({
      android: {
        sourceDir: 'android',
      },
      ios: {
        sourceDir: 'ios',
      },
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  ...(project ? { project } : undefined),
  dependencies: {
    'react-native-pager-view': {
      root: path.join(__dirname, '..'),
    },
  },
};
