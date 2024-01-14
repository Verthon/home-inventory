const { loadEnvs } = require('./loadEnvs')

loadEnvs('test')

const argv = process.argv.slice(2)

const jest = require('jest')

jest.run(argv)
