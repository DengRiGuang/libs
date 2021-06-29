module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['lib/**/*.ts'],
  moduleNameMapper: {},
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};
