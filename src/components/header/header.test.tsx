import { renderWithTheme } from '@/utils/renderWithTeme'

import Header from '.'

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
