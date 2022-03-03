import '@testing-library/jest-dom/extend-expect'

import { server } from './src/mocks/server'

import { QueryCache } from 'react-query'

const queryCache = new QueryCache()

beforeAll(() => {
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        'Found an unhandled %s request to %s',
        req.method,
        req.url.href
      )
    },
  })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})
