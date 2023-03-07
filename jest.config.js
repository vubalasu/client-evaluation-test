module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!**/node_modules/**',
    '!src/**/styles*.ts',
    '!src/**/*.stories.tsx',
    '!src/icons/**/*',
    '!src/config/**/*',
    '!src/(index.js|react-app-env.d.ts)',
    '!src/styles/(styled.d.ts|GlobalStyles.tsx)',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  // Required for msal
  globals: {
    crypto: require('crypto'),
  },
};

process.env = {
  ...process.env
};
