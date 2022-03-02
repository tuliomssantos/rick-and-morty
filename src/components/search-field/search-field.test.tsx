import { renderWithTheme } from '@/utils/renderWithTeme'

import SearchField from '.'

describe('<SearchField />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<SearchField />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
