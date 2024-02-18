
// module.exports = (path, options) => {
//   // Jest + jsdom acts like a browser (i.e., it looks for "browser" imports
//   // under pkg.exports), but msw knows that you're operating in a Node
//   // environment:
//   //
//   // https://github.com/mswjs/msw/issues/1786#issuecomment-1782559851
//   //
//   // The MSW project's recommended workaround is to disable Jest's
//   // customExportConditions completely, so no packages use their browser's
//   // versions.  We'll instead clear export conditions only for MSW.
//   if (/^(msw|@mswjs\/interceptors)(\/|$)/.test(path)) {
//     return options.defaultResolver(path, {
//       ...options,
//       conditions: options.conditions.filter(
//         (condition) => condition !== 'browser'
//       ),
//     })
//   }

//   const customOptions = {

//   }

//   return options.defaultResolver(path, options)
// }
/** @type {import('@jest').Config.InitialOptions} */
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
  testMatch: ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}'],
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
