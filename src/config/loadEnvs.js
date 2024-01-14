const dotenv = require('dotenv')
const path = require('path')

const loadEnvs = (mode) => {
  const testOptions = mode === 'test' && {
    path: path.resolve(process.cwd(), '.env.test'),
  }

  try {
    return dotenv.config(testOptions)
  } catch (err) {
    console.log(err, 'Missing or wrong env files')
  }
}

module.exports = { loadEnvs }
