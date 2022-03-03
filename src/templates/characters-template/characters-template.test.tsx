import { renderWithTheme } from '@/src/utils/renderWithTeme'

import { screen } from '@testing-library/react'

import CharactersTemplate from '.'

describe('<CharactersTemplate />', () => {
  it('should find Rick Sanchez on page 1', async () => {
    renderWithTheme(<CharactersTemplate />)

    expect(
      await screen.findByRole('heading', { name: /rick sanchez/i })
    ).toBeInTheDocument()
  })

  it('should not display loading on first render', async () => {
    renderWithTheme(<CharactersTemplate />)

    expect(screen.queryByTestId('rectangular-skeleton')).toBeNull()
  })
})
