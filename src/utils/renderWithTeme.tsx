import { render, RenderResult } from '@testing-library/react'

import { CustomThemeProvider } from '../styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<CustomThemeProvider>{children}</CustomThemeProvider>)
