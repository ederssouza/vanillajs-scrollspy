module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/public/'],
  collectCoverageFrom: ['src/**/*.js', '!src/utils/htmlMock.js'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
