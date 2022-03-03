/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { renderWithTheme } from '@/src/utils/renderWithTeme'

import SearchField from '.'

const mockProps = {
  handleSearchChange: (name: string) => {},
  handleSearchLoading: () => {},
  searchLoading: false,
}

describe('<SearchField />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<SearchField {...mockProps} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
