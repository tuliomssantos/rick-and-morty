import { renderWithTheme } from '@/utils/renderWithTeme'

import Typography from '.'

describe('<Typography />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Typography />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
