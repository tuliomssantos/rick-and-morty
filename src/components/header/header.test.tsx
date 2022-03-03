import { renderWithTheme } from '@/src/utils/renderWithTeme'

import { screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the menu-button', () => {
    renderWithTheme(<Header />)

    expect(screen.getByTestId('menu-button')).toBeInTheDocument()
  })

  it('should render the menu-button', () => {
    renderWithTheme(<Header />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
})
