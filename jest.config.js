/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: 'es2015',
        },
        module: {
          type: 'commonjs',
        },
      },
    ],
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
    '!src/testUtils.ts',
    '!src/router/**/*',
    '!src/api/reactQuery/**/*',
    '!src/**/*.types.ts',
    '!src/**/*.stories.tsx',
    '!src/testUtils.tsx',
    '!src/service-worker.ts',
    '!src/serviceWorkerRegistration.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  resetMocks: true,
}
