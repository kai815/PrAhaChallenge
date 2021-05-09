module.exports = {
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.tsx?$': 'babel-jest',
  },
};
