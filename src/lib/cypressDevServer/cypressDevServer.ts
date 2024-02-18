import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { EventEmitter } from 'events'

export interface DevServerOptions {
  specs: Cypress.Spec[]
  cypressConfig: Cypress.PluginConfigOptions
  devServerEvents: EventEmitter
}

export interface ResolvedDevServerConfig {
  port: number
  close: () => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const startDevServer = async (_options: DevServerOptions) => {
  let serverProcess: ChildProcessWithoutNullStreams | null = spawn(
    'npm',
    ['run', 'start'],
    { shell: true }
  )

  serverProcess.stdout.on('data', (data) => {
    console.log(`[RSBuild]: ${data}`)
    // Optional: Parse stdout to find the actual port if dynamic
  })

  serverProcess.stderr.on('data', (data) => {
    console.error(`[RSBuild Error]: ${data}`)
  })

  // Implement logic to wait for RSBuild to signal it's ready
  await waitForServerReady()

  const killServerProcess = () => {
    if (serverProcess) {
      serverProcess.kill('SIGINT') // Use 'SIGINT' to allow for graceful shutdown
      serverProcess = null
      console.log('RSBuild server process terminated.')
    }
  }

  // Handle Cypress UI close action by killing the server process
  process.on('exit', killServerProcess)
  process.on('SIGINT', killServerProcess)
  process.on('uncaughtException', killServerProcess)

  return {
    port: 8080, // Adjust based on your setup or dynamic detection
    close: async () => {
      killServerProcess()
    },
  }
}

async function waitForServerReady(): Promise<void> {
  // Dummy implementation, replace with actual logic
  return new Promise((resolve) => setTimeout(resolve, 5000)) // Example: wait for 5 seconds
}
