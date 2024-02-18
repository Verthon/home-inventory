import { defineConfig } from 'cypress'

// import { startDevServer } from './src/lib/cypressDevServer/cypressDevServer'

export default defineConfig({
  component: {
    devServer: () => {
      // Custom logic to serve static assets if necessary
      // Placeholder for any setup you might need
      return Promise.resolve({
        port: 3000, // Specify the port your static server or RSBuild would run on
        // No need to specify a close method if you're not starting a server
        close(done) {
          console.log('close', done)
        },
      })
    },
    specPattern: 'src/**/*.cy.spec.{ts,tsx}',
  },

  e2e: {
    baseUrl: 'http://localhost:8080/',
    specPattern: 'cypress/e2e/**/*.spec.{ts, tsx}',
  },
})
