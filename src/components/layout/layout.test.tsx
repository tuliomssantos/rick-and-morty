import { renderWithTheme } from '@/utils/renderWithTeme'

import Layout from '.'

describe('<Layout />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Layout />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
