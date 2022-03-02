import { renderWithTheme } from '@/utils/renderWithTeme'

import CharactersTemplate from '.'

describe('<CharactersTemplate />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<CharactersTemplate />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
