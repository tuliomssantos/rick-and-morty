import { render, RenderResult } from '@testing-library/react'

import { CustomThemeProvider } from '../styles/theme'

import { QueryClient, QueryClientProvider } from 'react-query'

// import {setLogger} from 'react-query'
// setLogger({
//   log: console.log,
//   warn: console.warn,
//   // ✅ no more errors on the console
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   error: () => {},
// })

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  const testQueryClient = createTestQueryClient()

  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </QueryClientProvider>
  )

  return {
    ...result,
    rerender: (rerenderChildren: React.ReactNode) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          <CustomThemeProvider>{rerenderChildren}</CustomThemeProvider>
        </QueryClientProvider>
      ),
  }

  // return render(
  //   <QueryClientProvider client={queryClient}>
  //     <CustomThemeProvider>{children}</CustomThemeProvider>
  //   </QueryClientProvider>
  // )
}
