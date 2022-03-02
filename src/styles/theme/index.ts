import { createTheme } from '@mui/material/styles'

export * from './provider'

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#97ce4c',
    },

    secondary: {
      main: '#ffd53d',
    },
  },
  spacings: {
    half: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
  },
})
