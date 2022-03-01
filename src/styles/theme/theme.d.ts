import { Theme } from '@mui/material/styles'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Theme {
    spacings: {
      half: '0.4rem'
      xxsmall: '0.8rem'
      xsmall: '1.6rem'
      small: '2.4rem'
      medium: '3.2rem'
      large: '4.0rem'
      xlarge: '4.8rem'
    }
  }

  interface ThemeOptions {
    spacings: {
      half: string
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
}
