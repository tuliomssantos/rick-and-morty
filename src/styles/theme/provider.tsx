import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './'

export const CustomThemeProvider: React.FC = ({ children }) => {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MaterialThemeProvider>
  )
}
