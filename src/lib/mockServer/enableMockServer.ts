export const enableMockServer = async () => {
  if (
    process.env.NODE_ENV !== 'development' ||
    process.env.PUBLIC_API_MOCK === 'false'
  ) {
    return
  }

  const { worker } = await import('./worker')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
