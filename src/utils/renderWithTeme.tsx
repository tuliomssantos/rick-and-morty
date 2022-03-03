import { render, RenderResult } from '@testing-library/react'

import { CustomThemeProvider } from '../styles/theme'

import { QueryClient, QueryClientProvider, setLogger } from 'react-query'

// import {setLogger} from 'react-query'
setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error: () => {},
})

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return render(
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </QueryClientProvider>
  )
}
