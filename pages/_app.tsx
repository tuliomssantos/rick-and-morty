import '@/src/styles/globals.css'

import { useState } from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react'

import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { createEmotionCache } from '@/src/utils/createEmotionCache'

import { theme, CustomThemeProvider } from '@/src/styles/theme'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const isProd = process.env.NODE_ENV === 'production'

const customQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, //one minute,
    },
  },
})

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const [queryClient] = useState(() => customQueryClient)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="shortcut icon" href="/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <QueryClientProvider contextSharing={true} client={queryClient}>
        {!isProd && <ReactQueryDevtools initialIsOpen={false} />}
        <Hydrate state={pageProps.dehydratedState}>
          <CustomThemeProvider>
            <Component {...pageProps} />
          </CustomThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default MyApp
