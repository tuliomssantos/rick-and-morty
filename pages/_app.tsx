import '@/src/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react'

import { theme, CustomThemeProvider } from '@/src/styles/theme'

import { createEmotionCache } from '@/src/utils'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="shortcut icon" href="/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
